import Section from './Section'
import { cursos } from '../data/content'

export default function Cursos() {
  return (
    <Section id="cursos" titulo="Cursos e Treinamentos" subtitulo="Capacitações para quem quer formular e produzir com qualidade." alt>
      <div className="grid grid-2">
        {cursos.map((c) => (
          <article key={c.titulo} className="card">
            <span className="icon" aria-hidden="true">
              <c.icone size={32} />
            </span>
            <h3>{c.titulo}</h3>
            <p>{c.texto}</p>
          </article>
        ))}
      </div>
      <p className="cta">
        <a href="#contato" className="btn">
          Quero saber mais
        </a>
      </p>
    </Section>
  )
}
