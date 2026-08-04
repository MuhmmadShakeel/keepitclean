import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const normalizePath = (path) => path.replace(/\/+$/, '') || '/'
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const value = useMemo(() => ({
    pathname,
    navigate(to) {
      if (to === pathname) {
        window.scrollTo(0, 0)
        return
      }
      window.history.pushState({}, '', to)
      setPathname(to)
    },
  }), [pathname])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useLocation() {
  const router = useContext(RouterContext)
  return { pathname: router?.pathname || window.location.pathname }
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const router = useContext(RouterContext)

  function handleClick(event) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    router.navigate(to)
  }

  return <a href={to} className={className} onClick={handleClick} {...props}>{children}</a>
}

export function NavLink({ to, className, children, ...props }) {
  const { pathname } = useLocation()
  const isActive = pathname === to
  const resolvedClass = typeof className === 'function' ? className({ isActive }) : className
  return <Link to={to} className={resolvedClass || ''} {...props}>{children}</Link>
}
