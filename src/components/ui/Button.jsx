import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-neon-cyan hover:scale-105',
  secondary: 'bg-transparent border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-neon-cyan',
  ghost: 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10',
  purple: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:shadow-neon-purple hover:scale-105',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({ children, variant = 'primary', size = 'md', onClick, href, className = '', icon, ...props }) {
  const base = `inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  )
}
