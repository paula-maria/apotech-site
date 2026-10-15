import Section from './Section'
import { diferenciais } from '../data/content'

export default function Diferenciais() {
  return (
    <Section id="diferenciais" titulo="Diferenciais">
      <div className="grid grid-3">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="card">
            <h3>{d.titulo}</h3>
            <p>{d.texto}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
