import { Link } from 'react-router-dom'
import { ArrowRight, Award, CalendarRange, Clock, ListChecks, Sun } from 'lucide-react'
import Section from './Section'
import { INSCRICAO_URL, cursinho, informacoes, precos, secoes } from '../data/cursinho'

export default function Cursos() {
  return (
    <Section id="cursos" titulo="Cursos e Treinamentos" subtitulo="Capacitações para quem quer se preparar e se qualificar na área farmacêutica." alt>
      <article className="course-card">
        <div className="course-main">
          <span className="course-badge">
            <Award aria-hidden="true" size={14} />
            {INSCRICAO_URL ? 'Inscrições abertas' : secoes.inscricao.emBreve}
          </span>
          <span className="identity-kicker">Preparatório</span>
          <h3>{cursinho.titulo}</h3>
          <p>{cursinho.lead}</p>
          <ul className="course-meta">
            <li><Clock aria-hidden="true" size={16} /><strong>35 horas por turma</strong></li>
            <li><ListChecks aria-hidden="true" size={16} /><strong>7 encontros</strong></li>
            <li><CalendarRange aria-hidden="true" size={16} /><strong>31 de outubro a 19 de dezembro</strong></li>
            <li><Sun aria-hidden="true" size={16} /><strong>Sábados · manhã ou tarde</strong></li>
          </ul>
          <div className="course-actions">
            <Link to="/cursos" className="course-link">
              Ver conteúdo <ArrowRight aria-hidden="true" size={16} />
            </Link>
            {INSCRICAO_URL && (
              <a className="course-link" href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer">
                Inscreva-se <ArrowRight aria-hidden="true" size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="course-info">
          <h4>Informações</h4>
          <div className="course-info-grid">
            {informacoes.map((i) => (
              <div key={i.rotulo} className="course-info-item">
                <h5>{i.rotulo}</h5>
                {i.rotulo === 'Investimento' ? (
                  <div className="course-prices">
                    {precos.map((preco) => (
                      <div className="course-price" key={preco.publico}>
                        <span>{preco.publico}</span>
                        <strong>{preco.valor}</strong>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{i.texto}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Section>
  )
}
