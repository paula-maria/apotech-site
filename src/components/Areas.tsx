import { Apple, Building2, FlaskConical, Microscope, Sparkles, Store } from 'lucide-react'
import Section from './Section'
import { areas } from '../data/content'

const icones = [FlaskConical, Sparkles, Apple, Microscope, Store, Building2]

export default function Areas() {
  return (
    <Section
      id="areas"
      titulo="Áreas de atuação"
      subtitulo="Atendemos diferentes setores e públicos, conectando conhecimento farmacêutico a necessidades reais."
    >
      <ul className="areas-grid">
        {areas.map((area, i) => {
          const Icone = icones[i]
          return (
            <li key={area} className="area-item">
              <span className="area-icon">
                <Icone aria-hidden="true" size={20} />
              </span>
              {area}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
