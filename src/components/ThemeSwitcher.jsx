const schemes = [
  {
    id: 'signature',
    name: 'Signature Dark',
    description: 'Black, charcoal, and warm gold',
    colors: ['#151513', '#C99952'],
  },
  {
    id: 'classic',
    name: 'Classic Light',
    description: 'Keep It Clean blue and red',
    colors: ['#044CA3', '#EC1C23'],
  },
]

export default function ThemeSwitcher({ theme, onChange }) {
  const isLocal = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)

  if (!isLocal) {
    return (
      <section className="theme-control-page">
        <div className="theme-control-card theme-control-locked">
          <span className="theme-control-kicker">Private design control</span>
          <h1>Theme controls are available locally only.</h1>
        </div>
      </section>
    )
  }

  const nextTheme = theme === 'signature' ? 'classic' : 'signature'

  return (
    <section className="theme-control-page" aria-labelledby="theme-control-title">
      <div className="theme-control-card">
        <div className="theme-control-logo">
          <img src="/images/keep-it-clean-logo.png" alt="Keep It Clean Hand Car Wash and Detail" />
        </div>
        <span className="theme-control-kicker">Private local design control</span>
        <h1 id="theme-control-title">Website color scheme</h1>
        <p>Choose the visual system used in this browser. Your selection is saved automatically and shared with other open website tabs.</p>

        <div className="scheme-options" role="group" aria-label="Website color scheme">
          {schemes.map((scheme) => (
            <button
              className={`scheme-option ${theme === scheme.id ? 'is-active' : ''}`}
              type="button"
              aria-pressed={theme === scheme.id}
              onClick={() => onChange(scheme.id)}
              key={scheme.id}
            >
              <span className="scheme-swatches" aria-hidden="true">
                {scheme.colors.map((color) => <i style={{ background: color }} key={color} />)}
              </span>
              <span className="scheme-option-copy">
                <strong>{scheme.name}</strong>
                <small>{scheme.description}</small>
              </span>
              <span className="scheme-radio" aria-hidden="true"><i /></span>
            </button>
          ))}
        </div>

        <button className="theme-master-switch" type="button" onClick={() => onChange(nextTheme)}>
          <span>Switch to {nextTheme === 'signature' ? 'Signature Dark' : 'Classic Light'}</span>
          <span className={`theme-toggle-track ${theme === 'classic' ? 'is-classic' : ''}`} aria-hidden="true"><i /></span>
        </button>

        <div className="theme-control-status">
          <span className="status-dot" /> Active: {theme === 'signature' ? 'Signature Dark' : 'Classic Light'}
        </div>
      </div>
    </section>
  )
}
