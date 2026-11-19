import { useRef } from 'react'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'
import useParallax from '../hooks/useParallax'
import { LinkedInIcon } from './Icons'
import { next } from '../data/story'
import { LINKEDIN } from '../data/profile'

export default function Next() {
  const ref = useRef(null)
  useParallax(ref)
  return (
    <section id="next" className="chapter next" ref={ref}>
      <div className="hero-shapes" aria-hidden="true">
        <span className="shape s1"></span>
        <span className="shape s3"></span>
      </div>
      <div className="wrap">
        <div className="eyebrow">Chapter 07 · Current direction</div>
        <AnimatedText as="h2" className="next-title" lines={['What’s next?']} />
        <Reveal as="p" className="next-statement">{next.statement}</Reveal>
        <Reveal className="chip-row next-chips">
          {next.focus.map((f) => <span className="chip" key={f}>{f}</span>)}
        </Reveal>
        <Reveal className="hero-actions">
          <a className="btn btn-primary" href="#contact">Let’s talk</a>
          <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noopener">
            <LinkedInIcon size={16} /> Connect on LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  )
}
