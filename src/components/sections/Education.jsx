import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { education } from '../../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education" dark>
      <SectionTitle
        label="Education"
        title="Academic"
        highlight="Background"
        subtitle="Strong theoretical foundation combined with practical online learning and certifications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            style={{ borderTop: `3px solid ${edu.color}` }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${edu.color}20` }}
            >
              <HiAcademicCap style={{ color: edu.color }} size={22} />
            </div>

            {/* Degree */}
            <Badge color={edu.color} size="xs" className="mb-3">{edu.degree}</Badge>

            <h3 className="text-white font-bold text-base mt-2 mb-1">{edu.field}</h3>
            <p className="font-semibold text-sm mb-4" style={{ color: edu.color }}>{edu.institution}</p>

            {/* Meta */}
            <div className="flex gap-4 mb-4 text-xs text-slate-500">
              <span className="flex items-center gap-1"><HiCalendar /> {edu.period}</span>
              <span className="flex items-center gap-1"><HiLocationMarker /> {edu.location}</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{edu.description}</p>

            {/* Courses */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Courses</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.courses.map((c) => (
                  <Badge key={c} color={edu.color} size="xs">{c}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
