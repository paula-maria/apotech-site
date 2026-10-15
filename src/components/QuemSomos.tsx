import Section from './Section'
import { sobre } from '../data/content'

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
      <div className="grid grid-2">
        <div className="card">
          <h3>Missão</h3>
          <p>{sobre.missao}</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>{sobre.visao}</p>
        </div>
      </div>
      <h3 className="group-title">Valores</h3>
      <div className="grid grid-4">
        {sobre.valores.map((v) => (
          <div key={v.titulo} className="card card-small">
            <h4>{v.titulo}</h4>
            {v.texto && <p>{v.texto}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}
