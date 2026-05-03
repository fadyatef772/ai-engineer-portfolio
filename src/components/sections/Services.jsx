import { motion } from 'framer-motion'
import { FaBrain, FaChartBar, FaLanguage, FaRobot, FaServer, FaCloud, FaFileAlt, FaSearch } from 'react-icons/fa'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/services'
import { scrollToSection } from '../../utils/helpers'

const iconMap = {
  brain: FaBrain, chart: FaChartBar, text: FaLanguage, robot: FaRobot,
  api: FaServer, cloud: FaCloud, report: FaFileAlt, search: FaSearch,
}

export default function Services() {
  return (
    <SectionWrapper id="services" dark>
      <SectionTitle
        label="What I Offer"
        title="My"
        highlight="Services"
        subtitle="End-to-end AI and data science services — from raw data to production-ready intelligent systems."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || FaBrain
          return (
            <motion.div
              key={service.id}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}30` }}
              >
                <Icon style={{ color: service.color }} size={20} />
              </div>

              <h3 className="text-white font-bold text-sm mb-2">{service.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{service.description}</p>

              {/* Features list */}
              <ul className="space-y-1.5 mb-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-xs font-bold" style={{ color: service.color }}>{service.price}</span>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  whileHover={{ scale: 1.05 }}
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CTA banner */}
      <motion.div
        className="mt-12 md:mt-16 glass rounded-2xl p-8 border border-cyan-400/20 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 holographic opacity-50 pointer-events-none" />
        <h3 className="text-white text-xl font-bold mb-3">Ready to build something intelligent?</h3>
        <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
          Let's discuss your AI or data challenge. I'll provide a clear solution, timeline, and deliverables.
        </p>
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-neon-cyan hover:shadow-neon-strong transition-all text-sm"
          whileHover={{ scale: 1.04 }}
        >
          Start a Project
        </motion.button>
      </motion.div>
    </SectionWrapper>
  )
}
