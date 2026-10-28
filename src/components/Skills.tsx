import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section wrap">
      <h2>Technical skills</h2>
      <p className="muted">Highlighted tags are my core, everyday tools. Others are technologies I have working experience with.</p>
      <div className="grid">
        {skillGroups.map(g => (
          <article className="card" key={g.title}>
            <h3>{g.title}</h3>
            <ul className="tags">
              {g.primary.map(s => <li className="tag primary" key={s}>{s}</li>)}
              {g.familiar.map(s => <li className="tag" key={s}>{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
