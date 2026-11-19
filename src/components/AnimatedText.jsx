import { Fragment } from 'react'
import useInView from '../hooks/useInView'

// Headline whose words rise out of a mask, one after another, when scrolled into view.
// `lines` is an array; lines from `mutedFrom` onward are drawn in the muted colour.
export default function AnimatedText({ as: Tag = 'h2', lines, mutedFrom = Infinity, className = '', delay = 0 }) {
  const [ref, seen] = useInView(0.3)
  let n = 0
  return (
    <Tag ref={ref} className={`atext ${seen ? 'in' : ''} ${className}`.trim()} aria-label={lines.join(' ')}>
      {lines.map((line, li) => (
        <span className={`al ${li >= mutedFrom ? 'muted' : ''}`} key={li} aria-hidden="true">
          {line.split(' ').map((w) => {
            const i = n++
            return (
              <Fragment key={i}>
                <span className="aw">
                  <span style={{ transitionDelay: `${delay + i * 70}ms` }}>{w}</span>
                </span>
                {' '}
              </Fragment>
            )
          })}
        </span>
      ))}
    </Tag>
  )
}
