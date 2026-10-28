import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'About', id: 'about' }, { label: 'Expertise', id: 'expertise' }, { label: 'Technology', id: 'skills' },
  { label: 'Projects', id: 'projects' }, { label: 'Experience', id: 'experience' }, { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(l => { const el = document.getElementById(l.id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="logo" href="#home">TB<span>.</span></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="nav-links" className={open ? 'links open' : 'links'} aria-label="Primary">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn-primary" href={profile.resume} download><Download size={16} /> Download Resume</a>
        </nav>
      </div>
    </header>
  )
}
