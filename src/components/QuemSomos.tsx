import Section from './Section'
import { metodologia, sobre } from '../data/content'

export default function QuemSomos() {
  return (
    <Section id="quem-somos" titulo="Quem somos" subtitulo={sobre.descricao} alt>
      <p className="lead">{sobre.proposito}</p>
      <p className="chips">
        {sobre.apoio.map((a) => (
          <span key={a} className="chip">
            {a}
          </span>
        ))}
      </p>
      <div className="grid grid-2 identity-grid">
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
      </div>
      <div className="identity-values">
        <div className="identity-heading">
          <span className="identity-kicker">O que nos guia</span>
          <h3 className="group-title">Valores</h3>
        </div>
        <div className="grid grid-2 values-grid">
          {sobre.valores.map((v) => (
            <article key={v.titulo} className="card value-card">
              <h4>{v.titulo}</h4>
              {v.texto && <p>{v.texto}</p>}
            </article>
          ))}
        </div>
      </div>
      <h3 className="group-title">Como trabalhamos</h3>
      <ol className="steps">
        {metodologia.map((m, i) => (
          <li key={m.titulo}>
            <span className="step-num">{i + 1}</span>
            <h4>{m.titulo}</h4>
            <p>{m.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
