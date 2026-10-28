import { jobs, company } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section wrap">
      <h2>Professional experience</h2>
      <p className="muted">{company}</p>
      <ol className="timeline">
        {jobs.map(j => (
          <li key={j.title}>
            <h3>{j.title}</h3>
            <p className="muted">{j.period}</p>
            <ul>{j.points.map(p => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
