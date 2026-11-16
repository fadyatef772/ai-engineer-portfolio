import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

/**
 * Brief, restrained intro ritual: a counter ticks to 100 while the name sits
 * centre-stage, then the panel lifts away. Short and skippable; under
 * reduced-motion it shows a single still frame and leaves immediately.
 */
export default function Loader({ onDone }) {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (reduce) {
      setCount(100)
      const t = setTimeout(() => {
        setShow(false)
        onDone?.()
      }, 350)
      return () => clearTimeout(t)
    }
    const total = 1150
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / total)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setCount(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setShow(false)
          onDone?.()
        }, 260)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce, onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.p
              className="display text-bone text-[12vw] sm:text-[72px] leading-none"
              initial={reduce ? false : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Fady<span className="text-accent">.</span>
            </motion.p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="u-label">Loading</span>
            <span className="font-mono text-[11px] tabular-nums text-bone">{count}</span>
          </div>
          <div className="mt-4 h-px w-40 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
