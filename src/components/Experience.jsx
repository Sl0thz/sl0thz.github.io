import { useEffect, useRef } from 'react'
import ChapterHeader from './ChapterHeader'
import Reveal from './Reveal'
import experience, { typeLabels } from '../data/experience'

export default function Experience() {
  const timelineRef = useRef(null)
  const fillRef = useRef(null)

  // Timeline line fills as you scroll through it
  useEffect(() => {
    let ticking = false
    const update = () => {
      const tl = timelineRef.current
      const fill = fillRef.current
      if (tl && fill) {
        const rect = tl.getBoundingClientRect()
        const progress = (window.innerHeight * 0.75 - rect.top) / rect.height
        fill.style.height = Math.max(0, Math.min(1, progress)) * 100 + '%'
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }
    update()
    document.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      document.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="experience" className="chapter">
      <div className="wrap">
        <ChapterHeader
          num="06"
          kicker="Professional experience"
          title="The full timeline"
          intro="Every role, newest first — colour-coded by the chapter of the story it belongs to."
        />
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-fill" ref={fillRef}></div>
          {experience.map((job, i) => (
            <Reveal className="tl-item" data-i={String(i + 1).padStart(2, '0')} key={job.role + job.date}>
              <div className="tl-head">
                <span className="tl-role">{job.role}</span>
                <span className="tl-date">{job.date}</span>
              </div>
              <div className="tl-org">{job.org}</div>
              <span className={`tl-tag t-${job.type}`}>{typeLabels[job.type]}</span>
              <p className="tl-desc">{job.desc}</p>
              {job.achievements.length > 0 && (
                <ul className="ach">
                  {job.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
