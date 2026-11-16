import { useEffect, useRef } from 'react'

/**
 * Signature element: a living neural field rendered in Canvas 2D.
 * Nodes drift and link by proximity; the pointer energises nearby nodes and
 * draws brighter edges toward it — an "intelligence" motif for an AI engineer,
 * deliberately lightweight (no WebGL / Three.js) and gentle on the main thread.
 *
 * Under prefers-reduced-motion it paints a single static frame and stops.
 */
export default function NeuralField({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes = []
    let raf
    let running = true
    const pointer = { x: -9999, y: -9999, active: false }

    const ACCENT = [61, 90, 254]
    const BONE = [167, 163, 153]

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Density scales with area but is capped for performance.
      const count = Math.min(90, Math.max(32, Math.round((w * h) / 16000)))
      nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const linkDist = () => Math.min(170, Math.max(120, w / 9))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const LD = linkDist()

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (running && !reduced) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1

          // Gentle pointer attraction
          if (pointer.active) {
            const dx = pointer.x - n.x
            const dy = pointer.y - n.y
            const d = Math.hypot(dx, dy)
            if (d < 180 && d > 0.01) {
              const f = (1 - d / 180) * 0.35
              n.x += (dx / d) * f
              n.y += (dy / d) * f
            }
          }
        }
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        // link to pointer
        if (pointer.active) {
          const pd = Math.hypot(pointer.x - a.x, pointer.y - a.y)
          if (pd < 150) {
            const t = 1 - pd / 150
            ctx.strokeStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${t * 0.5})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(pointer.x, pointer.y)
            ctx.stroke()
          }
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LD) {
            const t = 1 - d / LD
            let col = BONE
            let alpha = t * 0.2
            if (pointer.active) {
              const mx = (a.x + b.x) / 2
              const my = (a.y + b.y) / 2
              const pd = Math.hypot(pointer.x - mx, pointer.y - my)
              if (pd < 160) {
                col = ACCENT
                alpha = t * (0.16 + (1 - pd / 160) * 0.5)
              }
            }
            ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        let col = BONE
        let alpha = 0.6
        if (pointer.active) {
          const pd = Math.hypot(pointer.x - n.x, pointer.y - n.y)
          if (pd < 150) {
            col = ACCENT
            alpha = 0.6 + (1 - pd / 150) * 0.4
          }
        }
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const start = () => {
      if (raf || reduced) return
      raf = requestAnimationFrame(loop)
    }
    const loop = () => {
      draw()
      if (running && !reduced) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = null
      }
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = pointer.x >= 0 && pointer.x <= w && pointer.y >= 0 && pointer.y <= h
    }
    const onLeave = () => {
      pointer.active = false
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) start()
    }

    // Pause when scrolled out of view to save cycles.
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !document.hidden
        if (running) start()
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    const ro = new ResizeObserver(() => build())
    ro.observe(canvas)

    build()
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    if (reduced) {
      draw() // single static frame
    } else {
      start()
    }

    return () => {
      cancelAnimationFrame(raf)
      raf = null
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
