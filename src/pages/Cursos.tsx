import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpenCheck, CalendarDays, Clock, GraduationCap, Users } from 'lucide-react'
import Section from '../components/Section'
import {
  INSCRICAO_URL,
  aulaoFinal,
  cursinho,
  encontros,
  precos,
  secoes,
  turnos,
} from '../data/cursinho'

const icones = [Clock, CalendarDays, GraduationCap, Users]

function BotaoInscricao() {
  if (!INSCRICAO_URL) {
    return (
      <span className="btn btn-disabled" aria-disabled="true">
        {secoes.inscricao.emBreve}
      </span>
    )
  }
  return (
    <a className="btn" href={INSCRICAO_URL} target="_blank" rel="noopener noreferrer">
      {secoes.inscricao.acao}
    </a>
  )
}

export default function Cursos() {
  const encontrosRef = useRef<HTMLDivElement>(null)
  const [podeVoltar, setPodeVoltar] = useState(false)
  const [podeAvancar, setPodeAvancar] = useState(true)

  function atualizarSetas() {
    const trilho = encontrosRef.current
    if (!trilho) return

    const card = trilho.querySelector<HTMLElement>('.course-carousel-slide')
    const espacamento = Number.parseFloat(getComputedStyle(trilho).columnGap) || 0
    const passo = (card?.offsetWidth ?? 0) + espacamento
    setPodeVoltar(trilho.scrollLeft > passo / 2)
    setPodeAvancar(trilho.scrollLeft + trilho.clientWidth < trilho.scrollWidth - 2)
  }

  function navegarEncontros(direcao: -1 | 1) {
    const trilho = encontrosRef.current
    if (!trilho) return

    const card = trilho.querySelector<HTMLElement>('.course-card-item')
    if (!card) return

    const espacamento = Number.parseFloat(getComputedStyle(trilho).columnGap) || 0
    trilho.scrollBy({ left: direcao * (card.offsetWidth + espacamento), behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero course-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Você está em">
            <Link to="/">Início</Link> <span>/</span> <span>Cursos</span>
          </nav>
          <h1>{cursinho.titulo}</h1>
          <p className="eyebrow">{cursinho.etiqueta}</p>
          <p className="hero-text">{cursinho.lead}</p>
          <div className="hero-actions">
            <BotaoInscricao />
            <a href="#conteudo" className="btn btn-outline">
              Ver conteúdo
            </a>
          </div>
        </div>
      </section>

      <section className="course-facts-strip" aria-label="Informações do curso">
        <div className="container">
          <ul className="facts">
            {cursinho.fatos.map((f, i) => {
              const Icone = icones[i]
              return (
                <li key={f.texto}>
                  <Icone aria-hidden="true" size={22} />
                  <b>{f.valor}</b>
                  <span>{f.texto}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <Section
        id="conteudo"
        titulo={secoes.conteudo.titulo}
        subtitulo={secoes.conteudo.subtitulo}
      >
        <div className="course-carousel">
          <div className="course-carousel-controls" aria-label="Controles do carrossel">
            <button type="button" className="carousel-button" aria-label="Encontros anteriores" disabled={!podeVoltar} onClick={() => navegarEncontros(-1)}>
              <ArrowLeft aria-hidden="true" size={20} />
            </button>
            <button type="button" className="carousel-button" aria-label="Próximos encontros" disabled={!podeAvancar} onClick={() => navegarEncontros(1)}>
              <ArrowRight aria-hidden="true" size={20} />
            </button>
          </div>
          <div className="course-carousel-track" ref={encontrosRef} onScroll={atualizarSetas} aria-label="Encontros do curso">
            {encontros.map((e) => (
              <article key={e.data} className="card course-card-item course-carousel-slide">
                <span className="chip">
                  {e.data} · {e.ordem}
                </span>
                <h3 className="card-title">{e.titulo}</h3>
                <ul className="check-list">
                  {e.topicos.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <article className="card card-highlight card-wide course-card-item">
            <BookOpenCheck className="final-class-icon" aria-hidden="true" size={30} />
            <div className="final-class-content">
              <span className="chip">
                {aulaoFinal.data} · {aulaoFinal.titulo}
              </span>
              <h3 className="card-title">{aulaoFinal.subtitulo}</h3>
              <p>{aulaoFinal.texto}</p>
            </div>
          </article>
        </div>
      </Section>

      <Section id="cronograma" titulo={secoes.cronograma.titulo} alt>
        <ol className="schedule">
          {[...encontros, aulaoFinal].map((e, i, todos) => {
            const destaque = i === 0 || i === todos.length - 1
            return (
              <li key={e.data} className={destaque ? 'schedule-row hl' : 'schedule-row'}>
                <span className="schedule-date">{e.data}</span>
                <span className="schedule-title">
                  {i === 0 ? secoes.cronograma.inaugural : e.titulo}
                  {i === 0 && <small>{e.titulo}</small>}
                  {i === todos.length - 1 && <small>{secoes.cronograma.revisao}</small>}
                </span>
                <span className="schedule-order">{e.ordem}</span>
              </li>
            )
          })}
        </ol>
        <p className="note">{secoes.cronograma.aviso}</p>
      </Section>

      <Section
        id="turmas"
        titulo={secoes.turmas.titulo}
        subtitulo={secoes.turmas.subtitulo}
      >
        <div className="grid grid-2">
          {turnos.map((t) => (
            <article key={t.nome} className="card course-card-item">
              <h3 className="turn-title">
                {t.nome} <span>{t.horario}</span>
              </h3>
              <ul className="slots">
                {t.slots.map(([hora, desc]) => (
                  <li key={hora} className={desc === secoes.turmas.intervalo ? 'break' : undefined}>
                    <b>{hora}</b>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="valores" titulo={secoes.valores.titulo} alt>
        <div className="grid grid-2">
          {precos.map((p) => (
            <article key={p.publico} className="card price course-card-item">
              <span className="chip">{p.publico}</span>
              <p className="price-amount">{p.valor}</p>
              <p>{secoes.valores.descricao}</p>
            </article>
          ))}
        </div>
        <details className="day-price">
          <summary className="day-pass-question">{secoes.valores.diaAvulso.pergunta}</summary>
          <p>
            <b>{secoes.valores.diaAvulso.valor}</b> {secoes.valores.diaAvulso.texto}
          </p>
        </details>
      </Section>

    </>
  )
}
