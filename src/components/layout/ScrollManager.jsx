import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top on route change, or to the element matching the URL
 * hash (retrying briefly so lazily-loaded pages have time to render).
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    let tries = 0
    let timer
    const attempt = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
      } else if (tries < 20) {
        tries += 1
        timer = setTimeout(attempt, 50)
      }
    }
    attempt()
    return () => clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
