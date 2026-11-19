import { useEffect, useState } from 'react'
import ChapterHeader from './ChapterHeader'
import Skills from './Skills'
import { GitHubIcon } from './Icons'
import projects from '../data/projects'
import prefersReducedMotion from '../hooks/usePrefersReducedMotion'

// Project preview: real screenshot if `image` is set, otherwise a gradient card. Tilts on pointer devices.
function ProjectVisual({ project }) {
  const canTilt =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion()

  const onMove = (e) => {
    if (!canTilt) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) scale(1.02)`
  }
  const onLeave = (e) => (e.currentTarget.style.transform = '')

  const props = { className: `proj-visual ${project.visualClass}`, onMouseMove: onMove, onMouseLeave: onLeave }
  const inner = project.image ? (
    <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
  ) : (
    <span>{project.visualLabel}</span>
  )

  return project.visualHref ? (
    <a {...props} href={project.visualHref} target="_blank" rel="noopener">{inner}</a>
  ) : (
    <div {...props}>{inner}</div>
  )
}

export default function Projects() {
  const [idx, setIdx] = useState(0)

  // Lets other chapters (e.g. Bangkit → ARUNA) open a specific project
  useEffect(() => {
    const onSelect = (e) => {
      const i = projects.findIndex((p) => p.id === e.detail)
      if (i >= 0) setIdx(i)
    }
    window.addEventListener('select-project', onSelect)
    return () => window.removeEventListener('select-project', onSelect)
  }, [])

  const p = projects[idx]

  return (
    <section id="projects" className="chapter">
      <div className="wrap">
        <ChapterHeader
          num="05"
          kicker="Project journey"
          title="Things I've built"
          intro="Four projects, from an academic assignment to a production system. Pick one to explore it."
        />

        <div className="showcase">
          <div className="proj-tabs" role="tablist" aria-label="Projects">
            {projects.map((q, i) => (
              <button
                key={q.id}
                role="tab"
                aria-selected={i === idx}
                className={`proj-tab ${i === idx ? 'on' : ''}`}
                onClick={() => setIdx(i)}
                type="button"
              >
                <span className="pt-n mono">0{i + 1}</span>
                <span className="pt-t">
                  <strong>{q.title}</strong>
                  <small>{q.subtitle}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="proj-panel" key={p.id} role="tabpanel">
            <ProjectVisual project={p} />
            <div className="panel-body">
              <div className="proj-tag">{p.period} · {p.context}</div>
              <h3>{p.title}</h3>
              <div className="panel-sub">{p.subtitle}</div>
              <p>{p.desc}</p>
              <div className="stack">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="proj-links">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener">
                    {l.github && <GitHubIcon size={15} />}
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  )
}
