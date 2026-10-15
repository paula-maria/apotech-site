import { contato, sobre } from '../data/content'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Apotech Jr. · Empresa Júnior de Farmácia · {sobre.apoio.join(' · ')}
          </p>
          <p>
            <a href={contato.instagram.url} target="_blank" rel="noreferrer">
              {contato.instagram.usuario}
            </a>
          </p>
        </div>
      </footer>
      <a
        className="whatsapp"
        href={`https://wa.me/${contato.telefones[0].numero}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
      >
        WhatsApp
      </a>
    </>
  )
}
