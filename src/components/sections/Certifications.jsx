import { motion } from 'framer-motion'
import { HiBadgeCheck, HiCalendar } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        label="Credentials"
        title="My"
        highlight="Certifications"
        subtitle="Professional credentials from industry-leading organizations validating my expertise."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all text-center group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6, scale: 1.02 }}
            style={{ '--cert-color': cert.color }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:shadow-lg"
              style={{
                backgroundColor: `${cert.color}20`,
                border: `1px solid ${cert.color}40`,
                boxShadow: `0 0 0 0 ${cert.color}40`,
              }}
            >
              <HiBadgeCheck style={{ color: cert.color }} size={26} />
            </div>

            <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
            <p className="text-xs mb-3" style={{ color: cert.color }}>{cert.issuer}</p>

            <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mb-3">
              <HiCalendar size={11} /> {cert.date}
            </div>

            <div className="flex flex-wrap justify-center gap-1.5">
              {cert.tags.map((tag) => (
                <Badge key={tag} color={cert.color} size="xs">{tag}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
