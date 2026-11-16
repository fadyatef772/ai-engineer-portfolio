import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../../lib/scroll'

/**
 * Inertia smooth-scroll (Lenis). Disabled when the user prefers reduced motion,
 * in which case native scrolling is used and anchor links fall back gracefully.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    setLenis(lenis)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return children
}
