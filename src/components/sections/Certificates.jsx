import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiExternalLink, FiMaximize2 } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import { Reveal } from '../ui/motion'
import { asset } from '../../lib/asset'
import { certificates } from '../../data/certificates'
import CertLightbox from './certificates/CertLightbox'

const N = certificates.length
const ANGLE = 360 / N
const RADIUS = 540 // spiral radius (px)
const Y_SPREAD = 230 // vertical travel across the helix (px)
const AUTO_SPEED = 0.06 // deg per frame

export default function Certificates() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState('spiral')
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const small = window.matchMedia('(max-width: 767px)').matches
    if (reduce || small) setMode('list')
    const onResize = () => {
      const w = window.innerWidth
      setScale(w >= 1024 ? 1 : w >= 768 ? 0.8 : 0.58)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [reduce])

  const yOf = useMemo(() => certificates.map((_, i) => (i / (N - 1) - 0.5) * Y_SPREAD), [])

  // ---- 3D engine: cards are billboarded (always face the viewer) so every
  // certificate stays upright and readable, while sitting on a 3D helix. ----
  const worldRef = useRef(null)
  const cardRefs = useRef([])
  const rotation = useRef(0)
  const tiltX = useRef(0)
  const tiltY = useRef(0)
  const targetTiltX = useRef(0)
  const targetTiltY = useRef(0)
  const dragging = useRef(false)
  const moved = useRef(0)
  const lastX = useRef(0)
  const lastInteract = useRef(0)
  const hoveredRef = useRef(null)
  const raf = useRef(null)

  const applyAll = () => {
    if (worldRef.current) {
      worldRef.current.style.transform = `scale(${scale}) rotateX(${tiltX.current}deg) rotateY(${tiltY.current}deg)`
    }
    for (let i = 0; i < N; i++) {
      const el = cardRefs.current[i]
      if (!el) continue
      const angle = rotation.current + i * ANGLE
      const rad = (angle * Math.PI) / 180
      const lift = hoveredRef.current === i ? 90 : 0
      const scaleH = hoveredRef.current === i ? 1.06 : 1
      el.style.transform =
        `translate(-50%,-50%) translateY(${yOf[i]}px) rotateY(${angle}deg) translateZ(${RADIUS + lift}px) rotateY(${-angle}deg) scale(${scaleH})`
      // Dim cards on the far side for depth.
      el.style.opacity = (0.35 + 0.65 * (Math.cos(rad) * 0.5 + 0.5)).toFixed(3)
      el.style.zIndex = String(Math.round(Math.cos(rad) * 100) + 100)
    }
  }

  useEffect(() => {
    if (mode !== 'spiral') return
    applyAll()
    if (reduce) return
    const loop = () => {
      const idle = performance.now() - lastInteract.current > 1400
      if (!dragging.current && hoveredRef.current === null && idle) rotation.current += AUTO_SPEED
      tiltX.current += (targetTiltX.current - tiltX.current) * 0.06
      tiltY.current += (targetTiltY.current - tiltY.current) * 0.06
      applyAll()
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return () => raf.current && cancelAnimationFrame(raf.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, reduce, scale])

  const stageRef = useRef(null)
  useEffect(() => {
    if (mode !== 'spiral') return
    const stage = stageRef.current
    if (!stage) return
    const onParallax = (e) => {
      const r = stage.getBoundingClientRect()
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
      targetTiltX.current = Math.max(-1, Math.min(1, ny)) * -6
      targetTiltY.current = Math.max(-1, Math.min(1, nx)) * 5
      if (reduce) applyAll()
    }
    const onDown = (e) => {
      dragging.current = true
      moved.current = 0
      lastX.current = e.clientX ?? 0
      lastInteract.current = performance.now()
    }
    const onMove = (e) => {
      if (!dragging.current) return
      const x = e.clientX ?? 0
      const dx = x - lastX.current
      lastX.current = x
      moved.current += Math.abs(dx)
      rotation.current += dx * 0.3
      lastInteract.current = performance.now()
      if (reduce) applyAll()
    }
    const onUp = () => {
      dragging.current = false
      lastInteract.current = performance.now()
    }
    stage.addEventListener('pointermove', onParallax)
    stage.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      stage.removeEventListener('pointermove', onParallax)
      stage.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [mode, reduce])

  const openCard = (i) => {
    if (moved.current > 6) return
    setActive(i)
  }
  const setHover = (i) => {
    setHovered(i)
    hoveredRef.current = i
  }

  return (
    <section id="certificates" className="scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="shell">
        <SectionHeader
          index="05"
          title="Certificates"
          kicker="Verified credentials"
          aside="An exhibition of verified certifications — AWS, Stanford Online, DeepLearning.AI, NVIDIA and more. Drag the spiral, or switch to a list."
        />
        <Reveal>
          <div className="mb-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1 rounded-full border border-line p-1">
              {['spiral', 'list'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  data-cursor="hover"
                  className={`rounded-full px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    mode === m ? 'bg-bone text-bg' : 'text-bone-dim hover:text-bone'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <span className="hidden font-mono text-[11px] text-bone-faint sm:block">{N} certificates</span>
          </div>
        </Reveal>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'spiral' ? (
          <motion.div key="spiral" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div
              ref={stageRef}
              className="relative mx-auto flex h-[540px] w-full max-w-shell touch-pan-y items-center justify-center"
              style={{ perspective: '1200px' }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(237,233,224,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(237,233,224,0.06) 1px, transparent 1px)',
                  backgroundSize: '46px 46px',
                  maskImage: 'radial-gradient(circle at 50% 50%, #000 28%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 28%, transparent 70%)',
                }}
              />
              <div ref={worldRef} className="relative h-0 w-0" style={{ transformStyle: 'preserve-3d' }}>
                {certificates.map((c, i) => (
                  <button
                    key={c.id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    data-cursor="view"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => openCard(i)}
                    className="absolute left-0 top-0 block h-[214px] w-[298px] overflow-hidden rounded-xl border border-line bg-surface shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                    style={{ transformStyle: 'preserve-3d' }}
                    aria-label={`Open ${c.title}`}
                  >
                    <img
                      src={asset(c.image)}
                      alt={c.title}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className="h-full w-full bg-white/[0.03] object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint">
              Drag to rotate · hover to focus · click to open
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            className="shell"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.4), ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-xl border border-line bg-surface/50"
                >
                  <button
                    data-cursor="view"
                    onClick={() => setActive(i)}
                    className="relative block w-full overflow-hidden"
                    aria-label={`Open ${c.title}`}
                  >
                    <img
                      src={asset(c.image)}
                      alt={c.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full bg-white/[0.03] object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-bg/70 text-bone opacity-0 transition-opacity group-hover:opacity-100">
                      <FiMaximize2 className="text-xs" />
                    </span>
                  </button>
                  <div className="flex items-start justify-between gap-3 border-t border-line p-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-medium text-bone" title={c.title}>
                        {c.title}
                      </h3>
                      <p className="mt-1 text-[12px] text-bone-dim">
                        {c.issuer} · {c.date}
                      </p>
                    </div>
                    {c.verifyUrl && (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        aria-label={`Verify ${c.title}`}
                        className="mt-0.5 shrink-0 text-bone-faint transition-colors hover:text-accent"
                      >
                        <FiExternalLink className="text-sm" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active !== null && (
          <CertLightbox
            cert={certificates[active]}
            onClose={() => setActive(null)}
            onPrev={() => setActive((a) => (a - 1 + N) % N)}
            onNext={() => setActive((a) => (a + 1) % N)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
