import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { LinkedInIcon } from './Icons'
import { LINKEDIN } from '../data/profile'

const links = [
  ['education', 'Education'],
  ['bangkit', 'Bangkit'],
  ['teaching', 'Teaching'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
]

export default function Header() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="logo">
          <span className="dot"></span>Richard Leonardo
        </a>
        <div className="navlinks">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn profile" title="LinkedIn">
            <LinkedInIcon />
          </a>
          <ThemeToggle />
          <a className="navcta" href="#contact">Get in touch</a>
        </div>
      </nav>
      <div className="progress-top"></div>
    </header>
  )
}
