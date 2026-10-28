import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section wrap">
      <h2>Featured projects</h2>
      <p className="muted">Sanitized descriptions of professional work. Source code and internal details are confidential.</p>
      <div className="grid">
        {projects.map(p => (
          <article className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            {p.note && <p className="note">{p.note}</p>}
            <ul className="tags">{p.tags.map(t => <li className="tag" key={t}>{t}</li>)}</ul>
            <p className="muted small">Professional Project</p>
          </article>
        ))}
      </div>
    </section>
  )
}
