import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock, GraduationCap, MessageCircle, Users } from 'lucide-react'
import Section from '../components/Section'
import { contato } from '../data/content'
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
        <div className="grid grid-3">
          {encontros.map((e) => (
            <article key={e.data} className="card course-card-item">
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
          <article className="card card-highlight card-wide course-card-item">
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
        <p className="note">{secoes.valores.aviso}</p>
      </Section>

      <section id="inscricao" className="course-contact-strip">
        <div className="container course-contact-inner">
          <div className="course-contact-copy">
            <h2>Seu próximo passo começa com uma conversa.</h2>
            <p>Tem dúvidas sobre o curso? A equipe Apotech Jr. está aqui para ajudar.</p>
          </div>
          <a
            className="course-contact-button"
            href={`https://wa.me/${contato.telefones[0].numero}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" size={17} />
            <span>Fale com a nossa equipe</span>
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </section>
    </>
  )
}
