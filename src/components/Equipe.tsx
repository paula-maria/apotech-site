import Section from './Section'
import { equipe } from '../data/content'

export default function Equipe() {
  return (
    <Section id="equipe" titulo="Nossa equipe" alt>
      <div className="grid grid-3">
        {equipe.map((m) => (
          <div key={m.nome} className="card member">
            <img
              className="avatar"
              src={`/equipe/${m.nome.split(' ')[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}.png`}
              alt={`Foto de ${m.nome}`}
              loading="lazy"
            />
            <h3>{m.nome}</h3>
            <p>{m.cargo}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
