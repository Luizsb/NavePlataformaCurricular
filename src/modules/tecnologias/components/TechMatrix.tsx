import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, GitBranch, Calendar, Copy, CheckCheck, Check } from 'lucide-react';
import { cn } from '../../../app/components/ui/utils';

// ─── Types ─────────────────────────────────────────────────────────────────────

type Category = 'Programação' | 'Inteligência Artificial' | 'Cultura Digital' | 'Automação' | 'Produção Digital' | 'IoT' | 'STEAM';

interface TechBadge { name: string; color: string }

interface TechProject {
  id: string;
  year: string;
  level: 'ef2' | 'em';
  tema: string;
  prototipo: string;
  contexto: string;
  illustration: string;
  badges: TechBadge[];
  categories: Category[];
}

// ─── Data ──────────────────────────────────────────────────────────────────────

export const TECH_PROJECTS: TechProject[] = [
  // ── 6º ano ───────────────────────────────────────────────
  {
    id: 'ef2-6-1', year: '6º ano', level: 'ef2',
    tema: 'Produção de energia e design sustentável',
    prototipo: 'Espaço alimentado por aerogerador',
    contexto: 'Através da construção de um espaço alimentado por aerogerador, os estudantes exploram a produção de energia elétrica, elementos mecânicos e técnicas de modelagem.',
    illustration: 'wind-energy',
    badges: [{ name: 'Motor + Hélice', color: '#4C76BA' }, { name: 'LED', color: '#E7609F' }],
    categories: ['STEAM'],
  },
  {
    id: 'ef2-6-2', year: '6º ano', level: 'ef2',
    tema: 'Sustentabilidade e Inteligência Artificial aplicada',
    prototipo: 'Jogo seletor de Lixo com IA',
    contexto: 'Através da construção de um jogo que utiliza reconhecimento de imagens treinadas em IA, os estudantes exploram sustentabilidade, reciclagem e pensamento computacional.',
    illustration: 'ai-recycling',
    badges: [{ name: 'Scratch', color: '#F6921E' }, { name: 'ML4Kids', color: '#8B5CF6' }],
    categories: ['Programação', 'Inteligência Artificial'],
  },
  {
    id: 'ef2-6-3', year: '6º ano', level: 'ef2',
    tema: 'Produção midiática com responsabilidade',
    prototipo: 'Produção audiovisual',
    contexto: 'Através da produção de um podcast educacional, os estudantes exploram comportamentos digitais e habilidades essenciais de comunicação responsável.',
    illustration: 'video-production',
    badges: [{ name: 'Google Vids', color: '#4285F4' }],
    categories: ['Produção Digital', 'Cultura Digital'],
  },
  {
    id: 'ef2-6-4', year: '6º ano', level: 'ef2',
    tema: 'Cidades inteligentes e consumo consciente',
    prototipo: 'Protótipo físico automatizado',
    contexto: 'Através do desenvolvimento de automatização residencial, os estudantes exploram a evolução da indústria e seus impactos sociais.',
    illustration: 'smart-home-basic',
    badges: [{ name: 'micro:bit', color: '#00C1C8' }],
    categories: ['Automação', 'STEAM'],
  },

  // ── 7º ano ───────────────────────────────────────────────
  {
    id: 'ef2-7-1', year: '7º ano', level: 'ef2',
    tema: 'Animação interativa',
    prototipo: 'Animação sobre segurança digital',
    contexto: 'Criação de animação investigando riscos da internet com narrativa visual interativa.',
    illustration: 'animation-screen',
    badges: [{ name: 'PictoBlox', color: '#5B4AE8' }],
    categories: ['Programação', 'Produção Digital'],
  },
  {
    id: 'ef2-7-2', year: '7º ano', level: 'ef2',
    tema: 'Programação de jogos digitais',
    prototipo: 'Jogo de lixo eletrônico',
    contexto: 'Criação de jogo sobre lixo eletrônico explorando programação e responsabilidade ambiental.',
    illustration: 'game-design',
    badges: [{ name: 'Scratch', color: '#F6921E' }],
    categories: ['Programação'],
  },
  {
    id: 'ef2-7-3', year: '7º ano', level: 'ef2',
    tema: 'Soluções automatizadas para o cotidiano',
    prototipo: 'Climatização sustentável automatizada',
    contexto: 'Criação de estação climática para refletir sobre mudanças climáticas com automação física.',
    illustration: 'climate-auto',
    badges: [{ name: 'micro:bit', color: '#00C1C8' }],
    categories: ['Automação', 'STEAM'],
  },
  {
    id: 'ef2-7-4', year: '7º ano', level: 'ef2',
    tema: 'Cultura digital consciente',
    prototipo: 'Criação de um site',
    contexto: 'Criação de memes para refletir sobre responsabilidade digital e análise crítica de conteúdos.',
    illustration: 'digital-culture',
    badges: [{ name: 'Google Sites', color: '#34A853' }],
    categories: ['Cultura Digital', 'Produção Digital'],
  },

  // ── 8º ano ───────────────────────────────────────────────
  {
    id: 'ef2-8-1', year: '8º ano', level: 'ef2',
    tema: 'Soluções inteligentes para trânsito',
    prototipo: 'Semáforo inteligente',
    contexto: 'Construção de semáforo inteligente para estudar mobilidade urbana e sistemas automatizados.',
    illustration: 'smart-traffic',
    badges: [{ name: 'micro:bit', color: '#00C1C8' }, { name: 'CreateAI', color: '#007A80' }],
    categories: ['Automação', 'Inteligência Artificial'],
  },
  {
    id: 'ef2-8-2', year: '8º ano', level: 'ef2',
    tema: 'Mobilidade urbana e organização do território',
    prototipo: 'Estacionamento inteligente',
    contexto: 'Construção de estacionamento inteligente analisando impacto social da mobilidade urbana.',
    illustration: 'smart-parking',
    badges: [{ name: 'micro:bit', color: '#00C1C8' }, { name: 'MakeCode', color: '#007A80' }],
    categories: ['Automação', 'STEAM'],
  },
  {
    id: 'ef2-8-3', year: '8º ano', level: 'ef2',
    tema: 'Jogos e Internet',
    prototipo: 'App de comunicação',
    contexto: 'Criação de jogo explorando sistemas da internet e experiência de múltiplos usuários conectados.',
    illustration: 'multiplayer-game',
    badges: [{ name: 'Scratch', color: '#F6921E' }],
    categories: ['Programação', 'Cultura Digital'],
  },
  {
    id: 'ef2-8-4', year: '8º ano', level: 'ef2',
    tema: 'Ética digital e cidadania',
    prototipo: 'Criação de vídeo',
    contexto: 'Produção de vídeo sobre impacto da IA na sociedade e práticas de cidadania digital.',
    illustration: 'ethics-video',
    badges: [{ name: 'Google Vids', color: '#4285F4' }],
    categories: ['Cultura Digital', 'Produção Digital'],
  },

  // ── 9º ano ───────────────────────────────────────────────
  {
    id: 'ef2-9-1', year: '9º ano', level: 'ef2',
    tema: 'Segurança digital e criptografia',
    prototipo: 'Criação de um site',
    contexto: 'Exploração de criptografia, proteção de dados pessoais e segurança na internet.',
    illustration: 'cybersecurity',
    badges: [{ name: 'Canva', color: '#00C4CC' }],
    categories: ['Cultura Digital'],
  },
  {
    id: 'ef2-9-2', year: '9º ano', level: 'ef2',
    tema: 'Bem-estar digital',
    prototipo: 'Criação de um app',
    contexto: 'Desenvolvimento de aplicativo que apoia o bem-estar e uso consciente do tempo de tela.',
    illustration: 'wellness-app',
    badges: [{ name: 'MIT App Inventor', color: '#E05C2B' }],
    categories: ['Programação', 'Produção Digital'],
  },
  {
    id: 'ef2-9-3', year: '9º ano', level: 'ef2',
    tema: 'IA e saúde preventiva',
    prototipo: 'Projeto de alertas',
    contexto: 'Sistema tecnológico de monitoramento com sensores e interface de alertas preventivos.',
    illustration: 'health-ai',
    badges: [{ name: 'Arduino', color: '#00979D' }, { name: 'PictoBlox', color: '#5B4AE8' }],
    categories: ['Inteligência Artificial', 'IoT'],
  },
  {
    id: 'ef2-9-4', year: '9º ano', level: 'ef2',
    tema: 'Combate à desinformação',
    prototipo: 'Objetos digitais',
    contexto: 'Análise crítica de informações, identificação de fake news e produção de conteúdo verificado.',
    illustration: 'fact-check',
    badges: [{ name: 'Google Sites', color: '#34A853' }],
    categories: ['Cultura Digital'],
  },

  // ── 1ª série EM ──────────────────────────────────────────
  {
    id: 'em-1-1', year: '1ª série', level: 'em',
    tema: 'Monitoramento climático com tecnologias digitais',
    prototipo: 'Criação de uma estação climática',
    contexto: 'Construção de estação climática para coletar e analisar dados de microclima local com impacto ambiental.',
    illustration: 'weather-station',
    badges: [{ name: 'ESP32', color: '#E7232A' }, { name: 'Arduino IDE', color: '#00979D' }],
    categories: ['IoT', 'STEAM'],
  },
  {
    id: 'em-1-2', year: '1ª série', level: 'em',
    tema: 'Tecnologias climáticas',
    prototipo: 'Modificação do sistema por programação',
    contexto: 'Aprofundamento no microclima com Design Thinking, transformando dados em soluções para o bem-estar escolar.',
    illustration: 'climate-sensor',
    badges: [{ name: 'ESP32', color: '#E7232A' }, { name: 'Arduino IDE', color: '#00979D' }],
    categories: ['IoT', 'Automação'],
  },
  {
    id: 'em-1-3', year: '1ª série', level: 'em',
    tema: 'Soluções para promoção da cidadania digital',
    prototipo: 'Criação de app',
    contexto: 'Construção de aplicativo com apoio de IA, desenvolvendo e publicando conteúdos com análise crítica.',
    illustration: 'digital-art',
    badges: [{ name: 'Canva Code AI', color: '#00C4CC' }],
    categories: ['Produção Digital', 'Inteligência Artificial'],
  },
  {
    id: 'em-1-4', year: '1ª série', level: 'em',
    tema: 'Design Thinking aplicado a produtos',
    prototipo: 'Criação de campanha',
    contexto: 'Aplicação do Design Thinking para refinar proposta e desenvolver campanha digital de impacto.',
    illustration: 'design-campaign',
    badges: [{ name: 'Canva Sites', color: '#00C4CC' }],
    categories: ['Produção Digital', 'Cultura Digital'],
  },

  // ── 2ª série EM ──────────────────────────────────────────
  {
    id: 'em-2-1', year: '2ª série', level: 'em',
    tema: 'Empreendedorismo para criação de startups',
    prototipo: 'Criação de jogos educativos',
    contexto: 'Estruturação de uma Startup explorando cultura digital com proposta de intervenção social.',
    illustration: 'board-game',
    badges: [{ name: 'Canva', color: '#00C4CC' }],
    categories: ['Produção Digital', 'Cultura Digital'],
  },
  {
    id: 'em-2-2', year: '2ª série', level: 'em',
    tema: 'Design Thinking aplicado a startups',
    prototipo: 'Criação de jogos educativos',
    contexto: 'Aprofundamento da situação-problema e desenvolvimento da estrutura física dos jogos.',
    illustration: 'innovation',
    badges: [{ name: 'Canva', color: '#00C4CC' }],
    categories: ['Produção Digital', 'STEAM'],
  },
  {
    id: 'em-2-3', year: '2ª série', level: 'em',
    tema: 'Automação residencial e eficiência energética',
    prototipo: 'Criação de uma casa IoT',
    contexto: 'Construção de casa IoT explorando automação residencial, dados e impactos sociais.',
    illustration: 'home-iot',
    badges: [{ name: 'ESP32', color: '#E7232A' }, { name: 'Arduino IDE', color: '#00979D' }],
    categories: ['IoT', 'Automação'],
  },
  {
    id: 'em-2-4', year: '2ª série', level: 'em',
    tema: 'Internet das Coisas e conectividade residencial',
    prototipo: 'Criação de uma casa IoT',
    contexto: 'Desenvolvimento de conectividade Wi-Fi e análise de necessidades do usuário em automação residencial.',
    illustration: 'iot-connectivity',
    badges: [{ name: 'ESP32', color: '#E7232A' }, { name: 'Arduino IDE', color: '#00979D' }],
    categories: ['IoT', 'Automação'],
  },
];

