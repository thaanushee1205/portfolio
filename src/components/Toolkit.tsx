import { useState, type CSSProperties } from 'react'
import Section from './Section'
import { statusText } from '../data/site'
import { stack, type Tool } from '../data/stack'

function Icon({ tool, size }: { tool: Tool; size: number }) {
  const [n, setN] = useState(0)
  const url = tool.icons[n]
  if (!url) return <span className="sm-letter" aria-hidden>{tool.name[0]}</span>
  return <img src={url} alt="" width={size} height={size} loading="lazy" onError={() => setN(n + 1)} />
}

export default function Toolkit() {
  const renderGroup = (g: (typeof stack)[number], i: number, duplicate = false) => {
    const tile = g.big ? 120 : 73
    const cols = Math.min(g.tools.length, 5)
    return (
      <article key={`${g.title}-${duplicate ? 'copy' : 'main'}`} className={g.grow ? 'sm-group grow' : 'sm-group'} aria-hidden={duplicate || undefined} style={{ '--stack-delay': `${i * 130}ms` } as CSSProperties}>
        <header className="sm-head"><span className="sm-badge">{String(i % stack.length + 1).padStart(2, '0')}</span><h3>{g.title}</h3><span className="sm-count">{g.tools.length}</span></header>
        <ul className="sm-grid" style={{ gridTemplateColumns: `repeat(${cols}, ${tile}px)` }}>
          {g.tools.map(t => (
            <li key={t.name} className={`sm-tile ${g.big ? 'big' : 'small'} s-${t.status}`} title={statusText[t.status]}>
              <Icon tool={t} size={g.big ? 32 : 28} /><span>{t.name}</span>
            </li>
          ))}
        </ul>
        {g.also && <ul className="sm-also">{g.also.map(a => <li key={a.name} className={`s-${a.status}`} title={statusText[a.status]}>{a.name}</li>)}</ul>}
      </article>
    )
  }

  return (
    <Section id="toolkit" n="02" label="TOOLKIT" title={<>The Stack <em>Matrix</em></>}>
      <ul className="legend"><li className="s-pro">Professional</li><li className="s-exploring">Exploring</li><li className="s-learning">Learning</li></ul>
      <div className="sm-stack" aria-label="Stack Matrix carousel">
        <div className="sm-track">
          {[...stack.map((group, i) => renderGroup(group, i)), ...stack.map((group, i) => renderGroup(group, i, true))]}
        </div>
      </div>
    </Section>
  )
}
