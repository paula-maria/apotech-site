import Section from './Section'
import { diferenciais, metodologia } from '../data/content'

export default function Diferenciais() {
  return (
    <Section id="diferenciais" titulo="Diferenciais" alt>
      <div className="grid grid-3">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="card">
            <h3>{d.titulo}</h3>
            <p>{d.texto}</p>
          </div>
        ))}
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
