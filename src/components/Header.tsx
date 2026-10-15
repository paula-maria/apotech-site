import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/#quem-somos', 'Quem somos'],
  ['/#servicos', 'Serviços'],
  ['/cursos', 'Cursos'],
  ['/#diferenciais', 'Diferenciais'],
  ['/#cases', 'Cases'],
  ['/#equipe', 'Equipe'],
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Apotech <span>Jr.</span>
        </Link>
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
            <Link key={href} to={href} onClick={() => setAberto(false)}>
              {label}
            </Link>
          ))}
          <Link to="/#contato" className="btn btn-small" onClick={() => setAberto(false)}>
            Fale conosco
          </Link>
        </nav>
      </div>
    </header>
  )
}
