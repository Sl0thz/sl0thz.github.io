import { useEffect } from 'react'
import Header from './components/Header'
import JourneyRail from './components/JourneyRail'
import Bridge from './components/Bridge'
import Hero from './components/Hero'
import Education from './components/Education'
import Bangkit from './components/Bangkit'
import Teaching from './components/Teaching'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Next from './components/Next'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Page-load flag + global scroll progress (drives the top progress bar)
  useEffect(() => {
    const id = requestAnimationFrame(() => document.body.classList.add('loaded'))
    let ticking = false
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      document.documentElement.style.setProperty('--prog', String(p))
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
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Header />
      <JourneyRail />
      <main id="top">
        <Hero />
        <Bridge to="education" />
        <Education />
        <Bridge to="bangkit" />
        <Bangkit />
        <Bridge to="teaching" />
        <Teaching />
        <Bridge to="projects" />
        <Projects />
        <Bridge to="experience" />
        <Experience />
        <Bridge to="next" />
        <Next />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
