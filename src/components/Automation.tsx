import Section from './Section'
import { aiDemos } from '../data/site'

export default function Automation() {
  return (
    <Section id="ai" n="04" label="AI & AUTOMATION" title="Building beyond traditional applications." text="I’m interested in AI agents that connect language models, APIs, tools, and multi-step workflows, with secrets kept on a secure backend, scoped tool access, and human approval for sensitive actions.">
      <div className="cards three">
        {aiDemos.map(d => (<article key={d.name} className="card static"><span className="meta">Proposed concept</span><h3>{d.name}</h3><p className="muted">{d.text}</p></article>))}
      </div>
      <p className="muted small">None of these are built yet. This section will describe exactly what each does once it exists.</p>
    </Section>
  )
}
