import { useEffect, useLayoutEffect, useState } from 'react'
import AOS from 'aos'
import { useLocation } from './components/Router'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ThemeSwitcher from './components/ThemeSwitcher'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = {
      '/': ['Keep It Clean | Hand Car Wash & Detailing Houston', 'Professional hand wash and vehicle detailing at 3700 Washington Ave. in Houston.'],
      '/services': ['Car Wash & Detailing Services | Keep It Clean Houston', 'Explore hand washing, interior detailing, paint correction, headlight restoration, and specialty vehicle care.'],
      '/pricing': ['Car Wash & Detailing Prices | Keep It Clean Houston', 'View hand wash, interior detail, luxury detail, showroom detail, and popular extra service pricing.'],
      '/about': ['About Keep It Clean | Houston Hand Car Wash', 'Meet the local hand-detail specialists serving Houston drivers with professional vehicle care since 2010.'],
      '/contact': ['Contact & Hours | Keep It Clean Houston', 'Find Keep It Clean at 3700 Washington Ave., view weekly hours, call, email, or prepare a service inquiry.'],
      '/switch-button': ['Website Theme Control | Keep It Clean', 'Private local control for the Keep It Clean website color scheme.'],
    }[pathname] || []
    window.scrollTo(0, 0)
    if (meta[0]) document.title = meta[0]
    const description = document.querySelector('meta[name="description"]')
    if (description && meta[1]) description.setAttribute('content', meta[1])
    const refresh = window.setTimeout(() => {
      const revealTargets = document.querySelectorAll(
        'main section h2, main section h3, main section p, main section article, main section li, main section .button, main section .price-row',
      )

      revealTargets.forEach((element, index) => {
        if (!element.closest('[data-aos]')) {
          element.setAttribute('data-aos', 'fade-up')
          element.setAttribute('data-aos-delay', String((index % 3) * 20))
        }
      })

      document.querySelectorAll('main [data-aos]').forEach((element) => {
        element.setAttribute('data-aos-duration', '360')
        const delay = Number(element.getAttribute('data-aos-delay') || 0)
        element.setAttribute('data-aos-delay', String(Math.min(Math.round(delay * 0.4), 48)))
      })

      AOS.refreshHard()
    }, 20)
    return () => window.clearTimeout(refresh)
  }, [pathname])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('kic-color-scheme')
    return ['signature', 'classic'].includes(savedTheme) ? savedTheme : 'signature'
  })
  const isSwitchRoute = ['/switch-button', '/switch', '/switch%20button'].includes(pathname)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme === 'classic' ? 'light' : 'dark'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'classic' ? '#044CA3' : '#10100f')
    localStorage.setItem('kic-color-scheme', theme)
  }, [theme])

  useEffect(() => {
    const syncTheme = (event) => {
      if (event.key === 'kic-color-scheme' && ['signature', 'classic'].includes(event.newValue)) {
        setTheme(event.newValue)
      }
    }
    window.addEventListener('storage', syncTheme)
    return () => window.removeEventListener('storage', syncTheme)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 360,
      easing: 'ease-out-cubic',
      once: true,
      offset: 18,
      delay: 0,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <>
      <RouteEffects />
      {!isSwitchRoute && <Header />}
      <main className={isSwitchRoute ? 'theme-control-main' : ''}>
        {isSwitchRoute
          ? <ThemeSwitcher theme={theme} onChange={setTheme} />
          : ({
              '/': <HomePage />,
              '/services': <ServicesPage />,
              '/pricing': <PricingPage />,
              '/about': <AboutPage />,
              '/contact': <ContactPage />,
            })[pathname] || <HomePage />}
      </main>
      {!isSwitchRoute && <Footer />}
    </>
  )
}
