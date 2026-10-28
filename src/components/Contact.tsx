import { useState, type FormEvent } from 'react'
import { Mail, ExternalLink } from 'lucide-react'
import { profile } from '../data/portfolio'

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({})

  // No backend: validating, then opening the visitor's email app with the message pre-filled.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const v = (k: string) => String(f.get(k) ?? '').trim()
    const next: Errors = {}
    if (!v('name')) next.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) next.email = 'Enter a valid email address, like name@example.com.'
    if (!v('subject')) next.subject = 'Enter a subject.'
    if (v('message').length < 10) next.message = 'Write a message of at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) return
    const body = `${v('message')}\n\nFrom: ${v('name')} (${v('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v('subject'))}&body=${encodeURIComponent(body)}`
  }

  const field = (id: keyof Errors, label: string, area = false) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {area
        ? <textarea id={id} name={id} rows={5} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
        : <input id={id} name={id} type={id === 'email' ? 'email' : 'text'} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />}
      {errors[id] && <p className="err" id={`${id}-err`} role="alert">{errors[id]}</p>}
    </div>
  )

  return (
    <section id="contact" className="section wrap">
      <h2>Have a project or opportunity in mind?</h2>
      <div className="two">
        <div className="prose">
          <p>I’m open to full-stack development roles, software engineering opportunities, and technical collaborations. Send a note and I’ll reply by email.</p>
          <p><a className="inline" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a></p>
          <p><a className="inline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></p>
        </div>
        <form onSubmit={onSubmit} noValidate>
          {field('name', 'Name')}{field('email', 'Email')}{field('subject', 'Subject')}{field('message', 'Message', true)}
          <button className="btn btn-primary" type="submit">Open in email app</button>
          <p className="muted small">This opens your email app with the message ready to send. Nothing is stored on this site.</p>
        </form>
      </div>
    </section>
  )
}
