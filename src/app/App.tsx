import React, { useState } from "react";
import "../styles/theme.css";
import { Header } from "./components/Header";
import { CurriculumLibraryView } from "./components/CurriculumViews";
import { Toaster } from "sonner";
import { GlobalExportModal } from "./components/GlobalExportModal";

const CURRICULUM_DATA: Record<string, any> = {
  general: {
    title: "Nova Base Curricular para Cultura de Inovação (Nova BCCI)",
    hero: {
      tagline: "NAVE A VELA • CURRÍCULO",
      foco: "Desenvolver sujeitos criativos, críticos e prontos para transformar o mundo.",
      valor_central:
        "Autonomia intelectual e consciência ética através da inovação.",
      description_blocks: [
        "Nossa base Curricular foi desenhada para formar sujeitos criativos, críticos e prontos para transformar o mundo através da inovação.",
        "A proposta visa a autonomia intelectual, à consciência ética e à capacidade de imaginar e realizar com propósito, unindo pensamento crítico, técnica, imaginação e compromisso social.",
      ],
    },
    sections: [
      {
        title: "Foco Geral do Eixo Estruturante",
        type: "detailed",
        items: [
          {
            title: "Pensamento Computacional",
            description:
              "Desenvolve o raciocínio lógico, a aplicação de princípios de abstração e decomposição, e a integração de criatividade e colaboração em projetos maker.",
          },
          {
            title: "Mundo Digital e IA",
            description:
              "Explora o funcionamento das tecnologias digitais, a aplicação de princípios de design digital na criação de produtos e interfaces, e a compreensão dos impactos da Inteligência Artificial.",
          },
          {
            title: "Cultura Digital e Midiática",
            description:
              "Compreende o papel das mídias digitais, o uso seguro e consciente de tecnologias, a análise crítica de conteúdos, e a produção de conteúdo autoral e ético.",
          },
          {
            title: "Design e Fabricação Digital",
            description:
              "Abrange processos de criação, prototipagem e fabricação digital, integrando pensamento projetual, experimentação e desenvolvimento de soluções para problemas reais.",
          },
        ],
      },
    ],
    generalCompetencies: [
      {
        title: "Criatividade, Inventividade e Experimentação",
        description:
          "Capacidade de imaginar, experimentar e criar soluções originais para problemas reais, por meio da experimentação e prototipagem prática.",
      },
      {
        title: "Pensamento complexo, científico, artístico e sistêmico",
        description:
          "Domínio funcional e criativo de tecnologias digitais, eletrônicas e de fabricação analógica e digital, articulando diferentes formas de pensamento na resolução de problemas.",
      },
      {
        title: "Ciência, Investigação e Criticidade",
        description:
          "Capacidade de investigar, formular hipóteses, experimentar e validar conclusões de forma crítica.",
      },
      {
        title: "Colaboração e Intercultura",
        description:
          "Habilidade de trabalhar com outras pessoas, respeitando saberes diversos e contextos culturais, valorizando a diversidade.",
      },
      {
        title: "Comunicação e Narração",
        description:
          "Comunicar o próprio processo de aprendizagem e resultados de forma clara.",
      },
      {
        title: "Empreendedorismo e Protagonismo",
        description:
          "Capacidade de agir com autonomia, transformar ideias em ação e gerar valor empreendedor para si e para a comunidade.",
      },
      {
        title: "Ética e Cidadania",
        description:
          "Consciência sobre o impacto social, ético e ambiental das tecnologias e das próprias criações, promovendo o uso responsável e crítico das aplicações e o senso de pertencimento ao mundo.",
      },
      {
        title: "Reflexão e Autonomia",
        description:
          "Habilidade de aprender a aprender — refletir sobre o próprio processo e ajustar estratégias.",
      },
    ],
    wefSkills: [
      {
        title: "Competências",
        subtitle: "Como abordamos problemas",
        skills: [
          "Criatividade",
          "Colaboração",
          "Comunicação",
          "Pensamento crítico",
        ],
      },
      {
        title: "Habilidades Fundamentais",
        subtitle: "Como aplicamos nossas habilidades no cotidiano",
        skills: [
          "Curiosidade",
          "Iniciativa",
          "Resiliência",
          "Adaptabilidade",
          "Liderança",
          "Consciência social e cultural",
        ],
      },
      {
        title: "Qualidades de Caráter",
        subtitle: "Como lidamos com o mundo a nossa volta",
        skills: [
          "Alfabetização e leitura",
          "Matemática",
          "Letramento científico",
          "Letramento tecnológico",
          "Educação financeira",
          "Letramento cultural e cívico",
        ],
      },
    ],
  },
  ei: {
    title: "Nova BCCI - Educação Infantil",
    hero: {
      tagline: "NAVE A VELA • EDUCAÇÃO INFANTIL",
      foco: "Explorar, imaginar e experimentar o mundo por meio do corpo e dos sentidos.",
      valor_central: "Descoberta e construção do fazer como linguagem.",
      description_blocks: [
        "Na Educação Infantil, o aprendizado acontece a partir da curiosidade, da imaginação e das múltiplas linguagens que as crianças utilizam para se expressar, investigar e compreender o mundo. O corpo, o movimento e os sentidos são os primeiros instrumentos de descoberta e de construção e, por meio deles, as crianças desenvolvem as bases do pensamento lógico, criativo e computacional.", "A Educação Tecnológica, nesse contexto, não se limita ao uso de tecnologias digitais: ela se manifesta nas experiências que envolvem reconhecer padrões, resolver problemas, criar sequências e testar hipóteses — sempre em um ambiente lúdico, colaborativo e afetivo.",
      ],
    },
    sections: [
      {
        title: "Pensamento Computacional",
        type: "detailed",
        items: [
          {
            title: "Pensamento Computacional",
            description:
              "Competência: Estimular a curiosidade, a imaginação e a autoria nas pequenas criações. Desenvolver a tolerância ao erro e o prazer em tentar de novo. Construir junto, compartilhar e cuidar dos materiais e do grupo.\nHabilidade: (EI03CO01) Reconhecer padrão de repetição em sequência de sons, movimentos, desenhos.\nHabilidade: (EI03CO02) Expressar as etapas para a realização de uma tarefa de forma clara e ordenada.\nHabilidade: (EI03CO03) Experienciar a execução de algoritmos brincando com objetos (des)plugados.\nHabilidade: (EI03CO04) Criar e representar algoritmos para resolver problemas.\nHabilidade: (EI03CO05) Comparar soluções algorítmicas para resolver um mesmo problema.\nHabilidade: (EI03CO06) Compreender decisões em dois estados (verdadeiro ou falso).",
          },
        ],
      },
      {
        title: "Mundo Digital e IA",
        type: "detailed",
        items: [
          {
            title: "Mundo Digital e IA",
            description:
              "Competência: Introduzir noções de “máquina que pensa” e “robô que ajuda”.\nHabilidade: (EI03CO07) Reconhecer dispositivos eletrônicos (e não-eletrônicos), identificando quando estão ligados ou desligados (abertos ou fechados).\nHabilidade: (EI03CO08) Compreender o conceito de interfaces para comunicação com objetos (des)plugados.\nHabilidade: (EI03CO09) Identificar dispositivos computacionais e as diferentes formas de interação.",
          },
        ],
      },
      {
        title: "Cultura Digital e Midiática",
        type: "detailed",
        items: [
          {
            title: "Cultura Digital e Midiática",
            description:
              "Competência: Estimular a reflexão e rodas de coversa sobre desenvolver empatia, responsabilidade social e habilidades socioemocionais, moldando cidadãos para uma convivência ética, de forma lúdica.\nHabilidade: (EI03CO10) Utilizar tecnologia digital de maneira segura, consciente e respeitosa.\nHabilidade: (EI03CO11) Adotar hábitos saudáveis de uso de artefatos computacionais, seguindo recomendações de órgãos de saúde competentes.",
          },
        ],
      },
      {
        title: "Design e Fabricação Digital",
        type: "detailed",
        items: [
          {
            title: "Design e Fabricação Digital",
            description:
              "Competência: Promover experiências em que as crianças explorem, criem e expressem ideias por meio da construção e transformação de materiais, compreendendo que o ato de fabricar é também uma forma de pensar, comunicar e resolver problemas.\nHabilidade: (NavEI03CO01) Explorar diferentes materiais e ferramentas (papel, blocos, argila, sucata, tecidos etc.) para representar ideias, histórias ou personagens.\nHabilidade: (NavEI03CO02) Experimentar diferentes formas de montagem, encaixe, recorte e colagem para criar objetos e estruturas, incluindo de fabricação digital.\nHabilidade: (NavEI03CO03) Testar, ajustar e reconstruir suas criações, demonstrando persistência e prazer em tentar novamente.\nHabilidade: (NavEI03CO04) Utilizar recursos tecnológicos simples (câmeras fotográficas, objetos de cortadora a laser e impressoras 3D) como extensão do ato de criar.",
          },
        ],
      },
    ],
  },
  ef1: {
    title: "Nova BCCI - Ensino Fundamental Anos Iniciais",
    hero: {
      tagline: "NAVE A VELA • ANOS INICIAIS",
      foco: "Fazer para compreender: introduzir lógica, causa e efeito, empatia e coautoria; entender e construir tecnologias simples.",
      valor_central:
        "Interdisciplinaridade lúdica — ciência, arte e movimento integrados.",
      description_blocks: [
        "O Ensino Fundamental Anos Iniciais tem como propósito desenvolver nos estudantes capacidades de compreensão acerca da computação como uma área de conhecimento, que contribui para explicar o mundo atual e, por meio do domínio da sua linguagem, tornar-se um agente consciente de transformação.",
        "O foco está em formar sujeitos que se expressam e partilham informações, ideias, sentimentos e soluções computacionais utilizando diferentes linguagens e tecnologias digitais de forma criativa, crítica, significativa, reflexiva e ética. A tecnologia é vista como espaço de exploração, descoberta e reflexão, onde o pensamento computacional e a cultura digital tornam-se meios de expressão, de resolução de problemas e de exercício da cidadania.",
        "Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design com Fabricação Digital (articulando teoria e prática com base em projetos).",
      ],
    },
    sections: [
      {
        title: "Pensamento Computacional",
        type: "detailed",
        items: [
          {
            title: "1º Ano",
            description:
              "Objeto de conhecimento: Ordenação e algoritmos do cotidiano\nCompetência: Reconhecer padrões e sequências em atividades cotidianas.\nHabilidade: (NavEF01CO01) Identificar e entender algoritmos, abstração, descrição e depuração de forma lúdica.\nHabilidade: (EF01CO01) Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.\nObjeto de conhecimento: Conceituação de algoritmos\nCompetência: Compreender que a tecnologia segue lógicas e ordens.\nHabilidade: (EF01CO02) Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.\nHabilidade: (EF01CO03) Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra ‘Algoritmos’.",
          },
          {
            title: "2º Ano",
            description:
              "Objeto de conhecimento: Modelagem de objetos\nCompetência: Utilizar o raciocínio lógico para planejar ações e criar processos simples.\nHabilidade: (NavEF02CO01) Entender e explorar os recursos tecnológicos e programas de raciocínio lógico para solucionar problemas cotidianos.\nHabilidade: (EF02CO01) Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.\nObjeto de conhecimento: Algoritmos com repetição simples e lógica sequencial\nCompetência: Utilizar raciocínio lógico e algoritmos com repetições simples.\nHabilidade: (EF02CO02) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo.",
          },
          {
            title: "3º Ano",
            description:
              "Objeto de conhecimento: Lógica computacional\nCompetência: Planejar e testar soluções usando raciocínio lógico e linguagem de programação.\nHabilidade: (EF03CO01) Associar os valores 'verdadeiro' e 'falso' a sentenças lógicas que dizem respeito a situações do dia a dia, fazendo uso de termos que indicam negação.\nObjeto de conhecimento: Algoritmo com repetições\nCompetência: Utilizar algoritmo de repetição para resolução de problemas.\nHabilidade: (EF03CO02) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração.\nObjeto de conhecimento: Decomposição\nCompetência: Aplicar lógica de condicional e decomposição de problemas.\nHabilidade: (NavEF03CO01) Reproduzir programação por blocos para entender condicional (plugado e desplugado).\nHabilidade: (EF03CO03) Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.",
          },
          {
            title: "4º Ano",
            description:
              "Objeto de conhecimento: Matrizes e registros\nCompetência: Criar e testar matrizes reais ou simuladas.\nHabilidade: (EF04CO01) Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações.\nHabilidade: (EF04CO02) Reconhecer objetos do mundo real e/ou digital que podem ser representados através de registros que estabelecem uma organização na qual cada componente é identificado por um nome, fazendo manipulações sobre estas representações.\nObjeto de conhecimento: Algoritmos com repetições simples e aninhadas\nCompetência: Criar e testar algoritmos aninhados.\nHabilidade: (EF04CO03) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração.",
          },
          {
            title: "5º Ano",
            description:
              "Objeto de conhecimento: Listas e grafos\nCompetência: Integrar o pensamento computacional à criação de listas.\nHabilidade: (EF05CO01) Reconhecer objetos do mundo real e/ou digital que podem ser representados através de listas que estabelecem uma organização na qual há um número variável de itens dispostos em sequência, fazendo manipulações simples sobre estas representações.\nHabilidade: (NavEF05CO01) Desenvolver o pensamento abstrato para planejar, executar e gerenciar tarefas.\nHabilidade: (EF05CO02) Reconhecer objetos do mundo real e digital que podem ser representados através de grafos que estabelecem uma organização com uma quantidade variável de vértices conectados por arestas, fazendo manipulações simples sobre estas representações.\nObjeto de conhecimento: Lógica computacional e Algoritmos com seleção condicional\nCompetência: Integrar pensamento computacional em soluções criativas.\nHabilidade: (EF05CO03) Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores 'verdadeiro' e 'falso'.\nHabilidade: (EF05CO04) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.",
          },
        ],
      },
      {
        title: "Mundo Digital e IA",
        type: "detailed",
        items: [
          {
            title: "1º Ano",
            description:
              "Objeto de conhecimento: Codificação da informação\nCompetência: Reconhecer o papel das tecnologias digitais no cotidiano e representá-lo por meio da codificação.\nHabilidade: (EF01CO04) Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens.\nHabilidade: (EF01CO05) Representar informação usando diferentes codificações.",
          },
          {
            title: "2º Ano",
            description:
              "Objeto de conhecimento: Instrução de máquina\nCompetência: Compreender fundamentos da Inteligência Artificial de forma lúdica.\nHabilidade: (NavEF02CO02) Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware. (Ex. Jogo online de associação)\nHabilidade: (EF02CO03) Identificar que máquinas diferentes executam conjuntos próprios de instruções e que podem ser usadas para definir algoritmos.\nObjeto de conhecimento: Hardware e software\nCompetência: Identificar e diferenciar hardware e software integrando a programação.\nHabilidade: (EF02CO04) Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.",
          },
          {
            title: "3º Ano",
            description:
              "Objeto de conhecimento: Interface física\nCompetência: Entender interfaces físicas no cotidiano.\nHabilidade: (EF03CO04) Relacionar o conceito de informação com o de dado.\nHabilidade: (EF03CO05) Compreender que dados são estruturados em formatos específicos dependendo da informação armazenada.\nHabilidade: (EF03CO06) Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas (dispositivos de entrada e saída).",
          },
          {
            title: "4º Ano",
            description:
              "Objeto de conhecimento: Codificação da informação e programação\nCompetência: Entender, manipular e transmitir dados de modo a codificá-los em formato digital.\nHabilidade: (EF04CO04) Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital).\nHabilidade: (EF04CO05) Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).\nHabilidade: (NavEF04CO01) Entender relações entre hardware, software e machine learning (Inteligência Artificial).",
          },
          {
            title: "5º Ano",
            description:
              "Objeto de conhecimento: Arquitetura de computadores\nCompetência: Explorar tecnologias de Inteligência Artificial e compreender como aprendem.\nHabilidade: (NavEF05CO02) Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas.\nHabilidade: (EF05CO05) Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento).\nObjeto de conhecimento: Armazenamento\nCompetência: Reconhecer sistemas de armazenamento no dia a dia.\nHabilidade: (EF05CO06) Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.\nObjeto de conhecimento: Sistema\nCompetência: Compreender sistemas, computação em nuvem, entrada e saída de dados, de forma lúdica.\nHabilidade: (EF05CO07) Reconhecer a necessidade de um sistema operacional para a execução de programas e gerenciamento do hardware.",
          },
        ],
      },
      {
        title: "Cultura Digital e Midiática",
        type: "detailed",
        items: [
          {
            title: "1º Ano",
            description:
              "Objeto de conhecimento: O que é cidadania e cidadania digital\nCompetência: Entender o que é comunidade, cidadania e cidadania digital.\nHabilidade: (NavEF01CO02) Desenvolver o pensamento crítico da informação, praticando a gentileza na internet.\nObjeto de conhecimento: Uso de artefatos computacionais\nCompetência: Reconhecer diferentes artefatos computacionais no dia a dia.\nHabilidade: (EF01CO06) Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.\nObjeto de conhecimento: Segurança e responsabilidade no uso de tecnologia computacional\nCompetência: Compreender o uso de tecnologia computacional de forma segura no ambiente digital.\nHabilidade: (EF01CO07) Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.",
          },
          {
            title: "2º Ano",
            description:
              "Objeto de conhecimento: Privacidade e segurança: proteção de dados\nCompetência: Introduzir sobre dados, senha segura, informação pública e privada.\nHabilidade: (NavEF02CO03) Compreender os riscos da internet: riscos, senha segura, compartilhar com cuidado, rastro digital, conteúdo viral.\nObjeto de conhecimento: Uso de artefatos computacionais\nCompetência: Desenvolver hábitos de segurança digital a partir do uso dos artefatos computacionais.\nHabilidade: (EF02CO05) Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.\nHabilidade: (EF02CO06) Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.",
          },
          {
            title: "3º Ano",
            description:
              "Objeto de conhecimento: Uso ético e consciente da internet incluindo a IA\nCompetência: Entender sobre compartilhamento de informações pessoais com segurança.\nHabilidade:  (NavEF03CO02) Produzir conteúdos digitais em diferentes contextos para que se apropriem do processo de construção da comunicação digital, inclusive com Inteligência Artificial.\nHabilidade: (NavEF03CO03) Entender sobre ética digital a partir de conteúdos com Inteligência Artificial.\nHabilidade: (NavEF03CO04) Compreender conteúdos gerados por Inteligência Artificial.\nObjeto de conhecimento: Uso de tecnologias educacionais\nCompetência: Utilizar ferramentas digitais para autoexpressão.\nHabilidade: (EF03CO07) Utilizar diferentes navegadores e ferramentas de busca para pesquisar e acessar informações.\nHabilidade: (EF03CO08) Usar ferramentas computacionais em situações didáticas para se expressar em diferentes formatos digitais.\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Produzir conteúdos que mostrem os impactos do meio digital.\nHabilidade: (EF03CO09) Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.",
          },
          {
            title: "4º Ano",
            description:
              "Objeto de conhecimento: Saúde Digital (Bullying e Cyberbullying)\nCompetência: Compreender e praticar gentileza online, praticando atitudes contra o cyberbullying.\nHabilidade:  (NavEF04CO02) Analisar e compreender criticamente as manifestações do cyberbullying e desenvolver atitudes de gentileza online, promovendo ativamente a cultura do respeito e intervindo de forma ética e segura para proteger a si e a outros contra práticas de assédio e violência nas redes.\nObjeto de conhecimento: Introdução a IA\nCompetência: Explorar noções iniciais de Inteligência Artificial.\nHabilidade: (NavEF04CO03) Compreender conteúdos gerados por Inteligência Artificial.\nObjeto de conhecimento: Uso de tecnologias\nCompetência: Expressar-se utilizando diferentes tecnologias.\nHabilidade: (EF04CO06) Usar diferentes ferramentas computacionais para criação de conteúdo (textos, apresentações, vídeos etc.).\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Entender e representar a importância de fontes seguras.\nHabilidade: (EF04CO07) Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.\nHabilidade: (EF04CO08) Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.",
          },
          {
            title: "5º Ano",
            description:
              "Objeto de conhecimento: Machine learning e seus impactos\nCompetência: Compreender como funciona o aprendizado de máquina.\nHabilidade: (NavEF05CO03) Utilizar ferramentas e recursos tecnológicos com o objetivo de potencializar o entendimento de Inteligência Artificial e suas implicações nas mudanças tecnológicas.\nHabilidade: (NavEF05CO04) Experimentar e compreender o uso básico de tecnologias com Inteligência Artificial, reconhecendo suas possibilidades e refletindo sobre suas implicações no cotidiano e nas mudanças tecnológicas.\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Explicitar conteúdos confiáveis.\nHabilidade: (EF05CO08) Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.\nHabilidade: (EF05CO09) Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais.\nObjeto de conhecimento: Uso de tecnologias computacionais\nCompetência: Expressar-se de forma crítica.\nHabilidade: (EF05CO10) Expressar-se crítica e criativamente na compreensão das mudanças tecnológicas no mundo do trabalho e sobre a evolução da sociedade.",
          },
        ],
      },
      {
        title: "Design e Fabricação Digital",
        type: "detailed",
        items: [
          {
            title: "1º Ano",
            description:
              "Objeto de conhecimento: Experimentação e observação do fazer manual\nCompetência: Explorar materiais, formas e texturas para compreender que o design e a fabricação são maneiras de criar soluções para o cotidiano.\nHabilidade: (NavEF01CO03) Realizar montagem e desmontagem de objetos simples.\nHabilidade: (NavEF01CO04) Experimentar combinações de materiais (papel, sucata, argila). (Ex. engenharia reversa)",
          },
          {
            title: "2º Ano",
            description:
              "Objeto de conhecimento: Planejamento e criação manual\nCompetência: Utilizar diferentes materiais e técnicas para imaginar, planejar e construir objetos com propósito.\nHabilidade:  (NavEF02CO04) Criar objetos funcionais com materiais recicláveis e diversos.\nHabilidade: (NavEF02CO05) Representar ideias por meio de desenhos ou esquemas.\nHabilidade: (NavEF02CO06) Experimentar aplicações de fabricação digital, diferentes tecnologias, recursos digitais e manuais.\nHabilidade: (NavEF02CO07) Trabalhar coletivamente na montagem de pequenos protótipos, incluindo peças de fabricação digital.",
          },
          {
            title: "3º Ano",
            description:
              "Objeto de conhecimento: Introdução ao design digital e representação\nCompetência: Explorar ferramentas digitais simples e compreender o processo de transformar ideias em produtos.\nHabilidade: (NavEF03CO05) Utilizar softwares ou aplicativos de desenho digital (Paint, TuxPaint, Canva).\nHabilidade: (NavEF03CO06) Representar objetos em 2D e 3D de forma criativa e lúdica. (Ex. aprendizagem criativa, led, bateria, materiais não estruturados)\nHabilidade: (NavEF03CO07) Criar suas invenções e experimentos que conectam com artefatos digitais e físicos.",
          },
          {
            title: "4º Ano",
            description:
              "Objeto de conhecimento: Design, prototipagem e experimentações de soluções\nCompetência: Criar e testar protótipos digitais e analógicos para resolver desafios reais.\nHabilidade:  (NavEF04CO04) Planejar soluções em grupo para problemas do cotidiano escolar.\nHabilidade: (NavEF04CO05) Utilizar ferramentas simples de montagem digital (apps de montagem por blocos).\nHabilidade: (NavEF04CO06) Testar e aprimorar criações usando eletrônica básica. (Ex. makey makey, scopabits, protoboard)",
          },
          {
            title: "5º Ano",
            description:
              "Objeto de conhecimento: Design, prototipagem e criação de soluções autorais criativas\nCompetência: Desenvolver pequenos projetos de fabricação digital com consciência ética, criativa e sustentável.\nHabilidade: (NavEF05CO05) Produzir objetos funcionais usando diversos conhecimentos técnicos contextualizados. (Ex. reutilização de materiais)\nHabilidade: (NavEF05CO06) Refletir sobre o impacto das criações na comunidade. (Ex. robisco)",
          },
        ],
      },
    ],
  },
  ef2: {
    title: "Nova BCCI - Ensino Fundamental Anos Finais",
    hero: {
      tagline: "NAVE A VELA • ANOS FINAIS",
      foco: "Investigar, projetar e compreender a tecnologia como construção social e cultural.",
      valor_central: "Tolerância ao erro e pensamento investigativo.",
      description_blocks: [
        "O Ensino Fundamental Anos Finais tem como propósito desenvolver nos estudantes uma relação investigativa e criadora com a tecnologia, entendendo-a não apenas como ferramenta, mas como uma construção social, cultural e histórica.",
        "Aqui, aprender com tecnologia significa pensar criticamente, experimentar e criar, compreendendo o impacto das inovações no cotidiano, nas relações humanas e no meio ambiente. O foco está em formar sujeitos curiosos, criativos e resilientes, que aprendem com o erro e valorizam o processo tanto quanto o resultado.",
        "A tecnologia é vista como espaço de exploração, descoberta e reflexão, onde o pensamento computacional e a cultura digital intensificam-se como meios de expressão, de resolução de problemas e de exercício da cidadania.",
        "Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design e Fabricação Digital (articulando teoria e prática com base em projetos).",
      ],
    },
    sections: [
      {
        title: "Pensamento Computacional",
        type: "detailed",
        items: [
          {
            title: "6º Ano",
            description:
              "Objeto de conhecimento: Programação e Algoritmo\nCompetência: Compreender o raciocínio lógico e o funcionamento básico dos algoritmos e sistemas automatizados.\nHabilidade: (EF06CO01) Classificar informações, agrupando-as em coleções (conjuntos) e associando cada coleção a um ‘tipo de dados’.\nHabilidade: (EF06CO02) Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação.\nHabilidade: (EF06CO03) Descrever com precisão a solução de um problema, construindo o programa que implementa a solução de escrita.\nObjeto de conhecimento: Estratégias de solução de problemas e prototipagem\nCompetência: Empregar diferentes estratégias da computação (decomposição, generalização e reúso) para construir a solução de problemas, empregando a Inteligência Artificial em determinados contextos.\nHabilidade: (EF06CO04) Construir soluções de problemas usando a técnica de decomposição e automatizar tais soluções usando uma linguagem de programação.\nHabilidade: (EF06CO05) Identificar os recursos ou insumos necessários (entradas) para a resolução de problemas, bem como os resultados esperados (saídas), determinando os respectivos tipos de dados, e estabelecendo a definição de problema como uma relação entre entrada e saída.\nHabilidade: (EF06CO06) Comparar diferentes casos particulares (instâncias) de um mesmo problema, identificando as semelhanças e diferenças entre eles, e criar um algoritmo para resolver todos, fazendo uso de variáveis (parâmetros) para permitir o tratamento de todos os casos de forma genérica.\nHabilidade: (NavEF06CO01) Reconhecer e aplicar princípios básicos de Inteligência Artificial na resolução de problemas computacionais, compreendendo o uso de dados para o treinamento de sistemas automatizados e avaliando a confiabilidade e os limites das respostas geradas por máquinas.",
          },
          {
            title: "7º Ano",
            description:
              "Objeto de conhecimento: Programação utilizando matrizes e grafos\nCompetência: Aplicar princípios da programação e suas características para resolução de problemas.\nHabilidade: (EF07CO01) Criar soluções de problemas para os quais seja adequado o uso de registros e matrizes unidimensionais para descrever suas informações e automatizá-las usando uma linguagem de programação.\nObjeto de conhecimento: Análise e criação de projetos com programação\nCompetência: Empregar diferentes estratégias da computação para construir a solução de problemas com uso de Inteligência Artificial.\nHabilidade: (EF07CO02) Analisar programas para detectar e remover erros, ampliando a confiança na sua correção.\nObjeto de conhecimento: Projetos com programação\nCompetência: Empregar programação em diferentes projetos.\nHabilidade: (EF07CO03) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.\nObjeto de conhecimento: Propriedades de grafos\nCompetência: Empregar grafos em projetos educativos.\nHabilidade: (EF07CO04) Explorar propriedades básicas de grafos.\nObjeto de conhecimento: Estratégias de solução de problemas\nCompetência: Empregar diferentes estratégias da computação.\nHabilidade: (EF07CO05) Criar algoritmos fazendo uso da decomposição e do reúso no processo de solução de forma colaborativa e cooperativa e automatizá-los usando uma linguagem de programação.",
          },
          {
            title: "8º Ano",
            description:
              "Objeto de conhecimento: Programação com listas e recursão\nCompetência: Representar soluções de problemas por meio de programas.\nHabilidade: (EF08CO01) Construir soluções de problemas usando a técnica de recursão e automatizar tais soluções usando uma linguagem de programação.\nHabilidade: (EF08CO02) Criar soluções de problemas para os quais seja adequado o uso de listas para descrever suas informações e automatizá-las usando uma linguagem de programação, empregando ou não a recursão como uma técnica para resolver o problema.\nObjeto de conhecimento: Algoritmos clássicos\nCompetência: Entender sobre listas.\nHabilidade: (EF08CO03) Utilizar algoritmos clássicos de manipulação sobre listas.\nObjeto de conhecimento: Projetos com programação\nCompetência: Criar um projeto utilizando a programação.\nHabilidade: (EF08CO04) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.",
          },
          {
            title: "9º Ano",
            description:
              "Objeto de conhecimento: Programação usando grafos \nCompetência: Construir e analisar soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual ou colaborativa, selecionando as estruturas de dados adequadas (registros, matrizes, listas e grafos).\nHabilidade: (EF09CO01) Criar soluções de problemas para os quais seja adequado o uso de árvores e grafos para descrever suas informações e automatizá-las usando uma linguagem de programação.\nObjeto de conhecimento: Projetos com programação\nCompetência: Criar um projeto utilizando a programação.\nHabilidade: (EF09CO02) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.\nObjeto de conhecimento: Autômatos \nCompetência: Entender e representar autômatos.\nHabilidade: (EF09CO03) Usar autômatos para descrever comportamentos de forma abstrata, automatizando-os através de uma linguagem de programação baseada em eventos.",
          },
        ],
      },
      {
        title: "Mundo Digital e IA",
        type: "detailed",
        items: [
          {
            title: "6º Ano",
            description:
              "Objeto de conhecimento:Fundamentos de transmissão e gestão de dados\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética.\nHabilidade: (EF06CO07) Entender o processo de transmissão de dados, como a informação é quebrada em pedaços, transmitida em pacotes através de múltiplos equipamentos, e reconstruída no destino.\nHabilidade: (EF06CO08) Compreender e utilizar diferentes formas de armazenar, manipular, compactar e recuperar arquivos, documentos e metadados.\nObjeto de conhecimento: Fundamentos da IA\nCompetência: Compreender fundamentos da Inteligência Artificial.\nHabilidade: (NavEF06CO02) Empregar conceitos básicos de Inteligência Artificial na resolução de problemas computacionais, utilizando estruturas de dados (matrizes, listas ou grafos) para representar, organizar e analisar informações, compreendendo como a Inteligência Artificial identifica padrões e relações entre dados para gerar previsões ou classificações simples.\n Objeto de conhecimento: Tecnologia e IA \nCompetência: Entender e aplicar tecnologias com Inteligência Artificial.\nHabilidade: (NavEF06CO03) Identificar como máquinas e programas executam tarefas.\nHabilidade: (NavEF06CO04) Reconhecer diferentes dispositivos tecnológicos e suas funções.\nHabilidade: (NavEF06CO05) Explorar noções de automação e Inteligência Artificial simples.\nHabilidade:  (NavEF06CO06) Entender as etapas envolvidas na Aprendizagem de Máquina, bem como as práticas e os desafios que cada etapa envolve.\nHabilidade: (NavEF06CO07) Entender a história da Inteligência Artificial e aplicação de tecnologias.\nHabilidade: (NavEF06CO08) Utilizar e criar soluções baseadas em treinamento de máquina.",
          },
          {
            title: "7º Ano",
            description:
              "Objeto de conhecimento: Protocolos de comunicação\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética com atuação da Inteligência Artificial.\nHabilidade: (EF07CO06) Compreender o papel de protocolos para a transmissão de dados.\nObjeto de conhecimento: Fundamentos da segurança cibernética\nCompetência: Entender a importância da segurança cibernética na prática.\nHabilidade: (EF07CO07) Identificar problemas de segurança cibernética e experimentar formas de proteção.\nObjeto de conhecimento: Fundamentos da IA\nCompetência: Entender e aplicar a Inteligência Artificial de modo simples.\nHabilidade: (NavEF07CO01) Aplicar princípios de Inteligência Artificial em projetos computacionais, utilizando estruturas de dados (listas e matrizes) para organizar, analisar e interpretar conjuntos de informações, construindo algoritmos que aprendem com exemplos, classificam ou tomam decisões automatizadas, avaliando sua eficiência e possíveis vieses.\nObjeto de conhecimento: Armazenamento, transmissão de dados e diálogo com ferramentas de IA restritas\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética com atuação da Inteligência Artificial.\nHabilidade: (NavEF07CO02) Compreender como os sistemas de Inteligência Artificial armazenam, processam e utilizam dados para gerar respostas automatizadas, explorando o funcionamento de ferramentas de Inteligência Artificial restritas (assistentes virtuais, chatbots, filtros, tradutores) e analisando aspectos de segurança, privacidade e uso ético das informações transmitidas.",
          },
          {
            title: "8º Ano",
            description:
              "Objeto de conhecimento: Fundamentos de sistemas distribuídos\nCompetência: Entender os fundamentos de sistemas distribuídos e da internet.\nHabilidade: (EF08CO05) Compreender os conceitos de paralelismo, concorrência e armazenamento/processamento distribuídos.\nObjeto de conhecimento: Fundamentos da IA\nCompetência: Entender e aplicar Inteligência Artificial de forma concreta.\nHabilidade: (NavEF08CO01) Criar soluções de impacto social com Inteligência Artificial integrada e consciência ética; entender anatomia de prompts.\nObjeto de conhecimento: Internet\nCompetência: Aplicar os fundamentos da internet de forma prática.\nHabilidade: (EF08CO06) Entender como é a estrutura e funcionamento da internet.\nObjeto de conhecimento: Internet e IA \nCompetência: Aplicar os conhecimentos de Inteligência Artificial de forma simples.\nHabilidade: (NavEF08CO02) Compreender e utilizar a Inteligência Artificial na produção de conhecimento na internet.",
          },
          {
            title: "9º Ano",
            description:
              "Objeto de conhecimento: Segurança cibernética em tempos de IA\nCompetência: Analisar os impactos da Inteligência Artificial e da automação na sociedade contemporânea.\nHabilidade: (EF09CO04) Compreender o funcionamento de malwares e outros ataques cibernéticos.\nCompetência: Entender os fundamentos de sistemas distribuídos e da internet.\nHabilidade: (NavEF09CO01) Analisar os riscos e desafios da segurança digital em ambientes mediados por Inteligência Artificial, compreendendo como sistemas automatizados coletam, processam e utilizam dados pessoais, reconhecendo ameaças associadas à Inteligência Artificial (como desinformação, deepfakes e manipulação algorítmica) e adotando práticas seguras e éticas no uso da internet.",
          },
        ],
      },
      {
        title: "Cultura Digital e Midiática",
        type: "detailed",
        items: [
          {
            title: "6º Ano",
            description:
              "Objeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF06CO09) Apresentar conduta e linguagem apropriadas ao se comunicar em ambiente digital, considerando a ética e o respeito.\nObjeto de conhecimento: Tecnologia Digital\nCompetência: Selecionar e utilizar tecnologias computacionais de forma a se expressar.\nHabilidade: (EF06CO10) Analisar o consumo de tecnologia na sociedade, compreendendo criticamente o caminho da produção dos recursos, bem como aspectos ligados à obsolescência e à sustentabilidade.\nObjeto de conhecimento: Saúde Digital\nCompetência: Utilizar a tecnologia de forma saudável.\nHabilidade: (NavEF06CO09) Refletir sobre o tempo de tela e o uso ético da internet.",
          },
          {
            title: "7º Ano",
            description:
              "Objeto de conhecimento: Impactos da tecnologia digital\nCompetência: Entender e aplicar Inteligência Artificial de forma concreta.\nHabilidade: (EF07CO10) Identificar os impactos ambientais do descarte de peças de computadores e eletrônicos, bem como sua relação com a sustentabilidade.\nObjeto de conhecimento: Cyberbullying\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF07CO09) Reconhecer e debater sobre cyberbullying.\nObjeto de conhecimento: Produção Digital\nCompetência: Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas em diferentes contextos.\nHabilidade: (EF07CO11) Criar, documentar e publicar, de forma individual ou colaborativa, produtos (vídeos, podcasts, websites) usando recursos de tecnologia.\nObjeto de conhecimento: Direitos autorais, fake e Inteligência Artificial\nCompetência: Relacionar e aplicar conteúdos sobre checagem e veracidade da informação.\nHabilidade: (NavEF07CO03) Reconhecer e respeitar direitos autorais e licenças abertas em tempos de Inteligência Artificial.\nHabilidade: (NavEF07CO04) Identificar fake news e manipulações digitais em tempos de Inteligência Artificial.",
          },
          {
            title: "8º Ano",
            description:
              "Objeto de conhecimento: Redes sociais e segurança da informação\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF08CO07) Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.\nHabilidade: (EF08CO08) Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.\nHabilidade: (EF08CO09) Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.\nObjeto de conhecimento: Uso crítico das mídias digitais\nCompetência: Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas, analisando criticamente os diferentes impactos na sociedade.\nHabilidade: (EF08CO11) Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.\nObjeto de conhecimento: IA e cidadania digital\nCompetência: Empregar a Inteligência Artificial de forma consciente.\nHabilidade: (NavEF08CO03) Produzir campanhas digitais com foco em cidadania digital.\nHabilidade:  (NavEF08CO04) Discutir responsabilidade digital e reputação online em tempos de Inteligência Artificial.",
          },
          {
            title: "9º Ano",
            description:
              "Objeto de conhecimento: Tecnologia digital e sociedade\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF09CO06) Analisar problemas sociais de sua cidade e estado a partir de ambientes digitais, propondo soluções.\nHabilidade: (EF09CO07) Avaliar aplicações e implicações políticas, socioambientais e culturais das tecnologias digitais para propor alternativas aos desafios do mundo contemporâneo, incluindo aqueles relativos ao mundo do trabalho.\n(EF09CO08) Discutir como a distribuição desigual de recursos de computação em uma economia global levanta questões de equidade, acesso e poder.			\nObjeto de conhecimento: Autoria em meio digital\nCompetência: Compreender que o meio digital favorece produções éticas.\nHabilidade: (EF09CO09) Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.\nObjeto de conhecimento: Qualidade da informação\nCompetência: Selecionar e utilizar tecnologias de forma crítica.\nHabilidade: (EF09CO10) Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.\nObjeto de conhecimento: Educação midiática e IA\nCompetência: Explorar o uso de ferramentas de Inteligência Artificial para combater fake news.\nHabilidade: (NavEF09CO02) Desenvolver narrativas transmídia com uso de ferramentas de Inteligência Artificial.\nHabilidade: (NavEF09CO03) Discutir dados pessoais, rastros digitais e privacidade em tempos de Inteligência Artificial.\nHabilidade: (NavEF09CO04) Compreender o efeito das fake news e deepfake em tempos de Inteligência Artificial.",
          },
        ],
      },
      {
        title: "Design e Fabricação Digital",
        type: "detailed",
        items: [
          {
            title: "6º Ano",
            description:
              "Objeto de conhecimento: Introdução aos processos de criação \nCompetência: Explorar o funcionamento das tecnologias digitais e compreender o papel do design e da fabricação no cotidiano.\nHabilidade: (NavEF06CO10) Compreender o ciclo de design - ideação, prototipagem, teste e aprimoramento. \nCompetência: Utilizar ferramentas manuais e digital básicas.\nHabilidade: (NavEF06CO11) Utilizar ferramentas básicas de fabricação manual e digital de forma a apoiar o processo criativo de soluções.",
          },
          {
            title: "7º Ano",
            description:
              "Objeto de conhecimento: Modelagem Digital e Interatividade\nCompetência: Aplicar princípios de design e modelagem digital para criar objetos.\nHabilidade: (NavEF07CO05) Experimentar processos de criação digital básica.\nCompetência: Identificar alternativas durante o ciclo de criação.\nHabilidade: (NavEF07CO06) Experimentar processos de modelagem física utilizando materiais acessíveis de baixo custo e impacto ambiental, identificando materiais alternativos durante o ciclo de criação.",
          },
          {
            title: "8º Ano",
            description:
              "Objeto de conhecimento: Simulações e tecnologias sustentáveis\nCompetência: Desenvolver soluções tecnológicas e sustentáveis com propósito social ou ambiental a partir da impressão 3D.\nHabilidade: (NavEF08CO05) Utilizar softwares de modelagem 3D e impressão digital.\nCompetência: Propor melhorias para projetos considerando impactos durante as decisões.\nHabilidade: (NavEF08CO06) Comparar e selecionar materiais para projetos de prototipação, avaliando possíveis impactos no processo construtivo, como consumo de recursos, geração de resíduos, tempo e segurança.",
          },
          {
            title: "9º Ano",
            description:
              "Objeto de conhecimento: Projetos de Inovação Social\nCompetência: Criar produtos para problemas reais que tenham impacto social.\nHabilidade:  (NavEF09CO05) Integrar design, sustentabilidade e impacto social em projeto.\nHabilidade: (NavEF09CO06) Criar produtos que respondam a problemas reais (educação, meio ambiente, saúde, acessibilidade), utilizando a fabricação digital.\nCompetência: Considerar a experiência do usuário no processo construtivo de solução.\nHabilidade: (NavEF09CO07) Analisar criticamente e propor melhorias contextualizadas a projetos de prototipação, de modo a potencializar a resolução de problemas de impacto social, com base em feedback de usuários, testes e uso de recursos de design e fabricação.",
          },
        ],
      },
    ],
  },
  em: {
    title: "Nova BCCI - Ensino Médio",
    hero: {
      tagline: "NAVE A VELA • ENSINO MÉDIO",
      foco: "Desenvolver autoria tecnológica e capacidade de inovação com impacto social, criar startups educacionais, campanhas digitais e portfólios multimodais.",
      valor_central:
        "Autoria e inovação – projeção de soluções complexas com ética, propósito e IA integrada.",
      description_blocks: [
        "O Ensino Médio tem como propósito desafiar os estudantes a analisar, criar e implementar soluções complexas que integrem inteligência artificial, design e pensamento computacional, articulando o conhecimento científico com a criatividade, a ética e o protagonismo juvenil. Essa etapa consolida o percurso formativo iniciado no Ensino Fundamental, estimulando a autonomia intelectual, a colaboração e o pensamento crítico diante dos desafios contemporâneos.",
        "Por meio de projetos interdisciplinares e metodologias ativas, os estudantes investigam problemas reais e elaboram soluções digitais sustentáveis e éticas, expressando-se através de linguagens tecnológicas diversas. O propósito ético e social da criação deve orientar o uso consciente das tecnologias emergentes e do poder transformador da IA.",
        "A aprendizagem fortalece-se como uma experiência de autoria e impacto, em que os jovens constroem startups educacionais, campanhas digitais, produtos inovadores e portfólios multimodais que expressam sua identidade, visão de mundo e compromisso com a coletividade.",
        "Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design e Fabricação Digital (articulando teoria e prática com base em projetos).",
      ],
    },
    sections: [
      {
        title: "Pensamento Computacional",
        type: "detailed",
        items: [
          {
            title: "1ª Série",
            description:
              "Objeto de conhecimento: Algoritmos e estruturas\nCompetência: Compreender as possibilidades e os limites da computação para resolver problemas.\nHabilidade: (EM13CO04) Reconhecer o conceito de metaprogramação como uma forma de generalização na construção de programas, permitindo que algoritmos sejam entrada ou saída para outros algoritmos.\nHabilidade: (NavEM13CO01) Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções com aplicações de programação.\nObjeto de conhecimento: Lógica computacional e Linguagens de programação\nCompetência: Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções em diversos níveis de abstração.\nHabilidade: (NavEM13CO02) Elaborar e testar programas utilizando linguagens de programação textuais.\nHabilidade: (EM13CO02) Explorar e construir a solução de problemas por meio de refinamentos, utilizando diversos níveis de abstração desde a especificação até a implementação.",
          },
          {
            title: "2ª Série",
            description:
              "Objeto de conhecimento: Modelagem algorítmica e tomada de decisão\nCompetência: Integrar o pensamento computacional ao uso de dados e à automação inteligente, incluindo contextos da Inteligência Artificial.\nHabilidade: (EM13CO03) Identificar o comportamento dos algoritmos no que diz respeito ao consumo de recursos como tempo de execução, espaço de memória e energia, entre outros.\nHabilidade: (EM13CO05) Identificar os limites da computação para diferenciar o que pode ou não ser automatizado, buscando uma compreensão mais ampla dos limites dos processos mentais envolvidos na resolução de problemas.\nObjeto de conhecimento: Dados, Redes e Ética Digital\nCompetência: Empregar Análise de Dados e Fundamentos da Internet.\nHabilidade: (EM13CO03) Identificar o comportamento dos algoritmos no que diz respeito ao consumo de recursos como tempo de execução, espaço de memória e energia, entre outros.\nHabilidade: (EM13CO06) Avaliar software levando em consideração diferentes características e métricas associadas.",
          },
          {
            title: "3ª Série",
            description:
              "Objeto de conhecimento: Robótica e Internet das Coisas (IoT)\nCompetência: Desenvolver, de forma ética e responsável, sistemas computacionais avançados (Robótica e IoT) que integrem Inteligência Artificial.\nHabilidade: (NavEM13CO22) Desenvolver sistemas integrando Inteligência Artificial, automação e sensores.\nHabilidade: (EM13CO15) Analisar a interação entre usuários e artefatos computacionais, abordando aspectos da experiência do usuário e promovendo reflexão sobre a qualidade do uso dos artefatos nas esferas do trabalho, do lazer e do estudo.\nObjeto de conhecimento: Ética em algoritmos, sustentabilidade tecnológica e IA\nCompetência: Expressar e partilhar informações, ideias e soluções computacionais utilizando diferentes plataformas da Computação de forma fluente, criativa, crítica, significativa,  incluindo uma camada de Inteligência Artificial.\nHabilidade: (EM13CO16) Desenvolver projetos com robótica, utilizando artefatos físicos ou simuladores.\nHabilidade: (EM13CO18) Planejar e gerenciar projetos integrados às áreas de conhecimento, de forma colaborativa, solucionando problemas, usando diversos artefatos computacionais.\nHabilidade: (EM13CO19) Expor, argumentar e negociar propostas, produtos e serviços, utilizando diferentes mídias e ferramentas digitais.",
          },
        ],
      },
      {
        title: "Mundo Digital e IA",
        type: "detailed",
        items: [
          {
            title: "1ª Série",
            description:
              "Objeto de conhecimento: Fundamentos da IA\nCompetência: Elaborar e testar programas utilizando linguagens textuais, analisando os princípios básicos de Inteligência Artificial.\nHabilidade: (NavEM13CO03) Analisar e experimentar princípios básicos de Inteligência Artificial aplicados à programação, compreendendo como os algoritmos aprendem, classificam e tomam decisões a partir de dados.\nObjeto de conhecimento: Programação, automação e IA no mundo digital\nCompetência: Desenvolver projetos para investigar desafios do mundo empregando a programação e simulação, podendo introduzir Inteligência Artificial.\nHabilidade: (NavEM13CO04) Refinar e abstrair problemas, da especificação à implementação.\nHabilidade: (NavEM13CO05) Criar projetos com Inteligência Artificial e automação criativa.\nHabilidade: (EM13CO09) Identificar tecnologias digitais, sua presença e formas de uso, nas diferentes atividades no mundo do trabalho.",
          },
          {
            title: "2ª Série",
            description:
              "Objeto de conhecimento: Tecnologias emergentes, dados e ética digital\nCompetência: Utilizar tecnologias emergentes, dados e Inteligência Artificial para projetar produtos digitais funcionais e éticos.\nHabilidade: (NavEM13CO13) Compreender como mudanças tecnológicas e uso de Inteligência Artificial afetam a segurança digital e a privacidade, adotando práticas éticas de proteção de dados.\nHabilidade: (NavEM13CO14) Investigar e aplicar tecnologias emergentes (IA, RA, RV, IoT) para criar produtos digitais funcionais e responsáveis.\nHabilidade: (EM13CO08) Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.",
          },
          {
            title: "3ª Série",
            description:
              "Objeto de conhecimento: Empreendedorismo pessoal e inovação com IA\nCompetência: Criar soluções tecnológicas sustentáveis e empreendedoras com impacto social, aplicando a Inteligência Artificial.\nHabilidade: (NavEM13CO23) Desenvolver MVPs com IA, IoT e automação.\nHabilidade: (NavEM13CO24) Gerir projetos e planos de inovação escolar.\nHabilidade: (NavEM13CO25) Empreender soluções de impacto social e ambiental. \nHabilidade: (EM13CO09) Identificar tecnologias digitais, sua presença e formas de uso, nas diferentes atividades no mundo do trabalho.\nHabilidade: (EM13CO10) Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.",
          },
        ],
      },
      {
        title: "Cultura Digital e Midiática",
        type: "detailed",
        items: [
          {
            title: "1ª Série",
            description:
              "Objeto de conhecimento: Alfabetização midiática e informacional\nCompetência: Analisar criticamente informações e narrativas digitais, reconhecendo influências sociais e culturais.\nHabilidade: (NavEM13CO06) Analisar fontes e dados digitais.\nHabilidade: (NavEM13CO07) Aplicar cidadania digital de forma eficiente: fake news, bolhas informacionais e curadoria digital.\nHabilidade: (NavEM13CO08) Explorar conceitos introdutórios de Inteligência Artificial, reconhecendo suas potencialidades e limites éticos aplicados a soluções de aprendizagem.\nHabilidade: (EM13CO20) Criar conteúdos, disponibilizando-os em ambientes virtuais para publicação e compartilhamento, avaliando a confiabilidade e as consequências da disseminação dessas informações.\nHabilidade: (EM13CO22) Produzir e publicar conteúdo como textos, imagens, áudios, vídeos e suas associações, bem como ferramentas para sua integração, organização e apresentação, utilizando diferentes mídias digitais.",
          },
          {
            title: "2ª Série",
            description:
              "Objeto de conhecimento: Cidadania digital, autoria criativa, ética e propriedade intelectual\nCompetência: Produzir e comunicar conteúdos digitais com ética, autoria e propósito social.\nHabilidade: (NavEM13CO15) Criar campanhas digitais e narrativas sociais.\nHabilidade: (NavEM13CO16) Usar plataformas colaborativas de criação, aplicando o jornalismo cidadão.\nHabilidade: (NavEM13CO17) Aplicar princípios de direitos autorais e licenças abertas em tempos de Inteligência Artificial.\nHabilidade: (EM13CO24) Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.",
          },
          {
            title: "3ª Série",
            description:
              "Objeto de conhecimento: Educação midiática responsável\nCompetência: Atuar de forma autônoma, criativa e ética no ecossistema digital contemporâneo.\nHabilidade: (EM13CO25) Dialogar em ambientes virtuais com segurança e respeito às diferenças culturais e pessoais, reconhecendo e denunciando atitudes abusivas.\nHabilidade: (NavEM13CO26) Produzir projetos transmídia, com Inteligência Artificial e storytelling interativo, que impliquem ações digitais de impacto social.\nHabilidade: (EM13CO26) Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.",
          },
        ],
      },
      {
        title: "Design e Fabricação Digital",
        type: "detailed",
        items: [
          {
            title: "1ª Série",
            description:
              "Objeto de conhecimento: Design thinking e resolução de problemas\nCompetência: Aplicar o ciclo de design thinking para criar soluções inovadoras e funcionais.\nHabilidade:  (NavEM13CO09) Refinar e abstrair problemas reais, planejando soluções de forma criativa e colaborativa.\nHabilidade: (NavEM13CO10) Aplicar ferramentas de ideação e prototipagem digital (como Tinkercad, Canva, Figma ou SketchUp).\nHabilidade: (NavEM13CO11) Usar a fabricação digital para testar ideias e validar soluções.\nHabilidade: (NavEM13CO12) Compreender o papel do erro e da experimentação no processo de criação.",
          },
          {
            title: "2ª Série",
            description:
              "Objeto de conhecimento: Tecnologia e fabricação digital\nCompetência: Empregar o ciclo de design de produto em produções autorais.\nHabilidade: (NavEM13CO18) Aplicar ferramentas de fabricação digital.\nHabilidade: (NavEM13CO19) Incorporar IA, RA/RV e IoT em processos de design e prototipagem.\nHabilidade: (NavEM13CO20) Analisar materiais, custo e impacto ambiental de um produto.\nHabilidade: (NavEM13CO21) Trabalhar com dados e métricas para aprimorar a performance de um projeto físico ou digital.",
          },
          {
            title: "3ª Série",
            description:
              "Objeto de conhecimento: Inovação e empreendedorismo\nCompetência: Empreender com inovação e impacto social, por meio da fabricação digital e da Inteligência Artificial aplicada.\nHabilidade: (NavEM13CO27) Analisar o papel das tecnologias digitais e da Inteligência Artificial no mundo do trabalho e na inovação social.\nHabilidade: (NavEM13CO28) Conhecer os fundamentos da Inteligência Artificial e utilizá-la para aprimorar produtos e processos criativos.\nHabilidade: (NavEM13CO29) Desenvolver MVPs (produtos mínimos viáveis) com fabricação digital, automação e Inteligência Artificial aplicada.\nHabilidade: (NavEM13CO30) Criar projetos de empreendedorismo, considerando sustentabilidade e ética tecnológica.",
          },
        ],
      },
    ],
  },
};

export default function App() {
  const [activePage, setActivePage] = useState("general");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const data = CURRICULUM_DATA[activePage] || CURRICULUM_DATA["general"];

  const handleStageChange = (page: string) => {
    setActivePage(page);
    if (typeof window !== "undefined") {
      // Sobe até o topo para garantir que o novo texto não fique cortado
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F1EEF9] font-sans text-[#1B2C49] antialiased selection:bg-[#E7609F] selection:text-white">
      <Toaster position="top-right" richColors />
      <Header
        activePage={activePage}
        setActivePage={handleStageChange}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      <CurriculumLibraryView
        data={data}
        stage={activePage}
        onStageChange={handleStageChange}
      />

      <footer className="bg-white border-t border-zinc-100 py-12">
        <div className="mx-auto max-w-[1100px] px-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-[12px] font-black text-zinc-400 uppercase tracking-widest">
            © 2026 Nave a Vela • Nova Base Curricular para Cultura de Inovação
          </div>
        </div>
      </footer>

      <GlobalExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        curriculumData={CURRICULUM_DATA}
      />
    </div>
  );
}
