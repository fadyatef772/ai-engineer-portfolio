import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from 'react-icons/fi'
import NeuralField from '../visual/NeuralField'
import { Magnetic } from '../ui/motion'
import { scrollToId } from '../../lib/scroll'
import { asset } from '../../lib/asset'
import { personalInfo } from '../../data/personal'

const ROTATING = ['Machine Learning', 'Deep Learning', 'NLP & Arabic AI', 'Computer Vision', 'Data Science']
const EASE = [0.22, 1, 0.36, 1]
const INTRO_DELAY = 1.25 // plays in as the loader lifts

function Line({ children, delay }) {
  const reduce = useReducedMotion()
  return (
    <span className="mask">
      <motion.span
        className="block"
        initial={reduce ? false : { y: '115%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: reduce ? 0 : delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Signature neural field */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <NeuralField className="h-full w-full" />
      </div>
      {/* Contrast wash so headline stays legible over the field */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="shell relative z-10 flex flex-1 flex-col justify-center pt-28 pb-16">
        {/* Eyebrow row */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-between gap-y-3"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: INTRO_DELAY - 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="u-label text-bone">Available for AI &amp; ML roles</span>
          </div>
          <span className="u-label">{personalInfo.location.split(',').slice(-2).join(',').trim()} · UTC+2</span>
        </motion.div>

        {/* Name */}
        <h1 className="display text-bone text-[clamp(2.75rem,11vw,10.5rem)]">
          <Line delay={INTRO_DELAY}>Fady Atef</Line>
          <Line delay={INTRO_DELAY + 0.1}>Kamal</Line>
        </h1>

        {/* Role + rotating specialty */}
        <motion.div
          className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.35 }}
        >
          <div className="flex items-baseline gap-3">
            <span className="display text-[clamp(1.5rem,4.5vw,3.25rem)] text-accent">AI Engineer</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="u-label">Focus</span>
            <div className="relative h-7 min-w-[190px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  className="absolute inset-0 font-mono text-sm text-bone"
                  initial={reduce ? false : { y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? {} : { y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {ROTATING[idx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          {/* Intro */}
          <motion.p
            className="max-w-xl text-pretty text-[15px] leading-relaxed text-bone-dim sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.5 }}
          >
            I build real-world AI — from raw data and trained models to deployed APIs. My work spans
            machine learning, deep learning, and NLP (with a focus on Arabic), turning complex,
            messy problems into intelligent systems that ship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3 md:justify-end"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: INTRO_DELAY + 0.6 }}
          >
            <Magnetic>
              <button onClick={() => scrollToId('work')} data-cursor="hover" className="btn btn-primary">
                View work <FiArrowDownRight className="text-sm" />
              </button>
            </Magnetic>
            <Magnetic>
              <button onClick={() => scrollToId('contact')} data-cursor="hover" className="btn btn-ghost">
                Get in touch <FiArrowUpRight className="text-sm" />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={asset(personalInfo.cvUrl)}
                target="_blank"
                rel="noreferrer"
                download
                data-cursor="hover"
                className="btn btn-ghost"
              >
                Download CV <FiDownload className="text-sm" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Bottom tech marquee */}
      <div className="relative z-10 overflow-hidden border-t border-line py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10" aria-hidden={k === 1}>
              {['Python', 'FastAPI', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'Docker', 'Arabic NLP', 'Power BI', 'SQL'].map(
                (t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-[0.15em] text-bone-faint">
                    {t} <span className="text-accent">✦</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
