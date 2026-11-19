import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import prefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function CountUp({ target, decimals = 0, suffix = '', duration = 1100 }) {
  const [ref, seen] = useInView(0.5)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!seen) return
    if (prefersReducedMotion()) {
      setValue(target)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setValue(target * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, target, duration])

  return (
    <span ref={ref} className="num">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
