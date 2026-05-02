import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, glow = false, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        glass relative overflow-hidden rounded-2xl p-6 transition-all duration-300
        ${hover ? 'hover:bg-white/[0.06] hover:-translate-y-1 cursor-pointer' : ''}
        ${glow ? 'hover:shadow-neon-cyan' : 'hover:shadow-card-hover'}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.03) 0%, rgba(124,58,237,0.03) 100%)' }}
      />
      {children}
    </motion.div>
  )
}
