import { useEffect } from 'react'
import prefersReducedMotion from './usePrefersReducedMotion'

// Writes --py (px distance of the element's centre from the viewport centre) so CSS can offset layers
export default function useParallax(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let ticking = false
    const update = () => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--py', String(Math.round(r.top + r.height / 2 - window.innerHeight / 2)))
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
}
