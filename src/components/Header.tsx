import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  ['/#quem-somos', 'Quem somos'],
  ['/#areas', 'Áreas de atuação'],
  ['/#servicos', 'Serviços'],
  ['/cursos', 'Cursos'],
  ['/#equipe', 'Equipe'],
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
