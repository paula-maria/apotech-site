import { Trophy } from 'lucide-react'
import { metodologia, sobre } from '../data/content'

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="section about-section">
      <div className="container">
        <div className="about-intro">
          <div className="about-copy">
            <h2 className="about-eyebrow">Quem somos</h2>
            <h3>Ciência farmacêutica a serviço da sociedade.</h3>
            <p className="subtitle">{sobre.descricao}</p>
            <p className="about-purpose">{sobre.proposito}</p>
          </div>
          <aside className="about-award">
            <Trophy className="about-award-icon" aria-hidden="true" size={28} />
            <h3>1º lugar</h3>
            <strong>Demoday UNIFAP 2025</strong>
            <p>{sobre.conquista}</p>
          </aside>
        </div>

        <h3 className="group-title about-method-title">Como trabalhamos</h3>
        <ol className="steps about-steps">
          {metodologia.map((m, i) => (
            <li key={m.titulo}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{m.titulo}</h4>
              <p>{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
