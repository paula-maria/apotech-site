import Section from './Section'
import { equipe } from '../data/content'

const iniciais = (nome: string) =>
  nome
    .replace(/^Prof\. Dr\. /, '')
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

export default function Equipe() {
  return (
    <Section id="equipe" titulo="Nossa equipe" alt>
      <div className="grid grid-3">
        {equipe.map((m) => (
          <div key={m.nome} className="card member">
            <div className="avatar" aria-hidden="true">
              {iniciais(m.nome)}
            </div>
            <h3>{m.nome}</h3>
            <p>{m.cargo}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
