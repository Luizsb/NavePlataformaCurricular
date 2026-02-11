import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Copy, Check, Hammer, Cpu, Globe, Binary, Database, 
  Layers, HardDrive, Handshake, MessageCircle, Trophy, Shield, 
  Compass, Fingerprint, Zap, X, LayoutGrid, BookOpen, Calendar,
  ChevronUp
} from 'lucide-react';
import { cn } from './ui/utils';
import { ShapePurple, ShapeComplexPink } from './Shapes';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import Hero from "./HeroComponent";

interface CurriculumLibraryViewProps {
  data: any;
  stage: string;
  onStageChange: (stage: string) => void;
}

const AXES = [
  "Pensamento Computacional",
  "Mundo Digital e IA",
  "Cultura Digital e Midiática",
  "Design e Fabricação Digital"
];

const EF1_YEARS = [
  "Todos",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano"
];

const EF2_YEARS = [
  "Todos",
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano"
];

const EM_YEARS = [
  "Todos",
  "1ª série",
  "2ª série",
  "3ª série"
];

const CopyButton = ({ text, className, isLarge = false }: { text: string; className?: string; isLarge?: boolean }) => {
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
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          toast.success('Conteúdo copiado!');
        }
      } catch (err) {
        toast.error('Erro ao copiar.');
      }
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success('Conteúdo copiado!');
      } else {
        fallbackCopy(text);
      }
    } catch (err) {
      fallbackCopy(text);
    }
  };

  const Icon = copied ? Check : Copy;
  const label = isLarge ? (copied ? 'Copiado!' : 'Copiar Tudo') : null;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleCopy}
      className={cn(
        "relative flex items-center justify-center transition-all cursor-pointer overflow-hidden shrink-0",
        isLarge 
          ? "px-5 py-2.5 rounded-xl bg-[#F1EEF9]/50 border border-zinc-100 text-[#1B2C49] font-bold text-[13px] hover:shadow-md hover:border-[#E7609F]/30 gap-2.5"
          : "p-3 rounded-xl bg-white text-zinc-400 hover:text-[#E7609F] hover:shadow-md border border-zinc-100",
        copied && (isLarge ? "bg-[#E7609F] text-white border-[#E7609F]" : "text-[#E7609F] border-[#E7609F]"),
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className={cn(isLarge ? "size-4" : "size-4", !copied && isLarge && "text-[#E7609F]")} />
        {label && <span>{label}</span>}
      </div>
    </motion.button>
  );
};

const CurriculumInfoButton = ({ onClick, className }: { onClick: () => void; className?: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-6 py-3 rounded-full bg-[#94579E] border border-[#94579E] shadow-sm text-white font-bold text-[14px] hover:shadow-md hover:bg-[#834a8c] transition-all cursor-pointer group",
        className
      )}
    >
      <BookOpen className="size-4 text-white group-hover:scale-110 transition-transform" />
      Sobre a BCINaV
    </motion.button>
  );
};

