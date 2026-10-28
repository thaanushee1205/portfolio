import { useState } from 'react'
import { ArrowDown, ChevronLeft, ChevronRight, FileText, Mail } from 'lucide-react'
import profileImage from '../assets/profile.png'
import { profile } from '../data/portfolio'
import Typewriter from './Typewriter'

const roles = ['Full-Stack Developer', 'Frontend Developer','Backend Developer', 'Code Enthusiast', 'Problem Solver']

const photo = profileImage

const Slide1 = () => (
  <pre className="code" aria-label="Profile summary as code">{`const engineer = {
  name: `}<span className="s">'Thaanushee'</span>{`,
  experience: `}<span className="k">'4+ years'</span>{`,
  focus: [
    `}<span className="s">'frontend'</span>{`, `}<span className="s">'backend'</span>{`,
    `}<span className="s">'ai-agents'</span>{`, `}<span className="s">'cloud'</span>{`,
  ],
  core: [`}<span className="s">'React'</span>{`, `}<span className="s">'TypeScript'</span>{`, `}<span className="s">'Go'</span>{`],
}`}</pre>
)
const Slide2 = () => (
  <ul className="tiles">
    <li style={{ ['--c' as string]: '#8b5cf6' }}>Frontend<small>React · Angular · TypeScript</small></li>
    <li style={{ ['--c' as string]: '#38bdf8' }}>Backend<small>Go · Node.js · Kafka</small></li>
    <li style={{ ['--c' as string]: '#ff5d8f' }}>AI Agents<small>Learning</small></li>
    <li style={{ ['--c' as string]: '#ff9f1c' }}>Cloud & DevOps<small>AWS · Docker · Kubernetes</small></li>
  </ul>
)
const Slide3 = () => (
  <ul className="now">
    <li><b>Now</b>Senior Associate, Software Engineer at Kyndryl</li>
    <li><b>Building</b>Go microservices, Kafka event flows, React interfaces</li>
    <li><b>Exploring</b>AI agents, GCP and Azure</li>
  </ul>
)
const Portrait = () => <img className="portrait" src={photo} alt="Portrait of Thaanushee Balamurugan" />

export default function Intro() {
  const slides = [...(photo ? [Portrait] : []), Slide1, Slide2, Slide3]
  const [i, setI] = useState(0)
  const go = (d: number) => setI((i + d + slides.length) % slides.length)
  const Cur = slides[i]
  const github = profile.github

  return (
    <section id="top" className="hero">
      <div>
        <div className="shot-wrap">
          <div className="shot" role="group" aria-roledescription="carousel" aria-label="Profile highlights">
            <div className="slide" key={i}><Cur /></div>
            <div className="dots" aria-hidden>{slides.map((_, n) => <i key={n} className={n === i ? 'on' : ''} />)}</div>
            <button className="arrow l" onClick={() => go(-1)} aria-label="Previous slide"><ChevronLeft size={18} /></button>
            <button className="arrow r" onClick={() => go(1)} aria-label="Next slide"><ChevronRight size={18} /></button>
            <span className="tag tl">FULLSTACK DEV</span><span className="tag tr">v.2026</span>
          </div>
        </div>
        <dl className="statcard">
          <div><dt>4+</dt><dd>YEARS EXPERIENCE</dd></div>
          <div><dt>5</dt><dd>PROJECTS</dd></div>
          <div><dt>4</dt><dd>SPECIALTIES</dd></div>
        </dl>
      </div>
      <div className="hero-right">
        <p className="avail"><i aria-hidden /> OPEN TO OPPORTUNITIES · CHENNAI, INDIA</p>
        <p className="hi">HI, I’M —</p>
        <h1 className="name g">Thaanushee</h1>
        <Typewriter words={roles} />
        <p className="lede">I work across frontend interfaces, backend services, cloud infrastructure, and application automation. I’m also exploring AI agents that connect language models with tools and real-world workflows.</p>
        <blockquote><p>“Building scalable digital experiences from frontend to cloud.”</p><span>FRONTEND · BACKEND · AI AGENTS · CLOUD</span></blockquote>
        <div className="btns">
          <a className="b white" href="#work" onClick={event => { event.preventDefault(); window.dispatchEvent(new CustomEvent('portfolio:page', { detail: 'work' })) }}>See my work <ArrowDown size={16} /></a>
          <a className="b dark" href="#contact" onClick={event => { event.preventDefault(); window.dispatchEvent(new CustomEvent('portfolio:page', { detail: 'contact' })) }}>Get in touch</a>
          <a className="b ghost" href={profile.resume} download="Thaanushee_Balamurugan_Resume.pdf"><FileText size={16} /> Resume</a>
        </div>
        <div className="find"><span>FIND ME</span>
          {github && <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg></a>}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.82-2.04 3.75-2.04 4 0 4.75 2.63 4.75 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" /></svg></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
    </section>
  )
}
