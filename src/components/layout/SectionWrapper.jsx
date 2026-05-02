import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={`relative section-padding overflow-hidden ${dark ? 'bg-dark-2/50' : ''} ${className}`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00d4ff 0%, transparent 70%)' }}
      />

      <motion.div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