export const CurriculumLibraryView: React.FC<CurriculumLibraryViewProps> = ({ data, stage, onStageChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAxis, setActiveAxis] = useState('Todos');
  const [activeYear, setActiveYear] = useState('Todos');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setSearchQuery('');
    setActiveAxis('Todos');
    setActiveYear('Todos');
  }, [stage]);

  const scrollToTopSmooth = () => {
    if (typeof window === 'undefined') return;
    // Scroll suave um pouco acima dos filtros de eixos,
    // para que o conteúdo novo apareça logo abaixo.
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleAxisChange = (axis: string) => {
    setActiveAxis(axis);
    scrollToTopSmooth();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const YEARS = stage === 'ef1' ? EF1_YEARS : stage === 'ef2' ? EF2_YEARS : stage === 'em' ? EM_YEARS : [];

  const getIconByTitle = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('cultura maker') || t.includes('design') || t.includes('fabricação')) return <Hammer className="size-3.5" />;
    if (t.includes('pensamento computacional')) return <Cpu className="size-3.5" />;
    if (t.includes('mundo digital')) return <Globe className="size-3.5" />;
    if (t.includes('cultura digital') || t.includes('midiática')) return <LayoutGrid className="size-3.5" />;
    if (t.includes('redes e conectividade')) return <Layers className="size-3.5" />;
    if (t.includes('algoritmos')) return <Binary className="size-3.5" />;
    if (t.includes('sistemas de computação')) return <HardDrive className="size-3.5" />;
    if (t.includes('colaboração')) return <Handshake className="size-3.5" />;
    if (t.includes('comunicação')) return <MessageCircle className="size-3.5" />;
    if (t.includes('empreendedorismo')) return <Trophy className="size-3.5" />;
    if (t.includes('ética')) return <Shield className="size-3.5" />;
    if (t.includes('reflexão')) return <Compass className="size-3.5" />;
    if (t.includes('identidade')) return <Fingerprint className="size-3.5" />;
    if (t.includes('foco geral')) return null;
    return null; 
  };

  const filteredSections = useMemo(() => {
    const query = searchQuery.toLowerCase();
    
    return data.sections.map((section: any) => {
      const filterItems = (items: any[]) => {
        return items.filter((item: any) => {
          const itemTitle = typeof item === 'string' ? item : (item.title || '');
          const itemDesc = typeof item === 'string' ? '' : (item.description || '');
          
          const matchesSearch = !query || 
            itemTitle.toLowerCase().includes(query) || 
            itemDesc.toLowerCase().includes(query);
          
          const matchesAxis = activeAxis === 'Todos' || 
            itemTitle.toLowerCase().includes(activeAxis.toLowerCase()) ||
            section.title.toLowerCase().includes(activeAxis.toLowerCase());

          const matchesYear = activeYear === 'Todos' || 
            itemTitle.toLowerCase().replace(' ', '').replace('ª', 'a').includes(activeYear.toLowerCase().replace(' ', '').replace('ª', 'a'));

          return matchesSearch && matchesAxis && matchesYear;
        });
      };

      if (section.type === 'detailed') {
        return { ...section, items: filterItems(section.items) };
      }
      if (section.type === 'list') {
        return { ...section, items: filterItems(section.items) };
      }
      return section;
    }).filter((section: any) => {
      if (section.type === 'detailed' || section.type === 'list') {
        return section.items.length > 0;
      }
      return true;
    });
  }, [data.sections, searchQuery, activeAxis, activeYear]);

  const DetailedSection = ({ title, items, isGeneral }: { title: string, items: any[], isGeneral?: boolean }) => {
    if (items.length === 0) return null;

    const getAxisColors = (axisTitle: string) => {
      const t = axisTitle.toLowerCase();
      if (t.includes('pensamento computacional')) return { 
        bg: 'bg-[#4C76BA]', 
        border: 'border-[#4C76BA]', 
        text: 'text-white', 
        iconBg: 'bg-white/20', 
        iconText: 'text-white',
        cardBg: 'bg-white',
        accent: 'bg-[#4C76BA]/10',
        lightBg: 'bg-[#4C76BA]/5',
        lightBorder: 'border-[#4C76BA]/20',
        lightText: 'text-[#4C76BA]'
      };
      if (t.includes('mundo digital')) return { 
        bg: 'bg-[#94579E]', 
        border: 'border-[#94579E]', 
        text: 'text-white', 
        iconBg: 'bg-white/20', 
        iconText: 'text-white',
        cardBg: 'bg-white',
        accent: 'bg-[#94579E]/10',
        lightBg: 'bg-[#94579E]/5',
        lightBorder: 'border-[#94579E]/20',
        lightText: 'text-[#94579E]'
      };
      if (t.includes('cultura digital')) return { 
        bg: 'bg-[#E7609F]', 
        border: 'border-[#E7609F]', 
        text: 'text-white', 
        iconBg: 'bg-white/20', 
        iconText: 'text-white',
        cardBg: 'bg-white',
        accent: 'bg-[#E7609F]/10',
        lightBg: 'bg-[#E7609F]/5',
        lightBorder: 'border-[#E7609F]/20',
        lightText: 'text-[#E7609F]'
      };
      if (t.includes('design') || t.includes('fabricação')) return { 
        bg: 'bg-[#3D1D3D]', 
        border: 'border-[#3D1D3D]', 
        text: 'text-white', 
        iconBg: 'bg-white/20', 
        iconText: 'text-white',
        cardBg: 'bg-white',
        accent: 'bg-[#3D1D3D]/10',
        lightBg: 'bg-[#3D1D3D]/5',
        lightBorder: 'border-[#3D1D3D]/20',
        lightText: 'text-[#3D1D3D]'
      };
      return { 
        bg: 'bg-white', 
        border: 'border-zinc-100', 
        text: 'text-[#1B2C49]', 
        iconBg: 'bg-white', 
        iconText: 'text-zinc-500', 
        cardBg: 'bg-zinc-50/10', 
        accent: 'bg-zinc-100',
        lightBg: 'bg-zinc-50',
        lightBorder: 'border-zinc-100',
        lightText: 'text-[#1B2C49]'
      };
    };

    const colors = getAxisColors(title);
    const hasIcon = !!getIconByTitle(title);

    return (
      <div className="space-y-8 mt-8 lg:mt-16">
        <div className={cn(
          "rounded-[32px] lg:rounded-[40px] border p-6 lg:p-12 shadow-[0px_32px_64px_-16px_rgba(27,44,73,0.1)] transition-all relative overflow-hidden bg-white",
          colors.lightBorder
        )}>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-zinc-50 to-transparent pointer-events-none" />

           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 lg:mb-12 relative z-10">
              <div className="flex items-center gap-4 lg:gap-6">
                {hasIcon && (
                  <div className={cn("p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-sm border border-zinc-100 bg-white", colors.lightText)}>
                    {React.cloneElement(getIconByTitle(title) as React.ReactElement, { className: "size-6 lg:size-8" })}
                  </div>
                )}
                <div className="space-y-1">
                  <span className={cn("text-[9px] lg:text-[10px] font-black uppercase tracking-[2px] lg:tracking-[3px] opacity-70", colors.lightText)}>
                    Eixo Estruturante
                  </span>
                  <h2 className={cn("text-[24px] lg:text-[40px] font-black tracking-tight leading-tight text-[#1B2C49]")}>
                    {title}
                  </h2>
                </div>
              </div>
              <CopyButton 
                text={`${title}\n\n${items.map(i => `${i.title}\n${i.description}`).join('\n\n')}`} 
                isLarge 
                className={cn(
                  "bg-white border-zinc-200 hover:border-zinc-300 text-[#1B2C49] w-fit"
                )}
              />
           </div>

           <div className="space-y-6 lg:space-y-8 relative z-10">
             {items.map((item, idx) => {
                const lines = item.description.split('\n');
                const groups: { object: string, children: { type: 'competencia' | 'habilidade' | 'conteudo', text: string }[] }[] = [];
                let currentGroup: typeof groups[0] | null = null;

                lines.forEach((line: string) => {
                  const trimmed = line.trim();
                  if (!trimmed) return;

                  const isObjeto = trimmed.toLowerCase().startsWith('objeto de conhecimento') || trimmed.toLowerCase().startsWith('objetos de conhecimento');
                  const isCompetencia = trimmed.toLowerCase().startsWith('competência') || trimmed.toLowerCase().startsWith('competências');
                  const isHabilidade = trimmed.startsWith('(') || trimmed.toLowerCase().startsWith('habilidade');

                  if (isObjeto) {
                    currentGroup = {
                      object: trimmed.replace(/^(Objeto de conhecimento|Objetos de conhecimento):\s*/i, ''),
                      children: []
                    };
                    groups.push(currentGroup);
                  } else if (currentGroup) {
                    const type = isCompetencia ? 'competencia' : isHabilidade ? 'habilidade' : 'conteudo';
                    const text = trimmed.replace(/^(Competência|Competências|Habilidade|Habilidades):\s*/i, '');
                    currentGroup.children.push({ type, text });
                  } else {
                    const type = isCompetencia ? 'competencia' : isHabilidade ? 'habilidade' : 'conteudo';
                    const text = trimmed.replace(/^(Competência|Competências|Habilidade|Habilidades):\s*/i, '');
                    groups.push({ object: '', children: [{ type, text }] });
                    currentGroup = groups[groups.length - 1];
                  }
                });

                const itemIcon = getIconByTitle(item.title);

                return (
                  <div key={idx} className={cn(
                    "relative p-5 lg:p-8 rounded-[24px] lg:rounded-[32px] border transition-all",
                    isGeneral ? "bg-white border-white/40 shadow-xl" : "bg-white border-zinc-100 shadow-sm"
                  )}>
                    <div className="flex flex-col gap-6 lg:gap-8">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 lg:gap-5">
                          {itemIcon && (
                            <div className={cn(
                              "p-3 lg:p-4 rounded-lg lg:rounded-xl shadow-sm ring-1 ring-zinc-100 bg-white",
                              colors.lightText
                            )}>
                              {itemIcon}
                            </div>
                          )}
                          <h3 className="text-[18px] lg:text-[24px] font-bold text-[#1B2C49] leading-tight">{item.title}</h3>
                        </div>
                        <CopyButton text={`${item.title}\n${item.description}`} />
                      </div>

                      <div className="space-y-6 lg:space-y-10">
                        {groups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-4">
                            {group.object && (
                              <div className="relative p-4 lg:p-6 border-2 border-[#E7609F]/20 bg-[#E7609F]/5 rounded-[16px] lg:rounded-[20px] transition-all hover:border-[#E7609F]/40 group/obj">
                                <div className="flex items-start gap-3 lg:gap-5">
                                  <div className="size-2 rounded-full mt-2 shrink-0 bg-[#E7609F]" />
                                  <div className="space-y-1 flex-1">
                                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[1px] lg:tracking-[2px] text-[#E7609F]">
                                      Objeto de Conhecimento
                                    </span>
                                    <p className="text-[16px] lg:text-[18px] font-bold text-[#1B2C49] leading-tight">
                                      {group.object}
                                    </p>
                                  </div>
                                  <CopyButton text={group.object} className="hidden sm:flex" />
                                </div>
                              </div>
                            )}
                            
                            <div className={cn("grid grid-cols-1 gap-3 lg:gap-4", group.object && "pl-4 lg:pl-8 border-l-2 border-zinc-100 ml-3 lg:ml-5")}>
                              {group.children.map((child, cIdx) => (
                                <div 
                                  key={cIdx} 
                                  className={cn(
                                    "relative p-4 lg:p-6 border-2 rounded-[16px] lg:rounded-[20px] flex items-start justify-between gap-4 lg:gap-6 group/line transition-all",
                                    child.type === 'habilidade' 
                                      ? "bg-[#94579E]/10 border-[#94579E]/20 hover:border-[#94579E]/40" 
                                      : child.type === 'competencia'
                                        ? "bg-[#4C76BA]/10 border-[#4C76BA]/20 hover:border-[#4C76BA]/40"
                                        : "bg-white border-zinc-100 hover:border-zinc-200"
                                  )}
                                >
                                  <div className="flex items-start gap-3 lg:gap-5 flex-1">
                                    <div className={cn(
                                      "size-2 rounded-full mt-2 shrink-0",
                                      child.type === 'habilidade' ? "bg-[#94579E]" : child.type === 'competencia' ? "bg-[#4C76BA]" : "bg-zinc-400"
                                    )} />
                                    <div className="space-y-1">
                                      <span className={cn(
                                        "text-[9px] lg:text-[10px] font-black uppercase tracking-[1px] lg:tracking-[2px]",
                                        child.type === 'habilidade' ? "text-[#94579E]" : child.type === 'competencia' ? "text-[#4C76BA]" : "text-zinc-400"
                                      )}>
                                        {child.type === 'habilidade' ? "Habilidade" : child.type === 'competencia' ? "Competência" : "Conteúdo"}
                                      </span>
                                      <p className="text-[14px] lg:text-[16px] font-medium text-[#1B2C49] leading-relaxed">
                                        {child.text}
                                      </p>
                                    </div>
                                  </div>
                                  <CopyButton text={child.text} className="hidden sm:flex" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
             })}
           </div>
        </div>
      </div>
    );
  };

  const ListSection = ({ title, items }: { title: string, items: string[] }) => {
    if (items.length === 0) return null;
    return (
      <div className="mt-16 bg-white rounded-[32px] border border-zinc-100 p-10 shadow-[0px_24px_48px_-12px_rgba(27,44,73,0.06)]">
        <h2 className="text-[24px] font-bold text-[#1B2C49] mb-8">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="px-5 py-3 rounded-full bg-[#F1EEF9]/50 border border-zinc-100 text-[14px] font-bold text-[#1B2C49]">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const GeneralCompetencies = () => {
    const competencies = [
      { title: "Criatividade, Inventividade e Experimentação", description: "Capacidade de imaginar, experimentar e criar soluções originais para problemas reais, por meio da experimentação e prototipagem prática." },
      { title: "Pensamento complexo, científico, artístico e sistêmico", description: "Domínio funcional e criativo de tecnologias digitais, eletrônicas e de fabricação analógica e digital." },
      { title: "Ciência, Investigação e Criticidade", description: "Capacidade de investigar, formular hipóteses, experimentar e validar conclusões de forma crítica." },
      { title: "Colaboração e Intercultura", description: "Habilidade de trabalhar com outras pessoas, respeitando saberes diversos e contextos culturais, valorizando a diversidade." },
      { title: "Comunicação e Narração", description: "Comunicação do seu processo de aprendizagem e resultados de forma clara." },
      { title: "Empreendedorismo e Protagonismo", description: "Capacidade de agir com autonomia, transformar ideias em ação e gerar valor empreendedor para si e para a comunidade." },
      { title: "Ética e Cidadania", description: "Consciência sobre o impacto social, ético e ambiental das tecnologias e das próprias criações e uso consciente das aplicações, por meio da curiosidade e senso de conexão com o mundo que o cerca." },
      { title: "Reflexão e Autonomia", description: "Habilidade de aprender a aprender — refletir sobre o próprio processo e ajustar estratégias." },
    ];

    const copyAllContent = () => {
      return `Competências Gerais da Computação (BNCC)\n\n${competencies.map(c => `${c.title}: ${c.description}`).join('\n\n')}`;
    };

    return (
      <div className="space-y-10 mt-16 md:mt-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[3px] text-[#E7609F]">Nave à Vela + BNCC</span>
            <h2 className="text-[28px] md:text-[32px] font-black text-[#1B2C49] tracking-tight leading-tight">Competências Gerais da BNCC Computação</h2>
          </div>
          <CopyButton 
            text={copyAllContent()} 
            isLarge 
            className="bg-white border-zinc-200 hover:border-zinc-300 text-[#1B2C49] w-fit" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {competencies.map((comp, idx) => (
            <div key={idx} className="bg-white p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-zinc-100 shadow-[0px_16px_32px_-12px_rgba(27,44,73,0.05)] hover:shadow-xl hover:border-[#E7609F]/20 transition-all group relative">
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <CopyButton text={`${comp.title}\n${comp.description}`} />
              </div>
              <h4 className="text-[18px] md:text-[20px] font-bold text-[#1B2C49] mb-3 md:mb-4 group-hover:text-[#E7609F] transition-colors leading-tight pr-12 md:pr-12">{comp.title}</h4>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-[#71717B] font-light">{comp.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const WEFSkills = () => {
    const categories = [
      {
        title: "Competências",
        subtitle: "Como abordamos problemas",
        skills: ["Criatividade", "Colaboração", "Comunicação", "Pensamento crítico"],
        color: "bg-[#4C76BA]",
        dotColor: "bg-[#4C76BA]"
      },
      {
        title: "Habilidades Fundamentais",
        subtitle: "Como aplicamos nossas habilidades no cotidiano",
        skills: ["Curiosidade", "Iniciativa", "Resiliência", "Adaptabilidade", "Liderança", "Consciência social e cultural"],
        color: "bg-[#94579E]",
        dotColor: "bg-[#94579E]"
      },
      {
        title: "Qualidades de Caráter",
        subtitle: "Como nós lidamos com o mundo a nossa volta",
        skills: ["Alfabetização e leitura", "Matemática", "Letramento científico", "Letramento tecnológico", "Educação financeira", "Letramento cultural e cívico"],
        color: "bg-[#E7609F]",
        dotColor: "bg-[#E7609F]"
      }
    ];

    const copyAllContent = () => {
      return `Habilidades do Século XXI (WEF)\n\n${categories.map(c => `${c.title} (${c.subtitle}):\n${c.skills.join(', ')}`).join('\n\n')}`;
    };

    return (
      <div className="space-y-8 lg:space-y-12 mt-20 lg:mt-32 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[2px] lg:tracking-[3px] text-[#94579E]">World Economic Forum</span>
            <h2 className="text-[28px] lg:text-[32px] font-black text-[#1B2C49] tracking-tight leading-tight">Habilidades do Século XXI</h2>
          </div>
          <CopyButton 
            text={copyAllContent()} 
            isLarge 
            className="bg-white border-zinc-200 hover:border-zinc-300 text-[#1B2C49] w-fit" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white rounded-[40px] lg:rounded-[60px] border border-zinc-100 overflow-hidden shadow-[0px_20px_40px_-12px_rgba(27,44,73,0.08)] transition-all group">
              <div className={cn("p-8 lg:p-12 pb-6 lg:pb-10 flex flex-col justify-between relative min-h-[180px] lg:min-h-[220px]", cat.color)}>
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-[20px] lg:text-[26px] font-black text-white leading-[1.1] max-w-[200px]">{cat.title}</h4>
                  <CopyButton 
                    text={`${cat.title} (${cat.subtitle}): ${cat.skills.join(', ')}`} 
                    className="bg-white/20 border-white/10 text-white hover:bg-white/30 backdrop-blur-sm p-2 lg:p-3 rounded-xl lg:rounded-2xl" 
                  />
                </div>
                <p className="text-[13px] lg:text-[15px] text-white/90 font-medium leading-snug mt-4 lg:mt-6">
                  {cat.subtitle}
                </p>
              </div>
              <div className="p-8 lg:p-12 pt-6 lg:pt-10 flex-1 space-y-4 lg:space-y-5 bg-white">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 lg:gap-4 group/skill">
                    <div className={cn("size-1.5 lg:size-2 rounded-full shrink-0", cat.dotColor)} />
                    <span className="text-[14px] lg:text-[16px] font-bold text-[#1B2C49] leading-tight transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#EAE5F9] relative selection:bg-[#E7609F] selection:text-white font-sans">
      <main className="relative z-10 w-full p-4 md:p-8 lg:p-16 scroll-smooth">
        <div className="mx-auto max-w-[1300px] flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          
          {/* Side Filter for Years - Desktop ONLY */}
          {(stage === 'ef1' || stage === 'ef2' || stage === 'em') && (
            <aside className="hidden lg:block w-48 shrink-0 sticky top-32 space-y-6">
              <div className="bg-white rounded-[24px] border border-zinc-100 p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5">
                  <Calendar className="size-4 text-[#4C76BA]" />
                  <h4 className="text-[12px] font-black text-[#1B2C49] uppercase tracking-wider">
                    {stage === 'em' ? 'Série' : 'Ano'}
                  </h4>
                </div>
                <div className="flex flex-col gap-1.5">
                  {YEARS.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all text-left flex items-center justify-between group cursor-pointer",
                        activeYear === year
                          ? "bg-[#4C76BA] text-white shadow-lg shadow-[#4C76BA]/20"
                          : "text-[#1B2C49]/60 hover:bg-zinc-50 hover:text-[#4C76BA]"
                      )}
                    >
                      {year}
                      {activeYear === year && <Check className="size-3.5" />}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          <div className="flex-1 min-w-0 w-full max-w-[1100px] mx-auto">
            {activeAxis === 'Todos' && activeYear === 'Todos' && !searchQuery && data.hero && (
              stage === 'general' ? (
                <div className="mb-8 lg:mb-12 w-full">
                  <Hero>
                    <CurriculumInfoButton 
                      onClick={() => setIsInfoModalOpen(true)}
                      className="shadow-xl border-white hover:border-[#E7609F]/50 scale-90 lg:scale-100" 
                    />
                  </Hero>
                </div>
              ) : (
                <div className="mb-8 lg:mb-16 bg-white rounded-[24px] lg:rounded-[32px] border border-white p-6 lg:p-12 shadow-[0px_20px_40px_-12px_rgba(27,44,73,0.04)] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-full lg:w-[400px] h-full bg-linear-to-bl from-[#E7609F]/5 via-transparent to-transparent pointer-events-none" />
                   <div className="relative z-10 space-y-6 lg:space-y-8">
                     <div className="inline-flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-1 lg:py-1.5 rounded-full bg-[#4C76BA]/5">
                       <div className="size-1.5 lg:size-2 rounded-full bg-[#4C76BA]" />
                       <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[2px] lg:tracking-[3px] text-[#1B2C49]">{data.hero.tagline}</span>
                     </div>
                     <div className="space-y-6 lg:space-y-8 text-[#6B6B6B] text-[14px] lg:text-[15px] leading-[1.6]">
                        <div className="space-y-4 lg:space-y-3">
                          <p className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-3">
                            <span className="font-black text-[#1B2C49] uppercase text-[9px] lg:text-[11px] tracking-widest bg-zinc-50 px-2.5 py-1 rounded-md w-fit">Foco</span>
                            <span className="text-[16px] lg:text-[18px] font-medium text-[#1B2C49]">{data.hero.foco}</span>
                          </p>
                          <p className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-3">
                            <span className="font-black text-[#1B2C49] uppercase text-[9px] lg:text-[11px] tracking-widest bg-zinc-50 px-2.5 py-1 rounded-md w-fit">Valor central</span>
                            <span className="text-[16px] lg:text-[18px] font-medium text-[#1B2C49]">{data.hero.valor_central}</span>
                          </p>
                        </div>
                        <div className="space-y-4 lg:space-y-6 font-light max-w-[860px] text-[#71717B] text-[16px]">
                          {data.hero.description_blocks && data.hero.description_blocks.map((block: string, i: number) => (
                            <p key={i}>{block}</p>
                          ))}
                        </div>
                     </div>
                   </div>
                </div>
              )
            )}

            <div className="sticky top-0 z-20 pb-4 lg:pb-8 mb-4">
               <div className="absolute inset-x-0 top-0 h-full bg-[#EAE5F9]/80 backdrop-blur-md pointer-events-none" />
               <div className="relative pt-2 space-y-4 lg:space-y-6">
                 <div className="flex items-center justify-between gap-4">
                    <h1 className="text-[24px] lg:text-[32px] font-black text-[#1B2C49] tracking-tight leading-tight">
                      {searchQuery ? `Pesquisa: "${searchQuery}"` : data.title}
                      {searchQuery && (
                        <span className="ml-4 text-[14px] lg:text-[16px] font-medium text-zinc-400">
                          ({filteredSections.reduce((acc: number, s: any) => acc + (s.items?.length || 0), 0)} resultados)
                        </span>
                      )}
                    </h1>
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
                   <div className="relative group w-full lg:max-w-[640px] shadow-[0px_16px_32px_-12px_rgba(27,44,73,0.1)] rounded-xl lg:rounded-2xl">
                    <div className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2">
                      <Search className="size-[18px] lg:size-[20px] text-zinc-300 group-focus-within:text-[#E7609F] transition-colors" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Pesquisar no currículo..." 
                      className="h-[56px] lg:h-[64px] w-full rounded-xl lg:rounded-2xl bg-white border border-[#E4E4E7] pl-12 lg:pl-14 pr-12 lg:pr-14 text-[14px] lg:text-[16px] font-medium text-[#1B2C49] outline-none transition-all placeholder:text-zinc-300 focus:ring-4 focus:ring-[#E7609F]/10 focus:border-[#E7609F]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-zinc-300 hover:text-[#1B2C49] cursor-pointer">
                        <X className="size-4 lg:size-5" />
                      </button>
                    )}
                   </div>

                    {/* Mobile Year Selector */}
                    {(stage === 'ef1' || stage === 'ef2' || stage === 'em') && (
                      <div className="lg:hidden w-full py-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {YEARS.map((year) => (
                            <button
                              key={year}
                              onClick={() => setActiveYear(year)}
                              className={cn(
                                "px-3 py-2 rounded-xl text-[10px] font-bold transition-all border shrink-0 uppercase tracking-tight",
                                activeYear === year
                                  ? "bg-[#4C76BA] text-white border-[#4C76BA] shadow-md shadow-[#4C76BA]/20"
                                  : "bg-white text-[#1B2C49]/60 border-[#E4E4E7]"
                              )}
                            >
                              {year}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Axis Selectors - Desktop Row / Hidden on Mobile (Moved to Drawer) */}
                   <div className="hidden lg:block space-y-6">
                     <span className="text-[10px] font-black uppercase tracking-[3px] text-[#1B2C49]/40 ml-1 block mb-1">Eixos Estruturantes</span>
                     <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleAxisChange('Todos')}
                          className={cn(
                            "px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-2 border shrink-0 cursor-pointer uppercase tracking-tight",
                            activeAxis === 'Todos'
                              ? "bg-[#1B2C49] text-white border-[#1B2C49]"
                              : "bg-white text-[#1B2C49]/60 border-[#E4E4E7] hover:border-[#1B2C49]/30"
                          )}
                        >
                          <LayoutGrid className="size-3.5" />
                          Todos
                        </button>
                        {AXES.map((axis) => (
                          <button
                            key={axis}
                            onClick={() => handleAxisChange(axis)}
                            className={cn(
                              "px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-2 border shrink-0 cursor-pointer uppercase tracking-tight",
                              activeAxis === axis
                                ? "bg-[#E7609F] text-white border-[#E7609F] shadow-lg shadow-[#E7609F]/20"
                                : "bg-white text-[#1B2C49]/60 border-[#E4E4E7] hover:border-[#1B2C49]/30 hover:text-[#E7609F]"
                            )}
                          >
                            {getIconByTitle(axis) && React.cloneElement(getIconByTitle(axis) as React.ReactElement, { className: "size-3.5" })}
                            {axis}
                          </button>
                        ))}
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="pb-20 lg:pb-32">
              {filteredSections.length > 0 ? (
                filteredSections.map((section: any, idx: number) => {
                  const isFirstDetailed = section.type === 'detailed' && idx === 0;
                  
                  return (
                    <div key={idx}>
                      {section.type === 'detailed' && <DetailedSection title={section.title} items={section.items} isGeneral={stage === 'general'} />}
                      {section.type === 'list' && <ListSection title={section.title} items={section.items} />}
                      
                      {stage === 'general' && isFirstDetailed && activeAxis === 'Todos' && activeYear === 'Todos' && !searchQuery && (
                        <div className="contents">
                          <GeneralCompetencies />
                          <WEFSkills />
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-20 flex flex-col items-center text-center space-y-6"
                >
                  <div className="size-24 rounded-[32px] bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                    <Search className="size-10 text-zinc-200" />
                  </div>
                  <div className="space-y-2 max-w-[400px]">
                    <h3 className="text-[20px] font-bold text-[#1B2C49]">Nenhum conteúdo encontrado</h3>
                    <p className="text-[15px] text-zinc-500 font-light leading-relaxed">
                      Não encontramos resultados para os filtros selecionados ou para o termo pesquisado. Tente ajustar sua busca.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveAxis('Todos');
                      setActiveYear('Todos');
                    }}
                    className="px-8 py-3.5 rounded-2xl bg-[#E7609F] text-white font-bold text-[14px] shadow-lg shadow-[#E7609F]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Limpar todos os filtros
                  </button>
                </motion.div>
              )}
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
              className="fixed inset-0 bg-[#1B2C49]/40 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-[120] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LayoutGrid className="size-5 text-[#E7609F]" />
                  <span className="text-[14px] font-black uppercase tracking-wider text-[#1B2C49]">Filtros</span>
                </div>
                <button 
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="p-2 rounded-xl bg-zinc-50 text-zinc-400 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                {/* Years Filter in Drawer */}
                {(stage === 'ef1' || stage === 'ef2' || stage === 'em') && (
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-[#4C76BA] flex items-center gap-2">
                      <Calendar className="size-3.5" />
                      {stage === 'em' ? 'Série' : 'Ano'}
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {YEARS.map((year) => (
                        <button
                          key={year}
                          onClick={() => setActiveYear(year)}
                          className={cn(
                            "px-4 py-3 rounded-xl text-[12px] font-bold transition-all text-center border",
                            activeYear === year
                              ? "bg-[#4C76BA] text-white border-[#4C76BA] shadow-lg shadow-[#4C76BA]/20"
                              : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                          )}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Axis Filter in Drawer */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-[#E7609F] flex items-center gap-2">
                    <LayoutGrid className="size-3.5" />
                    Eixos Estruturantes
                  </span>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleAxisChange('Todos')}
                      className={cn(
                        "w-full px-4 py-4 rounded-xl text-[12px] font-bold transition-all flex items-center gap-3 border",
                        activeAxis === 'Todos'
                          ? "bg-[#1B2C49] text-white border-[#1B2C49]"
                          : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                      )}
                    >
                      <LayoutGrid className="size-4" />
                      Todos
                    </button>
                    {AXES.map((axis) => (
                      <button
                        key={axis}
                        onClick={() => handleAxisChange(axis)}
                        className={cn(
                          "w-full px-4 py-4 rounded-xl text-[12px] font-bold transition-all flex items-center gap-3 border",
                          activeAxis === axis
                            ? "bg-[#E7609F] text-white border-[#E7609F]"
                            : "bg-zinc-50 text-[#1B2C49]/60 border-zinc-100"
                        )}
                      >
                        {getIconByTitle(axis) && React.cloneElement(getIconByTitle(axis) as React.ReactElement, { className: "size-4" })}
                        <span className="flex-1 text-left">{axis}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
                <button 
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="w-full py-4 rounded-2xl bg-[#1B2C49] text-white font-bold text-[14px] shadow-xl cursor-pointer"
                >
                  Ver Resultados
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="fixed bottom-6 right-0 z-[120] h-9 w-11 rounded-l-full bg-[#1B2C49] text-white shadow-[0_10px_24px_rgba(27,44,73,0.35)] flex items-center justify-center cursor-pointer border border-r-0 border-[#122035]"
          >
            <ChevronUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isInfoModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInfoModalOpen(false)}
              className="absolute inset-0 bg-[#1B2C49]/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-[750px] bg-white rounded-[40px] shadow-[0px_32px_128px_-16px_rgba(0,0,0,0.4)] overflow-hidden border border-white"
            >
              <div className="p-10 md:p-14 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[3px] text-[#E7609F]">Fundamentos Pedagógicos</span>
                    <h2 className="text-[32px] font-bold text-[#1B2C49] leading-tight">Sobre a BCINaV</h2>
                  </div>
                  <button 
                    onClick={() => setIsInfoModalOpen(false)}
                    className="p-3 rounded-2xl bg-zinc-50 text-zinc-400 hover:text-[#E7609F] hover:bg-zinc-100 transition-all cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="space-y-8">
                  <p className="text-[16px] leading-[1.8] text-[#1B2C49]/80 font-light">
                    A <span className="font-bold text-[#1B2C49]">Base Curricular de Inovação do Nave à Vela (BCINaV)</span> propõe um alinhamento entre a Base Nacional Comum Curricular (BNCC) da Computação, as Habilidades do Século XXI (World Economic Forum) e referências internacionais, como as diretrizes da International Society for Technology in Education (ISTE). Esta integração garante a progressão das aprendizagens previstas para a Educação Tecnológica, promovendo uma formação sólida, criativa e contemporânea.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-[#1B2C49]/80 font-light">
                    O objetivo da BCINaV é propor uma Educação Tecnológica para formar sujeitos criativos, críticos e inventivos, capazes de compreender e transformar o mundo por meio do fazer, do pensar e do conviver. Busca-se desenvolver a capacidade de expressar ideias e criar soluções inovadoras para problemas reais, utilizando tecnologias digitais, como inteligência artificial e computação criativa.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-[#1B2C49]/80 font-light">
                    Mais do que acumular informações, aprender passa a significar criar, experimentar e refletir sobre o processo criativo. A proposta visa, portanto, a autonomia intelectual, a consciência ética e a capacidade de imaginar e realizar com propósito, unindo pensamento crítico, técnica, imaginação e compromisso social.
                  </p>
                  <div className="p-8 rounded-[32px] bg-[#E7609F]/5 border-2 border-[#E7609F]/10">
                    <p className="text-[16px] leading-[1.8] text-[#1B2C49]/80 font-medium italic">
                      Com base nesses princípios, a BCINaV estrutura-se em quatro eixos temáticos que orientam os objetos de aprendizagem previstos para cada segmento e etapa escolar, bem como as competências e habilidades que caracterizam a Educação Tecnológica proposta pelo Nave à Vela.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
