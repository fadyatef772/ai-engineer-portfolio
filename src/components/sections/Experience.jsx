import { motion } from 'framer-motion'
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Work History"
        title="My"
        highlight="Experience"
        subtitle="Building real AI solutions across freelance, internship, and data analysis roles."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-purple-500/30 to-transparent" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`relative flex items-start gap-8 mb-12 ${
              i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1 mt-6">
              <div
                className="w-4 h-4 rounded-full border-2 border-dark-2 shadow-neon-cyan"
                style={{ backgroundColor: exp.color }}
              />
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-40"
                style={{ backgroundColor: exp.color }}
              />
            </div>

            {/* Spacer for timeline */}
            <div className="hidden sm:block w-1/2" />

            {/* Card */}
            <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
              <motion.div
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all"
                whileHover={{ y: -4 }}
                style={{ borderLeft: `3px solid ${exp.color}` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.role}</h3>
                    <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                  </div>
                  <Badge color={exp.color} size="xs">{exp.type}</Badge>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <HiCalendar /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiLocationMarker /> {exp.location}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                {/* Responsibilities */}
                <ul className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <Badge key={t} color={exp.color} size="xs">{t}</Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
