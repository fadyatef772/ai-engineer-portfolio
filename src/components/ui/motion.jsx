import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1]

/** Fade + rise on scroll into view. */
export function Reveal({ children, className = '', delay = 0, y = 28, once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Container that staggers its StaggerItem children. */
export function Stagger({ children, className = '', gap = 0.08, once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? {} : 'show'}
      viewport={{ once, margin: '-8% 0px -8% 0px' }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 24 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Masked line reveal — each line sits behind an overflow-hidden frame and
 * rises into place. Pass an array of strings (or nodes) as `lines`.
 */
export function MaskLines({ lines, className = '', lineClassName = '', delay = 0, stagger = 0.09 }) {
  const reduce = useReducedMotion()
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask">
          <motion.span
            className={`block ${lineClassName}`}
            initial={reduce ? false : { y: '115%' }}
            whileInView={reduce ? {} : { y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Subtle magnetic pull toward the cursor (desktop, motion-on only). */
export function Magnetic({ children, className = '', strength = 0.35 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const onMove = (e) => {
    if (reduce || !ref.current) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block will-change-transform ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {children}
    </span>
  )
}
