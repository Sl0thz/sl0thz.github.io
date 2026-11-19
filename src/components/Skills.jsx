import Reveal from './Reveal'
import skills from '../data/skills'

export default function Skills() {
  return (
    <div className="toolkit">
      <h3 className="toolkit-title">The toolkit behind them</h3>
      <div className="skills-grid">
        {skills.map((group) => (
          <Reveal className="skill-card" key={group.title}>
            <h4>{group.title}</h4>
            {group.items ? (
              <div className="tech-grid">
                {group.items.map((t) => {
                  const Tag = t.href ? 'a' : 'div'
                  const linkProps = t.href ? { href: t.href, target: '_blank', rel: 'noopener' } : {}
                  return (
                    <Tag className="tech-chip" key={t.label} {...linkProps}>
                      <span className="tech-icon" style={{ '--tc': t.color }} dangerouslySetInnerHTML={{ __html: t.svg }} />
                      <span className="tech-label">{t.label}</span>
                    </Tag>
                  )
                })}
              </div>
            ) : (
              <div className="chip-row">
                {group.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  )
}
