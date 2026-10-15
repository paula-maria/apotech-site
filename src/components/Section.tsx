import type { ReactNode } from 'react'

type Props = { id: string; titulo: string; subtitulo?: string; alt?: boolean; children: ReactNode }

export default function Section({ id, titulo, subtitulo, alt, children }: Props) {
  return (
    <section id={id} className={alt ? 'section alt' : 'section'}>
      <div className="container">
        <h2>{titulo}</h2>
        {subtitulo && <p className="subtitle">{subtitulo}</p>}
        {children}
      </div>
    </section>
  )
}
