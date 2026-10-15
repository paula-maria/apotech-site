import Section from './Section'
import { areas } from '../data/content'

export default function Areas() {
  return (
    <Section
      id="areas"
      titulo="Áreas de atuação"
      subtitulo="Atendemos diferentes setores e públicos, conectando conhecimento farmacêutico a necessidades reais."
      alt
    >
      <ul className="chips">
        {areas.map((area) => (
          <li key={area} className="chip">
            {area}
          </li>
        ))}
      </ul>
    </Section>
  )
}
