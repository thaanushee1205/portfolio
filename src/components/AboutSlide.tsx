import { useEffect, useState } from 'react'

const focus = ['Frontend Engineering', 'Backend Engineering', 'AI Agent Development', 'Cloud & DevOps']

export default function AboutSlide() {
  const [on, setOn] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setOn(x => (x + 1) % focus.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <section id="about" className="sec about">
      <p className="ghost" aria-hidden>ENGINEER</p>
      <div className="about-grid">
        <ul className="focus-list" aria-label="Focus areas">
          {focus.map((f, i) => <li key={f} className={i === on ? 'on' : ''} onMouseEnter={() => setOn(i)}>{f}</li>)}
        </ul>
        <div className="about-copy">
          <h2>ABOUT <span>ME</span></h2>
          <p className="tagline">Interfaces, services, and infrastructure that hold together.</p>
          <p>I’m a <b>Full Stack Developer</b> with 4+ years of experience building web applications, REST APIs, and containerized microservices. My work leans toward <b>React, TypeScript, and Go</b>, with Node.js and Python where they fit.</p>
          <p>I’ve worked with <b>Docker, Kubernetes, Kafka, and AWS</b>, and I care about <b>testing, code reviews, and maintainable code</b>. I’m also <b>exploring AI agents</b> that connect language models with tools and real workflows.</p>
        </div>
      </div>
    </section>
  )
}