const YEARS_EF2 = ['Todos', '6º ano', '7º ano', '8º ano', '9º ano'];
const YEARS_EM  = ['Todos', '1ª série', '2ª série'];

const CATEGORY_COLORS: Record<Category, { bg: string; text: string; border: string }> = {
  Programação: { bg: '#FFF0F7', text: '#E7609F', border: '#F6B9D4' },
  'Inteligência Artificial': { bg: '#F5F0FF', text: '#94579E', border: '#D4AED1' },
  'Cultura Digital': { bg: '#EEF2FB', text: '#4C76BA', border: '#A8C2E5' },
  Automação: { bg: '#FFF5EC', text: '#C2602A', border: '#F6C9A8' },
  'Produção Digital': { bg: '#F0FBF5', text: '#2A8C57', border: '#A8E5C4' },
  IoT: { bg: '#EDF7FF', text: '#1B6FA8', border: '#A8D9F5' },
  STEAM: { bg: '#FAFAF0', text: '#7A7A00', border: '#D9D98C' },
};

const HERO_TEXTS: Record<'ef2' | 'em', string[]> = {
  ef2: [
    'A coleção passa a contar com uma Matriz estruturada de Tecnologias, com indicação clara de softwares, linguagens e componentes eletrônicos por ano e projeto.',
    'Essa organização oferece previsibilidade curricular, maior segurança para implementação e curadoria intencional de ferramentas adequadas à faixa etária.',
  ],
  em: [
    'No Ensino Médio, a progressão curricular ganha maior profundidade técnica e argumentativa, consolidando o percurso formativo iniciado no Ensino Fundamental.',
    'A progressão passa a ser claramente organizada, fortalecendo a preparação para escolhas acadêmicas e profissionais.',
  ],
};

// ─── SVG Illustrations ─────────────────────────────────────────────────────────
// viewBox="0 0 400 225" — 16:9 ratio
// Language: flat/geometric digital illustration, brand palette

