import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['#quem-somos', 'Quem somos'],
  ['#servicos', 'Serviços'],
  ['#diferenciais', 'Diferenciais'],
  ['#cases', 'Cases'],
  ['#equipe', 'Equipe'],
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          Apotech <span>Jr.</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={aberto}
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? <X /> : <Menu />}
        </button>
        <nav className={aberto ? 'nav open' : 'nav'}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setAberto(false)}>
              {label}
            </a>
          ))}
          <a href="#contato" className="btn btn-small" onClick={() => setAberto(false)}>
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
