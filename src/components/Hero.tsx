import { Download, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolio'

const focus = ['Frontend & Backend Engineering', 'AI Agents & Workflow Automation', 'Cloud & DevOps Engineering']
const chips = ['React', 'TypeScript', 'Go', 'Kafka', 'Docker', 'AWS']

export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="label">Full Stack • AI • Cloud</p>
        <h1>Hi, I’m Thaanushee.</h1>
        <p className="sub">I build scalable applications and explore intelligent systems across the full technology stack.</p>
        <p className="lead">From responsive React interfaces and Go-powered services to AI agent experiments and cloud-native infrastructure, I enjoy solving problems across the software development lifecycle.</p>
        <div className="actions">
          <a className="btn btn-primary" href="#expertise"><ArrowDown size={16} /> Explore My Work</a>
          <a className="btn" href="#contact"><Mail size={16} /> Contact Me</a>
          <a className="btn" href={profile.resume} download><Download size={16} /> Download Resume</a>
        </div>
        <ol className="focus">{focus.map((f, i) => <li key={f}><b>{i + 1}</b>{f}</li>)}</ol>
      </div>
      <div className="terminal" role="img" aria-label="Simulated terminal session introducing my engineering focus">
        <div className="term-bar"><i /><i /><i /><span>~/thaanushee</span></div>
        <pre>{`$ whoami
thaanushee — full stack developer, 4+ yrs

$ stack --core
react  typescript  go  node  kafka

$ status
`}<span className="ok">●</span>{` frontend    shipping
`}<span className="ok">●</span>{` backend     shipping
`}<span className="wip">●</span>{` ai agents   learning
`}<span className="wip">●</span>{` gcp / azure exploring
$ `}<span className="cursor" /></pre>
        <ul className="chips">{chips.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  )
}
