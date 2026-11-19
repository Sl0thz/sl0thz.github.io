import { useEffect, useState } from 'react'
import { chapters } from '../data/story'

// Fixed milestone rail (wide screens): shows which chapter of the story you are in
export default function JourneyRail() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(chapters.findIndex((c) => c.id === e.target.id))
        }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    chapters.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const pct = (active / (chapters.length - 1)) * 100

  return (
    <nav className="rail" aria-label="Story chapters">
      <span className="rail-track"></span>
      <span className="rail-fill" style={{ height: `${pct}%` }}></span>
      {chapters.map((c, i) => (
        <a key={c.id} href={`#${c.id}`} className={`rail-item ${i === active ? 'on' : ''} ${i < active ? 'past' : ''}`}>
          <span className="rail-dot"></span>
          <span className="rail-label">{c.label}</span>
        </a>
      ))}
    </nav>
  )
}
