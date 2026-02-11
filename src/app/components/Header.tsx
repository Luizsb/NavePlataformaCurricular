import React, { useState } from 'react';
import { cn } from './ui/utils';
import Nave from '../../imports/Nave';
import { Menu, X, ChevronRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenExportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, onOpenExportModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const stages = [
    { id: 'general', label: 'Currículo Geral' },
    { id: 'ei', label: 'Educação infantil' },
    { id: 'ef1', label: 'Anos iniciais' },
    { id: 'ef2', label: 'Anos finais' },
    { id: 'em', label: 'Ensino médio' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-100">
      <div className="mx-auto flex h-20 lg:h-24 max-w-[1600px] items-center justify-between px-4 lg:px-10">
        <div 
          className="flex cursor-pointer items-center h-10 lg:h-12 shrink-0"
          onClick={() => setActivePage('general')}
        >
          <div className="w-[120px] lg:w-[180px] aspect-[204/64] flex items-center">
            <Nave />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 px-4">
          {stages.map((s) => (
            <button
              key={s.id}
              onClick={() => setActivePage(s.id)}
              className={cn(
                "px-6 py-2 rounded-full text-[14px] font-bold transition-all whitespace-nowrap cursor-pointer",
                activePage === s.id
                  ? "bg-[#E7609F] text-white shadow-[0px_8px_16px_-4px_rgba(231,96,159,0.3)]"
                  : "text-[#9F9FA9] hover:text-[#1B2C49] hover:bg-zinc-50"
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2.5 rounded-xl bg-zinc-50 text-[#1B2C49] cursor-pointer"
        >
          <Menu className="size-6" />
        </button>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          {onOpenExportModal && (
            <button
              type="button"
              onClick={onOpenExportModal}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#4C76BA] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(76,118,186,0.45)] hover:bg-[#3b5d94] active:scale-[0.97] transition-all cursor-pointer"
            >
              <Download className="size-4" />
              Exportar PDF
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#1B2C49]/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
                <span className="text-[12px] font-black uppercase tracking-wider text-[#E7609F]">Navegação</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl bg-zinc-50 text-zinc-400 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {stages.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActivePage(s.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-2xl text-[14px] font-bold transition-all text-left",
                      activePage === s.id
                        ? "bg-[#E7609F] text-white"
                        : "text-[#1B2C49] hover:bg-zinc-50"
                    )}
                  >
                    {s.label}
                    <ChevronRight className={cn("size-4", activePage === s.id ? "text-white" : "text-zinc-300")} />
                  </button>
                ))}
                {onOpenExportModal && (
                  <button
                    type="button"
                    onClick={() => {
                      onOpenExportModal();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl text-[14px] font-bold bg-[#4C76BA] text-white hover:bg-[#3b5d94] transition-all mt-4"
                  >
                    <Download className="size-5" />
                    Exportar PDF
                  </button>
                )}
              </div>
              <div className="p-8 border-t border-zinc-100 bg-zinc-50/50">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B2C49]/30">BCINaV • Plataforma Curricular</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
