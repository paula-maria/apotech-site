import Section from './Section'
import { sobre } from '../data/content'

export default function Identidade() {
  return (
    <Section id="identidade" titulo="Missão, visão e valores" alt>
      <div className="grid grid-3 identity-grid">
        <article className="card identity-card">
          <span className="identity-kicker">Nosso propósito</span>
          <h3>Missão</h3>
          <p>{sobre.missao}</p>
        </article>
        <article className="card identity-card">
          <span className="identity-kicker">Onde queremos chegar</span>
          <h3>Visão</h3>
          <p>{sobre.visao}</p>
        </article>
        <article className="card identity-card">
          <span className="identity-kicker">O que nos guia</span>
          <h3>Valores</h3>
          <ul className="identity-values">
            {sobre.valores.map((valor) => (
              <li key={valor}>{valor}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