const ILLUSTRATIONS: Record<string, () => React.ReactElement> = {
  'wind-energy': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E8F3FD"/>
      <rect y="165" width="400" height="60" rx="0" fill="#C8E6C9"/>
      <ellipse cx="70" cy="55" rx="40" ry="18" fill="white" opacity="0.85"/>
      <ellipse cx="95" cy="45" rx="28" ry="20" fill="white" opacity="0.85"/>
      <ellipse cx="50" cy="48" rx="22" ry="15" fill="white" opacity="0.75"/>
      <ellipse cx="300" cy="40" rx="35" ry="15" fill="white" opacity="0.7"/>
      <ellipse cx="320" cy="33" rx="22" ry="16" fill="white" opacity="0.7"/>
      <circle cx="350" cy="38" r="22" fill="#FFF9C4" opacity="0.8"/>
      {/* Tower */}
      <path d="M200 165 L196 90 L204 90 Z" fill="#90A4AE"/>
      {/* Blades */}
      <path d="M200 93 L195 93 L186 62 L200 68 Z" fill="#4C76BA" opacity="0.9"/>
      <path d="M200 93 L203.5 90 L228 103 L218 114 Z" fill="#4C76BA" opacity="0.75"/>
      <path d="M200 93 L196 96 L172 85 L182 74 Z" fill="#94579E" opacity="0.8"/>
      {/* Hub */}
      <circle cx="200" cy="93" r="7" fill="#1B2C49"/>
      <circle cx="200" cy="93" r="3" fill="#E7609F"/>
      {/* LED glow */}
      <circle cx="200" cy="169" r="10" fill="#E7609F" opacity="0.3"/>
      <circle cx="200" cy="169" r="6" fill="#E7609F" opacity="0.7"/>
      <circle cx="200" cy="169" r="3" fill="white"/>
    </svg>
  ),

  'ai-recycling': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#F3F0FF"/>
      <rect y="170" width="400" height="55" fill="#E8F5E9"/>
      {/* Bins */}
      <rect x="90" y="100" width="55" height="70" rx="8" fill="#4CAF50" opacity="0.85"/>
      <rect x="90" y="95" width="55" height="14" rx="4" fill="#388E3C"/>
      <rect x="172" y="100" width="55" height="70" rx="8" fill="#2196F3" opacity="0.85"/>
      <rect x="172" y="95" width="55" height="14" rx="4" fill="#1565C0"/>
      <rect x="254" y="100" width="55" height="70" rx="8" fill="#FF5722" opacity="0.85"/>
      <rect x="254" y="95" width="55" height="14" rx="4" fill="#BF360C"/>
      {/* Bin labels — simple colored dots/lines */}
      <circle cx="117" cy="135" r="12" fill="white" opacity="0.25"/>
      <rect x="110" y="132" width="14" height="3" rx="1.5" fill="white" opacity="0.7"/>
      <rect x="110" y="137" width="14" height="3" rx="1.5" fill="white" opacity="0.5"/>
      <circle cx="199" cy="135" r="12" fill="white" opacity="0.25"/>
      <rect x="192" y="132" width="14" height="3" rx="1.5" fill="white" opacity="0.7"/>
      <rect x="192" y="137" width="14" height="3" rx="1.5" fill="white" opacity="0.5"/>
      <circle cx="281" cy="135" r="12" fill="white" opacity="0.25"/>
      <rect x="274" y="132" width="14" height="3" rx="1.5" fill="white" opacity="0.7"/>
      <rect x="274" y="137" width="14" height="3" rx="1.5" fill="white" opacity="0.5"/>
      {/* AI scanning arc over bins */}
      <path d="M75 80 Q200 45 325 80" stroke="#94579E" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="6 4"/>
      <circle cx="200" cy="58" r="14" fill="#94579E" opacity="0.12"/>
      <circle cx="200" cy="58" r="8" fill="#94579E" opacity="0.2"/>
      <circle cx="200" cy="58" r="4" fill="#94579E" opacity="0.6"/>
      {/* Scan lines from AI dot to bins */}
      <line x1="200" y1="62" x2="117" y2="95" stroke="#94579E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
      <line x1="200" y1="62" x2="199" y2="95" stroke="#94579E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
      <line x1="200" y1="62" x2="281" y2="95" stroke="#94579E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
    </svg>
  ),

  'video-production': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF0F7"/>
      {/* Monitor */}
      <rect x="80" y="50" width="240" height="140" rx="14" fill="#1B2C49" opacity="0.9"/>
      <rect x="90" y="60" width="220" height="118" rx="8" fill="#2A3A5A"/>
      {/* Play area */}
      <circle cx="200" cy="119" r="32" fill="#E7609F" opacity="0.2"/>
      <polygon points="192,104 192,134 220,119" fill="#E7609F"/>
      {/* Waveform bars */}
      <rect x="100" y="140" width="6" height="20" rx="3" fill="#E7609F" opacity="0.6"/>
      <rect x="110" y="133" width="6" height="27" rx="3" fill="#94579E" opacity="0.6"/>
      <rect x="120" y="137" width="6" height="23" rx="3" fill="#4C76BA" opacity="0.6"/>
      <rect x="130" y="130" width="6" height="30" rx="3" fill="#E7609F" opacity="0.6"/>
      <rect x="140" y="135" width="6" height="25" rx="3" fill="#94579E" opacity="0.6"/>
      {/* REC dot */}
      <circle cx="115" cy="73" r="6" fill="#E7609F"/>
      <text x="126" y="77" fontSize="10" fill="#E7609F" fontFamily="sans-serif" opacity="0.9">REC</text>
    </svg>
  ),

  'smart-home-basic': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#EDF7FF"/>
      <rect y="170" width="400" height="55" fill="#D4EDD4" opacity="0.6"/>
      {/* House */}
      <polygon points="200,40 110,120 290,120" fill="#4C76BA" opacity="0.85"/>
      <rect x="130" y="120" width="140" height="75" rx="4" fill="#5A84C8"/>
      {/* Door */}
      <rect x="182" y="148" width="36" height="47" rx="4" fill="#1B2C49"/>
      <circle cx="212" cy="172" r="3" fill="#E7609F"/>
      {/* Windows - glowing */}
      <rect x="145" y="133" width="32" height="28" rx="4" fill="#FFF9C4" opacity="0.9"/>
      <rect x="223" y="133" width="32" height="28" rx="4" fill="#FFF9C4" opacity="0.9"/>
      <circle cx="161" cy="147" r="3" fill="#E7609F" opacity="0.7"/>
      <circle cx="239" cy="147" r="3" fill="#E7609F" opacity="0.7"/>
      {/* WiFi arcs */}
      <path d="M200 28 Q215 20 230 28" stroke="#E7609F" strokeWidth="2.5" fill="none" opacity="0.9" strokeLinecap="round"/>
      <path d="M200 18 Q220 8 240 18" stroke="#E7609F" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
    </svg>
  ),

  'animation-screen': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#F3F0FF"/>
      {/* Screen */}
      <rect x="70" y="35" width="260" height="155" rx="14" fill="#1B2C49"/>
      <rect x="82" y="47" width="236" height="131" rx="8" fill="#2D1B3D"/>
      {/* Character body */}
      <circle cx="200" cy="95" r="20" fill="#E7609F" opacity="0.9"/>
      <rect x="188" y="115" width="24" height="32" rx="6" fill="#94579E" opacity="0.85"/>
      <rect x="174" y="118" width="14" height="22" rx="4" fill="#94579E" opacity="0.75"/>
      <rect x="212" y="118" width="14" height="22" rx="4" fill="#94579E" opacity="0.75"/>
      {/* Motion trail dots */}
      <circle cx="245" cy="95" r="5" fill="#E7609F" opacity="0.5"/>
      <circle cx="258" cy="88" r="4" fill="#E7609F" opacity="0.35"/>
      <circle cx="268" cy="80" r="3" fill="#E7609F" opacity="0.2"/>
      {/* Stars */}
      <path d="M120 75 L122 81 L128 81 L123 85 L125 91 L120 87 L115 91 L117 85 L112 81 L118 81 Z" fill="#F6B9D4" opacity="0.6"/>
      <path d="M280 130 L282 136 L288 136 L283 140 L285 146 L280 142 L275 146 L277 140 L272 136 L278 136 Z" fill="#A8C2E5" opacity="0.5"/>
    </svg>
  ),

  'game-design': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF3E0"/>
      {/* Controller outline */}
      <path d="M110 130 Q95 90 130 75 L270 75 Q305 90 290 130 Q280 155 255 155 Q240 145 200 145 Q160 145 145 155 Q120 155 110 130 Z" fill="#1B2C49" opacity="0.9"/>
      {/* D-pad */}
      <rect x="138" y="100" width="9" height="28" rx="2" fill="#4C76BA" opacity="0.8"/>
      <rect x="128" y="110" width="28" height="9" rx="2" fill="#4C76BA" opacity="0.8"/>
      {/* Buttons */}
      <circle cx="255" cy="100" r="7" fill="#E7609F" opacity="0.9"/>
      <circle cx="268" cy="113" r="7" fill="#94579E" opacity="0.9"/>
      <circle cx="255" cy="126" r="7" fill="#4C76BA" opacity="0.9"/>
      <circle cx="242" cy="113" r="7" fill="#F6B9D4" opacity="0.9"/>
      {/* Analog sticks */}
      <circle cx="170" cy="122" r="10" fill="#2D3A4A"/>
      <circle cx="230" cy="122" r="10" fill="#2D3A4A"/>
      <circle cx="170" cy="122" r="4" fill="#4C76BA" opacity="0.6"/>
      <circle cx="230" cy="122" r="4" fill="#4C76BA" opacity="0.6"/>
    </svg>
  ),

  'climate-auto': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E3F9F9"/>
      {/* Panel */}
      <rect x="120" y="45" width="160" height="135" rx="16" fill="white" opacity="0.9"/>
      <rect x="130" y="55" width="140" height="115" rx="10" fill="#EDF9F9"/>
      {/* Thermometer */}
      <rect x="165" y="70" width="12" height="65" rx="6" fill="#D0E8F0"/>
      <circle cx="171" cy="140" r="11" fill="#E7609F"/>
      <rect x="167" y="95" width="8" height="45" rx="4" fill="#E7609F" opacity="0.8"/>
      {/* Fan blades */}
      <circle cx="250" cy="105" r="30" fill="#B2EBF2" opacity="0.5"/>
      <path d="M250 105 Q265 80 280 95 Q265 100 250 105 Z" fill="#00ACC1" opacity="0.7"/>
      <path d="M250 105 Q275 110 270 130 Q260 115 250 105 Z" fill="#00ACC1" opacity="0.7"/>
      <path d="M250 105 Q235 130 220 115 Q235 110 250 105 Z" fill="#94579E" opacity="0.6"/>
      <path d="M250 105 Q225 100 230 80 Q240 95 250 105 Z" fill="#94579E" opacity="0.6"/>
      <circle cx="250" cy="105" r="8" fill="#1B2C49"/>
      {/* Temperature display */}
      <text x="148" y="162" fontSize="13" fill="#1B2C49" fontFamily="monospace" opacity="0.8">24°C</text>
    </svg>
  ),

  'digital-culture': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF8E1"/>
      {/* Phone */}
      <rect x="155" y="30" width="90" height="165" rx="16" fill="#1B2C49"/>
      <rect x="162" y="42" width="76" height="141" rx="10" fill="#2A3A5A"/>
      {/* Content card 1 */}
      <rect x="167" y="50" width="66" height="40" rx="6" fill="#F5F0FF"/>
      <rect x="172" y="55" width="50" height="5" rx="2" fill="#94579E" opacity="0.6"/>
      <rect x="172" y="64" width="40" height="4" rx="2" fill="#D4AED1" opacity="0.6"/>
      <rect x="172" y="72" width="45" height="4" rx="2" fill="#D4AED1" opacity="0.5"/>
      {/* Content card 2 */}
      <rect x="167" y="98" width="66" height="40" rx="6" fill="#FFF0F7"/>
      <rect x="172" y="103" width="50" height="5" rx="2" fill="#E7609F" opacity="0.6"/>
      <rect x="172" y="112" width="42" height="4" rx="2" fill="#F6B9D4" opacity="0.6"/>
      <rect x="172" y="120" width="38" height="4" rx="2" fill="#F6B9D4" opacity="0.5"/>
      {/* Magnifier */}
      <circle cx="285" cy="90" r="32" fill="#94579E" opacity="0.12"/>
      <circle cx="285" cy="88" r="20" stroke="#94579E" strokeWidth="3" fill="none"/>
      <line x1="299" y1="102" x2="312" y2="115" stroke="#94579E" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Check/cross marks */}
      <path d="M282 83 L286 87 L295 78" stroke="#4C76BA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),

  'smart-traffic': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#ECEFF1"/>
      {/* Road */}
      <rect y="155" width="400" height="70" fill="#607D8B" opacity="0.7"/>
      <rect y="183" width="400" height="6" fill="white" opacity="0.4"/>
      {/* Dashed center line */}
      <rect x="0" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="60" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="120" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="180" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="240" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="300" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="360" y="183" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
      {/* Traffic light pole */}
      <rect x="196" y="80" width="8" height="80" rx="3" fill="#455A64"/>
      {/* Traffic light housing */}
      <rect x="178" y="30" width="44" height="58" rx="10" fill="#263238"/>
      <circle cx="200" cy="47" r="10" fill="#F44336" opacity="0.95"/>
      <circle cx="200" cy="68" r="10" fill="#FFC107" opacity="0.4"/>
      <circle cx="200" cy="89" r="10" fill="#4CAF50" opacity="0.4"/>
      {/* Car 1 */}
      <rect x="80" y="157" width="60" height="28" rx="6" fill="#4C76BA" opacity="0.85"/>
      <rect x="88" y="150" width="44" height="16" rx="5" fill="#5A84C8" opacity="0.9"/>
      <circle cx="95" cy="188" r="8" fill="#263238"/>
      <circle cx="95" cy="188" r="4" fill="#607D8B"/>
      <circle cx="130" cy="188" r="8" fill="#263238"/>
      <circle cx="130" cy="188" r="4" fill="#607D8B"/>
      {/* Car 2 */}
      <rect x="270" y="157" width="60" height="28" rx="6" fill="#94579E" opacity="0.85"/>
      <rect x="278" y="150" width="44" height="16" rx="5" fill="#A36BAE" opacity="0.9"/>
      <circle cx="285" cy="188" r="8" fill="#263238"/>
      <circle cx="285" cy="188" r="4" fill="#607D8B"/>
      <circle cx="320" cy="188" r="8" fill="#263238"/>
      <circle cx="320" cy="188" r="4" fill="#607D8B"/>
    </svg>
  ),

  'smart-parking': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E8F5E9"/>
      {/* Parking lot floor */}
      <rect x="60" y="80" width="280" height="100" rx="8" fill="#CFD8DC" opacity="0.6"/>
      {/* Parking lines */}
      <line x1="120" y1="80" x2="120" y2="180" stroke="white" strokeWidth="2" opacity="0.8"/>
      <line x1="200" y1="80" x2="200" y2="180" stroke="white" strokeWidth="2" opacity="0.8"/>
      <line x1="280" y1="80" x2="280" y2="180" stroke="white" strokeWidth="2" opacity="0.8"/>
      {/* P sign */}
      <circle cx="200" cy="45" r="22" fill="#4C76BA"/>
      <text x="192" y="52" fontSize="22" fontWeight="bold" fill="white" fontFamily="sans-serif">P</text>
      {/* Car top-view */}
      <rect x="130" y="98" width="55" height="65" rx="10" fill="#E7609F" opacity="0.8"/>
      <rect x="137" y="90" width="41" height="20" rx="6" fill="#F48FB1" opacity="0.8"/>
      <rect x="137" y="148" width="41" height="20" rx="6" fill="#F48FB1" opacity="0.7"/>
      {/* Sensor dots (empty spots) */}
      <circle cx="90" cy="130" r="8" fill="#4CAF50" opacity="0.8"/>
      <circle cx="250" cy="130" r="8" fill="#4CAF50" opacity="0.8"/>
      <circle cx="320" cy="130" r="8" fill="#4CAF50" opacity="0.8"/>
      {/* Signal arcs from sensor */}
      <path d="M90 118 Q100 110 110 118" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
      <path d="M90 112 Q104 102 118 112" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round"/>
    </svg>
  ),

  'multiplayer-game': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#F3F0FF"/>
      {/* Screen left */}
      <rect x="30" y="55" width="140" height="115" rx="12" fill="#1B2C49"/>
      <rect x="40" y="65" width="120" height="95" rx="7" fill="#2A3A5A"/>
      {/* Game content left */}
      <rect x="48" y="73" width="104" height="70" rx="4" fill="#1a2a4a"/>
      <polygon points="75,90 75,125 105,107" fill="#E7609F" opacity="0.8"/>
      <rect x="48" y="148" width="35" height="8" rx="3" fill="#E7609F" opacity="0.5"/>
      <rect x="48" y="148" width="25" height="8" rx="3" fill="#E7609F"/>
      {/* Screen right */}
      <rect x="230" y="55" width="140" height="115" rx="12" fill="#1B2C49"/>
      <rect x="240" y="65" width="120" height="95" rx="7" fill="#2A3A5A"/>
      {/* Game content right */}
      <rect x="248" y="73" width="104" height="70" rx="4" fill="#1a2a4a"/>
      <polygon points="295,90 295,125 325,107" fill="#94579E" opacity="0.8"/>
      <rect x="318" y="148" width="35" height="8" rx="3" fill="#94579E" opacity="0.5"/>
      <rect x="308" y="148" width="25" height="8" rx="3" fill="#94579E"/>
      {/* Connection line */}
      <line x1="170" y1="112" x2="230" y2="112" stroke="#E7609F" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7"/>
      <circle cx="200" cy="112" r="8" fill="#E7609F" opacity="0.2"/>
      <circle cx="200" cy="112" r="4" fill="#E7609F"/>
    </svg>
  ),

  'ethics-video': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF0F7"/>
      {/* Background abstract shapes */}
      <circle cx="340" cy="40" r="60" fill="#E7609F" opacity="0.07"/>
      <circle cx="60" cy="185" r="50" fill="#94579E" opacity="0.07"/>
      {/* Camera body */}
      <rect x="100" y="75" width="155" height="100" rx="14" fill="#1B2C49"/>
      <circle cx="178" cy="125" r="32" fill="#2A3A5A"/>
      <circle cx="178" cy="125" r="22" fill="#1a2440"/>
      <circle cx="178" cy="125" r="12" fill="#E7609F" opacity="0.8"/>
      <circle cx="178" cy="125" r="5" fill="white" opacity="0.9"/>
      {/* Camera lens ring */}
      <circle cx="178" cy="125" r="28" stroke="#4C76BA" strokeWidth="2" fill="none" opacity="0.4"/>
      {/* Viewfinder */}
      <rect x="255" y="90" width="45" height="32" rx="6" fill="#2A3A5A"/>
      <path d="M255 106 L268 90 L268 122 Z" fill="#1B2C49"/>
      {/* Record indicator */}
      <circle cx="227" cy="88" r="8" fill="#E7609F"/>
      {/* Speech bubble */}
      <path d="M290 130 Q330 125 325 155 Q320 175 295 172 L285 182 L282 170 Q260 168 262 148 Q264 125 290 130 Z" fill="#F5F0FF" stroke="#D4AED1" strokeWidth="1.5"/>
      <circle cx="285" cy="152" r="3" fill="#94579E" opacity="0.5"/>
      <circle cx="296" cy="152" r="3" fill="#94579E" opacity="0.5"/>
      <circle cx="307" cy="152" r="3" fill="#94579E" opacity="0.5"/>
    </svg>
  ),

  'cybersecurity': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#1B2C49"/>
      {/* Glow */}
      <circle cx="200" cy="112" r="90" fill="#4C76BA" opacity="0.08"/>
      <circle cx="200" cy="112" r="60" fill="#94579E" opacity="0.07"/>
      {/* Shield */}
      <path d="M200 30 L270 60 L270 120 Q270 165 200 190 Q130 165 130 120 L130 60 Z" fill="#4C76BA" opacity="0.2"/>
      <path d="M200 42 L258 68 L258 118 Q258 157 200 178 Q142 157 142 118 L142 68 Z" fill="#4C76BA" opacity="0.35"/>
      <path d="M200 55 L248 77 L248 116 Q248 150 200 168 Q152 150 152 116 L152 77 Z" fill="#4C76BA" opacity="0.5"/>
      {/* Lock body */}
      <rect x="182" y="104" width="36" height="30" rx="6" fill="#E7609F" opacity="0.9"/>
      {/* Lock shackle */}
      <path d="M190 104 L190 94 Q190 80 200 80 Q210 80 210 94 L210 104" stroke="#E7609F" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
      {/* Keyhole */}
      <circle cx="200" cy="116" r="5" fill="#1B2C49"/>
      <rect x="197" y="118" width="6" height="8" rx="1" fill="#1B2C49"/>
      {/* Data dots */}
      <circle cx="100" cy="60" r="3" fill="#4C76BA" opacity="0.5"/>
      <circle cx="120" cy="40" r="2" fill="#94579E" opacity="0.4"/>
      <circle cx="300" cy="55" r="3" fill="#4C76BA" opacity="0.5"/>
      <circle cx="280" cy="75" r="2" fill="#E7609F" opacity="0.4"/>
      <circle cx="320" cy="150" r="3" fill="#94579E" opacity="0.4"/>
      <circle cx="80" cy="160" r="2" fill="#4C76BA" opacity="0.3"/>
    </svg>
  ),

  'wellness-app': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF8F0"/>
      {/* Phone */}
      <rect x="145" y="20" width="110" height="185" rx="18" fill="#1B2C49"/>
      <rect x="154" y="32" width="92" height="161" rx="11" fill="#2A3A5A"/>
      {/* Screen content */}
      <rect x="162" y="42" width="76" height="141" rx="7" fill="#1a2540"/>
      {/* Heart */}
      <path d="M200 95 Q200 80 215 80 Q228 80 228 95 Q228 110 200 128 Q172 110 172 95 Q172 80 185 80 Q200 80 200 95 Z" fill="#E7609F" opacity="0.85"/>
      {/* Heartbeat line */}
      <polyline points="162,148 175,148 180,136 186,160 192,140 198,148 210,148 215,138 220,158 226,148 236,148" stroke="#E7609F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Step counter */}
      <rect x="162" y="165" width="76" height="14" rx="4" fill="#2D3A5A"/>
      <rect x="164" y="167" width="40" height="10" rx="3" fill="#E7609F" opacity="0.7"/>
      <text x="205" y="176" fontSize="8" fill="#A8C2E5" fontFamily="sans-serif" opacity="0.7">8,420</text>
    </svg>
  ),

  'health-ai': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#EEF8FF"/>
      {/* Monitor display */}
      <rect x="80" y="45" width="240" height="130" rx="14" fill="#1B2C49"/>
      <rect x="90" y="55" width="220" height="108" rx="8" fill="#0D1B2A"/>
      {/* ECG/heartbeat wave */}
      <polyline
        points="95,109 115,109 122,85 130,133 138,100 145,120 155,109 175,109 183,90 192,128 200,109 218,109 226,95 234,123 244,109 305,109"
        stroke="#E7609F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* AI scan circle */}
      <circle cx="200" cy="109" r="38" stroke="#4C76BA" strokeWidth="1.5" strokeDasharray="5 4" fill="none" opacity="0.5"/>
      <circle cx="200" cy="109" r="24" stroke="#94579E" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* Scan line */}
      <line x1="90" y1="109" x2="310" y2="109" stroke="#4C76BA" strokeWidth="0.8" opacity="0.25"/>
      {/* Alert indicator */}
      <circle cx="280" cy="68" r="14" fill="#4C76BA" opacity="0.15"/>
      <path d="M280 61 L283 71 L277 71 Z" fill="#4C76BA" opacity="0.9"/>
      <circle cx="280" cy="74" r="2" fill="#4C76BA" opacity="0.9"/>
      {/* Reading */}
      <text x="95" y="148" fontSize="11" fill="#4C76BA" fontFamily="monospace" opacity="0.8">72 BPM</text>
      <circle cx="262" cy="148" r="5" fill="#4CAF50" opacity="0.8"/>
      <text x="271" y="152" fontSize="10" fill="#4CAF50" fontFamily="sans-serif" opacity="0.8">Normal</text>
    </svg>
  ),

  'fact-check': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#F5F5F5"/>
      {/* Document 1 */}
      <rect x="60" y="50" width="120" height="140" rx="10" fill="white" stroke="#E0E0E0" strokeWidth="1.5"/>
      <rect x="74" y="70" width="92" height="7" rx="3" fill="#1B2C49" opacity="0.6"/>
      <rect x="74" y="83" width="80" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="74" y="93" width="86" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="74" y="103" width="72" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="74" y="118" width="92" height="7" rx="3" fill="#E7609F" opacity="0.5"/>
      <rect x="74" y="131" width="78" height="5" rx="2" fill="#9E9E9E" opacity="0.4"/>
      <rect x="74" y="141" width="84" height="5" rx="2" fill="#9E9E9E" opacity="0.4"/>
      {/* FALSE stamp */}
      <rect x="70" y="155" width="72" height="22" rx="4" fill="#FFEBEE"/>
      <text x="80" y="171" fontSize="13" fontWeight="bold" fill="#E53935" fontFamily="sans-serif" opacity="0.9">FALSO</text>
      {/* Document 2 */}
      <rect x="220" y="50" width="120" height="140" rx="10" fill="white" stroke="#E0E0E0" strokeWidth="1.5"/>
      <rect x="234" y="70" width="92" height="7" rx="3" fill="#1B2C49" opacity="0.6"/>
      <rect x="234" y="83" width="80" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="234" y="93" width="86" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="234" y="103" width="72" height="5" rx="2" fill="#9E9E9E" opacity="0.5"/>
      <rect x="234" y="118" width="92" height="7" rx="3" fill="#4C76BA" opacity="0.5"/>
      <rect x="234" y="131" width="78" height="5" rx="2" fill="#9E9E9E" opacity="0.4"/>
      <rect x="234" y="141" width="84" height="5" rx="2" fill="#9E9E9E" opacity="0.4"/>
      {/* TRUE stamp */}
      <rect x="230" y="155" width="72" height="22" rx="4" fill="#E8F5E9"/>
      <text x="238" y="171" fontSize="13" fontWeight="bold" fill="#2E7D32" fontFamily="sans-serif" opacity="0.9">VERDADE</text>
      {/* Magnifier */}
      <circle cx="200" cy="105" r="26" stroke="#94579E" strokeWidth="3" fill="#F3F0FF" opacity="0.7"/>
      <circle cx="200" cy="105" r="26" stroke="#94579E" strokeWidth="3" fill="none"/>
      <line x1="219" y1="124" x2="234" y2="139" stroke="#94579E" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  'weather-station': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E3F2FD"/>
      {/* Sky gradient suggestion */}
      <rect y="140" width="400" height="85" fill="#B2DFDB" opacity="0.5"/>
      {/* Cloud main */}
      <ellipse cx="280" cy="55" rx="55" ry="28" fill="white" opacity="0.9"/>
      <ellipse cx="310" cy="43" rx="35" ry="25" fill="white" opacity="0.9"/>
      <ellipse cx="255" cy="47" rx="30" ry="22" fill="white" opacity="0.85"/>
      {/* Sun */}
      <circle cx="100" cy="55" r="30" fill="#FFE082" opacity="0.9"/>
      <line x1="100" y1="18" x2="100" y2="10" stroke="#FFB300" strokeWidth="3" strokeLinecap="round"/>
      <line x1="122" y1="33" x2="128" y2="27" stroke="#FFB300" strokeWidth="3" strokeLinecap="round"/>
      <line x1="137" y1="55" x2="145" y2="55" stroke="#FFB300" strokeWidth="3" strokeLinecap="round"/>
      <line x1="122" y1="77" x2="128" y2="83" stroke="#FFB300" strokeWidth="3" strokeLinecap="round"/>
      <line x1="78" y1="33" x2="72" y2="27" stroke="#FFB300" strokeWidth="3" strokeLinecap="round"/>
      {/* Station pole */}
      <rect x="196" y="100" width="8" height="85" rx="2" fill="#78909C"/>
      {/* Cross arm */}
      <rect x="168" y="105" width="64" height="6" rx="3" fill="#78909C"/>
      {/* Sensors */}
      <rect x="152" y="93" width="22" height="16" rx="5" fill="#4C76BA" opacity="0.9"/>
      <rect x="226" y="93" width="22" height="16" rx="5" fill="#4C76BA" opacity="0.9"/>
      {/* Screen/display */}
      <rect x="168" y="130" width="64" height="40" rx="8" fill="#1B2C49" opacity="0.9"/>
      <text x="178" y="148" fontSize="10" fill="#4FC3F7" fontFamily="monospace">28.4°C</text>
      <text x="178" y="162" fontSize="10" fill="#A5D6A7" fontFamily="monospace">65% UR</text>
    </svg>
  ),

  'climate-sensor': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E8F5E9"/>
      {/* Ground */}
      <rect y="170" width="400" height="55" fill="#A5D6A7" opacity="0.5"/>
      {/* Trees */}
      <polygon points="340,170 360,110 380,170" fill="#2E7D32" opacity="0.6"/>
      <polygon points="330,170 355,100 380,170" fill="#388E3C" opacity="0.5"/>
      <polygon points="20,170 45,105 70,170" fill="#2E7D32" opacity="0.6"/>
      {/* Sensor node - main */}
      <rect x="172" y="65" width="56" height="76" rx="10" fill="#1B2C49"/>
      <rect x="180" y="73" width="40" height="48" rx="6" fill="#0D1B2A"/>
      {/* Data display */}
      <rect x="183" y="78" width="34" height="16" rx="3" fill="#00BCD4" opacity="0.2"/>
      <text x="187" y="90" fontSize="9" fill="#4FC3F7" fontFamily="monospace">T:29°C</text>
      <text x="187" y="110" fontSize="8" fill="#A5D6A7" fontFamily="monospace">H: 68%</text>
      {/* Pole */}
      <rect x="196" y="141" width="8" height="35" rx="2" fill="#78909C"/>
      {/* Signal waves */}
      <path d="M200 55 Q215 47 230 55" stroke="#E7609F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M200 46 Q220 35 240 46" stroke="#E7609F" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M200 37 Q225 23 250 37" stroke="#E7609F" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"/>
      {/* Data flow arrow */}
      <path d="M110 112 Q140 105 166 112" stroke="#4C76BA" strokeWidth="1.5" strokeDasharray="5 3" fill="none" opacity="0.7" markerEnd="url(#arr)"/>
      <circle cx="110" cy="112" r="6" fill="#4C76BA" opacity="0.5"/>
    </svg>
  ),

  'digital-art': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#2D1B3D"/>
      {/* Pixel grid */}
      <rect x="50" y="35" width="180" height="155" rx="8" fill="#1a1025"/>
      {/* Pixel art sample */}
      {[
        [60,45,30,30,'#E7609F'],[90,45,30,30,'#94579E'],[120,45,30,30,'#4C76BA'],
        [60,75,30,30,'#94579E'],[90,75,30,30,'#E7609F'],[120,75,30,30,'#94579E'],[150,75,30,30,'#4C76BA'],
        [60,105,30,30,'#4C76BA'],[90,105,30,30,'#94579E'],[120,105,30,30,'#E7609F'],[150,105,30,30,'#94579E'],
        [60,135,30,30,'#E7609F'],[90,135,30,30,'#4C76BA'],[120,135,30,30,'#94579E'],
        [60,165,30,30,'#94579E'],[90,165,30,30,'#E7609F'],
      ].map(([x,y,w,h,c],i) => (
        <rect key={i} x={x as number} y={y as number} width={(w as number)-2} height={(h as number)-2} fill={c as string} opacity="0.75" rx="2"/>
      ))}
      {/* Canvas / frame */}
      <rect x="250" y="45" width="110" height="95" rx="10" fill="#F5F0FF" opacity="0.95"/>
      <rect x="258" y="53" width="94" height="79" rx="6" fill="white"/>
      {/* Paint strokes on canvas */}
      <path d="M265 80 Q290 65 310 80 Q320 90 305 100" stroke="#E7609F" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M270 100 Q285 92 300 100" stroke="#94579E" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6"/>
      <circle cx="275" cy="65" r="8" fill="#4C76BA" opacity="0.5"/>
      {/* Sparkles */}
      <path d="M240 165 L242 171 L248 171 L243 175 L245 181 L240 177 L235 181 L237 175 L232 171 L238 171 Z" fill="#F6B9D4" opacity="0.7"/>
      <path d="M310 155 L312 161 L318 161 L313 165 L315 171 L310 167 L305 171 L307 165 L302 161 L308 161 Z" fill="#A8C2E5" opacity="0.6"/>
    </svg>
  ),

  'design-campaign': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF0F7"/>
      {/* Layout grid / campaign board */}
      <rect x="55" y="35" width="290" height="155" rx="14" fill="white" stroke="#F6B9D4" strokeWidth="1.5"/>
      {/* Header strip */}
      <rect x="55" y="35" width="290" height="32" rx="14" fill="#E7609F" opacity="0.15"/>
      <rect x="72" y="44" width="80" height="14" rx="5" fill="#E7609F" opacity="0.6"/>
      {/* Grid layout */}
      <rect x="70" y="82" width="80" height="70" rx="8" fill="#F5F0FF"/>
      <rect x="160" y="82" width="80" height="30" rx="6" fill="#EEF2FB"/>
      <rect x="160" y="118" width="80" height="34" rx="6" fill="#FFF0F7"/>
      <rect x="250" y="82" width="80" height="70" rx="8" fill="#F0FBF5"/>
      {/* Megaphone */}
      <path d="M85 100 L95 110 L95 130 L85 140 Z" fill="#E7609F" opacity="0.7"/>
      <path d="M95 113 L130 95 L130 145 L95 127 Z" fill="#E7609F" opacity="0.5"/>
      <rect x="80" y="134" width="16" height="22" rx="4" fill="#94579E" opacity="0.6"/>
      {/* Sound waves */}
      <path d="M133 108 Q142 113 133 118" stroke="#E7609F" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M138 103 Q151 113 138 123" stroke="#E7609F" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Text lines in panels */}
      <rect x="166" y="90" width="62" height="5" rx="2" fill="#4C76BA" opacity="0.4"/>
      <rect x="166" y="100" width="50" height="4" rx="2" fill="#9E9E9E" opacity="0.4"/>
      <rect x="166" y="127" width="62" height="5" rx="2" fill="#E7609F" opacity="0.4"/>
      <rect x="166" y="137" width="46" height="4" rx="2" fill="#9E9E9E" opacity="0.4"/>
      {/* Right panel image placeholder */}
      <circle cx="290" cy="110" r="18" fill="#D4AED1" opacity="0.5"/>
      <rect x="258" y="132" width="64" height="5" rx="2" fill="#94579E" opacity="0.4"/>
      <rect x="262" y="142" width="56" height="4" rx="2" fill="#9E9E9E" opacity="0.4"/>
    </svg>
  ),

  'board-game': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#FFF8E1"/>
      {/* Board */}
      <rect x="60" y="40" width="280" height="145" rx="12" fill="#FFECB3"/>
      <rect x="72" y="52" width="256" height="121" rx="8" fill="#FFD54F" opacity="0.5"/>
      {/* Board grid lines */}
      <line x1="136" y1="52" x2="136" y2="173" stroke="#FFB300" strokeWidth="1.5" opacity="0.6"/>
      <line x1="200" y1="52" x2="200" y2="173" stroke="#FFB300" strokeWidth="1.5" opacity="0.6"/>
      <line x1="264" y1="52" x2="264" y2="173" stroke="#FFB300" strokeWidth="1.5" opacity="0.6"/>
      <line x1="72" y1="112" x2="328" y2="112" stroke="#FFB300" strokeWidth="1.5" opacity="0.6"/>
      {/* Playing pieces */}
      <circle cx="104" cy="82" r="16" fill="#E7609F" opacity="0.9"/>
      <circle cx="104" cy="82" r="8" fill="#C2185B"/>
      <circle cx="168" cy="142" r="16" fill="#4C76BA" opacity="0.9"/>
      <circle cx="168" cy="142" r="8" fill="#1565C0"/>
      <circle cx="232" cy="82" r="16" fill="#94579E" opacity="0.9"/>
      <circle cx="232" cy="82" r="8" fill="#6A1B9A"/>
      <circle cx="296" cy="142" r="16" fill="#4CAF50" opacity="0.9"/>
      <circle cx="296" cy="142" r="8" fill="#2E7D32"/>
      {/* Cards */}
      <rect x="100" y="175" width="40" height="28" rx="5" fill="white" stroke="#FFB300" strokeWidth="1.5" transform="rotate(-8 100 175)"/>
      <rect x="155" y="178" width="40" height="28" rx="5" fill="white" stroke="#E7609F" strokeWidth="1.5"/>
      <rect x="210" y="175" width="40" height="28" rx="5" fill="white" stroke="#4C76BA" strokeWidth="1.5" transform="rotate(6 210 175)"/>
    </svg>
  ),

  'innovation': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#F3F0FF"/>
      {/* Background glow */}
      <circle cx="200" cy="100" r="100" fill="#94579E" opacity="0.06"/>
      {/* Lightbulb */}
      <circle cx="200" cy="90" r="48" fill="#FFE082" opacity="0.85"/>
      <circle cx="200" cy="90" r="38" fill="#FFD54F" opacity="0.9"/>
      {/* Filament */}
      <path d="M188 90 Q194 80 200 90 Q206 100 212 90" stroke="#FF8F00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Bulb base */}
      <rect x="188" y="133" width="24" height="8" rx="3" fill="#90A4AE"/>
      <rect x="190" y="141" width="20" height="6" rx="3" fill="#78909C"/>
      <rect x="188" y="147" width="24" height="5" rx="2.5" fill="#607D8B"/>
      {/* Rays */}
      <line x1="200" y1="30" x2="200" y2="22" stroke="#FFB300" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="246" y1="44" x2="252" y2="38" stroke="#FFB300" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="154" y1="44" x2="148" y2="38" stroke="#FFB300" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="260" y1="90" x2="268" y2="90" stroke="#FFB300" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <line x1="140" y1="90" x2="132" y2="90" stroke="#FFB300" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      {/* Prototype sketch lines */}
      <rect x="278" y="55" width="68" height="50" rx="6" fill="white" opacity="0.8" stroke="#D4AED1" strokeWidth="1"/>
      <line x1="285" y1="70" x2="338" y2="70" stroke="#94579E" strokeWidth="1.5" opacity="0.5"/>
      <line x1="285" y1="78" x2="328" y2="78" stroke="#94579E" strokeWidth="1.5" opacity="0.4"/>
      <line x1="285" y1="86" x2="334" y2="86" stroke="#94579E" strokeWidth="1.5" opacity="0.35"/>
      <circle cx="295" cy="62" r="5" fill="#E7609F" opacity="0.5"/>
      {/* Star */}
      <path d="M60 60 L63 70 L73 70 L65 76 L68 86 L60 80 L52 86 L55 76 L47 70 L57 70 Z" fill="#E7609F" opacity="0.5"/>
    </svg>
  ),

  'home-iot': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E3F2FD"/>
      <rect y="168" width="400" height="57" fill="#B2DFDB" opacity="0.4"/>
      {/* House */}
      <polygon points="200,28 98,118 302,118" fill="#4C76BA" opacity="0.8"/>
      <rect x="118" y="118" width="164" height="82" rx="4" fill="#5A84C8"/>
      {/* Door */}
      <rect x="178" y="148" width="44" height="52" rx="5" fill="#1B2C49"/>
      <circle cx="215" cy="174" r="3.5" fill="#E7609F"/>
      {/* Windows with glow */}
      <rect x="132" y="130" width="40" height="32" rx="5" fill="#FFF9C4" opacity="0.95"/>
      <rect x="228" y="130" width="40" height="32" rx="5" fill="#FFF9C4" opacity="0.95"/>
      {/* IoT icons on windows */}
      <text x="142" y="150" fontSize="14" fontFamily="sans-serif">💡</text>
      <text x="238" y="150" fontSize="14" fontFamily="sans-serif">🌡️</text>
      {/* WiFi cloud */}
      <circle cx="200" cy="185" r="15" fill="#E7609F" opacity="0.2"/>
      <path d="M190 185 Q200 178 210 185" stroke="#E7609F" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8"/>
      <path d="M185 179 Q200 170 215 179" stroke="#E7609F" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <circle cx="200" cy="189" r="3" fill="#E7609F"/>
      {/* Connection lines to devices */}
      <line x1="200" y1="168" x2="152" y2="146" stroke="#E7609F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
      <line x1="200" y1="168" x2="248" y2="146" stroke="#E7609F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
    </svg>
  ),

  'iot-connectivity': () => (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="#E0F7FA"/>
      {/* Center hub */}
      <circle cx="200" cy="112" r="30" fill="#00ACC1" opacity="0.2"/>
      <circle cx="200" cy="112" r="20" fill="#00ACC1" opacity="0.35"/>
      <circle cx="200" cy="112" r="10" fill="#00ACC1" opacity="0.9"/>
      <circle cx="200" cy="112" r="4" fill="white"/>
      {/* Device nodes */}
      {[
        [200, 42, '#E7609F', '📱'],
        [310, 112, '#4C76BA', '💻'],
        [260, 185, '#94579E', '🏠'],
        [140, 185, '#4CAF50', '🌡️'],
        [90, 112, '#FF9800', '📷'],
      ].map(([cx, cy, color, emoji], i) => (
        <g key={i}>
          <line x1={200} y1={112} x2={cx as number} y2={cy as number} stroke={color as string} strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5"/>
          <circle cx={cx as number} cy={cy as number} r="22" fill={color as string} opacity="0.15"/>
          <circle cx={cx as number} cy={cy as number} r="18" fill="white" opacity="0.9"/>
          <text x={(cx as number) - 10} y={(cy as number) + 6} fontSize="16" fontFamily="sans-serif">{emoji as string}</text>
        </g>
      ))}
      {/* Pulse rings */}
      <circle cx="200" cy="112" r="40" stroke="#00ACC1" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="6 4"/>
      <circle cx="200" cy="112" r="55" stroke="#00ACC1" strokeWidth="0.8" fill="none" opacity="0.2" strokeDasharray="8 5"/>
    </svg>
  ),
};

