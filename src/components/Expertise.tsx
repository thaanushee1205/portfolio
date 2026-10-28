import { useRef, useState, type KeyboardEvent } from 'react'
import { disciplines, statusLabel } from '../data/expertise'

export default function Expertise() {
  const [i, setI] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const d = disciplines[i]

  function onKey(e: KeyboardEvent) {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    const n = (i + dir + disciplines.length) % disciplines.length
    setI(n); tabs.current[n]?.focus()
  }

  return (
    <section id="expertise" className="section wrap">
      <h2>Four disciplines, one engineering approach</h2>
      <p className="muted">Each tag shows how I know it: professional experience, still exploring, or planned.</p>
      <div className="tablist" role="tablist" aria-label="Expertise areas" onKeyDown={onKey}>
        {disciplines.map((x, n) => (
          <button key={x.id} ref={el => { tabs.current[n] = el }} role="tab" id={`tab-${x.id}`} aria-selected={n === i}
            aria-controls="panel" tabIndex={n === i ? 0 : -1} onClick={() => setI(n)}>
            <b>{x.num}</b>{x.title}
          </button>
        ))}
      </div>
      <div className="panel" id="panel" role="tabpanel" aria-labelledby={`tab-${d.id}`} key={d.id}>
        <div>
          <h3>{d.title}</h3>
          <p className="muted">{d.summary}</p>
          <h4>What I build</h4><ul className="dash">{d.build.map(b => <li key={b}>{b}</li>)}</ul>
          <h4>Common challenges</h4><ul className="dash">{d.challenges.map(c => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <h4>Technologies</h4>
          <ul className="tags">{d.tech.map(t => <li key={t.name} className={`tag s-${t.status}`} title={statusLabel[t.status]}>{t.name}</li>)}</ul>
          <ul className="legend">{(['professional', 'exploring', 'planned'] as const).map(s => <li key={s} className={`s-${s}`}>{statusLabel[s]}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
