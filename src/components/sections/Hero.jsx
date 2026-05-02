import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaDownload, FaArrowRight } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import HeroCanvas from '../3d/HeroCanvas'
import { scrollToSection } from '../../utils/helpers'
import { personalInfo } from '../../data/personal'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none" />

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 glass rounded-full border border-green-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for Projects</span>
            <span className="text-slate-500 text-xs">· Egypt</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-300 mb-6 h-12 flex items-center">
              <TypeAnimation
                sequence={[
                  'AI Engineer', 2000,
                  'Data Scientist', 2000,
                  'ML Developer', 2000,
                  'NLP Specialist', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-cyan-400"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {personalInfo.tagline}. I specialize in building{' '}
            <span className="text-cyan-400 font-medium">machine learning models</span>,{' '}
            <span className="text-purple-400 font-medium">NLP systems</span>, and{' '}
            <span className="text-cyan-300 font-medium">production AI APIs</span> that solve real business problems.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold font-display gradient-text">
                  {stat.value}{stat.suffix}
                </span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-neon-cyan hover:shadow-neon-strong transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects <FaArrowRight size={13} />
            </motion.button>

            <motion.a
              href={personalInfo.cvUrl}
              download
              className="flex items-center gap-2 px-7 py-3.5 glass border border-cyan-400/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload size={13} /> Download CV
            </motion.a>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-7 py-3.5 glass border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <span className="text-xs text-slate-600 uppercase tracking-widest font-mono">Find me on</span>
            {[
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaLinkedinIn, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaWhatsapp, href: `https://wa.me/${personalInfo.whatsapp}`, label: 'WhatsApp' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-400/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <HiChevronDown size={20} />
      </motion.button>
    </section>
  )
}
