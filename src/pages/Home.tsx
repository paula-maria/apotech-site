import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import QuemSomos from '../components/QuemSomos'
import Identidade from '../components/Identidade'
import Areas from '../components/Areas'
import Servicos from '../components/Servicos'
import Cursos from '../components/Cursos'
import Equipe from '../components/Equipe'

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const secoes = homeRef.current?.querySelectorAll<HTMLElement>(':scope > section')
    if (!secoes?.length) return

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      secoes.forEach((secao) => secao.classList.add('scroll-reveal-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('scroll-reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    secoes.forEach((secao) => {
      secao.classList.add('scroll-reveal')
      observer.observe(secao)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page" ref={homeRef}>
      <Hero />
      <QuemSomos />
      <Identidade />
      <Areas />
      <Cursos />
      <Servicos />
      <Equipe />
    </div>
  )
}
