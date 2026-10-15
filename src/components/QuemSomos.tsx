import Section from './Section'
import { metodologia, sobre } from '../data/content'

export default function QuemSomos() {
  return (
    <Section id="quem-somos" titulo="Quem somos" subtitulo={sobre.descricao} alt>
      <p className="lead">{sobre.proposito}</p>
      <p className="achievement">
        <strong>1º lugar no Demoday UNIFAP 2025</strong>
        <span>{sobre.conquista}</span>
      </p>
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
