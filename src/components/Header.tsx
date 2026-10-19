import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/#cursos', 'Cursos'],
  ['/#quem-somos', 'Quem somos'],
  ['/#identidade', 'Missão, visão e valores'],
  ['/#areas', 'Áreas de atuação'],
  ['/#servicos', 'Serviços'],
  ['/#equipe', 'Equipe'],
  ['/cursos', 'Cursos'],
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="/APOTECH.png" alt="Apotech Jr." className="logo-image" />
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
        </nav>
      </div>
    </header>
  )
}
