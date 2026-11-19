import ChapterHeader from './ChapterHeader'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { bangkit } from '../data/story'
import certifications from '../data/certifications'

const goToProject = (id) => {
  window.dispatchEvent(new CustomEvent('select-project', { detail: id }))
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Bangkit() {
  return (
    <section id="bangkit" className="chapter">
      <div className="wrap">
        <ChapterHeader
          num="03"
          kicker="Learning journey"
          title="Going deep on Android at Bangkit"
          intro={bangkit.program}
        />
        <div className="facts">
          {bangkit.facts.map((f, i) => (
            <Reveal className="fact" key={f.label} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="num">{f.count ? <CountUp target={f.count} /> : f.text}</span>
              <span className="label">{f.label}</span>
            </Reveal>
          ))}
        </div>
        <div className="two-col">
          <Reveal>
            <div className="tl-date">{bangkit.period}</div>
            <p className="story-p">{bangkit.summary}</p>
            <button className="connect" type="button" onClick={() => goToProject('aruna')}>
              <span className="connect-k mono">Where it led</span>
              <strong>ARUNA — the capstone built from this program</strong>
              <span>See the project →</span>
            </button>
          </Reveal>
          <Reveal className="certs">
            <div className="mini-title mono">Dicoding certifications</div>
            {certifications.map((c) => (
              <div className="cert-row" key={c.id}>
                <div className="cert-name">{c.name}</div>
                <div className="cert-id">{c.id}</div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
