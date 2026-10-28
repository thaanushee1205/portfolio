import { useEffect, useState } from 'react'

const slides = [['Home', 'top'], ['About', 'about'], ['Experience', 'experience'], ['Stack', 'toolkit'], ['Work', 'work'], ['Contact', 'contact']]

export default function SlideDots() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    slides.forEach(([, id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <nav className="dots-nav" aria-label="Sections">
      {slides.map(([label, id]) => (
        <a key={id} href={`#${id}`} aria-label={label} aria-current={active === id ? 'true' : undefined}><span>{label}</span></a>
      ))}
    </nav>
  )
}
