import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from './Router'
import Icon from './Icons'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Pricing', '/pricing'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isInnerPage = location.pathname !== '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`site-header ${scrolled || isInnerPage ? 'is-scrolled' : ''} ${isInnerPage ? 'is-inner' : ''}`}>
      <div className="container nav-wrap">
        <Link className="brand brand-original" to="/" aria-label="Keep It Clean home">
          <img src="/images/keep-it-clean-logo.png" alt="Keep It Clean Hand Car Wash and Detail" />
        </Link>

        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink
              to={to}
              key={label}
              className={({ isActive }) => isActive ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a className="nav-call" href="tel:+17134263877">
            <Icon name="phone" size={17} />
            (713) 426-3877
          </a>
        </nav>

        <button
          className={`menu-button ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
