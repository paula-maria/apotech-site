import Section from './Section'
import { servicos } from '../data/content'

export default function Servicos() {
  return (
    <Section id="servicos" titulo="Serviços" subtitulo="Do diagnóstico à entrega, soluções técnicas sob medida.">
      <div className="grid grid-2">
        {servicos.map((s) => (
          <article key={s.titulo} className="card service-card">
            <span className="icon" aria-hidden="true">
              <s.icone size={32} />
            </span>
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
            {s.itens && (
              <ul className="check-list">
                {s.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
