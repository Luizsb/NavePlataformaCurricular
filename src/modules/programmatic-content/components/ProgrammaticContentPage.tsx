import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  LayoutGrid,
  Calendar,
  X,
  ChevronDown,
  ChevronUp,
  Cpu,
  Globe,
  Layout,
  Hammer,
  Check,
  Copy,
} from "lucide-react";
import { cn } from "../../../app/components/ui/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../app/components/ui/collapsible";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import {
  PROGRAMMATIC_DATA,
  AXES,
  YEARS_EF2,
  YEARS_EM,
} from "../data/programmatic-content.data";

const HEADER_OFFSET = 88;
const CONTENT_TOP_EXTRA = 172;

const CopyButton = ({
  text,
  className,
  isLarge = false,
}: {
  text: string;
  className?: string;
  isLarge?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const fallbackCopy = (content: string) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = content;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          toast.success("Conteúdo copiado!");
        }
      } catch (err) {
        toast.error("Erro ao copiar.");
      }
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Conteúdo copiado!");
      } else {
        fallbackCopy(text);
      }
    } catch (err) {
      fallbackCopy(text);
    }
  };

  const Icon = copied ? Check : Copy;
  const label = isLarge ? (copied ? "Copiado!" : "Copiar tudo") : null;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleCopy}
      className={cn(
        "relative flex items-center justify-center transition-all cursor-pointer overflow-hidden shrink-0",
        isLarge
          ? "px-5 py-2.5 rounded-xl bg-white border border-zinc-100 text-[#1B2C49] font-bold text-[13px] hover:shadow-md hover:border-[#E7609F]/30 gap-2.5"
          : "p-3 rounded-xl bg-white text-zinc-400 hover:text-[#E7609F] hover:shadow-md border border-zinc-100",
        copied &&
          (isLarge
            ? "bg-[#E7609F] text-white border-[#E7609F]"
            : "text-[#E7609F] border-[#E7609F]"),
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Icon
          className={cn(
            isLarge ? "size-4" : "size-4",
            !copied && isLarge && "text-[#E7609F]"
          )}
        />
        {label && <span>{label}</span>}
      </div>
    </motion.button>
  );
};

