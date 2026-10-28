const highlights = ['4+ years of experience', 'React.js and TypeScript development', 'Go and Node.js backend development', 'AWS, Docker, Kubernetes, and CI/CD exposure']

export default function About() {
  return (
    <section id="about" className="section wrap">
      <h2>About me</h2>
      <div className="two">
        <div className="prose">
          <p>I’m a Full Stack Developer with 4+ years of experience building web applications, REST APIs, and containerized microservices. I work across the stack, from reusable React and Angular interfaces to Go and Node.js services.</p>
          <p>My day-to-day includes REST API integration, Docker and Kubernetes deployments, CI/CD and infrastructure automation, and Kafka-based event-driven systems. I care about code quality, testing, clear collaboration, and learning continuously.</p>
        </div>
        <ul className="facts">{highlights.map(h => <li key={h}>{h}</li>)}</ul>
      </div>
    </section>
  )
}
