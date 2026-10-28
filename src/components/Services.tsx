import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="section wrap">
      <h2>What I do</h2>
      <div className="grid">
        {services.map(({ title, text, icon: Icon }) => (
          <article className="card" key={title}>
            <Icon size={22} className="icon" aria-hidden />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
