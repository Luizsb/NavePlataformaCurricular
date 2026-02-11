import React, { useState } from 'react';
import '../styles/theme.css';
import { Header } from './components/Header';
import { CurriculumLibraryView } from './components/CurriculumViews';
import { Toaster } from 'sonner';
import { GlobalExportModal } from './components/GlobalExportModal';

const CURRICULUM_DATA: Record<string, any> = {
  general: {
    title: 'Base Curricular de Inovação Nave à Vela (BCINaV)',
    hero: {
      tagline: 'NAVE À VELA • CURRÍCULO',
      foco: 'Desenvolver sujeitos criativos, críticos e prontos para transformar o mundo.',
      valor_central: 'Autonomia intelectual e consciência ética através da inovação.',
      description_blocks: [
        'Nossa base curricular foi desenhada para formar sujeitos criativos, críticos e prontos para transformar o mundo através da inovação.',
        'A proposta visa a autonomia intelectual, a consciência ética e a capacidade de imaginar e realizar com propósito, unindo pensamento crítico, técnica, imaginação e compromisso social.'
      ]
    },
    sections: [
      {
        title: 'Foco Geral do Eixo Estruturante',
        type: 'detailed',
        items: [
          {
            title: 'Pensamento Computacional',
            description: 'Desenvolve o raciocínio lógico, a aplicação de princípios de abraço e decomposição, e a integração de criatividade e colaboração em projetos maker.'
          },
          {
            title: 'Mundo Digital e IA',
            description: 'Explora o funcionamento das tecnologias digitais, a aplicação de princípios de design digital na criação de produtos e interfaces, e o entendimento do impacto da IA.'
          },
          {
            title: 'Cultura Digital e Midiática',
            description: 'Compreende o papel das mídias digitais, o uso seguro e consciente de tecnologias, a análise crítica de conteúdos, e a produção de conteúdo autoral e ético.'
          },
          {
            title: 'Design e Fabricação Digital',
            description: 'A Base Curricular de Inovação do Nave à Vela (BCINaV) propõe um alinhamento entre a Base Nacional Comum Curricular (BNCC) da Computação e referências internacionais.'
          }
        ]
      }
    ],
    generalCompetencies: [
      { title: 'Criatividade, Inventividade e Experimentação', description: 'Capacidade de imaginar, experimentar e criar soluções originais para problemas reais, por meio da experimentação e prototipagem prática.' },
      { title: 'Pensamento complexo, científico, artístico e sistêmico', description: 'Domínio funcional e criativo de tecnologias digitais, eletrônicas e de fabricação analógica e digital.' },
      { title: 'Ciência, Investigação e Criticidade', description: 'Capacidade de investigar, formular hipóteses, experimentar e validar conclusões de forma crítica.' },
      { title: 'Colaboração e Intercultura', description: 'Habilidade de trabalhar com outras pessoas, respeitando saberes diversos e contextos culturais, valorizando a diversidade.' },
      { title: 'Comunicação e Narração', description: 'Comunicação do seu processo de aprendizagem e resultados de forma clara.' },
      { title: 'Empreendedorismo e Protagonismo', description: 'Capacidade de agir com autonomia, transformar ideias em ação e gerar valor empreendedor para si e para a comunidade.' },
      { title: 'Ética e Cidadania', description: 'Consciência sobre o impacto social, ético e ambiental das tecnologias e das próprias criações e uso consciente das aplicações, por meio da curiosidade e senso de conexão com o mundo que o cerca.' },
      { title: 'Reflexão e Autonomia', description: 'Habilidade de aprender a aprender — refletir sobre o próprio processo e ajustar estratégias.' }
    ],
    wefSkills: [
      { title: 'Competências', subtitle: 'Como abordamos problemas', skills: ['Criatividade', 'Colaboração', 'Comunicação', 'Pensamento crítico'] },
      { title: 'Habilidades Fundamentais', subtitle: 'Como aplicamos nossas habilidades no cotidiano', skills: ['Curiosidade', 'Iniciativa', 'Resiliência', 'Adaptabilidade', 'Liderança', 'Consciência social e cultural'] },
      { title: 'Qualidades de Caráter', subtitle: 'Como nós lidamos com o mundo a nossa volta', skills: ['Alfabetização e leitura', 'Matemática', 'Letramento científico', 'Letramento tecnológico', 'Educação financeira', 'Letramento cultural e cívico'] }
    ]
  },
  ei: {
    title: 'Educação Infantil: Exploradores da Inovação',
    hero: {
      tagline: 'NAVE À VELA • EDUCAÇÃO INFANTIL',
      foco: 'Explorar, imaginar e experimentar o mundo por meio do corpo e dos sentidos.',
      valor_central: 'Descoberta e construção do fazer como linguagem.',
      description_blocks: [
        'Na Educação Infantil, o aprendizado acontece a partir da curiosidade, da imaginação e das múltiplas linguagens que as crianças utilizam para se expressar.',
        'A Educação Tecnológica manifesta-se nas experiências que envolvem reconhecer padrões, resolver problemas e testar hipóteses em ambientes lúdicos.'
      ]
    },
    sections: [
      {
        title: 'Pensamento Computacional',
        type: 'detailed',
        items: [
          {
            title: 'Pensamento Computacional',
            description: 'Competência: Estimular a curiosidade, a imaginação e a autoria nas pequenas criações.\nCompetência: Desenvolver a tolerância ao erro e o prazer em tentar de novo.\nCompetência: Construir junto, compartilhar e cuidar dos materiais e do grupo.\nCompetência: Introduzir noções de “máquina que pensa” e “robô que ajuda”.\nHabilidade: (EI03CO01) Reconhecer padrão de repetição em sequência de sons, movimentos, desenhos.\nHabilidade: (EI03CO02) Expressar as etapas para a realização de uma tarefa de forma clara e ordenada.\nHabilidade: (EI03CO03) Experienciar a execução de algoritmos brincando com objetos (des)plugados.\nHabilidade: (EI03CO05) Comparar soluções algorítmicas para resolver um mesmo problema.\nHabilidade: (EI03CO06) Compreender decisões em dois estados (verdadeiro ou falso).'
          }
        ]
      },
      {
        title: 'Mundo Digital e IA',
        type: 'detailed',
        items: [
          {
            title: 'Mundo Digital e IA',
            description: 'Competência: Introduzir noções de “máquina que pensa” e “robô que ajuda”.\nHabilidade: (EI03CO07) Reconhecer dispositivos eletrônicos (e não-eletrônicos), identificando quando estão ligados ou desligados (abertos ou fechados).\nHabilidade: (EI03CO08) Compreender o concept de interfaces para comunicação com objetos (des)plugados.\nHabilidade: (EI03CO09) Identificar dispositivos computacionais e as diferentes formas de interação.'
          }
        ]
      },
      {
        title: 'Cultura Digital e Midiática',
        type: 'detailed',
        items: [
          {
            title: 'Cultura Digital e Midiática',
            description: 'Competência: Estimular a reflexão e rodas de conversa sobre desenvolver empatia, responsabilidade social e habilidades socioemocionais, moldando cidadãos para uma convivência ética, de forma lúdica.\nHabilidade: (EI03CO10) Utilizar tecnologia digital de maneira segura, consciente e respeitosa.\nHabilidade: (EI03CO11) Adotar hábitos saudáveis de uso de artefatos computacionais, seguindo recomendações de órgãos de saúde competentes.'
          }
        ]
      },
      {
        title: 'Design e Fabricação Digital',
        type: 'detailed',
        items: [
          {
            title: 'Design e Fabricação Digital',
            description: 'Competência: Promover experiências em que as crianças explorem, criem e expressem ideias por meio da construção e transformação de materiais, compreendendo que o ato de fabricar é também uma forma de pensar, comunicar e resolver problemas.\nHabilidade: (EI03FD01) Explorar diferentes materiais e ferramentas (papel, blocks, argila, sucata, tecidos etc.) para representar ideias, histórias ou personagens.\nHabilidade: (EI03FD02) Experimentar diferentes formas de montagem, encaixe, recorte e colagem para criar objetos e estruturas, incluindo de fabricação digital.\nHabilidade: (EI03FD04) Testar, ajustar e reconstruir suas criações, demonstrando persistência e prazer em tentar novamente.\nHabilidade: (EI03FD08) Utilizar recursos tecnológicos simples (câmeras fotográficas, objetos de cortadora laser e impressoras 3D) como extensão do ato de criar.'
          }
        ]
      }
    ]
  },
  ef1: {
    title: 'BCINaV - Ensino Fundamental Anos Iniciais',
    hero: {
      tagline: 'NAVE À VELA • ANOS INICIAIS',
      foco: 'Fazer para compreender: introduzir lógica, causa e efeito, empatia e coautoria; entender e construir tecnologias simples.',
      valor_central: 'Interdisciplinaridade lúdica — ciência, arte e movimento integrados.',
      description_blocks: [
        'O Ensino Fundamental Anos Iniciais tem como propósito desenvolver nos estudantes capacidades de compreensão acerca da computação como uma área de conhecimento, que contribui para explicar o mundo atual e, por meio do domínio da sua linguagem, tornar-se um agente consciente de transformação.',
        'O foco está em formar sujeitos que se expressem e partilham informações, ideias, sentimentos e soluções computacionais utilizando diferentes linguagens e tecnologias digitais de forma criativa, crítica, significativa, reflexiva e ética. A tecnologia é vista como espaço de exploração, descoberta e reflexão.',
        'Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design com Fabricação Digital — articulando teoria e prática com base em projetos.'
      ]
    },
    sections: [
      {
        title: 'Pensamento Computacional',
        type: 'detailed',
        items: [
          {
            title: '1º Ano',
            description: 'Objeto de conhecimento: Ordenação e algoritmos do cotidiano\nCompetência: Reconhecer padrões e sequências em atividades cotidianas.\nHabilidade: Identificar e entender algoritmos, abstração, descrição e depuração de forma lúdica.\nHabilidade: (EF01CO01) Organizar objetos físicos or digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.\nObjeto de conhecimento: Conceituação de algoritmos\nCompetência: Compreender que a tecnologia segue lógicas e ordens.\nHabilidade: (EF01CO02) Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.\nHabilidade: (EF01CO03) Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra ‘Algoritmos’.'
          },
          {
            title: '2º Ano',
            description: 'Objeto de conhecimento: Modelagem de objetos\nCompetência: Utilizar o raciocínio lógico para planejar ações e criar processos simples.\nHabilidade: Entender e explorar os recursos tecnológicos e programas de raciocínio lógico para solucionar problemas cotidianos.\nHabilidade: (EF02CO01) Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.\nObjeto de conhecimento: Algoritmos com repetição simples e lógica sequencial\nCompetência: Utilizar raciocínio lógico e algoritmos com repetições simples.\nHabilidade: (EF02CO02) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo.'
          },
          {
            title: '3º Ano',
            description: 'Objeto de conhecimento: Lógica computacional\nCompetência: Planejar e testar soluções usando raciocínio lógico e linguagem de programação.\nHabilidade: (EF03CO01) Associar os valores \'verdadeiro\' e \'falso\' a sentenças lógicas que dizem respeito a situações do dia a dia, fazendo uso de termos que indicam negação.\nObjeto de conhecimento: Algoritmo com repetições\nCompetência: Utilizar algoritmo de repetição para resolução de problemas.\nHabilidade: (EF03CO02) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração.\nObjeto de conhecimento: Decomposição\nCompetência: Aplicar lógica de condicional e decomposição de problemas.\nHabilidade: Reproduzir programação por blocos para entender condicional (plugado e desplugado).\nHabilidade: (EF03CO03) Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções.'
          },
          {
            title: '4º Ano',
            description: 'Objeto de conhecimento: Matrizes e registros\nCompetência: Criar e testar matrizes reais ou simuladas.\nHabilidade: (EF04CO01) Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações.\nObjeto de conhecimento: Algoritmos com repetições simples e aninhadas\nCompetência: Criar e testar algoritmos aninhados.\nHabilidade: (EF04CO03) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração.'
          },
          {
            title: '5º Ano',
            description: 'Objeto de conhecimento: Listas e grafos\nCompetência: Integrar o pensamento computacional à criação de listas.\nHabilidade: (EF05CO01) Reconhecer objetos do mundo real e/ou digital que podem ser representados através de listas que estabelecem uma organização na qual há um número variável de itens dispostos em sequência, fazendo manipulações simples sobre estas representações.\nHabilidade: Desenvolver o pensamento abstrato para planejar, executar e gerenciar tarefas.\nHabilidade: (EF05CO02) Reconhecer objetos do mundo real e digital que podem ser representados através de grafos que estabelecem uma organization com uma quantidade variável de vértices conectados por arestas, fazendo manipulações simples sobre estas representações.\nObjeto de conhecimento: Lógica Computacional\nCompetência: Integrar pensamento computacional em soluções criativas.\nHabilidade: (EF05CO03) Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores \'verdadeiro\' e \'falso\'.\nHabilidade: (EF05CO04) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.\nObjeto de conhecimento: Algoritmos com seleção condicional\nCompetência: Integrar pensamento computacional em soluções criativas.\nHabilidade: (EF05CO03) Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores \'verdadeiro\' e \'falso\'.\nHabilidade: (EF05CO04) Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.'
          }
        ]
      },
      {
        title: 'Mundo Digital e IA',
        type: 'detailed',
        items: [
          {
            title: '1º Ano',
            description: 'Objeto de conhecimento: Codificação da informação\nCompetência: Reconhecer o papel das tecnologias digitais no cotidiano e representá-lo por meio da codificação.\nHabilidade: (EF01CO04) Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens.\nHabilidade: (EF01CO05) Representar informação usando diferentes codificações.'
          },
          {
            title: '2º Ano',
            description: 'Objeto de conhecimento: Instrução de máquina\nCompetência: Compreender fundamentos da IA de forma lúdica.\nHabilidade: Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware. (Ex. Jogo online de associação)\nHabilidade: (EF02CO03) Identificar que máquinas diferentes executam conjuntos próprios de instruções e que podem ser usadas para definir algoritmos.\nObjeto de conhecimento: Hardware e software\nCompetência: Identificar e diferenciar hardware e software integrando a programação.\nHabilidade: (EF02CO04) Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.'
          },
          {
            title: '3º Ano',
            description: 'Objeto de conhecimento: Interface física\nCompetência: Entender interfaces físicas no cotidiano.\nHabilidade: (EF03CO04) Relacionar o conceito de informação como de dado.\nHabilidade: (EF03CO05) Compreender que dados são estruturados em formatos específicos dependendo da informação armazenada.\nHabilidade: (EF03CO06) Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas (dispositivos de entrada e saída).'
          },
          {
            title: '4º Ano',
            description: 'Objeto de conhecimento: Codificação da informação e programação\nCompetência: Entender, manipular e transmitir dados de modo a codificá-los em formato digital.\nHabilidade: (EF04CO04) Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital).\nHabilidade: (EF04CO05) Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.).\nHabilidade: Entender relações entre hardware, software e machine learning (IA).'
          },
          {
            title: '5º Ano',
            description: 'Objeto de conhecimento: Arquitetura de computadores\nCompetência: Explorar tecnologias de IA e compreender como aprendem.\nHabilidade: Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas\nHabilidade: (EF05CO05) Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento).\nObjeto de conhecimento: Armazenamento\nCompetência: Reconhecer sistemas de armazenamento no dia a dia.\nHabilidade: (EF05CO06) Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.\nObjeto de conhecimento: Sistema\nCompetência: Compreender sistemas, computação em nuvem, entrada e saída de dados, de forma lúdica.\nHabilidade: (EF05CO07) Reconhecer a necessidade de um sistema operacional para a execução de programas e gerenciamento do hardware.'
          }
        ]
      },
      {
        title: 'Cultura Digital e Midiática',
        type: 'detailed',
        items: [
          {
            title: '1º Ano',
            description: 'Objeto de conhecimento: O que é cidadania e cidadania digital\nCompetência: Entender o que é comunidade, cidadania e cidadania digital.\nHabilidade: Desenvolver o pensamento crítico da informação, praticando a gentileza na internet.\nObjeto de conhecimento: Uso de artefatos computacionais\nCompetência: Reconhecer diferentes artefatos computacionais no dia a dia.\nHabilidade: (EF01CO06) Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.\nObjeto de conhecimento: Segurança e responsabilidade no uso de tecnologia computacional\nCompetência: Compreender o uso de tecnologia computacional de forma segura no ambiente digital.\nHabilidade: (EF01CO07) Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.'
          },
          {
            title: '2º Ano',
            description: 'Objeto de conhecimento: Privacidade e segurança: proteção de dados\nCompetência: Introduzir sobre dados, senha segura, informação pública e privada.\nHabilidade: Compreender os riscos da internet: riscos, senha segura, compartilhar com cuidado, rastro digital, conteúdo viral.\nObjeto de conhecimento: Uso de artefatos computacionais\nCompetência: Desenvolver hábitos de segurança digital a partir do uso dos artefatos computacionais.\nHabilidade: (EF02CO05) Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.\nHabilidade: (EF02CO06) Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.'
          },
          {
            title: '3º Ano',
            description: 'Objeto de conhecimento: Uso ético e consciente da internet incluindo a IA\nCompetência: Entender sobre compartilhamento de informações pessoais com segurança.\nHabilidade: Produzir conteúdos digitais em diferentes contextos para que se apropriem do processo de construção da comunicação digital, inclusive com IA.\nHabilidade: Entender sobre ética digital a partir de conteúdos com IA.\nHabilidade: Compreender conteúdos gerados por IA.\nObjeto de conhecimento: Uso de tecnologias educacionais\nCompetência: Utilizar ferramentas digitais para autoexpressão.\nHabilidade: (EF03CO07) Utilizar diferentes navegadores e ferramentas de busca para pesquisar e acessar informações.\nHabilidade: (EF03CO08) Usar ferramentas computacionais em situações didáticas para se expressar em diferentes formatos digitais.\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Produzir conteúdos que mostrem os impactos do meio digital.\nHabilidade: (EF03CO09) Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.'
          },
          {
            title: '4º Ano',
            description: 'Objeto de conhecimento: Saúde Digital (Bullying e Cyberbullying)\nCompetência: Compreender e praticar gentileza online, praticando atitudes contra o cyberbullying.\nHabilidade: Analisar e compreender criticamente as manifestações do cyberbullying e desenvolver atitudes de gentileza online, promovendo ativamente a cultura do respeito e intervindo de forma ética e segura para proteger a si e a outros contra práticas de assédio e violência nas redes.\nObjeto de conhecimento: Introdução a IA generativa\nCompetência: Explorar noções iniciais de Inteligência Artificial.\nHabilidade: Compreender conteúdos gerados por IA generativa.\nObjeto de conhecimento: Uso de tecnologias\nCompetência: Expressar-se utilizando diferentes tecnologias.\nHabilidade: (EF04CO06) Usar diferentes ferramentas computacionais para criação de conteúdo (textos, apresentações, vídeos etc.).\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Entender e representar a importância de fontes seguras.\nHabilidade: (EF04CO07) Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.\nHabilidade: (EF04CO08) Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.'
          },
          {
            title: '5º Ano',
            description: 'Objeto de conhecimento: Machine learning e seus impactos\nCompetência: Compreender como funciona o aprendizado de máquina.\nHabilidade: Utilizar ferramentas e recursos tecnológicos com o objetivo de potencializar o entendimento de IA e suas implicações nas mudanças tecnológicas.\nHabilidade: Experimentar e compreender o uso básico de tecnologias com Inteligência Artificial, reconhecendo suas possibilidades e refletindo sobre suas implicações no cotidiano e nas mudanças tecnológicas.\nObjeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Explicitar conteúdos confiáveis.\nHabilidade: (EF05CO08) Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.\nHabilidade: (EF05CO09) Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais.\nObjeto de conhecimento: Uso de tecnologias computacionais\nCompetência: Expressar-se de forma crítica.\nHabilidade: (EF05CO10) Expressar-se crítica e criativamente na compreensão das mudanças tecnológicas no mundo do trabalho e sobre a evolução da sociedade.'
          }
        ]
      },
      {
        title: 'Design e Fabricação Digital',
        type: 'detailed',
        items: [
          {
            title: '1º Ano',
            description: 'Objeto de conhecimento: Experimentação e observação do fazer manual\nCompetência: Explorar materiais, formas e texturas para compreender que o design e a fabricação são formas de criar soluções para o cotidiano.\nHabilidade: Explorar montagem e desmontagem de objetos simples.\nHabilidade: Experimentar combinações de materiais (papel, sucata, argila). (Ex. engenharia reversa)'
          },
          {
            title: '2º Ano',
            description: 'Objeto de conhecimento: Planejamento e criação manual\nCompetência: Utilizar diferentes materiais e técnicas para imaginar, planejar e construir objetos com propósito.\nHabilidade: Criar objetos funcionais com materiais recicláveis e diversos.\nHabilidade: Representar ideias por meio de desenhos ou esquemas.\nHabilidade: Experimentar aplicações de fabricação digital, diferentes tecnologias, recursos digitais e manuais.\nHabilidade: Trabalhar coletivamente na montagem de pequenos protótipos, incluindo peças de fabricação digital.'
          },
          {
            title: '3º Ano',
            description: 'Objeto de conhecimento: Introdução ao design digital e representação\nCompetência: Explorar ferramentas digitais simples e compreender o processo de transformar ideias em produtos.\nHabilidade: Utilizar softwares ou aplicativos de desenho digital (Paint, TuxPaint, Canva).\nHabilidade: Representar objetos em 2D e 3D de forma criativa e lúdica. (Ex. aprendizagem criativa, led, bateria, materiais não estruturados)\nHabilidade: Criar suas invenções e experimentos que conectam com artefatos digitais e físicos.'
          },
          {
            title: '4º Ano',
            description: 'Objeto de conhecimento: Design, prototipagem e experimentações de soluções\nCompetência: Criar e testar protótipos digitais e analógicos para resolver desafios reais.\nHabilidade: Planejar soluções em grupo para problemas do cotidiano escolar.\nHabilidade: Utilizar ferramentas simples de montagem digital (apps de montagem por blocos).\nHabilidade: Testar e aprimorar criações usando eletrônica básica. (Ex. makey makey, scopabits, protoboard)'
          },
          {
            title: '5º Ano',
            description: 'Objeto de conhecimento: Design, prototipagem e criação de soluções autorais criativas\nCompetência: Desenvolver pequenos projetos de fabricação digital com consciência ética, criativa e sustentável.\nHabilidade: Produzir objetos funcionais usando diversos conhecimentos técnicos contextualizados.(ex: reutilização de materiais).\nHabilidade: Refletir sobre o impacto das criações na comunidade. (Ex. rabisco)'
          }
        ]
      }
    ]
  },
  ef2: {
    title: 'BCINaV - Ensino Fundamental Anos Finais',
    hero: {
      tagline: 'NAVE À VELA • ANOS FINAIS',
      foco: 'Investigar, projetar e compreender a tecnologia como construção social e cultural.',
      valor_central: 'Tolerância ao erro e pensamento investigativo.',
      description_blocks: [
        'O Ensino Fundamental Anos Finais tem como propósito desenvolver nos estudantes uma relação investigativa e criadora com a tecnologia, entendendo-a não apenas como ferramenta, mas como uma construção social, cultural e histórica.',
        'Aqui, aprender com tecnologia significa pensar criticamente, experimentar e criar, compreendendo o impacto das inovações no cotidiano, nas relações humanas e no meio ambiente. O foco está em formar sujeitos curiosos, criativos e resilientes, que aprendem com o erro e valorizam o processo tanto quanto o resultado.',
        'A tecnologia é vista como espaço de exploração, descoberta e reflexão, onde o pensamento computacional e a cultura digital intensificam-se como meios de expressão, de resolução de problemas e de exercício da cidadania.',
        'Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design com Fabricação Digital — articulando teoria e prática com base em projetos.'
      ]
    },
    sections: [
      {
        title: 'Pensamento Computacional',
        type: 'detailed',
        items: [
          {
            title: '6º Ano',
            description: 'Objeto de conhecimento: Programação e Algoritmo\nCompetência: Compreender o raciocínio lógico e o funcionamento básico dos algoritmos e sistemas automatizados.\nHabilidade: (EF06CO01) Classificar informações, agrupando-as em coleções (conjuntos) e associando cada coleção a um ‘tipo de dados’.\nHabilidade: (EF06CO02) Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação.\nHabilidade: (EF06CO03) Descrever com precisão a solução de um problema, construindo o programa que implementa a solução de escrita.\nObjeto de conhecimento: Estratégias de solução de problemas e prototipagem\nCompetência: Empregar diferentes estratégias da computação (decomposição, generalização e reúso) para construir a solução de problemas, empregando a IA em determinados contextos.\nHabilidade: (EF06CO04) Construir soluções de problemas usando a técnica de decomposição e automatizar tais soluções usando uma linguagem de programação.\nHabilidade: (EF06CO05) Identificar os recursos ou insumos necessários (entradas) para a resolução de problemas, bem como os resultados esperados (saídas), determinando os respectivos tipos de dados, e estabelecendo a definição de problema como uma relação entre entrada e saída.\nHabilidade: (EF06CO06) Comparar diferentes casos particulares (instâncias) de um mesmo problema, identificando as semelhanças e diferenças entre eles, e criar um algoritmo para resolver todos, fazendo uso de variáveis (parâmetros) para permitir o tratamento de todos os casos de forma genérica.\nHabilidade: Reconhecer e aplicar princípios básicos de Inteligência Artificial (IA) na resolução de problemas computacionais, compreendendo o uso de dados para o treinamento de sistemas automatizados e avaliando a confiabilidade e os limites das respostas geradas por máquinas.'
          },
          {
            title: '7º Ano',
            description: 'Objeto de conhecimento: Programação utilizando matrizes e grafos\nCompetência: Aplicar princípios da programação e suas características para resolução de problemas.\nHabilidade: (EF07CO01) Criar soluções de problemas para os quais seja adequado o uso de registros e matrizes unidimensionais para descrever suas informações e automatizá-las usando uma linguagem de programação.\nObjeto de conhecimento: Análise e criação de projetos com programação\nCompetência: Empregar diferentes estratégias da computação para construir a solução de problemas com uso de IA.\nHabilidade: (EF07CO02) Analisar programas para detectar e remover erros, ampliando a confiança na sua correção.\nObjeto de conhecimento: Projetos com programação\nCompetência: Empregar programação em diferentes projetos.\nHabilidade: (EF07CO03) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.\nObjeto de conhecimento: Propriedades de grafos\nCompetência: Empregar grafos em projetos educativos.\nHabilidade: (EF07CO04) Explorar propriedades básicas de grafos.\nObjeto de conhecimento: Estratégias de solução de problemas\nCompetência: Empregar diferentes estratégias da computação.\nHabilidade: (EF07CO05) Criar algoritmos fazendo uso da decomposição e do reuso no processo de solução de forma colaborativa e cooperativa e automatizá-los usando uma linguagem de programação.\nObjeto de conhecimento: Fundamentos da IA\nCompetência: Compreender fundamentos da IA.\nHabilidade: Empregar conceitos básicos de Inteligência Artificial (IA) na resolução de problemas computacionais, utilizando estruturas de dados (matrizes, listas ou grafos) para representar, organizar e analisar informações, compreendendo como a IA identifica padrões e relações entre dados para gerar previsões ou classificações simples.'
          },
          {
            title: '8º Ano',
            description: 'Objeto de conhecimento: Programação listas e recursão\nCompetência: Representar soluções de problemas por meio de programas.\nHabilidade: (EF08CO01) Construir soluções de problemas usando a técnica de recursão e automatizar tais soluções usando uma linguagem de programação.\nHabilidade: (EF08CO02) Criar soluções de problemas para os quais seja adequado o uso de listas para descrever suas informações e automatizá-las usando uma linguagem de programação, empregando ou não a recursão como uma técnica de resolver o problema.\nObjeto de conhecimento: Algoritmos clássicos\nCompetência: Entender sobre listas.\nHabilidade: (EF08CO03) Utilizar algoritmos clássicos de manipulação sobre listas.\nObjeto de conhecimento: Projetos com programação\nCompetência: Criar um projeto utilizando a programação.\nHabilidade: (EF08CO04) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.\nObjeto de conhecimento: Fundamentos da IA generativa\nCompetência: Entender e aplicar a IA generativa de modo simples.\nHabilidade: Aplicar princípios de Inteligência Artificial (IA) em projetos computacionais, utilizando estruturas de dados (listas e matrizes) para organizar, analisar e interpretar conjuntos de informações, construindo algoritmos que aprendem com exemplos, classificam ou tomam decisões automatizadas, avaliando sua eficiência e possíveis vieses.'
          }
        ]
      },
      {
        title: 'Mundo Digital e IA',
        type: 'detailed',
        items: [
          {
            title: '6º Ano',
            description: 'Objeto de conhecimento: Fundamentos de transmissão de dados\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética.\nHabilidade: (EF06CO08) Compreender e utilizar diferentes formas de armazenar, manipular, compactar e recuperar arquivos, documentos e metadados.\nHabilidade: (EF06CO07) Entender o processo de transmissão de dados, como a informação é quebrada em pedaços, transmitida em pacotes através de múltiplos equipamentos, e reconstruída no destino.\nObjeto de conhecimento: Gestão de dados\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética.\nHabilidade: (EF06CO07) Entender o processo de transmissão de dados, como a informação é quebrada em pedaços, transmitida em pacotes através de múltiplos equipamentos, e reconstruída no destino.\nHabilidade: (EF06CO08) Compreender e utilizar diferentes formas de armazenar, manipular, compactar e recuperar arquivos, documentos e metadados.\nObjeto de conhecimento: Tecnologia e IA generativa\nCompetência: Entender e aplicar tecnologias com IA generativa.\nHabilidade: Identificar como máquinas e programas executam tarefas.\nHabilidade: Reconhecer diferentes dispositivos tecnológicos e suas funções.\nHabilidade: Explorar noções de automação e inteligência artificial simples.\nHabilidade: Entender as etapas envolvidas na Aprendizagem de Máquina, bem como as práticas e os desafios que cada etapa envolve.\nHabilidade: Entender a história da IA generativa e aplicação de tecnologias.\nHabilidade: Utilizar e criar soluções baseados em treinamento de máquina.'
          },
          {
            title: '7º Ano',
            description: 'Objeto de conhecimento: Protocolos de comunicação\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética com atuação da IA.\nHabilidade: (EF07CO06) Compreender o papel de protocolos para a transmissão de dados.\nObjeto de conhecimento: Fundamentos da segurança cibernética\nCompetência: Entender a importância da segurança cibernética na prática.\nHabilidade: (EF07CO07) Identificar problemas de segurança cibernética e experimentar formas de proteção.\nObjeto de conhecimento: Armazenamento, transmissão de dados e dialogo com ferramentas de IA restritas\nCompetência: Entender como os dados são armazenados, processados e transmitidos usando dispositivos computacionais, considerando aspectos da segurança cibernética com atuação da IA.\nHabilidade: Compreender como os sistemas de Inteligência Artificial (IA) armazenam, processam e utilizam dados para gerar respostas automatizadas, explorando o funcionamento de ferramentas de IA restritas (assistentes virtuais, chatbots, filtros, tradutores) e analisando aspectos de segurança, privacidade e uso ético das informações transmitidas.'
          },
          {
            title: '8º Ano',
            description: 'Objeto de conhecimento: Fundamentos de sistemas distribuídos\nCompetência: Entender os fundamentos de sistemas distribuídos e da internet.\nHabilidade: (EF08CO05) Compreender os conceitos de paralelismo, concorrência e armazenamento/processamento distribuídos.\nObjeto de conhecimento: Internet\nCompetência: Aplicar os fundamentos da internet de forma prática.\nHabilidade: (EF08CO06) Entender como é a estrutura e funcionamento da internet.\nObjeto de conhecimento: Internet e IA generativa\nCompetência: Aplicar os conhecimentos de IA generativa de forma simples.\nHabilidade: Compreender e utilizar a IA na produção de conhecimento na internet.'
          },
          {
            title: '9º Ano',
            description: 'Objeto de conhecimento: Segurança cibernética em tempos de IA\nCompetência: Analisar os impactos da IA e da automação na sociedade contemporânea.\nHabilidade: (EF09CO04) Compreender o funcionamento de malwares e outros ataques cibernéticos.\nCompetência: Entender os fundamentos de sistemas distribuídos e da internet.\nHabilidade: Analisar os riscos e desafios da segurança digital em ambientes mediados por Inteligência Artificial (IA), compreendendo como sistemas automatizados coletam, processam e utilizam dados pessoais, reconhecendo ameaças associadas à IA (como desinformação, deepfakes e manipulação algorítmica) e adotando práticas seguras e éticas no uso da internet.\nObjeto de conhecimento: Projetos com programação\nCompetência: Construir e aplicar programação em projetos autorais.\nHabilidade: (EF09CO02) Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares.'
          }
        ]
      },
      {
        title: 'Cultura Digital e Midiática',
        type: 'detailed',
        items: [
          {
            title: '6º Ano',
            description: 'Objeto de conhecimento: Segurança e responsabilidade no uso da tecnologia\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF06CO09) Apresentar conduta e linguagem apropriadas ao se comunicarem em ambiente digital, considerando a ética e o respeito\nObjeto de conhecimento: Tecnologia Digital\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável.\nHabilidade: (EF09CO06) Analisar problemas sociais de sua cidade e estado a partir de ambientes digitais, propondo soluções.\nHabilidade: (EF09CO07) Avaliar aplicações e implicações políticas, socioambientais e culturais das tecnologias digitais para propor alternativas aos desafios do mundo contemporâneo, incluindo aqueles relativos ao mundo do trabalho.\nObjeto de conhecimento: Saúde Digital\nCompetência: Utilizar a tecnologia de forma saudável.\nHabilidade: Refletir sobre o tempo de tela e o uso ético da internet.'
          },
          {
            title: '7º Ano',
            description: 'Objeto de conhecimento: Impactos da tecnologia digital\nCompetência: Entender e aplicar IA generativa de forma concreta.\nHabilidade: (EF07CO10) Identificar os impactos ambientais do descarte de peças de computadores e eletrônicos, bem como sua relação com a sustentabilidade.\nObjeto de conhecimento: Produção Digital e Cyberbullying\nCompetência: Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas em diferentes contextos.\nHabilidade: (EF07CO11) Criar, documentar e publicar, de forma individual ou colaborativa, produtos (vídeos, podcasts, websites) usando recursos de tecnologia.\nObjeto de conhecimento: Direitos autorais, fake e IA generativa\nCompetência: Relacionar e aplicar conteúdos sobre checagem e veracidade da informação.\nHabilidade: Reconhecer e respeitar direitos autorais e licenças abertas em tempos de IA.\nHabilidade: Identificar fake news e manipulações digitais em tempos de IA.'
          },
          {
            title: '8º Ano',
            description: 'Objeto de conhecimento: Redes sociais e segurança da informação\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.\nHabilidade: (EF08CO07) Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.\nHabilidade: (EF08CO08) Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.\nHabilidade: (EF08CO09) Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.\nObjeto de conhecimento: Uso crítico das mídias digitais\nCompetência: Selecionar e utilizar tecnologias computacionais para se expressar e resolver problemas, analisando criticamente os diferentes impactos na sociedade.\nHabilidade: (EF08CO11) Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.\nObjeto de conhecimento: IA generativa e cidadania digital\nCompetência: Empregar a IA generativa de forma consciente.\nHabilidade: Produzir campanhas digitais com foco em cidadania digital.\nHabilidade: Discutir responsabilidade digital e reputação online em tempos de IA.'
          },
          {
            title: '9º Ano',
            description: 'Objeto de conhecimento: Tecnologia digital e sociedade\nCompetência: Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável.\nHabilidade: (EF09CO06) Analisar problemas sociais de sua cidade e estado a partir de ambientes digitais, propondo soluções.\nHabilidade: (EF09CO07) Avaliar aplicações e implicações políticas, socioambientais e culturais das tecnologias digitais para propor alternativas aos desafios do mundo contemporâneo, incluindo aqueles relativos ao mundo do trabalho.\nObjeto de conhecimento: Autoria em meio digital\nCompetência: Compreender que o meio digital favorece produções éticas.\nHabilidade: (EF09CO09) Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.\nObjeto de conhecimento: Qualidade da informação\nCompetência: Selecionar e utilizar tecnologias de forma crítica.\nHabilidade: (EF09CO10) Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.\nObjeto de conhecimento: Educação midiática e IA generativa\nCompetência: Explorar o uso de ferramentas de IA para combater fake news.\nHabilidade: Desenvolver narrativas transmídia com uso de ferramentas de IA.\nHabilidade: Discutir dados pessoais, rastros digitais e privacidade em tempos de IA.\nHabilidade: Compreender o efeito das fake news e deepfake em tempos de IA.'
          }
        ]
      },
      {
        title: 'Design e Fabricação Digital',
        type: 'detailed',
        items: [
          {
            title: '6º Ano',
            description: 'Objeto de conhecimento: Introdução à fabricação digital\nCompetência: Explorar o funcionamento das tecnologias digitais e compreender o papel do design e da fabricação no cotidiano.\nHabilidade: Compreender o ciclo de design - ideação, prototipagem, teste e aprimoramento.'
          },
          {
            title: '7º Ano',
            description: 'Objeto de conhecimento: Modelagem Digital e Interatividade\nCompetência: Aplicar princípios de design e modelagem digital para criar objetos.\nHabilidade: Experimentar processos de criação digital básica.'
          },
          {
            title: '8º Ano',
            description: 'Objeto de conhecimento: Tecnologias de Impressão 3D e Sustentabilidade\nCompetência: Desenvolver soluções tecnológicas e sustentáveis com propósito social ou ambiental a partir da impressão 3D.\nHabilidade: Utilizar softwares de modelagem 3D e impressão digital.'
          },
          {
            title: '9º Ano',
            description: 'Objeto de conhecimento: Projetos de Inovação Social com Fabricação Digital\nCompetência: Desenvolver projetos de impacto e inovação com fabricação digital e design.\nHabilidade: Integrar design, sustentabilidade e impacto social em projeto.\nHabilidade: Criar produtos que respondam a problemas reais (educação, meio ambiente, saúde, acessibilidade), utilizando a fabricação digital.'
          }
        ]
      }
    ]
  },
  em: {
    title: 'BCINaV - Ensino Médio',
    hero: {
      tagline: 'NAVE À VELA • ENSINO MÉDIO',
      foco: 'Desenvolver autoria tecnológica e capacidade de inovação com impacto social, criar startups educacionais, campanhas digitais e portfólios multimodais.',
      valor_central: 'Autoria e inovação – projeção de soluções complexas com ética, propósito e IA integrada.',
      description_blocks: [
        'O Ensino Médio tem como propósito desafiar os estudantes a analisar, criar e implementar soluções complexas que integrem inteligência artificial, design e pensamento computacional, articulando o conhecimento científico com a criatividade, a ética e o protagonismo juvenil. Essa etapa consolida o percurso formativo iniciado no Ensino Fundamental, estimulando a autonomia intelectual, a colaboração e o pensamento crítico diante dos desafios contemporâneos.',
        'Por meio de projetos interdisciplinares e metodologias ativas, os estudantes investigam problemas reais e elaboram soluções digitais sustentáveis e éticas, expressando-se através de linguagens tecnológicas diversas. Propósito ético e social da criação deve orientar o uso consciente das tecnologias emergentes e do poder transformador da IA.',
        'A aprendizagem fortalece-se como uma experincia de autoria e impacto, em que os jovens constroem startups educacionais, campanhas digitais, produtos inovadores e portfólios multimodais que expressam sua identidade, visão de mundo e compromisso com a coletividade.',
        'Essa etapa organiza-se em uma progressão intencional de competências e habilidades, distribuídas nos quatro eixos estruturantes: Pensamento Computacional, Mundo Digital e IA, Cultura Digital e Midiática, e Design com Fabricação Digital — articulando teoria e prática com base em projetos.'
      ]
    },
    sections: [
      {
        title: 'Pensamento Computacional',
        type: 'detailed',
        items: [
          {
            title: '1ª série',
            description: 'Objeto de conhecimento: Algoritmos e estruturas.\nCompetência: Compreender as possibilidades e os limites da computação para resolver problemas.\nHabilidade: (EM13CO04) Reconhecer o conceito de metaprogramação como uma forma de generalização na construção de programas, permitindo que algoritmos sejam entrada ou saída para outros algoritmos.\nObjeto de conhecimento: Fundamentos da IA generativa.\nCompetência: Elaborar e testar programas utilizando linguagens textuais, analisando os princípios básicos de Inteligência Artificial.\nHabilidade: (EM1CO03) Analisar e experimentar princípios básicos de Inteligência Artificial (IA) aplicados à programação, compreendendo como os algoritmos aprendem, classificam e tomam decisões a partir de dados.\nObjeto de conhecimento: Lógica computacional e Linguagens de programação\nCompetência: Aplicar o raciocínio lógico e o pensamento algorítmico para decompor problemas e estruturar soluções em diversos níveis de abstração.\nHabilidade: (EM1CO02) Elaborar e testar programas utilizando linguagens de programação textuais.\nHabilidade: (EM13CO02) Explorar e construir a solução de problemas por meio de refinamentos, utilizando diversos níveis de abstração desde a especificação até a implementação.'
          },
          {
            title: '2ª série',
            description: 'Objeto de conhecimento: Modelagem algorítmica e tomada de decisão.\nCompetência: Integrar o pensamento computacional ao uso de dados e à automação inteligente, incluindo contextos da IA.\nHabilidade: (EM13CO05) Identificar os limites da computação para diferenciar o que pode ou não ser automatizado, buscando uma compreensão mais ampla dos limites dos processos mentais envolvidos na resolução de problemas.\nHabilidade: (EM13CO03) Implementar automações e scripts simples com IA, e analisar o limite dos processos automatizáveis, identificando e comparando o comportamento dos algoritmos quanto ao consumo de recursos.\nObjeto de conhecimento: Dados, Redes e Ética Digital\nCompetência: Empregar análise de Dados e Fundamentos da Internet.\nHabilidade: (EM13CO03) Identificar o comportamento dos algoritmos no que diz respeito ao consumo de recursos como tempo de execução, espaço de memória e energia, entre outros.\nHabilidade: (EM13CO06) Avaliar software levando em consideração diferentes características e métricas associadas.\nHabilidade: (EM13CO09) Identificar tecnologias digitais, sua presença e formas de uso nas diferentes atividades no mundo do trabalho.'
          },
          {
            title: '3ª série',
            description: 'Objeto de conhecimento: Robótica e Internet das Coisas (IoT).\nCompetência: Desenvolver, de forma ética e responsável, sistemas computacionais avançados (Robótica e IoT) que integrem Inteligência Artificial.\nHabilidade: Desenvolver sistemas integrando IA, automação e sensores.\nHabilidade: (EM13CO15) Analisar a interação entre usuários e artefatos computacionais, abordando aspectos da experiência do usuário e promovendo reflexão sobre a qualidade do uso dos artefatos nas esferas do trabalho, do lazer e do estudo.\nObjeto de conhecimento: Ética em algoritmos, sustentabilidade tecnológica e IA.\nCompetência: Expressar e partilhar informações, ideias e soluções computacionais utilizando diferentes plataformas da Computação de forma fluente, criativa, crítica, significativa, incluindo uma camada de IA.\nHabilidade: (EM13CO18) Planejar e gerenciar projetos integrados às áreas de conhecimento, de forma colaborativa, solucionando problemas, usando diversos artefatos computacionais.\nHabilidade: (EM13CO19) Expor, argumentar e negociar propostas, produtos e serviços, utilizando diferentes mídias e ferramentas digitais.\nHabilidade: (EM13CO16) Desenvolver projetos com robótica, utilizando artefatos físicos ou simuladores.'
          }
        ]
      },
      {
        title: 'Mundo Digital e IA',
        type: 'detailed',
        items: [
          {
            title: '1ª série',
            description: 'Objeto de conhecimento: Programação, automação e IA no mundo digital\nCompetência: Desenvolver projetos para investigar desafios do mundo empregando a programação e simulação, podendo introduzir IA.\nHabilidade: (EM13CO02) Refinar e abstrair problemas, da especificação à implementação.\nHabilidade: Criar projetos com IA generativa e automação criativa.\nHabilidade: (EM13CO09) Identificar tecnologias digitais, sua presença e formas de uso, nas diferentes atividades no mundo do trabalho.'
          },
          {
            title: '2ª série',
            description: 'Objeto de conhecimento: Tecnologias emergentes, dados e ética digital\nCompetência: Utilizar tecnologias emergentes, dados e IA para projetar produtos digitais funcionais e éticos.\nHabilidade: (EM13CO08) Compreender como mudanças tecnológicas e uso de IA afetam a segurança digital e a privacidade, adotando práticas éticas de proteção de dados.\nHabilidade: Investigar e aplicar tecnologias emergentes (IA, RA, RV, IoT) para criar produtos digitais funcionais e responsáveis.\nHabilidade: (EM13CO08) Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.'
          },
          {
            title: '3ª série',
            description: 'Objeto de conhecimento: Empreendedorismo pessoal e inovação com IA\nCompetência: Criar soluções tecnológicas sustentáveis e empreendedoras com impacto social, aplicando a IA.\nHabilidade: Desenvolver MVPs com IA, IoT e automação.\nHabilidade: Gerir projetos e planos de inovação escolar.\nHabilidade: Empreender soluções de impacto social e ambiental.\nHabilidade: (EM13CO09) Identificar tecnologias digitais, sua presença e formas de uso, nas diferentes atividades no mundo do trabalho.\nHabilidade: (EM13CO10) Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.'
          }
        ]
      },
      {
        title: 'Cultura Digital e Midiática',
        type: 'detailed',
        items: [
          {
            title: '1ª série',
            description: 'Objeto de conhecimento: Alfabetização midiática e informacional\nCompetência: Analisar criticamente informações e narrativas digitais, reconhecendo influências sociais, culturais.\nHabilidade: Analisar fontes e dados digitais.\nHabilidade: Aplicar cidadania digital de forma eficiente: fake news, bolhas informacionais e curadoria digital.\nHabilidade: Explorar conceitos introdutórios de IA, reconhecendo suas potencialidades e limites éticos aplicados a soluções de aprendizagem.\nHabilidade: (EM13CO20) Criar conteúdos, disponibilizando-os em ambientes virtuais para publicação e compartilhamento, avaliando a confiabilidade e as consequências da disseminação dessas informações.\nHabilidade: (EM13CO22) Produzir e publicar conteúdo como textos, imagens, áudios, vídeos e suas associações, bem como ferramentas para sua integração, organização e apresentação, utilizando diferentes mídias digitais.'
          },
          {
            title: '2ª série',
            description: 'Objeto de conhecimento: Cidadania digital, autoria criativa, ética e propriedade intelectual.\nCompetência: Produzir e comunicar conteúdos digitais com ética, autoria e propósito social.\nHabilidade: Criar campanhas digitais e narrativas sociais.\nHabilidade: Usar plataformas colaborativas de criação, aplicando o jornalismo cidadão.\nHabilidade: Aplicar princípios de direitos autorais e licenças abertas em tempos de IA.\nHabilidade: (EM13CO24) Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.'
          },
          {
            title: '3ª série',
            description: 'Objeto de conhecimento: Educação midiática responsável\nCompetência: Atuar de forma autônoma, creative e ética no ecossistema digital contemporâneo.\nHabilidade: (EM13CO25) Dialogar em ambientes virtuais com segurança e respeito às diferenças culturais e pessoais, reconhecendo e denunciando atitudes abusivas.\nHabilidade: Produzir projetos transmídia, com IA e storytelling interativo, que impliquem ações digitais de impacto social.\nHabilidade: (EM13CO26) Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.'
          }
        ]
      },
      {
        title: 'Design e Fabricação Digital',
        type: 'detailed',
        items: [
          {
            title: '1ª série',
            description: 'Objeto de conhecimento: Design thinking e resolução de problemas\nCompetência: Aplicar o ciclo de design thinking para criar soluções inovadoras e funcionais.\nHabilidade: (EM13CO02) Refinar e abstrair problemas reais, planejando soluções de forma criativa e colaborativa.\nHabilidade: Aplicar ferramentas de ideação e prototipagem digital (como Tinkercad, Canva, Figma ou SketchUp).\nHabilidade: Usar a fabricação digital para testar ideias e validar soluções.\nHabilidade: Compreender o papel do erro e da experimentação no processo de criação.'
          },
          {
            title: '2ª série',
            description: 'Objeto de conhecimento: Tecnologia e fabricação digital\nCompetência: Empregar o ciclo de design de produto em produções autorais.\nHabilidade: Aplicar ferramentas de fabricação digital.\nHabilidade: Incorporar IA, RA/RV e IoT em processos de design e prototipagem.\nHabilidade: Analisar materiais, custo e impacto ambiental de um produto.\nHabilidade: Trabalhar com dados e métricas para aprimorar a performance de um projeto físico ou digital.'
          },
          {
            title: '3ª série',
            description: 'Objeto de conhecimento: Inovação e empreendedorismo\nCompetência: Empreender com inovação e impacto social, por meio da fabricação digital e da IA aplicada.\nHabilidade: (EM13CO09) Analisar o papel das tecnologias digitais e da IA no mundo do trabalho e na inovação social.\nHabilidade: (EM13CO10) Conhecer os fundamentos da IA e utilizá-la para aprimorar produtos e processos criativos.\nHabilidade: Desenvolver MVPs (produtos mínimos viáveis) com fabricação digital, automação e IA aplicada.\nHabilidade: Criar projetos de empreendedorismo, considerando sustentabilidade e ética tecnológica.'
          }
        ]
      }
    ]
  }
};

export default function App() {
  const [activePage, setActivePage] = useState('general');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const data = CURRICULUM_DATA[activePage] || CURRICULUM_DATA['general'];

  const handleStageChange = (page: string) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      // Sobe até o topo para garantir que o novo texto não fique cortado
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            © 2026 Nave à Vela • Base Curricular de Inovação
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
