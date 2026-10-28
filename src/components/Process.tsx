import { steps } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="section wrap">
      <h2>My development process</h2>
      <ol className="process">
        {steps.map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, '0')}</b>{s}</li>)}
      </ol>
    </section>
  )
}
