import { ClipboardCheck, FlaskConical, Microscope, GraduationCap } from 'lucide-react'

export const contato = {
  emails: ['Apotech.junior@gmail.com', 'fabio@unifap.br', 'sailelcrd@gmail.com'],
  telefones: [
    { exibicao: '(96) 99913-3132', numero: '5596999133132' },
    { exibicao: '(96) 98103-6199', numero: '5596981036199' },
  ],
  instagram: { usuario: '@Apotech.jr', url: 'https://www.instagram.com/Apotech.jr' },
}

export const sobre = {
  descricao:
    'Empresa Júnior do Curso de Farmácia da Universidade Federal do Amapá (UNIFAP), dedicada à consultoria técnica e ao desenvolvimento de produtos químicos, farmacêuticos, cosméticos e dietéticos.',
  proposito:
    'Suprir a escassez de serviços técnicos especializados e consultorias farmacêuticas no Amapá, apoiando micro e pequenos empreendedores, promovendo inovação e inserindo estudantes na prática profissional.',
  apoio: ['UNIFAP', 'PROEAC', 'FOGAP'],
  missao: 'Desenvolver produtos farmacêuticos inovadores e prestar consultoria com excelência e qualidade.',
  visao: 'Ser referência na inserção de acadêmicos de Farmácia na prática profissional.',
  valores: [
    { titulo: 'Confiança', texto: '' },
    { titulo: 'Inovação', texto: '' },
    { titulo: 'Criatividade', texto: '' },
    { titulo: 'Personalização', texto: '' },
    { titulo: 'Qualidade', texto: '' },
    { titulo: 'Ética', texto: 'Transparência e proteção rigorosa de processos e dados.' },
    { titulo: 'Impacto', texto: 'Foco nas necessidades dos parceiros e da sociedade.' },
  ],
}

export const servicos = [
  {
    icone: ClipboardCheck,
    titulo: 'Consultoria Regulatória',
    texto:
      'Adequação às normas da ANVISA e órgãos reguladores, registro de produtos, implementação de Boas Práticas de Fabricação (BPF) e proteção intelectual.',
  },
  {
    icone: FlaskConical,
    titulo: 'Desenvolvimento Técnico e Inovação em Fórmulas',
    texto:
      'Desenvolvimento e otimização de formulações para medicamentos, cosméticos, suplementos/dietéticos e saneantes.',
  },
  {
    icone: Microscope,
    titulo: 'Análises Laboratoriais',
    texto: 'Ensaios químicos, físico-químicos e biológicos com equipamentos de alta performance.',
  },
  {
    icone: GraduationCap,
    titulo: 'Cursos e Treinamentos',
    texto: 'Capacitações em formulação de cosméticos e produção de medicamentos.',
  },
]

export const areas = [
  'Setor Farmacêutico',
  'Setor Cosmético',
  'Alimentício e Suplementos/Dietéticos',
  'Pesquisa, Universidades e Instituições Públicas',
  'Drogarias, Farmácias de Manipulação e Micro/Pequenas Empresas',
]

export const diferenciais = [
  { titulo: 'Custo-benefício', texto: 'Investimento acessível sem perder alta qualidade.' },
  {
    titulo: 'Inovação acadêmica',
    texto: 'Acesso direto a laboratórios e professores especializados da UNIFAP.',
  },
  { titulo: 'Foco no cliente', texto: 'Atendimento dedicado, exclusivo e personalizado.' },
]

export const metodologia = [
  { titulo: 'Diagnóstico', texto: 'Entendimento e captação do problema.' },
  { titulo: 'Proposta', texto: 'Solução personalizada e viável.' },
  { titulo: 'Execução', texto: 'Acompanhamento técnico e rigoroso.' },
  { titulo: 'Entrega', texto: 'Resultado e suporte contínuo.' },
]

export const cases = [
  { titulo: 'Sérum Facial de Pracaxi', categoria: 'Cosmético' },
  { titulo: 'Sabonete Facial de Espirulina', categoria: 'Cosmético' },
  { titulo: 'Espuma de Limpeza Facial de Breu Branco', categoria: 'Cosmético' },
  { titulo: 'Protetor Solar de Castanha do Brasil (FPS 60)', categoria: 'Cosmético' },
]

export const equipe = [
  {
    nome: 'Prof. Dr. Francisco Fábio',
    cargo: 'Professor Associado do Curso de Farmácia · Bolsista DT nível 2 - CNPq',
  },
  { nome: 'Saile Lacerda', cargo: 'CEO / Representante Oficial' },
  { nome: 'Euriany Araújo', cargo: 'Projetos e Consultoria' },
  { nome: 'Marjorie Soares', cargo: 'Marketing e Relacionamento' },
  { nome: 'Luís Gustavo', cargo: 'Financeiro' },
]
