import { LinkedInIcon, GitHubIcon } from './Icons'
import { LINKEDIN, GITHUB, EMAIL } from '../data/profile'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Richard Leonardo · Jakarta, Indonesia</span>
        <div className="socials">
          <a href={LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
          <a href={GITHUB} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon size={18} /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">✉</a>
        </div>
      </div>
    </footer>
  )
}
