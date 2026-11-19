import ChapterHeader from './ChapterHeader'
import Reveal from './Reveal'
import CountUp from './CountUp'
import { education, involvement } from '../data/story'

export default function Education() {
  return (
    <section id="education" className="chapter">
      <div className="wrap">
        <ChapterHeader
          num="02"
          kicker="Where it started"
          title="A foundation in Informatics"
          intro="My academic journey at Universitas Esa Unggul is where programming, software design, and teamwork first came together."
        />
        <div className="two-col">
          <Reveal className="card edu-card">
            <div className="tl-date">{education.period}</div>
            <h3>{education.degree}</h3>
            <div className="tl-org">{education.school}</div>
            <div className="gpa">
              <CountUp target={education.gpa} decimals={1} />
              <span>GPA</span>
            </div>
            <p className="tl-desc">{education.note}</p>
          </Reveal>
          <div className="mini-tl">
            <div className="mini-title mono">Beyond the classroom</div>
            {involvement.map((item, i) => (
              <Reveal className="mini-item" key={item.role} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="mini-dot"></span>
                <div className="tl-date">{item.date}</div>
                <h4>{item.role}</h4>
                <div className="tl-org">{item.org}</div>
                <p className="tl-desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
