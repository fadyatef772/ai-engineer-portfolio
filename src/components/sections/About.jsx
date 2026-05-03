import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaChartLine, FaRocket } from 'react-icons/fa'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/personal'
import { ANIMATION_VARIANTS } from '../../utils/constants'

const highlights = [
  { icon: FaCode, label: 'Clean Code', desc: 'Production-quality Python & API code', color: '#00d4ff' },
  { icon: FaBrain, label: 'ML Expertise', desc: 'Full ML lifecycle from EDA to deployment', color: '#7c3aed' },
  { icon: FaChartLine, label: 'Data-Driven', desc: 'Insights that drive real business decisions', color: '#06b6d4' },
  { icon: FaRocket, label: 'Fast Delivery', desc: 'On-time, documented, production-ready', color: '#10b981' },
]

function ProfileImage() {
  const base = import.meta.env.BASE_URL
  const [src, setSrc] = useState(`${base}images/profile.png`)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (src.endsWith('profile.png')) {
      setSrc(`${base}images/profile.svg`)
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/15 to-purple-600/15">
        <span
          className="text-6xl font-bold font-display"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          FA
        </span>
        <span className="text-xs text-slate-600 mt-2">Fady Atef Kamal</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Fady Atef Kamal"
      className="w-full h-full object-cover object-top"
      onError={handleError}
    />
  )
}

export default function About() {
  return (
    <SectionWrapper id="about" dark>
      <SectionTitle
        label="About Me"
        title="Who"
        highlight="Am I?"
        subtitle="AI Engineer passionate about building intelligent systems that create real-world impact."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Profile card */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Profile image placeholder */}
          <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 rotate-slow" />
            <div className="absolute inset-4 rounded-full border border-purple-500/20 rotate-slow-reverse" />

            {/* Profile image */}
            <div className="absolute inset-6 rounded-full overflow-hidden glass border-2 border-cyan-400/40 shadow-neon-cyan">
              <ProfileImage />
            </div>

            {/* Floating badges — hidden on small screens to prevent overlap */}
            <motion.div
              className="hidden md:block absolute -right-4 top-8 glass rounded-xl px-3 py-2 border border-cyan-400/20 shadow-neon-cyan"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white font-medium">Open to Work</span>
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block absolute -left-4 bottom-12 glass rounded-xl px-3 py-2 border border-purple-500/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-xs text-purple-300 font-mono">{'> AI Engineer'}</span>
            </motion.div>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <HiLocationMarker className="text-cyan-400" /> {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <HiMail className="text-cyan-400" /> {personalInfo.email}
            </span>
          </div>
        </motion.div>

        {/* Right: Bio + highlights */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-slate-300 text-base leading-relaxed">
              I'm an <span className="text-cyan-400 font-medium">AI Engineer and Data Scientist</span> with a
              deep passion for building intelligent systems that solve real-world problems. My expertise spans
              the full ML lifecycle — from data collection and preprocessing to model development, deployment,
              and monitoring.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I specialize in <span className="text-purple-400 font-medium">Python-based ML pipelines</span>,{' '}
              <span className="text-cyan-300 font-medium">NLP (including Arabic language processing)</span>, and
              deploying models through scalable REST APIs. I believe the best AI solutions are both technically
              sound and aligned with clear business objectives.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Whether it's training a deep learning model, building an analytical dashboard, or deploying an
              API — I bring <span className="text-cyan-400 font-medium">end-to-end ownership</span> to every project.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {highlights.map(({ icon: Icon, label, desc, color }) => (
              <motion.div
                key={label}
                className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all group"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon style={{ color }} size={16} />
                </div>
                <p className="text-white text-sm font-semibold">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5 leading-snug">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-neon-cyan transition-all"
              whileHover={{ scale: 1.02 }}
            >
              View LinkedIn
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 text-sm font-semibold rounded-xl glass border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition-all"
              whileHover={{ scale: 1.02 }}
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
