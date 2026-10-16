import { contato } from '../data/content'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
      <p className="eyebrow">Soluções Inovadoras em Tecnologia e Saúde</p>
      <h1>Soluções Criativas, Resultados Reais</h1>
      <div className="hero-actions">
          <a
            href={`https://wa.me/${contato.telefones[0].numero}`}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar proposta
          </a>
          <a href="#servicos" className="btn btn-outline">
            Conheça os serviços
          </a>
        </div>
      </div>
    </section>
  )
}
