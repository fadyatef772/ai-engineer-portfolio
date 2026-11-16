import { useEffect, useRef } from 'react'

/**
 * Custom cursor: a precise dot + a lagging ring that lerps toward the pointer.
 * The ring grows and labels itself based on the hovered element's data-cursor
 * attribute ("hover" for links/buttons, "view" over project media).
 * Disabled entirely on touch / coarse pointers and under reduced-motion.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    document.body.classList.add('has-custom-cursor')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      const variant = target?.getAttribute('data-cursor')
      if (!ring.current) return
      if (variant) {
        ring.current.setAttribute('data-variant', variant)
        if (label.current) label.current.textContent = variant === 'view' ? 'View' : ''
      } else {
        ring.current.removeAttribute('data-variant')
        if (label.current) label.current.textContent = ''
      }
    }

    const onLeave = () => {
      if (dot.current) dot.current.style.opacity = '0'
      if (ring.current) ring.current.style.opacity = '0'
    }
    const onEnter = () => {
      if (dot.current) dot.current.style.opacity = '1'
      if (ring.current) ring.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring grid place-items-center" aria-hidden="true">
        <span
          ref={label}
          className="font-mono text-[9px] uppercase tracking-[0.15em] text-white"
        />
      </div>
    </>
  )
}
