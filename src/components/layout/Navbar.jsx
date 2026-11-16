import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { personalInfo } from '../../data/personal'
import { scrollToId, scrollToTop } from '../../lib/scroll'
import { Magnetic } from '../ui/motion'

const LINKS = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'expertise', label: 'Expertise', index: '02' },
  { id: 'work', label: 'Work', index: '03' },
  { id: 'experience', label: 'Experience', index: '04' },
  { id: 'certificates', label: 'Certificates', index: '05' },
  { id: 'contact', label: 'Contact', index: '06' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    // allow overlay to start closing before scrolling
    setTimeout(() => scrollToId(id, { offset: -20 }), open ? 120 : 0)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[130] transition-colors duration-500 ${
          scrolled ? 'bg-bg/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="shell flex items-center justify-between py-5">
          {/* Wordmark */}
          <button
            onClick={scrollToTop}
            data-cursor="hover"
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-bone">
              Fady Atef
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-cursor="hover"
                className="group flex items-baseline gap-1.5"
              >
                <span className="font-mono text-[10px] text-bone-faint transition-colors group-hover:text-accent">
                  {l.index}
                </span>
                <span className="accent-link text-[14px] text-bone-dim transition-colors group-hover:text-bone">
                  {l.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Magnetic className="hidden sm:inline-block">
              <button onClick={() => go('contact')} data-cursor="hover" className="btn btn-primary">
                Let’s talk
              </button>
            </Magnetic>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              data-cursor="hover"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-[160] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`h-px w-6 bg-bone transition-all duration-300 ${
                  open ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-6 bg-bone transition-all duration-300 ${
                  open ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[140] flex flex-col bg-bg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mt-28 flex flex-1 flex-col gap-2 px-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => go(l.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-baseline gap-4 border-b border-line py-5 text-left"
                >
                  <span className="font-mono text-[12px] text-accent">{l.index}</span>
                  <span className="display text-[12vw] text-bone">{l.label}</span>
                </motion.button>
              ))}
            </nav>
            <div className="px-8 pb-12">
              <p className="u-label mb-3">Get in touch</p>
              <a href={`mailto:${personalInfo.email}`} className="font-display text-xl text-bone">
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
