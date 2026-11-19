import Reveal from './Reveal'
import { LinkedInIcon } from './Icons'
import { contacts, LINKEDIN } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact">
            <div className="eyebrow">Contact</div>
            <h2>Let's work together.</h2>
            <p>
              Open to roles and freelance work in UI/UX design, web development, and Android development.
              Based in Jakarta, happy to work remotely.
            </p>
            <a className="btn btn-primary li-cta" href={LINKEDIN} target="_blank" rel="noopener">
              <LinkedInIcon size={18} /> Connect with me on LinkedIn
            </a>
          </Reveal>
          <Reveal className="contact-links">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>
                <span>{c.text}</span>
                <span className="k">{c.label}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
