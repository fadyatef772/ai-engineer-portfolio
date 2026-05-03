import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, highlight, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.3em] uppercase text-cyan-400">
          <span className="w-8 h-px bg-cyan-400" />
          {label}
          <span className="w-8 h-px bg-cyan-400" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-2 mt-1">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        <div className="h-1 w-6 rounded-full bg-purple-500/50" />
        <div className="h-1 w-3 rounded-full bg-cyan-400/30" />
      </div>
    </motion.div>
  )
}
