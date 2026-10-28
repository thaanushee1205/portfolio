import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/site'

export default function Work() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const n = projects.length
  const go = (d: 1 | -1) => { setDir(d === 1 ? 'next' : 'prev'); setI((i + d + n) % n) }
  const project = projects[i]

  return (
    <Section id="work" n="03" label="SELECTED WORK" title="Things I’ve built." text="Projects spanning full-stack application development, system monitoring, automation, and event-driven services.">
      <div className="work-stage">
        <div aria-live="polite">
          <article key={i} className={`work-card pop-${dir}`} role="group" aria-roledescription="slide" aria-label={`Project ${i + 1} of ${n}`}>
            <p className="work-index">{String(i + 1).padStart(2, '0')} · PROFESSIONAL PROJECT</p>
            <h3 className="work-title">{project.name}</h3>
            <p className="work-summary">{project.overview}</p>
            <dl className="work-details"><div><dt>Contribution</dt><dd>{project.contribution}</dd></div><div><dt>Architecture</dt><dd>{project.architecture}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl>
            <ul className="work-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </article>
        </div>
        <p className="work-count">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</p>
        <button className="work-arrow l" onClick={() => go(-1)} aria-label="Previous project"><ArrowLeft size={44} strokeWidth={1.5} /></button>
        <button className="work-arrow r" onClick={() => go(1)} aria-label="Next project"><ArrowRight size={44} strokeWidth={1.5} /></button>
      </div>
    </Section>
  )
}