export const ProgrammaticContentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStage, setActiveStage] = useState<"ef2" | "em">("ef2");
  const [activeYear, setActiveYear] = useState("Todos");
  const [activeAxis, setActiveAxis] = useState("Todos");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const filtersBlockRef = React.useRef<HTMLDivElement>(null);
  const contentBlockRef = React.useRef<HTMLDivElement>(null);
  const shouldScrollToContentRef = React.useRef(false);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    
    // Se não houver pesquisa e o ano for "Todos", não mostra nada (exibe a tela de seleção)
    if (!query && activeYear === "Todos") {
      return [];
    }

    return PROGRAMMATIC_DATA.filter((project) => {
      const matchesStage = project.stage === activeStage;
      const matchesYear = activeYear === "Todos" || project.year === activeYear;
      const matchesAxis =
        activeAxis === "Todos" || project.axes.includes(activeAxis as any);
      const matchesSearch =
        !query ||
        project.tema.toLowerCase().includes(query) ||
        project.contexto.toLowerCase().includes(query) ||
        project.prototipo.toLowerCase().includes(query) ||
        project.recursos.toLowerCase().includes(query) ||
        project.competenciasBCCI.toLowerCase().includes(query);

      return matchesStage && matchesYear && matchesAxis && matchesSearch;
    });
  }, [searchQuery, activeStage, activeYear, activeAxis]);

  const scrollToContentStart = () => {
    if (typeof window === "undefined") return;
    shouldScrollToContentRef.current = true;
  };

  // Roda após o conteúdo filtrado estar na tela; scroll com offset para o texto não ficar cortado
  useEffect(() => {
    if (!shouldScrollToContentRef.current) return;
    shouldScrollToContentRef.current = false;
    const id = setTimeout(() => {
      const contentEl = contentBlockRef.current;
      const filtersEl = filtersBlockRef.current;
      const targetFromTop = HEADER_OFFSET + CONTENT_TOP_EXTRA;
      if (contentEl && filteredProjects.length > 0) {
        const rect = contentEl.getBoundingClientRect();
        const top = rect.top + window.scrollY - targetFromTop;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else if (filtersEl) {
        const rect = filtersEl.getBoundingClientRect();
        const top = rect.top + window.scrollY - targetFromTop;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 80);
    return () => clearTimeout(id);
  }, [activeYear, activeAxis, searchQuery, filteredProjects.length]);

  const handleAxisChange = (axis: string) => {
    setActiveAxis(axis);
    scrollToContentStart();
  };

  const handleYearChange = (stage: "ef2" | "em", year: string) => {
    setActiveStage(stage);
    setActiveYear(year);
    scrollToContentStart();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAxisIcon = (axisId: string) => {
    switch (axisId) {
      case "pensamento":
        return <Cpu className="size-3.5" />;
      case "mundo":
        return <Globe className="size-3.5" />;
      case "cultura":
        return <Layout className="size-3.5" />;
      case "design":
        return <Hammer className="size-3.5" />;
      default:
        return null;
    }
  };

  const getAxisColor = (axisId: string) => {
    const axis = AXES.find((a) => a.id === axisId);
    return axis?.color || "#4C76BA";
  };

  return (
    <div className="min-h-screen bg-[#F1EEF9] relative selection:bg-[#E7609F] selection:text-white antialiased overflow-x-hidden">
      <main className="relative z-10 w-full p-4 md:p-8 lg:p-16 scroll-smooth">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          {/* Side Filter for Years - Desktop ONLY */}
          <aside className="hidden lg:block w-48 shrink-0 sticky top-[60px] mt-0">
            <div className="bg-white rounded-[24px] border border-zinc-100 p-5 shadow-sm space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 mb-5">
                  <Calendar className="size-4 text-[#4C76BA]" />
                  <h4 className="text-[12px] font-black text-[#1B2C49] uppercase tracking-wider">
                    ANO
                  </h4>
                </div>
                <div className="flex flex-col gap-1.5">
                  {YEARS_EF2.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange("ef2", year)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all text-left flex items-center justify-between group cursor-pointer",
                        activeStage === "ef2" && activeYear === year
                          ? "bg-[#4C76BA] text-white shadow-lg shadow-[#4C76BA]/20"
                          : "text-[#1B2C49]/60 hover:bg-zinc-50 hover:text-[#4C76BA]"
                      )}
                    >
                      {year}
                      {activeStage === "ef2" && activeYear === year && (
                        <Check className="size-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-50 space-y-4">
                <div className="flex items-center gap-2.5 mb-5">
                  <Calendar className="size-4 text-[#4C76BA]" />
                  <h4 className="text-[12px] font-black text-[#1B2C49] uppercase tracking-wider">
                    SÉRIE
                  </h4>
                </div>
                <div className="flex flex-col gap-1.5">
                  {YEARS_EM.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange("em", year)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all text-left flex items-center justify-between group cursor-pointer",
                        activeStage === "em" && activeYear === year
                          ? "bg-[#4C76BA] text-white shadow-lg shadow-[#4C76BA]/20"
                          : "text-[#1B2C49]/60 hover:bg-zinc-50 hover:text-[#4C76BA]"
                      )}
                    >
                      {year}
                      {activeStage === "em" && activeYear === year && (
                        <Check className="size-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 w-full">
            {/* Header Content - Refactored to match Image 2 */}
            <AnimatePresence>
              {activeYear === "Todos" && !searchQuery && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "4rem" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="mt-0 bg-white rounded-[24px] lg:rounded-[32px] border border-white p-6 lg:p-12 shadow-[0px_20px_40px_-12px_rgba(27,44,73,0.04)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-full lg:w-[400px] h-full bg-linear-to-bl from-[#4C76BA]/5 via-transparent to-transparent pointer-events-none" />
                  <div className="relative z-10 space-y-6 lg:space-y-8">
                    <div className="inline-flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full bg-[#4C76BA]/5">
                      <div className="size-1.5 lg:size-2 rounded-full bg-[#4C76BA]" />
                      <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[2px] lg:tracking-[3px] text-[#1B2C49]">
                        NAVE A VELA • CONTEÚDO PROGRAMÁTICO
                      </span>
                    </div>
                    <div className="space-y-4 lg:space-y-3">
                      <h1 className="text-[32px] lg:text-[48px] font-black text-[#1B2C49] tracking-tight leading-tight">
                        Conteúdo Programático
                      </h1>
                      <p className="text-[#71717B] font-light max-w-[860px]">
                        Explore projetos e unidades curriculares organizados por ano e eixos temáticos estruturantes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Filters Section - Sticky Pattern matching image 2 */}
            <div ref={filtersBlockRef} className="sticky top-0 z-20 pb-4 lg:pb-8 mb-4">
              <div className="absolute inset-x-0 top-0 h-full bg-[#F1EEF9]/80 backdrop-blur-md pointer-events-none" />
              <div className="relative pt-2 space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[28px] lg:text-[36px] font-black text-[#1B2C49] tracking-tight leading-tight uppercase">
                    {searchQuery ? `Pesquisa: "${searchQuery}"` : "Projetos"}
                  </h2>
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setIsFilterDrawerOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm text-[12px] font-bold text-[#1B2C49] cursor-pointer"
                  >
                    <LayoutGrid className="size-4 text-[#E7609F]" />
                    Filtros
                  </button>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  {/* Search Bar */}
                  <div className="relative group w-full lg:max-w-[860px] shadow-[0px_16px_32px_-12px_rgba(27,44,73,0.1)] rounded-xl lg:rounded-2xl">
                    <div className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2">
                      <Search className="size-[18px] lg:size-[20px] text-zinc-300 group-focus-within:text-[#E7609F] transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder="Pesquisar projetos..."
                      className="h-[56px] lg:h-[64px] w-full rounded-xl lg:rounded-2xl bg-white border border-[#E4E4E7] pl-12 lg:pl-14 pr-12 lg:pr-14 text-[14px] lg:text-[15px] font-medium text-[#1B2C49] outline-none transition-all placeholder:text-zinc-300 focus:ring-4 focus:ring-[#E7609F]/10 focus:border-[#E7609F]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-zinc-300 hover:text-[#1B2C49] cursor-pointer"
                      >
                        <X className="size-4 lg:size-5" />
                      </button>
                    )}
                  </div>

                  {/* Axes Filter */}
                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[3px] text-[#1B2C49]/40 ml-1 block mb-1">
                      Eixos Estruturantes
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handleAxisChange("Todos")}
                        className={cn(
                          "px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-2 border shrink-0 cursor-pointer uppercase tracking-tight",
                          activeAxis === "Todos"
                            ? "bg-[#1B2C49] text-white border-[#1B2C49]"
                            : "bg-white text-[#1B2C49]/60 border-[#E4E4E7] hover:border-[#1B2C49]/30"
                        )}
                      >
                        <LayoutGrid className="size-3.5" />
                        Todos
                      </button>
                      {AXES.map((axis) => (
                        <button
                          key={axis.id}
                          onClick={() => handleAxisChange(axis.id)}
                          className={cn(
                            "px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-2 border shrink-0 cursor-pointer uppercase tracking-tight",
                            activeAxis === axis.id
                              ? "bg-[#E7609F] text-white border-[#E7609F] shadow-lg shadow-[#E7609F]/20"
                              : "bg-white text-[#1B2C49]/60 border-[#E4E4E7] hover:border-[#E7609F]/50 hover:text-[#E7609F]"
                          )}
                        >
                          {getAxisIcon(axis.id)}
                          {axis.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content List */}
            <div ref={contentBlockRef} className="space-y-6 pb-20 lg:pb-32">
              <AnimatePresence mode="popLayout">
                {activeYear === "Todos" && !searchQuery ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-12 lg:mt-24 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="size-20 rounded-[24px] bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                      <Calendar className="size-10 text-[#4C76BA]/40" />
                    </div>
                    <p className="text-[18px] lg:text-[20px] font-medium text-zinc-500 max-w-[360px]">
                      Selecione um ano no menu lateral para visualizar os conteúdos
                    </p>
                  </motion.div>
                ) : filteredProjects.length > 0 ? (
                      filteredProjects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <Collapsible
                          className="bg-white rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden"
                        >
                          <CollapsibleTrigger className="w-full text-left p-6 lg:p-8 cursor-pointer group/trigger">
                            <div className="flex items-start justify-between gap-6">
                              <div className="space-y-4 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[#1B2C49] text-[10px] font-black tracking-wider">
                                    {project.year}
                                  </span>
                                  {project.axes.map((axisId) => {
                                    const axis = AXES.find((a) => a.id === axisId);
                                    return (
                                      <div
                                        key={axisId}
                                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100"
                                      >
                                        <div
                                          className="size-1.5 rounded-full"
                                          style={{ backgroundColor: axis?.color }}
                                        />
                                        <span className="text-[10px] font-black text-[#1B2C49]/60 uppercase tracking-wider">
                                          {axis?.label}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="space-y-2">
                                  <h3 className="text-[24px] lg:text-[32px] font-black text-[#1B2C49] leading-tight group-hover/trigger:text-[#E7609F] transition-colors">
                                    {project.tema}
                                  </h3>
                                  <p className="text-[15px] text-[#71717B] font-light leading-relaxed line-clamp-2 group-data-[state=open]/trigger:hidden">
                                    {project.contexto}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 text-[#E7609F] font-bold text-[13px] group-hover/trigger:translate-x-1 transition-transform">
                                  <span className="group-data-[state=open]/trigger:hidden">Ver detalhes</span>
                                  <span className="hidden group-data-[state=open]/trigger:inline">Ocultar detalhes</span>
                                  <ChevronDown className="size-4 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180" />
                                </div>
                              </div>
                              <CopyButton
                                isLarge
                                text={`Projeto: ${project.tema}\nAno: ${project.year}\nContexto: ${project.contexto}\nProtótipo: ${project.prototipo}\nRecursos: ${project.recursos}\nCompetências: ${project.competenciasBCCI}`}
                                className="hidden md:flex"
                              />
                            </div>
                          </CollapsibleTrigger>

                          <CollapsibleContent>
                            <div className="px-6 lg:px-8 pb-8 pt-2 space-y-8 border-t border-zinc-50">
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                                    Contexto
                                  </span>
                                  <p className="text-[16px] text-[#1B2C49] font-light leading-relaxed whitespace-pre-line">
                                    {project.contexto}
                                  </p>
                                </div>

                                <div className="p-6 rounded-[24px] bg-[#f4eff4] border border-[#EAE0EA] space-y-6 shadow-sm">
                                  <div className="space-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-[2px] text-[#94579E]">
                                       Protótipo (produto entregável)
                                    </span>
                                    <p className="text-[18px] font-black text-[#1B2C49] whitespace-pre-line">
                                      {project.prototipo}
                                    </p>
                                  </div>
                                  <div className="h-px bg-[#94579E]/10" />
                                  <div className="space-y-2">
                                    <span className="text-[10px] font-black uppercase tracking-[2px] text-[#94579E]">
                                      Recursos Principais
                                    </span>
                                    <p className="text-[16px] font-medium text-[#1B2C49]/80 whitespace-pre-line">
                                      {project.recursos}
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                                    Eixos
                                  </span>
                                  <div className="flex flex-wrap items-center gap-2">
                                    {project.axes.map((axisId) => {
                                      const axis = AXES.find((a) => a.id === axisId);
                                      return (
                                        <div
                                          key={axisId}
                                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-100 shadow-sm"
                                        >
                                          <div
                                            className="size-2 rounded-full"
                                            style={{ backgroundColor: axis?.color }}
                                          />
                                          <span className="text-[12px] font-bold text-[#1B2C49]">
                                            {axis?.label}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                                    Competências BCCI
                                  </span>
                                  <p className="text-[15px] text-[#1B2C49]/80 leading-relaxed font-light whitespace-pre-line">
                                    {project.competenciasBCCI}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </motion.div>
                    ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                  >
                    <div className="size-20 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                      <Search className="size-8 text-zinc-200" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[18px] font-bold text-[#1B2C49]">
                        Nenhum projeto encontrado
                      </h3>
                      <p className="text-zinc-500 text-[14px]">
                        Tente ajustar os filtros ou limpar sua pesquisa.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveYear("Todos");
                        setActiveAxis("Todos");
                      }}
                      className="text-[#E7609F] font-bold text-[14px] hover:underline"
                    >
                      Limpar filtros
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterDrawerOpen(false)}
              className="fixed inset-0 bg-[#1B2C49]/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-[120] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LayoutGrid className="size-5 text-[#E7609F]" />
                  <span className="text-[14px] font-black uppercase tracking-wider text-[#1B2C49]">
                    Filtros
                  </span>
                </div>
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="p-2 rounded-xl bg-zinc-50 text-zinc-400 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Year/Series Filter */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                      ANO
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {YEARS_EF2.map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearChange("ef2", year)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-[12px] font-bold transition-all border",
                            activeStage === "ef2" && activeYear === year
                              ? "bg-[#4C76BA] text-white border-[#4C76BA]"
                              : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                          )}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                      SÉRIE
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {YEARS_EM.map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearChange("em", year)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-[12px] font-bold transition-all border",
                            activeStage === "em" && activeYear === year
                              ? "bg-[#4C76BA] text-white border-[#4C76BA]"
                              : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                          )}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Axes Filter */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-zinc-400">
                    Eixos Estruturantes
                  </span>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleAxisChange("Todos")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl text-[12px] font-bold transition-all flex items-center gap-3 border",
                        activeAxis === "Todos"
                          ? "bg-[#1B2C49] text-white border-[#1B2C49]"
                          : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                      )}
                    >
                      <LayoutGrid className="size-4" />
                      Todos
                    </button>
                    {AXES.map((axis) => (
                      <button
                        key={axis.id}
                        onClick={() => handleAxisChange(axis.id)}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl text-[12px] font-bold transition-all flex items-center gap-3 border",
                          activeAxis === axis.id
                            ? "text-white"
                            : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                        )}
                        style={
                          activeAxis === axis.id
                            ? { backgroundColor: axis.color, borderColor: axis.color }
                            : {}
                        }
                      >
                        {getAxisIcon(axis.id)}
                        {axis.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="w-full py-4 rounded-2xl bg-[#1B2C49] text-white font-bold text-[14px] shadow-xl"
                >
                  Ver Projetos
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[100] size-12 rounded-full bg-[#E7609F] text-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#d54d8b] transition-colors"
          >
            <ChevronUp className="size-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgrammaticContentPage;