// ─── Badge component ───────────────────────────────────────────────────────────

function TechBadge({ badge }: { badge: TechBadge }) {
  return (
    <span
      className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/95 backdrop-blur-sm shadow-sm text-[10px] font-bold whitespace-nowrap"
      style={{ color: badge.color }}
    >
      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: badge.color }} />
      {badge.name}
    </span>
  );
}

// ─── Category chip ─────────────────────────────────────────────────────────────

function CategoryChip({ category, small = false }: { category: Category; small?: boolean }) {
  const c = CATEGORY_COLORS[category];
  return (
    <span
      className={cn('rounded-full font-bold leading-none whitespace-nowrap', small ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-[11px]')}
      style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }}
    >
      {category}
    </span>
  );
}

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }: { project: TechProject; onClick: () => void }) {
  const Illustration = ILLUSTRATIONS[project.illustration] ?? ILLUSTRATIONS['smart-home-basic'];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={onClick}
      className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden cursor-pointer
                 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.14)] hover:border-zinc-200 transition-all duration-200 flex flex-col"
    >
      {/* Illustration + badges */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Illustration />
        {/* Technology badges overlaid — top-right */}
        <div className="absolute top-2.5 right-2.5 flex flex-wrap gap-1.5 justify-end max-w-[70%]">
          {project.badges.map((b) => <TechBadge key={b.name} badge={b} />)}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Year badge */}
        <span className="text-[11px] font-black uppercase tracking-widest text-[#E7609F] bg-[#FFF0F7] border border-[#F6B9D4] px-2.5 py-1 rounded-full w-fit">
          {project.year}
        </span>

        {/* Theme name */}
        <h3 className="text-[15px] font-black text-[#1B2C49] leading-snug group-hover:text-[#94579E] transition-colors">
          {project.tema}
        </h3>

        {/* Produção */}
        <p className="text-[13px] text-[#1B2C49]/60 leading-snug">
          {project.prototipo}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-50">
          {project.categories.map((c) => <CategoryChip key={c} category={c} small />)}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-[12px] font-black text-[#E7609F] group-hover:gap-2.5 transition-all">
          <span>Ver detalhes</span>
          <ArrowRight size={13} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Project modal ─────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: TechProject | null; onClose: () => void }) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, key: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.left = '-999999px';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
      setCopiedStates((p) => ({ ...p, [key]: true }));
      setTimeout(() => setCopiedStates((p) => ({ ...p, [key]: false })), 2000);
    } catch (_) { /* noop */ } finally { el.remove(); }
  };

  const fullContent = project
    ? `ANO/SÉRIE\n${project.year}\n\nTEMA\n${project.tema}\n\nPRODUÇÃO\n${project.prototipo}\n\nCONTEXTO\n${project.contexto}\n\nTECNOLOGIAS\n${project.badges.map((b) => b.name).join(', ')}\n\nCATEGORIAS\n${project.categories.join(', ')}`
    : '';

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1B2C49]/50 backdrop-blur-sm z-[200]"
          />

          {/* Centered modal */}
          <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="pointer-events-auto w-full max-w-[560px] bg-white rounded-[24px] shadow-[0_32px_64px_-16px_rgba(27,44,73,0.28)] overflow-hidden"
            >
              {/* Illustration — compact fixed height, no scroll needed */}
              <div className="relative w-full h-28 sm:h-36 overflow-hidden">
                {(() => { const I = ILLUSTRATIONS[project.illustration] ?? ILLUSTRATIONS['smart-home-basic']; return <I />; })()}
                <div className="absolute top-2.5 right-2.5 flex gap-1.5 flex-wrap justify-end max-w-[65%]">
                  {project.badges.map((b) => <TechBadge key={b.name} badge={b} />)}
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-2.5 left-2.5 p-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-zinc-500 hover:text-[#1B2C49] transition-colors cursor-pointer shadow-sm border border-white/60"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Header */}
              <div className="px-5 pt-4 pb-3 border-b border-zinc-100 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-[#E7609F]">
                    {project.year} · {project.level === 'ef2' ? 'Ensino Fundamental II' : 'Ensino Médio'}
                  </span>
                  <h2 className="text-[19px] font-black text-[#1B2C49] mt-1 leading-snug">{project.tema}</h2>
                </div>
                {/* Copy all button */}
                <button
                  onClick={() => handleCopy(fullContent, 'full')}
                  className="shrink-0 flex items-center gap-1.5 p-2 rounded-xl border cursor-pointer transition-all"
                  style={
                    copiedStates['full']
                      ? { backgroundColor: '#F5F0FF', color: '#94579E', borderColor: '#D4AED1' }
                      : { backgroundColor: '#FAFAFA', color: '#9E9EA8', borderColor: '#E4E4E7' }
                  }
                  title="Copiar tudo"
                >
                  <AnimatePresence mode="wait">
                    {copiedStates['full'] ? (
                      <motion.span key="copied" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.12 }} className="flex items-center gap-1 text-[11px] font-bold whitespace-nowrap" style={{ color: '#94579E' }}>
                        <CheckCheck size={13} />
                        Copiado!
                      </motion.span>
                    ) : (
                      <motion.span key="copy" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.12 }}>
                        <Copy size={14} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">

                {/* Produção */}
                <div className="group/sec relative">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-[10px] font-black uppercase tracking-[1.5px] text-zinc-400">Produção</p>
                    <button
                      onClick={() => handleCopy(`PRODUÇÃO\n${project.prototipo}`, 'prototipo')}
                      className="opacity-0 group-hover/sec:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-zinc-100 cursor-pointer shrink-0"
                    >
                      {copiedStates['prototipo'] ? <CheckCheck size={13} className="text-[#94579E]" /> : <Copy size={13} className="text-zinc-400" />}
                    </button>
                  </div>
                  <p className="text-[15px] font-bold text-[#1B2C49] leading-snug">{project.prototipo}</p>
                </div>

                {/* Contexto */}
                {project.contexto && (
                  <div className="group/sec2 relative">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-[10px] font-black uppercase tracking-[1.5px] text-zinc-400">Contexto</p>
                      <button
                        onClick={() => handleCopy(`CONTEXTO\n${project.contexto}`, 'contexto')}
                        className="opacity-0 group-hover/sec2:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-zinc-100 cursor-pointer shrink-0"
                      >
                        {copiedStates['contexto'] ? <CheckCheck size={13} className="text-[#94579E]" /> : <Copy size={13} className="text-zinc-400" />}
                      </button>
                    </div>
                    <p className="text-[13px] text-[#1B2C49]/75 leading-relaxed">{project.contexto}</p>
                  </div>
                )}

                {/* Tecnologias */}
                <div className="group/sec3 relative">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-[10px] font-black uppercase tracking-[1.5px] text-zinc-400">Tecnologias utilizadas</p>
                    <button
                      onClick={() => handleCopy(`TECNOLOGIAS\n${project.badges.map((b) => b.name).join(', ')}`, 'techs')}
                      className="opacity-0 group-hover/sec3:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-zinc-100 cursor-pointer shrink-0"
                    >
                      {copiedStates['techs'] ? <CheckCheck size={13} className="text-[#94579E]" /> : <Copy size={13} className="text-zinc-400" />}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((b) => (
                      <span key={b.name} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-100 text-[13px] font-bold" style={{ color: b.color }}>
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                        {b.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Categorias */}
                <div className="pt-1 border-t border-zinc-50">
                  <p className="text-[10px] font-black uppercase tracking-[1.5px] text-zinc-400 mb-2">Categorias</p>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((c) => <CategoryChip key={c} category={c} />)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Timeline ──────────────────────────────────────────────────────────────────

const TIMELINE_STEPS = [
  { year: '6º ano',   level: 'ef2', label: 'Fund. II' },
  { year: '7º ano',   level: 'ef2', label: 'Fund. II' },
  { year: '8º ano',   level: 'ef2', label: 'Fund. II' },
  { year: '9º ano',   level: 'ef2', label: 'Fund. II' },
  { year: '1ª série', level: 'em',  label: 'Ens. Médio' },
  { year: '2ª série', level: 'em',  label: 'Ens. Médio' },
];

function TrajectoryView({ onProjectClick }: { onProjectClick: (p: TechProject) => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepProjects = TECH_PROJECTS.filter((p) => p.year === TIMELINE_STEPS[activeStep].year);

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center min-w-max">
          {TIMELINE_STEPS.map((step, i) => (
            <React.Fragment key={step.year}>
              <button
                onClick={() => setActiveStep(i)}
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all cursor-pointer',
                  activeStep === i
                    ? 'bg-[#E7609F] text-white shadow-[0_6px_20px_-4px_rgba(231,96,159,0.35)]'
                    : 'hover:bg-white text-[#1B2C49]/60 hover:text-[#1B2C49]'
                )}
              >
                <span className="text-[13px] font-black">{step.year}</span>
                <span className={cn('text-[10px] font-semibold uppercase tracking-wider', activeStep === i ? 'text-white/70' : 'text-[#1B2C49]/40')}>{step.label}</span>
              </button>
              {i < TIMELINE_STEPS.length - 1 && (
                <div className={cn('w-6 h-px mx-0.5', i < activeStep ? 'bg-[#E7609F]/50' : 'bg-zinc-200')} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-3 h-1 bg-zinc-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#E7609F] to-[#94579E] rounded-full"
            animate={{ width: `${((activeStep + 1) / TIMELINE_STEPS.length) * 100}%` }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-[11px] text-[#1B2C49]/40 font-semibold mt-2">
          Etapa {activeStep + 1} de {TIMELINE_STEPS.length} · Evolução tecnológica da jornada
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {stepProjects.map((p) => <ProjectCard key={p.id} project={p} onClick={() => onProjectClick(p)} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────

export function TechMatrix() {
  const [activeYear,  setActiveYear]  = useState<string>('Todos');
  const [activeLevel, setActiveLevel] = useState<'ef2' | 'em'>('ef2');
  const [trajectoryMode, setTrajectoryMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TechProject | null>(null);

  const handleYearSelect = (year: string, level: 'ef2' | 'em') => {
    setActiveYear(year);
    setActiveLevel(level);
    if (year === 'Todos') {
      setTrajectoryMode(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeYear === 'Todos') return [];
    return TECH_PROJECTS.filter((p) => p.level === activeLevel && p.year === activeYear);
  }, [activeLevel, activeYear]);

  const showEmptyState = activeYear === 'Todos' && !trajectoryMode;

  return (
    <div className="min-h-screen bg-[#EAE5F9] relative selection:bg-[#E7609F] selection:text-white font-sans">
      <main className="relative z-10 w-full p-4 md:p-8 lg:p-16 scroll-smooth">
        <div className="mx-auto max-w-[1300px] flex flex-col lg:flex-row gap-6 md:gap-8 items-start">

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
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
                      key={`ef2-${year}`}
                      onClick={() => handleYearSelect(year, 'ef2')}
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all text-left flex items-center justify-between group cursor-pointer',
                        activeLevel === 'ef2' && activeYear === year
                          ? 'bg-[#4C76BA] text-white shadow-lg shadow-[#4C76BA]/20'
                          : 'text-[#1B2C49]/60 hover:bg-zinc-50 hover:text-[#4C76BA]'
                      )}
                    >
                      {year}
                      {activeLevel === 'ef2' && activeYear === year && (
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
                      key={`em-${year}`}
                      onClick={() => handleYearSelect(year, 'em')}
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all text-left flex items-center justify-between group cursor-pointer',
                        activeLevel === 'em' && activeYear === year
                          ? 'bg-[#4C76BA] text-white shadow-lg shadow-[#4C76BA]/20'
                          : 'text-[#1B2C49]/60 hover:bg-zinc-50 hover:text-[#4C76BA]'
                      )}
                    >
                      {year}
                      {activeLevel === 'em' && activeYear === year && (
                        <Check className="size-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── Main content ──────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 w-full">

            {/* Hero card */}
            <div className="mb-8 bg-white rounded-[24px] lg:rounded-[32px] border border-white p-6 lg:p-10 shadow-[0px_20px_40px_-12px_rgba(27,44,73,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full lg:w-[340px] h-full bg-linear-to-bl from-[#E7609F]/5 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4C76BA]/5 mb-5">
                  <div className="size-2 rounded-full bg-[#4C76BA]" />
                  <span className="text-[10px] font-black uppercase tracking-[3px] text-[#1B2C49]">NAVE À VELA • TECNOLOGIAS</span>
                </div>
                <h1 className="text-[24px] md:text-[32px] font-black text-[#1B2C49] tracking-tight leading-tight mb-5">
                  Matriz de Tecnologias
                </h1>
                <AnimatePresence mode="wait">
                  <motion.div key={activeYear === 'Todos' ? 'todos' : activeLevel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="space-y-3 max-w-[600px]">
                    {(activeYear === 'Todos' ? HERO_TEXTS.ef2 : HERO_TEXTS[activeLevel]).map((para, i) => (
                      <p key={i} className="text-[16px] text-[#71717B] font-light leading-relaxed">{para}</p>
                    ))}
                  </motion.div>
                </AnimatePresence>
                {activeYear !== 'Todos' && (
                  <div className="mt-6">
                    <button
                      onClick={() => setTrajectoryMode((v) => !v)}
                      className={cn('flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] font-black transition-all cursor-pointer border',
                        trajectoryMode
                          ? 'bg-[#94579E] text-white border-[#94579E] shadow-[0_6px_20px_-4px_rgba(148,87,158,0.35)]'
                          : 'bg-white text-[#94579E] border-[#D4AED1] hover:bg-[#F5F0FF]'
                      )}
                    >
                      {trajectoryMode ? <X size={14} strokeWidth={2.5} /> : <GitBranch size={14} strokeWidth={2.5} />}
                      {trajectoryMode ? 'Fechar trajetória' : 'Ver trajetória completa'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile year selectors */}
            <div className="lg:hidden mb-5 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[2px] text-[#1B2C49]/40 ml-1">Ano</span>
                <div className="flex gap-2 overflow-x-auto pb-1 snap-x">
                  {YEARS_EF2.map((year) => (
                    <button key={`m-ef2-${year}`} onClick={() => handleYearSelect(year, 'ef2')}
                      className={cn('snap-start shrink-0 px-4 py-2 rounded-full text-[13px] font-black transition-all cursor-pointer whitespace-nowrap',
                        activeLevel === 'ef2' && activeYear === year
                          ? 'bg-[#E7609F] text-white shadow-[0_4px_14px_-3px_rgba(231,96,159,0.35)]'
                          : 'bg-white text-[#1B2C49]/60 border border-zinc-200'
                      )}>
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-[2px] text-[#1B2C49]/40 ml-1">Série</span>
                <div className="flex gap-2 overflow-x-auto pb-1 snap-x">
                  {YEARS_EM.map((year) => (
                    <button key={`m-em-${year}`} onClick={() => handleYearSelect(year, 'em')}
                      className={cn('snap-start shrink-0 px-4 py-2 rounded-full text-[13px] font-black transition-all cursor-pointer whitespace-nowrap',
                        activeLevel === 'em' && activeYear === year
                          ? 'bg-[#E7609F] text-white shadow-[0_4px_14px_-3px_rgba(231,96,159,0.35)]'
                          : 'bg-white text-[#1B2C49]/60 border border-zinc-200'
                      )}>
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {showEmptyState ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 lg:mt-24 flex flex-col items-center text-center space-y-6"
              >
                <div className="size-20 rounded-[24px] bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                  <Calendar className="size-10 text-[#4C76BA]/40" />
                </div>
                <p className="text-[18px] lg:text-[20px] font-medium text-zinc-500 max-w-[360px]">
                  Selecione um ano no menu lateral para visualizar os conteúdos
                </p>
              </motion.div>
            ) : trajectoryMode ? (
              <TrajectoryView onProjectClick={setSelectedProject} />
            ) : (
              <AnimatePresence mode="popLayout">
                <motion.div key={`${activeLevel}-${activeYear}`} layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredProjects.map((p) => <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />)}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
