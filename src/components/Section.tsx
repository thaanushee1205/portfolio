import type { ReactNode } from 'react'

export default function Section({ id, n, label, title, text, children }: { id: string; n: string; label: string; title: ReactNode; text?: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <p className="meta">{n} — {label}</p>
      <h2>{title}</h2>
      {text && <p className="muted intro-text">{text}</p>}
      {children}
    </section>
  )
}
