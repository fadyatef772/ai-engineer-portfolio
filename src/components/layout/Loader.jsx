import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { asset } from '../../lib/asset'

/**
 * Brief brand intro: the FAK monogram resolves into focus while a counter
 * ticks to 100, then the panel lifts away. Short and non-blocking — the site
 * is already mounted behind it. Under reduced-motion it shows a still frame
 * and leaves almost immediately.
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
      }, 300)
      return () => clearTimeout(t)
    }
    const total = 1050
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / total)
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setCount(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setShow(false)
          onDone?.()
        }, 220)
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
          <motion.img
            src={asset('/logo-mark.png')}
            alt="Fady Atef Kamal"
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="mt-6 flex items-center gap-3">
            <span className="u-label">Loading</span>
            <span className="font-mono text-[11px] tabular-nums text-bone">{count}</span>
          </div>
          <div className="mt-4 h-px w-40 overflow-hidden bg-line">
            <motion.div className="h-full bg-accent" style={{ width: `${count}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
