import { Link } from 'react-router-dom'
import Section from './Section'
import { INSCRICAO_URL, cursinho, resumo, secoes } from '../data/cursinho'

export default function Cursos() {
  return (
    <Section id="cursos" titulo="Cursos e Treinamentos" subtitulo="Capacitações para quem quer se preparar e se qualificar na área farmacêutica." alt>
      <article className="card card-highlight featured">
        <span className="chip">{INSCRICAO_URL ? secoes.inscricao.acao : secoes.inscricao.emBreve}</span>
        <h3 className="card-title">{cursinho.titulo}</h3>
        <p>{resumo}</p>
        <Link to="/cursos" className="btn">
          Ver detalhes do curso
        </Link>
      </article>
      <p className="cta">
        <Link to="/#contato" className="btn btn-outline-dark">
          Quero saber mais
        </Link>
      </p>
    </Section>
  )
}
