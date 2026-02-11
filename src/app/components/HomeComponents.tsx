import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowRight } from 'lucide-react';
import { cn } from './ui/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate pt-24 pb-16 bg-white overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-indigo-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] aspect-square bg-pink-50/50 rounded-full blur-[150px] -z-10" />
      
      <div className="mx-auto max-w-7xl px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-center"
        >
          <h1 className="mx-auto max-w-3xl text-[32px] font-black tracking-tight text-[#4c1d95] leading-tight mb-8">
            Base curricular da inovação Nave à vela (BCINaV)
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <button className="w-full sm:w-auto flex h-14 items-center justify-center rounded-2xl bg-[#6366f1] px-10 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95">
              Explorar a Base
            </button>
          </div>

          <div className="mx-auto max-w-4xl text-left space-y-6">
            <p className="text-[16px] leading-relaxed text-zinc-600 font-medium">
              A Base Curricular de Inovação do Nave à Vela (BCINaV) propõe um alinhamento entre a Base Nacional Comum Curricular (BNCC) da Computação, as Habilidades do Século XXI (World Economic Forum) e referências internacionais, como as diretrizes da International Society for Technology in Education (ISTE). Esta integração garante a progressão das aprendizagens previstas para a Educação Tecnológica, promovendo uma formação sólida, criativa e contemporânea.
            </p>
            <p className="text-[16px] leading-relaxed text-zinc-600 font-medium">
              O objetivo da BCINaV é propor uma Educação Tecnológica para formar sujeitos criativos, críticos e inventivos, capazes de compreender e transformar o mundo por meio do fazer, do pensar e do conviver. Busca-se desenvolver a capacidade de expressar ideias e criar soluções inovadoras para problemas reais, utilizando tecnologias digitais, como inteligência artificial e computação criativa.
            </p>
            <p className="text-[16px] leading-relaxed text-zinc-600 font-medium">
              Mais do que acumular informações, aprender passa a significar criar, experimentar e refletir sobre o processo criativo. A proposta visa, portanto, a autonomia intelectual, a consciência ética e a capacidade de imaginar e realizar com propósito, unindo pensamento crítico, técnica, imaginação e compromisso social.
            </p>
            <p className="text-[16px] leading-relaxed text-zinc-600 font-medium">
              Com base nesses princípios, a BCINaV estrutura-se em quatro eixos temáticos que orientam os objetos de aprendizagem previstos para cada segmento e etapa escolar, bem como as competências e habilidades que caracterizam a Educação Tecnológica proposta pelo Nave à Vela.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface StructureCardProps {
  title: string;
  items?: string[];
  sections?: { title: string; items: string[] }[];
  onClick: () => void;
}

export const StructureCard: React.FC<StructureCardProps> = ({ title, items, sections, onClick }) => {
  const isPurple = title.includes("Eixos");
  const isPink = title.includes("Habilidades");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative cursor-pointer rounded-[40px] p-10 transition-all shadow-sm border border-zinc-100",
        isPurple ? "bg-[#f5f3ff] hover:bg-[#ede9fe]" : isPink ? "bg-[#fdf2f8] hover:bg-[#fce7f3]" : "bg-[#eff6ff] hover:bg-[#dbeafe]"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-500",
        isPurple ? "bg-[#8b5cf6]" : isPink ? "bg-[#ec4899]" : "bg-[#3b82f6]"
      )}>
         <Compass className="h-7 w-7 transition-transform group-hover:rotate-[30deg]" />
      </div>

      <h3 className={cn(
        "text-[24px] font-black mb-8 leading-tight tracking-tight",
        isPurple ? "text-[#4c1d95]" : isPink ? "text-[#9d174d]" : "text-[#1e3a8a]"
      )}>{title}</h3>
      
      {items && (
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", isPurple ? "bg-purple-300" : isPink ? "bg-pink-300" : "bg-blue-300")} />
              <span className="text-[16px] font-bold text-zinc-600 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {sections && (
        <div className="space-y-8">
          {sections.map((section, sIdx) => (
            <div key={sIdx}>
              <h4 className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70", isPink ? "text-pink-600" : "text-blue-600")}>{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3 text-zinc-600">
                    <div className={cn("h-1 w-1 rounded-full", isPink ? "bg-pink-400" : "bg-blue-400")} />
                    <span className="text-[16px] font-bold leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-900 group-hover:translate-x-2 transition-all shadow-sm border border-zinc-50">
        <ArrowRight className="h-5 w-5" />
      </div>
    </motion.div>
  );
};
