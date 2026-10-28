import { useEffect, useLayoutEffect } from 'react'
import SiteHeader from './components/SiteHeader'
import Intro from './components/Intro'
import AboutSlide from './components/AboutSlide'
import Career from './components/Career'
import Toolkit from './components/Toolkit'
import Work from './components/Work'
import Reach from './components/Reach'
import SiteFooter from './components/SiteFooter'
import SlideDots from './components/SlideDots'

export default function App() {
  useLayoutEffect(() => {
    document.documentElement.classList.add('book-pages')
    const pages = Array.from(document.querySelectorAll<HTMLElement>('.hero, .sec'))
    const ids = pages.map(page => page.id)
    let current = 0
    let moving = false

    const activate = (next: number) => {
      if (moving || next < 0 || next >= pages.length || next === current) return
      moving = true
      const outgoing = pages[current]
      const incoming = pages[next]
      const forward = next > current

      outgoing.classList.remove('book-active')
      outgoing.classList.add(forward ? 'book-leave-left' : 'book-leave-right')
      incoming.classList.remove('book-leave-left', 'book-leave-right')
      incoming.classList.add(forward ? 'book-enter-right' : 'book-enter-left', 'book-active')
      incoming.classList.add('in')
      history.replaceState(null, '', `#${ids[next] || incoming.id}`)

      document.querySelectorAll('.dots-nav a').forEach(link => {
        if (link.getAttribute('href') === `#${ids[next]}`) link.setAttribute('aria-current', 'true')
        else link.removeAttribute('aria-current')
      })

      window.setTimeout(() => {
        outgoing.classList.remove('book-leave-left', 'book-leave-right')
        incoming.classList.remove('book-enter-right', 'book-enter-left')
        current = next
        moving = false
      }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700)
    }

    current = Math.max(0, ids.indexOf(location.hash.slice(1)))
    pages.forEach((page, index) => page.classList.toggle('book-active', index === current))
    pages[current]?.classList.add('in')

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      if (Math.abs(event.deltaY) < 12) return
      activate(current + (event.deltaY > 0 ? 1 : -1))
    }
    const onKey = (event: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', 'ArrowDown'].includes(event.key)) activate(current + 1)
      if (['ArrowLeft', 'PageUp', 'ArrowUp'].includes(event.key)) activate(current - 1)
    }
    const onDotClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('.dots-nav a')
      if (!link) return
      event.preventDefault()
      activate(ids.indexOf(link.hash.slice(1)))
    }
    const onPageEvent = (event: Event) => activate(ids.indexOf((event as CustomEvent<string>).detail))

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('portfolio:page', onPageEvent)
    document.addEventListener('click', onDotClick)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('portfolio:page', onPageEvent)
      document.removeEventListener('click', onDotClick)
      document.documentElement.classList.remove('book-pages')
    }
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reducedMotion || !finePointer) return

    let lastSpawn = 0
    let frame = 0

    const spawnHeart = (x: number, y: number) => {
      const heart = document.createElement('span')
      heart.className = 'cursor-heart'
      heart.textContent = '♥'
      const size = 14 + Math.random() * 16
      heart.style.left = `${x}px`
      heart.style.top = `${y}px`
      heart.style.fontSize = `${size}px`
      heart.style.setProperty('--drift', `${-28 + Math.random() * 56}px`)
      heart.style.setProperty('--hue', `${190 + Math.floor(Math.random() * 150)}deg`)
      document.body.appendChild(heart)
      heart.addEventListener('animationend', () => heart.remove(), { once: true })
    }

    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const now = performance.now()
        if (now - lastSpawn < 18) return
        lastSpawn = now
        spawnHeart(event.clientX + (Math.random() - .5) * 24, event.clientY + (Math.random() - .5) * 24)
        spawnHeart(event.clientX + (Math.random() - .5) * 28, event.clientY + (Math.random() - .5) * 28)
        spawnHeart(event.clientX + (Math.random() - .5) * 32, event.clientY + (Math.random() - .5) * 32)
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      document.querySelectorAll('.cursor-heart').forEach(heart => heart.remove())
    }
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />
      <SlideDots />
      <main id="main" className="page">
        <Intro /><AboutSlide /><Career /><Toolkit /><Work /><Reach />
      </main>
      <SiteFooter />
    </>
  )
}
