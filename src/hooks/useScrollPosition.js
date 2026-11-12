import { useEffect, useState } from 'react'

/** Returns true once the page has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold = 10) {
  const [past, setPast] = useState(() => typeof window !== 'undefined' && window.scrollY > threshold)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
