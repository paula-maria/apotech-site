import { Droplets } from 'lucide-react'
import Section from './Section'
import { cases } from '../data/content'

export default function Cases() {
  return (
    <Section id="cases" titulo="Produtos desenvolvidos" subtitulo="Formulações com ativos da biodiversidade amazônica.">
      <div className="grid grid-4">
        {cases.map((c) => (
          <article key={c.titulo} className="card case">
            <div className="case-img" aria-hidden="true">
              <Droplets size={48} />
            </div>
            <span className="chip">{c.categoria}</span>
            <h3>{c.titulo}</h3>
          </article>
        ))}
      </div>
    </Section>
  )
}
