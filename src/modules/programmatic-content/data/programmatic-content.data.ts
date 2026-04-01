export type ProgrammaticAxisId = "pensamento" | "mundo" | "cultura" | "design";
export type ProgrammaticStage = "ef2" | "em";

export interface ProgrammaticProject {
  id: string;
  stage: ProgrammaticStage;
  year: string;
  axes: ProgrammaticAxisId[];
  tema: string;
  contexto: string;
  prototipo: string;
  recursos: string;
  competenciasBCCI: string;
}

export const YEARS_EF2 = ["Todos", "6º Ano", "7º Ano", "8º Ano", "9º Ano"];
export const YEARS_EM = ["Todos", "1ª Série", "2ª Série"];

export const AXES = [
  { id: "pensamento", label: "Pensamento Computacional", color: "#4C76BA" },
  { id: "mundo", label: "Mundo Digital e IA", color: "#94579E" },
  { id: "cultura", label: "Cultura Digital e Midiática", color: "#E7609F" },
  { id: "design", label: "Design e Fabricação Digital", color: "#3D1D3D" },
] as const;

export const PROGRAMMATIC_DATA: ProgrammaticProject[] = [
  {
    id: "ef2-6-proj1",
    stage: "ef2",
    year: "6º Ano",
    axes: ["cultura", "design"],
    tema: "Produção de energia e design sustentável",
    contexto:
      "Através da construção de um espaço construído alimentado por aerogerador, os estudantes exploram a produção de energia elétrica, elementos mecânicos e técnicas de modelagem.",
    prototipo: "Espaço alimentado por aerogerador",
    recursos: "motor, hélice e LED",
    competenciasBCCI:
      "Explorar o funcionamento das tecnologias digitais e compreender o papel do design e da fabricação no cotidiano. Utilizar ferramentas manuais e digital básicas. Selecionar e utilizar tecnologias computacionais de forma a se expressar.",
  },
  {
    id: "ef2-6-proj2",
    stage: "ef2",
    year: "6º Ano",
    axes: ["pensamento", "mundo"],
    tema: "Sustentabilidade e inteligência artificial aplicada",
    contexto:
      "Através da construção de um jogo que utiliza reconhecimento de imagens treinadas em Inteligência Artificial, os estudantes exploram sustentabilidade, reciclagem e pensamento computacional.",
    prototipo: "Jogo seletor de Lixo com IA",
    recursos: "ML4Kids e Scratch",
    competenciasBCCI:
      "Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais. Compreender fundamentos da Inteligência Artificial. Entender e aplicar tecnologias com Inteligência Artificial. Compreender o raciocínio lógico e o funcionamento básico dos algoritmos. Empregar estratégias da computação para resolver problemas com IA.",
  },
  {
    id: "ef2-6-proj3",
    stage: "ef2",
    year: "6º Ano",
    axes: ["cultura"],
    tema: "Produção midiática com responsabilidade",
    contexto:
      "Através da produção de um podcast educacional, os estudantes exploram comportamentos digitais e habilidades essenciais.",
    prototipo: "Produção audiovisual",
    recursos: "Google Vids",
    competenciasBCCI:
      "Utilizar tecnologia de forma segura, ética e responsável. Selecionar tecnologias para expressão. Utilizar tecnologia de forma saudável.",
  },
  {
    id: "ef2-6-proj4",
    stage: "ef2",
    year: "6º Ano",
    axes: ["pensamento", "design"],
    tema: "Cidades inteligentes e consumo consciente",
    contexto:
      "Através do desenvolvimento de automatização residencial, os estudantes exploram a evolução da indústria e seus impactos sociais.",
    prototipo: "Protótipo físico automatizado",
    recursos: "micro:bit",
    competenciasBCCI:
      "Compreender algoritmos e sistemas automatizados. Aplicar estratégias de computação. Explorar tecnologias digitais e fabricação.",
  },
  {
    id: "ef2-7-proj1",
    stage: "ef2",
    year: "7º Ano",
    axes: ["mundo"],
    tema: "Animação interativa",
    contexto:
      "Criação de animação sobre segurança digital investigando riscos da internet.",
    prototipo: "Animação sobre segurança digital",
    recursos: "Pictoblox",
    competenciasBCCI:
      "Entender transmissão de dados e segurança cibernética. Aplicar IA de forma simples.",
  },
  {
    id: "ef2-7-proj2",
    stage: "ef2",
    year: "7º Ano",
    axes: ["pensamento"],
    tema: "Programação de jogos digitais",
    contexto:
      "Criação de jogo sobre lixo eletrônico explorando programação e responsabilidade ambiental.",
    prototipo: "Jogo de lixo eletrônico",
    recursos: "Scratch",
    competenciasBCCI:
      "Aplicar programação para resolução de problemas. Utilizar estratégias da computação.",
  },
  {
    id: "ef2-7-proj3",
    stage: "ef2",
    year: "7º Ano",
    axes: ["pensamento", "design"],
    tema: "Soluções automatizadas para o cotidiano",
    contexto:
      "Criação de estação climática para refletir sobre mudanças climáticas.",
    prototipo: "Climatização sustentável automatizada",
    recursos: "micro:bit",
    competenciasBCCI:
      "Aplicar programação e design digital. Resolver problemas com IA.",
  },
  {
    id: "ef2-7-proj4",
    stage: "ef2",
    year: "7º Ano",
    axes: ["cultura"],
    tema: "Cultura digital consciente",
    contexto:
      "Criação de memes para refletir sobre responsabilidade digital.",
    prototipo: "Criação de um site",
    recursos: "Google Sites",
    competenciasBCCI:
      "Aplicar ética digital, checagem de informação e expressão digital.",
  },
  {
    id: "ef2-8-proj1",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento", "mundo", "design"],
    tema: "Soluções inteligentes para trânsito",
    contexto:
      "Construção de semáforo inteligente para estudar mobilidade urbana.",
    prototipo: "Semáforo inteligente",
    recursos: "micro:bit v2 e CreateAI",
    competenciasBCCI:
      "Criar projetos com programação e IA. Propor melhorias com impacto.",
  },
  {
    id: "ef2-8-proj2",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento", "design"],
    tema: "Mobilidade urbana e território",
    contexto:
      "Construção de estacionamento inteligente analisando impacto social.",
    prototipo: "Estacionamento inteligente",
    recursos: "micro:bit v2 e MakeCode",
    competenciasBCCI:
      "Criar projetos com programação. Avaliar impactos.",
  },
  {
    id: "ef2-8-proj3",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento", "mundo"],
    tema: "Jogos e Internet",
    contexto:
      "Criação de jogo explorando sistemas da internet e múltiplos usuários.",
    prototipo: "App de comunicação",
    recursos: "Scratch",
    competenciasBCCI:
      "Entender internet e sistemas distribuídos. Criar projetos.",
  },
  {
    id: "ef2-8-proj4",
    stage: "ef2",
    year: "8º Ano",
    axes: ["mundo", "cultura"],
    tema: "Ética digital e cidadania",
    contexto: "Produção de vídeo sobre impacto da IA na sociedade.",
    prototipo: "Criação de vídeo",
    recursos: "Google Vids",
    competenciasBCCI:
      "Uso ético da tecnologia. Análise crítica da sociedade digital.",
  },
  {
    id: "ef2-9-proj1",
    stage: "ef2",
    year: "9º Ano",
    axes: ["mundo", "cultura"],
    tema: "Segurança digital e criptografia",
    contexto: "",
    prototipo: "Criação de um site",
    recursos: "Canva",
    competenciasBCCI: "Analisar impactos da IA. Aplicar ética digital.",
  },
  {
    id: "ef2-9-proj2",
    stage: "ef2",
    year: "9º Ano",
    axes: ["pensamento", "design"],
    tema: "Bem-estar digital",
    contexto: "",
    prototipo: "Criação de um app",
    recursos: "MIT App Inventor",
    competenciasBCCI: "Criar soluções computacionais. UX e impacto social.",
  },
  {
    id: "ef2-9-proj3",
    stage: "ef2",
    year: "9º Ano",
    axes: ["pensamento", "design"],
    tema: "IA e saúde preventiva",
    contexto: "",
    prototipo: "Projeto de alertas",
    recursos: "Arduino e Pictoblox",
    competenciasBCCI: "Resolver problemas com tecnologia. Aplicar IA.",
  },
  {
    id: "ef2-9-proj4",
    stage: "ef2",
    year: "9º Ano",
    axes: ["cultura"],
    tema: "Combate à desinformação",
    contexto: "",
    prototipo: "Objetos digitais",
    recursos: "Google Sites",
    competenciasBCCI: "Uso crítico da informação. Combate a fake news.",
  },
  {
    id: "em-1-proj1",
    stage: "em",
    year: "1ª Série",
    axes: ["pensamento", "design"],
    tema: "Monitoramento climático com tecnologias digitais",
    contexto:
      "Através da construção de uma estação climática, os alunos exploram o microclima local com tecnologia, coletando e analisando dados para compreender impactos ambientais e agir com base científica.",
    prototipo: "Criação de uma estação climática",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "Compreender as possibilidades e os limites da computação para resolver problemas. Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções em diversos níveis de abstração. Aplicar o ciclo de Design Thinking para criar soluções inovadoras e funcionais.",
  },
  {
    id: "em-1-proj2",
    stage: "em",
    year: "1ª Série",
    axes: ["pensamento", "design"],
    tema: "Tecnologias climáticas",
    contexto:
      "Ao aprofundar a situação-problema do microclima local, os estudantes desenvolvem a estação climática com Design Thinking, transformando dados em soluções para o bem-estar escolar.",
    prototipo:
      "Modificação do funcionamento do sistema por meio da programação",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "Compreender as possibilidades e os limites da computação para resolver problemas. Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas. Aplicar Design Thinking para criar soluções.",
  },
  {
    id: "em-1-proj3",
    stage: "em",
    year: "1ª Série",
    axes: ["mundo", "cultura"],
    tema: "Soluções para promoção da cidadania digital",
    contexto:
      "Por meio da construção de um aplicativo com apoio de Inteligência Artificial, os estudantes desenvolvem e publicam conteúdos em ambientes virtuais, avaliando criticamente sua confiabilidade e relevância.",
    prototipo: "Criação de app",
    recursos: "Canva Code AI",
    competenciasBCCI:
      "Elaborar e testar programas com IA. Desenvolver projetos com programação. Analisar criticamente informações e narrativas digitais.",
  },
  {
    id: "em-1-proj4",
    stage: "em",
    year: "1ª Série",
    axes: ["mundo", "cultura"],
    tema: "Design Thinking aplicado a produtos",
    contexto:
      "Ao aprofundar a situação-problema e observar o uso do aplicativo, os estudantes aplicam o Design Thinking para refinar a proposta e desenvolver uma campanha digital.",
    prototipo: "Criação de campanha",
    recursos: "Canva Sites",
    competenciasBCCI:
      "Elaborar e testar programas com IA. Desenvolver projetos com programação. Analisar criticamente informações digitais.",
  },
  {
    id: "em-2-proj1",
    stage: "em",
    year: "2ª Série",
    axes: ["cultura", "design"],
    tema: "Empreendedorismo para criação de startups",
    contexto:
      "Através da estruturação de uma Startup, os alunos exploram temas da cultura digital com proposta de intervenção social.",
    prototipo: "Criação de jogos educativos",
    recursos: "Canva e materiais não estruturados",
    competenciasBCCI:
      "Produzir e comunicar conteúdos digitais com ética. Aplicar design de produto em produções autorais.",
  },
  {
    id: "em-2-proj2",
    stage: "em",
    year: "2ª Série",
    axes: ["cultura", "design"],
    tema: "Design Thinking aplicado a startups",
    contexto:
      "Ao aprofundar a situação-problema, os estudantes desenvolvem a estrutura física dos jogos e validam a proposta.",
    prototipo: "Criação de jogos educativos",
    recursos: "Canva e materiais não estruturados",
    competenciasBCCI:
      "Produzir conteúdos com propósito social. Aplicar design de produto.",
  },
  {
    id: "em-2-proj3",
    stage: "em",
    year: "2ª Série",
    axes: ["pensamento", "mundo"],
    tema: "Automação residencial e eficiência energética",
    contexto:
      "Construção de uma casa IoT explorando automação residencial, dados e impactos sociais.",
    prototipo: "Criação de uma casa IoT",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "Integrar pensamento computacional ao uso de dados. Utilizar tecnologias emergentes e IA.",
  },
  {
    id: "em-2-proj4",
    stage: "em",
    year: "2ª Série",
    axes: ["pensamento", "mundo"],
    tema: "Internet das Coisas e conectividade residencial",
    contexto:
      "Desenvolvimento de conectividade Wi-Fi e análise de necessidades do usuário em automação residencial.",
    prototipo: "Criação de uma casa IoT",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "Integrar computação e dados. Aplicar fundamentos da internet. Utilizar IA de forma ética.",
  },
];
