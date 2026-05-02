import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../utils/constants'
import { scrollToSection } from '../../utils/helpers'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_LINKS.map((l) => l.href)
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    scrollToSection(href)
    setActive(href)
    setMobileOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 border-b border-white/5' : 'py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-neon-cyan">
            <span className="text-white font-bold text-sm font-mono">FA</span>
          </div>
          <span className="text-white font-display font-bold text-lg hidden sm:block">
            Fady<span className="gradient-text">.</span>
          </span>
        </motion.button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === link.href
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === link.href && (
                <motion.span
                  className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="mailto:fadyatef392@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-neon-cyan transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg glass text-slate-300 hover:text-white"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden border border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="p-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === link.href
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:fadyatef392@gmail.com"
                className="mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
