import { useRef } from 'react'
import AnimatedText from './AnimatedText'
import useParallax from '../hooks/useParallax'
import { LinkedInIcon } from './Icons'
import { profile, LINKEDIN } from '../data/profile'

export default function Hero() {
  const ref = useRef(null)
  useParallax(ref)

  return (
    <section className="hero chapter" id="intro" ref={ref}>
      <div className="hero-shapes" aria-hidden="true">
        <span className="shape s1"></span>
        <span className="shape s2"></span>
        <span className="shape s3"></span>
      </div>
      <div className="wrap">
        <div className="hero-kicker">
          <span className="pulse"></span>
          {profile.kicker}
        </div>
        <div className="hero-grid">
          <div>
            <AnimatedText as="h1" lines={profile.headline} mutedFrom={1} delay={150} />
            <p className="lead">{profile.lead}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#education">Follow my story ↓</a>
              <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noopener">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-side">
            <div className="portrait">
              <img src="/richard.jpg" alt="Portrait of Richard Leonardo" width="900" height="1052" />
            </div>
            <div className="whoami mono">
              <div className="bar"><span></span><span></span><span></span></div>
              {profile.whoami.map(([k, v]) => (
                <div className="whoami-row" key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
