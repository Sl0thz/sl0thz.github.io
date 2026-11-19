import useInView from '../hooks/useInView'
import { bridges } from '../data/story'

// A short narrative line + drawing connector between two chapters
export default function Bridge({ to }) {
  const [ref, seen] = useInView(0.5)
  return (
    <div className={`bridge ${seen ? 'in' : ''}`} ref={ref} aria-hidden="true">
      <span className="bridge-line"></span>
      <span className="bridge-dot"></span>
      <p>{bridges[to]}</p>
    </div>
  )
}
