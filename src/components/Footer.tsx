import { contato } from '../data/content'
import { Camera, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-contact">
            <h2>Fale com a gente</h2>
            <ul className="footer-links">
              {contato.telefones.map((telefone) => (
                <li key={telefone.numero}>
                  <a href={`https://wa.me/${telefone.numero}`} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" size={19} />
                    <span>WhatsApp {telefone.exibicao}</span>
                  </a>
                </li>
              ))}
              {contato.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>
                    <Mail aria-hidden="true" size={19} />
                    <span>{email}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={contato.instagram.url} target="_blank" rel="noreferrer">
                  <Camera aria-hidden="true" size={19} />
                  <span>Instagram {contato.instagram.usuario}</span>
                </a>
              </li>
            </ul>
          </div>
          <p>
            © {new Date().getFullYear()} · Apotech Jr 
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
