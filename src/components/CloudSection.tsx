import Section from './Section'
import { clouds, statusText } from '../data/site'

const tools = ['Docker', 'Kubernetes', 'Ansible', 'GitLab CI/CD', 'Linux', 'Unix', 'Shell scripting']

export default function CloudSection() {
  return (
    <Section id="cloud" n="05" label="CLOUD & DEVOPS" title="From code to deployment.">
      <div className="cards three">
        {clouds.map(c => (
          <article key={c.name} className="card static"><h3>{c.name}</h3><p className="muted">{c.note}</p>
            <ul className="chips">{c.services.map(s => <li key={s.name} className={`chip s-${s.status}`} title={statusText[s.status]}>{s.name}</li>)}</ul></article>
        ))}
      </div>
      <h3 className="sub">Also</h3>
      <ul className="chips">{tools.map(t => <li key={t} className="chip s-pro">{t}</li>)}</ul>
    </Section>
  )
}
