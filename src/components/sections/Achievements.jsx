import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaRocket, FaBrain, FaDatabase, FaServer, FaChartBar, FaAward, FaSmile, FaBullseye } from 'react-icons/fa'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import { achievements } from '../../data/achievements'

const iconMap = {
  rocket: FaRocket, brain: FaBrain, database: FaDatabase, server: FaServer,
  chart: FaChartBar, award: FaAward, smile: FaSmile, target: FaBullseye,
}

function AchievementCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const Icon = iconMap[item.icon] || FaRocket

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all text-center group relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${item.color}10 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
      >
        <Icon style={{ color: item.color }} size={22} />
      </div>

      {/* Counter */}
      <div className="text-4xl font-bold font-display mb-1" style={{ color: item.color }}>
        {inView ? (
          <CountUp end={item.value} duration={2.5} suffix={item.suffix} />
        ) : (
          <span>0{item.suffix}</span>
        )}
      </div>

      <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
      <p className="text-slate-500 text-xs">{item.description}</p>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        label="Numbers"
        title="My"
        highlight="Achievements"
        subtitle="Metrics that reflect real work, real impact, and continuous growth."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
        {achievements.map((item, i) => (
          <AchievementCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
