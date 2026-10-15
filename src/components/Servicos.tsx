import Section from './Section'
import { servicos, areas } from '../data/content'

export default function Servicos() {
  return (
    <Section id="servicos" titulo="Serviços" subtitulo="Do diagnóstico à entrega, soluções técnicas sob medida.">
      <div className="grid grid-2">
        {servicos.map((s) => (
          <article key={s.titulo} className="card">
            <span className="icon" aria-hidden="true">
              <s.icone size={32} />
            </span>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>
      <h3 className="group-title">Áreas de atuação</h3>
      <p className="subtitle">De startups a grandes indústrias, instituições e a sociedade.</p>
      <ul className="chips">
        {areas.map((a) => (
          <li key={a} className="chip">
            {a}
          </li>
        ))}
      </ul>
    </Section>
  )
}
