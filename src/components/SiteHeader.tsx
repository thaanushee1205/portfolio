import { useEffect, useState } from 'react'

const links = [['HOME', 'top'], ['STACK', 'toolkit'], ['PROJECTS', 'work'], ['CONTACT', 'contact']]

export default function SiteHeader() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const sync = () => setActive(location.hash.slice(1) || 'top')
    const navigate = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('.nav-wrap a[href^="#"]')
      if (!link) return
      event.preventDefault()
      const id = link.hash.slice(1)
      window.dispatchEvent(new CustomEvent('portfolio:page', { detail: id }))
    }
    sync()
    window.addEventListener('hashchange', sync)
    document.addEventListener('click', navigate)
    return () => {
      window.removeEventListener('hashchange', sync)
      document.removeEventListener('click', navigate)
    }
  }, [])
  return (
    <header className="nav-wrap">
      <div className="pill">
        <a className="brand" href="#top"><span>&gt;_</span> THAANUSHEE.DEV</a>
        <nav aria-label="Primary">
          {links.map(([l, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{l}</a>)}
        </nav>
      </div>
    </header>
  )
}
