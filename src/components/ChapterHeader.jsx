import { useRef } from 'react'
import AnimatedText from './AnimatedText'
import Reveal from './Reveal'
import useParallax from '../hooks/useParallax'

export default function ChapterHeader({ num, kicker, title, intro }) {
  const ref = useRef(null)
  useParallax(ref)
  return (
    <div className="ch-head" ref={ref}>
      <span className="ch-num" aria-hidden="true">{num}</span>
      <div className="eyebrow">Chapter {num} · {kicker}</div>
      <AnimatedText lines={[title]} />
      {intro && <Reveal as="p" className="ch-intro">{intro}</Reveal>}
    </div>
  )
}
