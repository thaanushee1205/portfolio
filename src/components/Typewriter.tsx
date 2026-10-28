import { useEffect, useState } from 'react'

interface Props { words: string[]; typeMs?: number; deleteMs?: number; holdMs?: number }

// Types a word, pauses, backspaces it, then types the next one (loops forever).
export default function Typewriter({ words, typeMs = 85, deleteMs = 45, holdMs = 1400 }: Props) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) { // no typing animation: just swap words slowly
      setText(words[i])
      const id = setTimeout(() => setI((i + 1) % words.length), 2500)
      return () => clearTimeout(id)
    }
    const full = words[i]
    let delay = deleting ? deleteMs : typeMs
    if (!deleting && text === full) delay = holdMs
    if (deleting && text === '') delay = 350
    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === '') { setDeleting(false); setI((i + 1) % words.length) }
      else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, i, words, reduced, typeMs, deleteMs, holdMs])

  return (
    <p className="roles">
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">{text}<span className="caret" /></span>
    </p>
  )
}
