import React, { useState } from 'react';
import { 
  X, FileText, CheckCircle2, Download, 
  BookOpen, Baby, GraduationCap, School, Binary
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './ui/utils';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';

interface GlobalExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  curriculumData: Record<string, any>;
}

const EXPORT_OPTIONS = [
  { id: 'general', label: 'Currículo Geral', icon: BookOpen, color: '#4C76BA' },
  { id: 'ei', label: 'Educação Infantil', icon: Baby, color: '#94579E' },
  { id: 'ef1', label: 'Anos Iniciais (EF1)', icon: GraduationCap, color: '#E7609F' },
  { id: 'ef2', label: 'Anos Finais (EF2)', icon: School, color: '#4C76BA' },
  { id: 'em', label: 'Ensino Médio', icon: Binary, color: '#3D1D3D' },
];

export const GlobalExportModal: React.FC<GlobalExportModalProps> = ({ 
  isOpen, 
  onClose, 
  curriculumData 
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  const toggleOption = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === EXPORT_OPTIONS.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(EXPORT_OPTIONS.map(o => o.id));
    }
  };

  const generatePDF = async () => {
    if (selectedIds.length === 0) {
      toast.error('Selecione pelo menos um segmento para exportar.');
      return;
    }

    setIsExporting(true);
    const toastId = toast.loading('Gerando documento PDF...');

    try {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      let yPos = 20;
      const margin = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pageWidth - margin * 2;

      const checkPageBreak = (neededSpace: number) => {
        if (yPos + neededSpace > 280) {
          doc.addPage();
          yPos = 20;
          return true;
        }
        return false;
      };

      const addText = (
        text: string,
        size: number,
        style: 'normal' | 'bold' | 'italic' | 'bolditalic' = 'normal',
        color: [number, number, number] = [27, 44, 73],
        spacing = 2
      ) => {
        doc.setFontSize(size);
        doc.setFont('helvetica', style);
        doc.setTextColor(color[0], color[1], color[2]);
        
        const lines = doc.splitTextToSize(text, contentWidth);
        lines.forEach((line: string) => {
          checkPageBreak(size * 0.5 + spacing);
          doc.text(line, margin, yPos);
          yPos += size * 0.35 + spacing;
        });
        yPos += spacing;
      };

      // Título principal
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(231, 96, 159);
      doc.text('BCINaV - Base Curricular de Inovação', pageWidth / 2, yPos, { align: 'center' });
      yPos += 15;

      selectedIds.forEach((id, index) => {
        const data = curriculumData[id];
        if (!data) return;

        if (index > 0) {
          doc.addPage();
          yPos = 20;
        }

        // Cabeçalho do segmento
        addText(data.title.toUpperCase(), 18, 'bold', [148, 87, 158], 4);

        if (data.hero?.foco) {
          addText(`Foco: ${data.hero.foco}`, 11, 'bold', [27, 44, 73], 2);
        }
        yPos += 5;

        data.sections.forEach((section: any) => {
          yPos += 5;
          addText(section.title, 14, 'bold', [76, 118, 186], 3);

          if (section.items && Array.isArray(section.items)) {
            section.items.forEach((item: any) => {
              const itemTitle = typeof item === 'string' ? item : (item.title || '');
              const itemDesc = typeof item === 'string' ? '' : (item.description || '');

              yPos += 4;
              addText(itemTitle, 12, 'bold', [231, 96, 159], 2);

              if (itemDesc) {
                const lines = itemDesc.split('\n');
                lines.forEach((line: string) => {
                  const trimmed = line.trim();
                  if (!trimmed) return;

                  const isObjeto = trimmed.toLowerCase().includes('objeto de conhecimento');
                  const isCompetencia = trimmed.toLowerCase().includes('competência');
                  const isHabilidade = trimmed.startsWith('(') || trimmed.toLowerCase().includes('habilidade');

                  let style: 'normal' | 'bold' | 'italic' | 'bolditalic' = 'normal';
                  let color: [number, number, number] = [80, 80, 90];
                  let indent = 0;

                  if (isObjeto) {
                    style = 'bold';
                    color = [27, 44, 73];
                  } else if (isHabilidade) {
                    style = 'italic';
                    indent = 5;
                  } else if (isCompetencia) {
                    indent = 5;
                  }

                  doc.setFontSize(10);
                  doc.setFont('helvetica', style);
                  doc.setTextColor(color[0], color[1], color[2]);
                  
                  const splitLines = doc.splitTextToSize(trimmed, contentWidth - indent);
                  splitLines.forEach((l: string) => {
                    checkPageBreak(8);
                    doc.text(l, margin + indent, yPos);
                    yPos += 5;
                  });
                  yPos += 1;
                });
              }
            });
          }
        });
      });

      doc.save('BCINaV_Curriculo_Export.pdf');
      toast.success('PDF baixado com sucesso!', { id: toastId });
      onClose();
    } catch (error) {
      console.error('PDF Export Error:', error);
      toast.error('Erro ao gerar o PDF.', { id: toastId });
    } finally {
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1B2C49]/60 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative flex flex-col w-full max-w-2xl max-h-[90vh] bg-white rounded-[40px] shadow-[0px_32px_128px_-16px_rgba(27,44,73,0.4)] overflow-hidden border border-white"
        >
          {/* Header */}
          <div className="shrink-0 p-6 lg:p-8 border-b border-zinc-100 flex items-start justify-between bg-zinc-50/50">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[3px] text-[#E7609F]">Central de Exportação</span>
              <h2 className="text-[32px] font-black text-[#1B2C49] leading-tight tracking-tight">Exportar Currículo</h2>
              <p className="text-zinc-500 text-[14px]">Selecione os segmentos que deseja incluir no documento PDF.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white border border-zinc-100 rounded-2xl text-zinc-400 hover:text-[#E7609F] hover:shadow-md transition-all cursor-pointer"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Content - scrollable so footer stays visible */}
          <div className="flex-1 overflow-y-auto min-h-0 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#1B2C49] text-[16px]">Escolha os Segmentos</h3>
                <span className="text-[13px] text-zinc-500 font-medium">
                  {selectedIds.length === 0
                    ? 'Nenhum selecionado'
                    : selectedIds.length === 1
                      ? '1 segmento selecionado'
                      : `${selectedIds.length} segmentos selecionados`}
                </span>
              </div>
              <button 
                onClick={selectAll}
                className="text-[12px] font-black uppercase tracking-wider text-[#4C76BA] hover:text-[#3b5d94] cursor-pointer"
              >
                {selectedIds.length === EXPORT_OPTIONS.length ? 'Desmarcar Todos' : 'Selecionar Todos'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPORT_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedIds.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={cn(
                      'flex items-center gap-4 p-5 rounded-[24px] border-2 transition-all text-left group cursor-pointer',
                      isSelected 
                        ? 'bg-white border-[#E7609F] shadow-lg shadow-[#E7609F]/10' 
                        : 'bg-zinc-50/50 border-zinc-100 hover:border-zinc-200'
                    )}
                  >
                    <div className={cn(
                      'p-3 rounded-xl transition-all',
                      isSelected ? 'bg-[#E7609F] text-white' : 'bg-white text-zinc-400 border border-zinc-100 group-hover:border-[#E7609F]/30'
                    )}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1B2C49] text-[15px]">{opt.label}</div>
                      <div className="text-[11px] text-zinc-400 font-medium">Incluir conteúdo completo</div>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="size-5 text-[#E7609F]" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Footer */}
          <div className="shrink-0 p-6 lg:p-8 bg-zinc-50/50 border-t border-zinc-100 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 rounded-2xl font-bold text-[14px] text-zinc-500 hover:bg-zinc-100 transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={generatePDF}
              disabled={isExporting || selectedIds.length === 0}
              className="flex-[2] py-4 px-6 rounded-2xl font-bold text-[14px] bg-[#4C76BA] text-white shadow-xl shadow-[#4C76BA]/20 hover:bg-[#3b5d94] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                    <Download className="size-5" />
                  </motion.div>
                  Gerando PDF...
                </>
              ) : (
                <>
                  <Download className="size-5" />
                  Exportar PDF{selectedIds.length > 0 ? ` (${selectedIds.length})` : ''}
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

