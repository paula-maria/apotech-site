import { useState, type FormEvent } from 'react'
import Section from './Section'
import { contato } from '../data/content'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  // Abre o cliente de e-mail; trocar por Formspree/EmailJS quando houver conta.
  const enviar = (e: FormEvent) => {
    e.preventDefault()
    const assunto = encodeURIComponent(`Contato pelo site - ${nome}`)
    const corpo = encodeURIComponent(`${mensagem}\n\nNome: ${nome}\nE-mail: ${email}`)
    window.location.href = `mailto:${contato.emails[0]}?subject=${assunto}&body=${corpo}`
  }

  return (
    <Section id="contato" titulo="Contato" subtitulo="Conte-nos o seu desafio e receba uma proposta personalizada.">
      <div className="grid grid-2">
        <form className="card form" onSubmit={enviar}>
          <label>
            Nome
            <input value={nome} onChange={(e) => setNome(e.target.value)} required />
          </label>
          <label>
            E-mail
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Mensagem
            <textarea rows={5} value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
          </label>
          <button type="submit" className="btn">
            Enviar mensagem
          </button>
        </form>
        <div className="card contact-list">
          <h3>Fale com a gente</h3>
          <ul>
            {contato.telefones.map((t) => (
              <li key={t.numero}>
                <a href={`https://wa.me/${t.numero}`} target="_blank" rel="noreferrer">
                  WhatsApp {t.exibicao}
                </a>
              </li>
            ))}
            {contato.emails.map((m) => (
              <li key={m}>
                <a href={`mailto:${m}`}>{m}</a>
              </li>
            ))}
            <li>
              <a href={contato.instagram.url} target="_blank" rel="noreferrer">
                Instagram {contato.instagram.usuario}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
