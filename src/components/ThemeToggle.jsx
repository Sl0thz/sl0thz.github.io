import { useState } from 'react'

const systemTheme = () =>
  window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || systemTheme(),
  )
  const [switching, setSwitching] = useState(false)

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
    setSwitching(true)
    setTimeout(() => setSwitching(false), 350)
    try {
      localStorage.setItem('rl-theme', next)
    } catch (e) {
      /* storage unavailable */
    }
  }

  return (
    <button
      className={`theme-toggle ${switching ? 'switching' : ''}`}
      type="button"
      onClick={toggle}
      aria-label="Switch between day and night mode"
      aria-pressed={theme === 'light'}
    >
      <span className="tt-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
    </button>
  )
}
