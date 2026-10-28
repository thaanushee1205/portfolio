import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Section from './Section'
import { jobs } from '../data/site'

const company = 'Kyndryl Solutions Private Limited — Chennai, India'

export default function Career() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const n = jobs.length
  const go = (d: 1 | -1) => { setDir(d === 1 ? 'next' : 'prev'); setI((i + d + n) % n) }
  const job = jobs[i]

  return (
    <Section id="experience" n="01" label="EXPERIENCE" title="Where I’ve worked." text="Use the arrows to move between roles.">
      <div className="xp-stage">
        <div aria-live="polite">
          <article key={i} className={`xp-card pop-${dir}`} role="group" aria-roledescription="slide" aria-label={`Experience ${i + 1} of ${n}`}>
            <h3 className="xp-title">{job.title}</h3>
            <p className="xp-period">{job.period}</p>
            <ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul>
            <p className="xp-co">{company}</p>
          </article>
        </div>
        <p className="xp-count">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</p>
        <button className="xp-arrow l" onClick={() => go(-1)} aria-label="Previous experience"><ArrowLeft size={44} strokeWidth={1.5} /></button>
        <button className="xp-arrow r" onClick={() => go(1)} aria-label="Next experience"><ArrowRight size={44} strokeWidth={1.5} /></button>
      </div>
    </Section>
  )
}
