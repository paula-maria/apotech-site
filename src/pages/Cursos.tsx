import { Link } from 'react-router-dom'
import { CalendarDays, Clock, GraduationCap, Users } from 'lucide-react'
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
  return (
    <>
      <section className="hero course-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Você está em">
            <Link to="/">Início</Link> <span>/</span> <span>Cursos</span>
          </nav>
          <p className="eyebrow">{cursinho.etiqueta}</p>
          <h1>{cursinho.titulo}</h1>
          <p className="hero-text">{cursinho.lead}</p>
          <div className="hero-actions">
            <BotaoInscricao />
            <a href="#conteudo" className="btn btn-outline">
              Ver conteúdo
            </a>
          </div>
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
        <div className="grid grid-3">
          {encontros.map((e) => (
            <article key={e.data} className="card">
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
          <article className="card card-highlight card-wide">
            <span className="chip">
              {aulaoFinal.data} · {aulaoFinal.titulo}
            </span>
            <h3 className="card-title">{aulaoFinal.subtitulo}</h3>
            <p>{aulaoFinal.texto}</p>
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
            <article key={t.nome} className="card">
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
            <article key={p.publico} className="card price">
              <span className="chip">{p.publico}</span>
              <p className="price-amount">{p.valor}</p>
              <p>{secoes.valores.descricao}</p>
            </article>
          ))}
        </div>
        <p className="note">{secoes.valores.aviso}</p>
      </Section>

      <section id="inscricao" className="hero signup">
        <div className="container">
          <p className="eyebrow">Inscrição</p>
          <h2>{secoes.inscricao.titulo}</h2>
          <p className="hero-text">{secoes.inscricao.texto}</p>
          <div className="hero-actions">
            <BotaoInscricao />
          </div>
        </div>
      </section>
    </>
  )
}
