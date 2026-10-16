import { Link } from 'react-router-dom'
import { ArrowRight, Award, CalendarDays, Clock } from 'lucide-react'
import Section from './Section'
import { INSCRICAO_URL, cursinho, informacoes, secoes } from '../data/cursinho'

export default function Cursos() {
  return (
    <Section id="cursos" titulo="Cursos e Treinamentos" subtitulo="Capacitações para quem quer se preparar e se qualificar na área farmacêutica." alt>
      <article className="course-card">
        <div className="course-main">
          <span className="course-badge">
            <Award aria-hidden="true" size={14} />
            {INSCRICAO_URL ? secoes.inscricao.acao : secoes.inscricao.emBreve}
          </span>
          <span className="identity-kicker">Preparatório</span>
          <h3>{cursinho.titulo}</h3>
          <p>{cursinho.lead}</p>
          <ul className="course-meta">
            <li>
              <Clock aria-hidden="true" size={15} /> 35 horas
            </li>
            <li>
              <CalendarDays aria-hidden="true" size={15} /> Sábados · manhã ou tarde
            </li>
          </ul>
          <Link to="/cursos" className="course-link">
            Ver conteúdo <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="course-info">
          <h4>Informações</h4>
          {informacoes.map((i) => (
            <p key={i.rotulo}>
              <strong>{i.rotulo}:</strong> {i.texto}
            </p>
          ))}
          <p>Assim que o link de inscrição estiver disponível, ele aparece nesta página.</p>
        </div>
      </article>
    </Section>
  )
}
