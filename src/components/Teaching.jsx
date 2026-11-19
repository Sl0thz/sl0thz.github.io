import ChapterHeader from './ChapterHeader'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { teachingRoles, pillars } from '../data/story'

export default function Teaching() {
  return (
    <section id="teaching" className="chapter">
      <div className="wrap">
        <ChapterHeader
          num="04"
          kicker="Knowledge sharing"
          title="Teaching what I learn"
          intro="Explaining a concept clearly is the best test of understanding it. These roles let me practice that every day."
        />
        <div className="cards">
          {teachingRoles.map((r, i) => (
            <Reveal className="card role-card" key={r.role} style={{ transitionDelay: `${i * 90}ms` }}>
              {r.date && <div className="tl-date">{r.date}</div>}
              <h3>{r.role}</h3>
              <div className="tl-org">{r.org}</div>
              {r.desc && <p className="tl-desc">{r.desc}</p>}
              {r.highlight && (
                <div className="highlight">
                  <CountUp target={r.highlight.count} suffix={r.highlight.suffix} />
                  <span>{r.highlight.label}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal className="pillar" key={p.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="pillar-n mono">0{i + 1}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
