import { ClipboardCheck, FlaskConical, GraduationCap } from 'lucide-react'

export const contato = {
  emails: ['Apotech.junior@gmail.com'],
  telefones: [
    { exibicao: '(96) 99913-3132', numero: '5596999133132' },
    { exibicao: '(96) 98103-6199', numero: '5596981036199' },
  ],
  instagram: { usuario: '@Apotech.jr', url: 'https://www.instagram.com/Apotech.jr' },
}

export const sobre = {
  descricao:
    'Empresa Júnior vinculada ao curso de Farmácia da Universidade Federal do Amapá (UNIFAP), gerida por estudantes que aplicam seus conhecimentos na prática por meio de serviços para a sociedade.',
  proposito:
    'Aproximar a formação acadêmica das necessidades reais da sociedade com consultoria farmacêutica, desenvolvimento de produtos e soluções de qualidade.',
  conquista:
    'A primeira Empresa Júnior do Departamento de Ciências Biológicas e da Saúde (DCBS) com uma proposta inovadora de consultoria farmacêutica.',
  missao: 'Desenvolver produtos farmacêuticos inovadores e prestar consultoria com excelência e qualidade.',
  visao: 'Ser referência na inserção de acadêmicos de Farmácia na prática profissional.',
  valores: ['Confiança', 'Inovação', 'Criatividade', 'Personalização', 'Qualidade'],
}

export const servicos = [
  {
    icone: ClipboardCheck,
    titulo: 'Consultoria para produtos cosméticos',
    texto: 'Apoio técnico da concepção à adequação do produto, com atenção às normas vigentes da ANVISA.',
    itens: [
      'Formulação teórica',
      'Prototipagem de produto',
      'Melhoramento de formulação',
      'Proteção intelectual',
    ],
  },
  {
    icone: FlaskConical,
    titulo: 'Análises e soluções laboratoriais',
    texto: 'Ensaios e soluções para laboratórios e empresas, com foco na qualidade e confiabilidade dos resultados.',
    itens: ['Ensaios químicos', 'Ensaios físico-químicos', 'Ensaios biológicos'],
  },
  {
    icone: GraduationCap,
    titulo: 'Cursos e palestras',
    texto:
      'Capacitação técnica prática, com conteúdos dinâmicos e atualizados para as demandas do mercado e a formação de profissionais preparados.',
  },
]

export const areas = [
  'Setor farmacêutico',
  'Setor cosmético',
  'Setor alimentício e suplementos/dietéticos',
  'Pesquisa, universidades e instituições públicas',
  'Drogarias e farmácias de manipulação',
  'Micro e pequenas empresas',
]

export const metodologia = [
  { titulo: 'Diagnóstico', texto: 'Entendimento e captação do problema.' },
  { titulo: 'Proposta', texto: 'Solução personalizada e viável.' },
  { titulo: 'Execução', texto: 'Acompanhamento técnico e rigoroso.' },
  { titulo: 'Entrega', texto: 'Resultado e suporte contínuo.' },
]

export const equipe: { nome: string; cargo: string }[] = []

/*
export const equipe = [
  { nome: 'Nicolas Andrade', cargo: 'Presidente' },
  { nome: 'Diraeli Freitas', cargo: 'Vice-presidente' },
  { nome: 'Saile Lacerda', cargo: 'Conselheira estratégica' },
  { nome: 'Lucas Oliveira', cargo: 'Diretor comercial' },
  { nome: 'Tayan Paes', cargo: 'Assessor comercial' },
  { nome: 'Iago Canto', cargo: 'Diretor de marketing' },
  { nome: 'Caike Martins', cargo: 'Assessor de marketing' },
  { nome: 'Davi Almeida', cargo: 'Diretor financeiro / RH' },
  { nome: 'Aimê Mareco', cargo: 'Assessora financeira / RH' },
  { nome: 'Yasmin Santos', cargo: 'Diretora de projetos' },
  { nome: 'Tiago Souto', cargo: 'Assessor de projetos' },
  { nome: 'Julius Maximus', cargo: 'Assessor de projetos' },
]
*/
