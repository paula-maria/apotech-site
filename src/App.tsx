import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Servicos from './components/Servicos'
import Cursos from './components/Cursos'
import Diferenciais from './components/Diferenciais'
import Cases from './components/Cases'
import Equipe from './components/Equipe'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Cursos />
        <Diferenciais />
        <Cases />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
