// Cole aqui o link de inscrição quando existir. Vazio mantém o botão como "em breve".
export const INSCRICAO_URL = ''

export const cursinho = {
  titulo: 'Cursinho preparatório SESA/AP',
  lead: 'Revisão e aprofundamento dos principais conteúdos da área farmacêutica para concursos públicos.',
  etiqueta: ' CARGO: FARMACÊUTICO',
  fatos: [
    { valor: '35 h', texto: 'de carga horária por turma' },
    { valor: '7 encontros', texto: 'aulão final  de revisão incluso' },
    { valor: '2 turmas', texto: 'turnos de manhã e tarde' },
    { valor: '140 vagas', texto: '70  por turma' },
  ],
}

export const informacoes = [
  { rotulo: 'Turmas', texto: 'manhã (08h–13h) ou tarde (14h–19h) — 5h de atividades por encontro, com intervalo de 30 minutos.' },
  { rotulo: 'Investimento', texto: 'R$ 150 para estudantes · R$ 200 para profissionais, por inscrição.' },
  { rotulo: 'Vagas', texto: '70 por turma, 140 no total.' },
]

export const secoes = {
  conteudo: {
    titulo: 'Um tema central por encontro',
    subtitulo: 'Cada sábado reúne três disciplinas. As duas turmas seguem o mesmo conteúdo e a mesma ordem.',
  },
  cronograma: {
    titulo: 'Sete sábados de outubro a dezembro',
    aviso: 'Não há encontro em 14/11.',
    inaugural: 'Aula inaugural',
    revisao: 'Revisão geral',
  },
  turmas: {
    titulo: 'Escolha manhã ou tarde',
    subtitulo:
      'Mesmo conteúdo, mesma carga horária. Cada turma tem 5 horas de atividades por dia, com intervalo de 30 minutos.',
    intervalo: 'Intervalo',
  },
  valores: {
    titulo: 'Valor da inscrição',
    descricao: 'Por inscrição, para as 35 horas do curso.',
    diaAvulso: {
      pergunta: 'Quer participar apenas 1 dia?',
      valor: 'R$ 50,00',
      texto: 'por dia de participação.',
    },
  },
  inscricao: {
    titulo: 'Garanta sua vaga na turma da manhã ou da tarde',
    texto:
      'As vagas são limitadas a 70 por turma. Assim que o link de inscrição estiver disponível, ele aparece neste botão.',
    emBreve: 'Inscrições em breve',
    acao: 'Fazer minha inscrição',
  },
}

export const encontros = [
  {
    data: '31/10',
    ordem: '1º encontro',
    titulo: 'Legislação e Regulamentação Sanitária',
    topicos: [
      'Legislação Sanitária',
      'Agência Nacional de Vigilância Sanitária (ANVISA)',
      'Boas Práticas de Fabricação (BPF) e demais boas práticas aplicáveis',
    ],
    destaque: 'Aula inaugural',
  },
  {
    data: '07/11',
    ordem: '2º encontro',
    titulo: 'Controle e Gestão da Qualidade',
    topicos: ['Controle de Qualidade', 'Boas Práticas Clínicas (BPC)', 'Normas ISO'],
  },
  {
    data: '21/11',
    ordem: '3º encontro',
    titulo: 'Farmacologia e Cuidado Clínico',
    topicos: ['Farmacologia', 'Farmácia Clínica', 'Segurança do Paciente'],
  },
  {
    data: '28/11',
    ordem: '4º encontro',
    titulo: 'Farmácia Hospitalar, Pesquisa e Ética',
    topicos: ['Farmácia Hospitalar', 'Pesquisa', 'Ética profissional'],
  },
  {
    data: '05/12',
    ordem: '5º encontro',
    titulo: 'SUS e Gestão Farmacêutica',
    topicos: ['Sistema Único de Saúde (SUS)', 'Assistência Farmacêutica', 'Gestão de Medicamentos'],
  },
  {
    data: '12/12',
    ordem: '6º encontro',
    titulo: 'Ciências Laboratoriais e Toxicologia',
    topicos: ['Microbiologia', 'Análises Clínicas', 'Toxicologia'],
  },
]

export const aulaoFinal = {
  data: '19/12',
  ordem: '7º dia',
  titulo: 'Aulão final',
  subtitulo: 'Revisão geral dos conteúdos',
  texto: 'O último dia fecha o cronograma com uma revisão de tudo o que foi ministrado nos seis encontros.',
}

export const turnos = [
  {
    nome: 'Turma da manhã',
    horario: '08h–13h',
    slots: [
      ['08h00–09h30', '1ª disciplina'],
      ['09h30–11h00', '2ª disciplina'],
      ['11h00–11h30', 'Intervalo'],
      ['11h30–13h00', '3ª disciplina'],
    ],
  },
  {
    nome: 'Turma da tarde',
    horario: '14h–19h',
    slots: [
      ['14h00–15h30', '1ª disciplina'],
      ['15h30–17h00', '2ª disciplina'],
      ['17h00–17h30', 'Intervalo'],
      ['17h30–19h00', '3ª disciplina'],
    ],
  },
]

export const precos = [
  { publico: 'Estudantes', valor: 'R$ 150,00' },
  { publico: 'Profissionais', valor: 'R$ 200,00' },
]
