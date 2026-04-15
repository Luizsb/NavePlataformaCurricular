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
      "Por meio da construção de um espaço alimentado por aerogerador, os estudantes exploram a produção de energia elétrica, elementos mecânicos e técnicas de modelagem.",
    prototipo: "Espaço alimentado por aerogerador",
    recursos: "motor, hélice e LED",
    competenciasBCCI:
      "• Explorar o funcionamento das tecnologias digitais e compreender o papel do design e da fabricação no cotidiano.\n• Utilizar ferramentas manuais e digitais básicas.\n• Selecionar e utilizar tecnologias computacionais de forma a se expressar.",
  },
  {
    id: "ef2-6-proj2",
    stage: "ef2",
    year: "6º Ano",
    axes: ["pensamento", "mundo"],
    tema: "Sustentabilidade e Inteligência Artificial aplicada",
    contexto:
      "Por meio da construção de um jogo que utiliza reconhecimento de imagens treinadas em Inteligência Artificial, os estudantes exploram sustentabilidade, reciclagem e pensamento computacional.",
    prototipo: "Jogo seletor de lixo com IA",
    recursos: "ML4Kids e Scratch",
    competenciasBCCI:
      "• Compreender fundamentos da Inteligência Artificial.\n• Entender e aplicar tecnologias com Inteligência Artificial.\n• Compreender o raciocínio lógico e o funcionamento básico dos algoritmos e sistemas automatizados.\n• Empregar diferentes estratégias da computação (decomposição, generalização e reúso) para construir a solução de problemas, empregando a Inteligência Artificial em determinados contextos.",
  },
  {
    id: "ef2-6-proj3",
    stage: "ef2",
    year: "6º Ano",
    axes: ["cultura"],
    tema: "Produção midiática com responsabilidade",
    contexto:
      "Por meio da produção de um podcast educacional, os estudantes exploram os comportamentos digitais que impactam o aprendizado e o desenvolvimento de habilidades essenciais para a vida.",
    prototipo: "Produção audiovisual",
    recursos: "Google Vids",
    competenciasBCCI:
      "• Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\n• Selecionar e utilizar tecnologias computacionais de forma a se expressar.\n• Utilizar a tecnologia de forma saudável.",
  },
  {
    id: "ef2-6-proj4",
    stage: "ef2",
    year: "6º Ano",
    axes: ["pensamento", "design"],
    tema: "Cidades inteligentes e consumo consciente",
    contexto:
      "Por meio do desenvolvimento de automatização residencial, os estudantes exploram como a indústria evoluiu com a automatização e como este evento afeta a forma de vida da sociedade.",
    prototipo: "Protótipo físico automatizado",
    recursos: "micro:bit",
    competenciasBCCI:
      "• Compreender o raciocínio lógico e o funcionamento básico dos algoritmos e sistemas automatizados.\n• Empregar diferentes estratégias da computação (decomposição, generalização e reúso) para construir a solução de problemas, empregando a Inteligência Artificial em determinados contextos.\n• Explorar o funcionamento das tecnologias digitais e compreender o papel do design e da fabricação no cotidiano.\n• Utilizar ferramentas manuais e digitais básicas.",
  },
  {
    id: "ef2-7-proj1",
    stage: "ef2",
    year: "7º Ano",
    axes: ["mundo"],
    tema: "Animação interativa",
    contexto:
      "Por meio da criação de uma animação interativa sobre segurança digital, os estudantes são convidados a investigar problemas reais relacionados aos riscos da internet.",
    prototipo: "Animação sobre segurança digital",
    recursos: "Pictoblox",
    competenciasBCCI:
      "• Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética com atuação da Inteligência Artificial.\n• Entender a importância da segurança cibernética na prática.\n• Entender e aplicar a Inteligência Artificial de modo simples.",
  },
  {
    id: "ef2-7-proj2",
    stage: "ef2",
    year: "7º Ano",
    axes: ["pensamento"],
    tema: "Programação de jogos digitais",
    contexto:
      "Por meio da construção de um jogo sobre lixo eletrônico, os estudantes exploram programação, pensamento computacional e responsabilidade ambiental.",
    prototipo: "Jogo de lixo eletrônico",
    recursos: "Scratch",
    competenciasBCCI:
      "• Aplicar princípios da programação e suas características para resolução de problemas.\n• Empregar diferentes estratégias da computação para construir a solução de problemas com uso de Inteligência Artificial.\n• Empregar programação em diferentes projetos.\n• Empregar diferentes estratégias da computação.",
  },
  {
    id: "ef2-7-proj3",
    stage: "ef2",
    year: "7º Ano",
    axes: ["pensamento", "design"],
    tema: "Soluções automatizadas para o cotidiano",
    contexto:
      "Por meio da prototipação de uma estação climática, a proposta leva o estudante a refletir sobre as mudanças climáticas e as soluções simples que podem impactar a economia de recursos em ambientes residenciais e industriais.",
    prototipo: "Climatização sustentável automatizada",
    recursos: "micro:bit",
    competenciasBCCI:
      "• Aplicar princípios de design e modelagem digital para criar objetos.\n• Aplicar princípios da programação e suas características para resolução de problemas.\n• Empregar diferentes estratégias da computação para construir a solução de problemas com uso de Inteligência Artificial.\n• Empregar programação em diferentes projetos.\n• Empregar grafos em projetos educativos.\n• Empregar diferentes estratégias da computação.\n• Identificar alternativas durante o ciclo de criação.",
  },
  {
    id: "ef2-7-proj4",
    stage: "ef2",
    year: "7º Ano",
    axes: ["cultura"],
    tema: "Cultura digital consciente no combate a manipulações digitais",
    contexto:
      "Por meio da construção de memes, os estudantes refletem sobre o impacto das ações humanas e a responsabilidade de ações individuais ou em grupos nos ambientes digitais.",
    prototipo: "Criação de um site",
    recursos: "Google Sites",
    competenciasBCCI:
      "• Entender e aplicar Inteligência Artificial de forma concreta.\n• Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\n• Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas em diferentes contextos.\n• Relacionar e aplicar conteúdos sobre checagem e veracidade da informação.",
  },
  {
    id: "ef2-8-proj1",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento", "mundo", "design"],
    tema: "Soluções inteligentes para um trânsito eficiente",
    contexto:
      "Por meio da construção de um semáforo inteligente, os estudantes exploram engenharia de tráfego e mobilidade urbana.",
    prototipo: "Semáforo inteligente",
    recursos: "micro:bit v2 e CreateAI",
    competenciasBCCI:
      "• Criar um projeto utilizando a programação.\n• Entender e aplicar Inteligência Artificial de forma concreta.\n• Propor melhorias para projetos considerando impactos durante as decisões.",
  },
  {
    id: "ef2-8-proj2",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento"],
    tema: "Soluções de mobilidade urbana e organização do território",
    contexto:
      "Por meio da construção de um estacionamento inteligente, os estudantes exploram o impacto da alta demanda de carros na sociedade.",
    prototipo: "Estacionamento inteligente",
    recursos: "micro:bit v2 e MakeCode micro:bit ",
    competenciasBCCI:
      "• Criar um projeto utilizando a programação.",
  },
  {
    id: "ef2-8-proj3",
    stage: "ef2",
    year: "8º Ano",
    axes: ["pensamento", "mundo"],
    tema: "Jogos e Internet",
    contexto:
      "Por meio da criação de um jogo, os estudantes exploram como ambientes digitais recebem e processam múltiplas informações de diferentes usuários e como isso fundamenta os sistemas da internet.",
    prototipo: "Criação de um aplicativo de comunicação",
    recursos: "Scratch",
    competenciasBCCI:
      "• Entender os fundamentos de sistemas distribuídos e da internet.\n• Entender e aplicar Inteligência Artificial de forma concreta.\n• Aplicar os fundamentos da internet de forma prática.\n• Aplicar os conhecimentos de Inteligência Artificial de forma simples.\n• Representar soluções de problemas por meio de programas.\n• Entender sobre listas.\n• Criar um projeto utilizando a programação.",
  },
  {
    id: "ef2-8-proj4",
    stage: "ef2",
    year: "8º Ano",
    axes: ["mundo", "cultura"],
    tema: "Ética digital e participação cidadã",
    contexto: "Por meio da criação de um vídeo, os estudantes exploram a produção de conteúdos na internet e como as inteligências artificiais influenciam este cenário.",
    prototipo: "Criação de um vídeo",
    recursos: "Google Vids",
    competenciasBCCI:
      "• Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\n• Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas, analisando criticamente os diferentes impactos na sociedade.\n• Empregar a Inteligência Artificial de forma consciente.\n• Entender os fundamentos de sistemas distribuídos e da internet.\n• Aplicar os fundamentos da internet de forma prática.",
  },
  {
    id: "ef2-9-proj1",
    stage: "ef2",
    year: "9º Ano",
    axes: ["mundo", "cultura"],
    tema: "Segurança digital e criptografia aplicada",
    contexto: "Por meio da criação de um site, os estudantes exploram segurança digital e tráfego de rede em uma proposta de criar codificações secretas em páginas web.",
    prototipo: "Criação de um site",
    recursos: "Canva",
    competenciasBCCI:
      "• Analisar os impactos da Inteligência Artificial e da automação na sociedade contemporânea.\n• Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\n• Explorar o uso de ferramentas de Inteligência Artificial para combater fake news.",
  },
  {
    id: "ef2-9-proj2",
    stage: "ef2",
    year: "9º Ano",
    axes: ["pensamento", "design"],
    tema: "Alertas inteligentes e bem-estar digital",
    contexto: "Por meio da criação de um aplicativo, os estudantes desenvolvem habilidades necessárias para o combate a gatilhos digitais que afetam a saúde dos usuários e aprendem a relacionar o uso de celulares com bons hábitos.",
    prototipo: "Criação de um aplicativo",
    recursos: "MIT App Inventor",
    competenciasBCCI:
      "• Criar um projeto utilizando a programação.\n• Criar produtos para problemas reais que tenham impacto social.\n• Considerar a experiência do usuário no processo construtivo de solução.",
  },
  {
    id: "ef2-9-proj3",
    stage: "ef2",
    year: "9º Ano",
    axes: ["pensamento", "design"],
    tema: "Inteligência Artificial e saúde preventiva",
    contexto: "Por meio do desenvolvimento de uma ferramenta de automatização, os estudantes exploram as necessidades básicas humanas e como o desenvolvimento de tecnologias auxilia a estrutura moderna de sociedade.",
    prototipo: "Criação de um projeto de alertas",
    recursos: "Arduino e Pictoblox",
    competenciasBCCI:
      "• Construir e analisar soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual ou colaborativa, selecionando as estruturas de dados adequadas (registros, matrizes, listas e grafos).\n• Criar um projeto utilizando a programação.\n• Considerar a experiência do usuário no processo construtivo de solução.",
  },
  {
    id: "ef2-9-proj4",
    stage: "ef2",
    year: "9º Ano",
    axes: ["cultura"],
    tema: "Cidadania digital e combate à desinformação",
    contexto: "Por meio da criação de diferentes objetos digitais multiplataforma, os estudantes organizam um site com informações relevantes sobre fake news, em tom de alerta para a sociedade.",
    prototipo: "Criação de objetos digitais",
    recursos: "Google Sites",
    competenciasBCCI:
      "• Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável.\n• Compreender que o meio digital favorece produções éticas.\n• Selecionar e utilizar tecnologias de forma crítica.\n• Explorar o uso de ferramentas de Inteligência Artificial para combater fake news.",
  },
  {
    id: "em-1-proj1",
    stage: "em",
    year: "1ª Série",
    axes: ["pensamento", "design"],
    tema: "Monitoramento climático com tecnologias digitais",
    contexto:
      "Por meio da construção de uma estação climática, os estudantes exploram o microclima local com tecnologia, coletando e analisando dados para compreender impactos ambientais e agir com base científica.",
    prototipo: "Criação de uma estação climática",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "• Compreender as possibilidades e os limites da computação para resolver problemas.\n• Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções em diversos níveis de abstração.\n• Aplicar o ciclo de Design Thinking para criar soluções inovadoras e funcionais.",
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
      "• Compreender as possibilidades e os limites da computação para resolver problemas.\n• Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções em diversos níveis de abstração.\n• Aplicar o ciclo de Design Thinking para criar soluções inovadoras e funcionais.",
  },
  {
    id: "em-1-proj3",
    stage: "em",
    year: "1ª Série",
    axes: ["mundo", "cultura"],
    tema: "Arte em Bits e Bytes",
    contexto:
      "Por meio da arte digital, os estudantes exploram como funciona a linguagem da máquina ao interpretar imagens, partindo dos bits e bytes, passando por deepfakes e finalizando o protótipo em uma interação com IAs capazes de gerar novas padronizações em animações. ",
    prototipo: "Arte Digital",
    recursos: "Canva e Google Vids",
    competenciasBCCI:
      "• Elaborar e testar programas utilizando linguagens textuais, analisando os princípios básicos de Inteligência Artificial.\n• Desenvolver projetos para investigar desafios do mundo empregando a programação e simulação, podendo introduzir Inteligência Artificial.\n• Analisar criticamente informações e narrativas digitais, reconhecendo influências sociais e culturais.",
  },
  {
    id: "em-1-proj4",
    stage: "em",
    year: "1ª Série",
    axes: ["mundo", "cultura"],
    tema: "Design thinking em campanhas digitais",
    contexto:
      "Ao aprofundar a situação-problema da deepfake, os estudantes elaboram uma campanha digital de conscientização, explorando temas sensíveis com o público por meio da criação de um site e de objetos digitais interativos.",
    prototipo: "Criação de campanha",
    recursos: "Canva Code IA e Google Sites",
    competenciasBCCI:
      "• Elaborar e testar programas utilizando linguagens textuais, analisando os princípios básicos de Inteligência Artificial.\n• Desenvolver projetos para investigar desafios do mundo empregando a programação e simulação, podendo introduzir Inteligência Artificial.\n• Analisar criticamente informações e narrativas digitais, reconhecendo influências sociais e culturais.",
  },
  {
    id: "em-2-proj1",
    stage: "em",
    year: "2ª Série",
    axes: ["cultura", "design"],
    tema: "Jogos de tabuleiro e Game Design",
    contexto:
      "Por meio da criação de um MVP de jogo de tabuleiro, os estudantesexploram como a gamificação pode sensibilizar para a compreensão da relação humano–rede.",
    prototipo: "Criação de jogos educativos",
    recursos: "NotebookLM, Canva e Materiais não estruturados",
    competenciasBCCI:
      "• Produzir e comunicar conteúdos digitais com ética, autoria e propósito social.\n• Empregar o ciclo de design de produto em produções autorais.",
  },
  {
    id: "em-2-proj2",
    stage: "em",
    year: "2ª Série",
    axes: ["cultura", "design"],
    tema: "Design Thinking aplicado a startups",
    contexto:
      "Ao aprofundar a situação-problema da sociedade atual, os estudantes, em troca constante com o meio digital, desenvolvem o projeto de uma startup, estruturam fisicamente os jogos planejados e validam a aplicabilidade da ação.",
    prototipo: "Criação de jogos educativos",
    recursos: "Canva e materiais não estruturados",
    competenciasBCCI:
      "• Produzir e comunicar conteúdos digitais com ética, autoria e propósito social.\n• Empregar o ciclo de design de produto em produções autorais.",
  },
  {
    id: "em-2-proj3",
    stage: "em",
    year: "2ª Série",
    axes: ["pensamento", "mundo"],
    tema: "Automação residencial e eficiência energética",
    contexto:
      "Os estudantes iniciam a construção de uma casa IoT com ESP32, explorando componentes eletrônicos integrados em um sistema de automação residencial. Aplicam pensamento computacional e processos investigativos para compreender o funcionamento do sistema, o uso de dados e os impactos sociais, ambientais e éticos da automação no contexto doméstico.",
    prototipo: "Criação de uma casa IoT",
    recursos: "ESP32 e Arduino IDE",
    competenciasBCCI:
      "• Integrar o pensamento computacional ao uso de dados e à automação inteligente, incluindo contextos da Inteligência Artificial.\n• Empregar análise de dados e fundamentos da internet.\n• Utilizar tecnologias emergentes, dados e Inteligência Artificial para projetar produtos digitais funcionais e éticos.",
  },
  {
    id: "em-2-proj4",
    stage: "em",
    year: "2ª Série",
    axes: ["pensamento", "mundo"],
    tema: "Internet das Coisas e conectividade residencial",
    contexto:
      "Ao aprofundar a situação-problema, os estudantes analisam as necessidades do usuário, definem o que faz sentido automatizar e personalizar e implementam conectividade Wi‑Fi ao protótipo. Com isso, exploram fundamentos da internet, análise de dados e tecnologias emergentes para projetar uma casa IoT funcional, usável e eticamente responsável.",
    prototipo: "Criação de uma casa IoT",
    recursos: "ESP32, Arduino IDE e App Dabble",
    competenciasBCCI:
      "• Integrar o pensamento computacional ao uso de dados e à automação inteligente, incluindo contextos da Inteligência Artificial.\n• Empregar análise de dados e fundamentos da internet.\n• Utilizar tecnologias emergentes, dados e Inteligência Artificial para projetar produtos digitais funcionais e éticos.",
  },
];
