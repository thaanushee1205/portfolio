import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <p><b>{profile.name}</b><br /><span className="muted">{profile.role}</span></p>
        <p className="foot-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
        </p>
        <p className="muted small">© {new Date().getFullYear()} {profile.name}</p>
        <a className="btn" href="#home"><ArrowUp size={16} /> Back to top</a>
      </div>
    </footer>
  )
}
