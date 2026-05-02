export default function Badge({ children, color = '#00d4ff', size = 'sm' }) {
  const sizes = { xs: 'px-2 py-0.5 text-xs', sm: 'px-3 py-1 text-xs', md: 'px-4 py-1.5 text-sm' }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium border transition-all ${sizes[size]}`}
      style={{
        backgroundColor: `${color}15`,
        borderColor: `${color}40`,
        color: color,
      }}
    >
      {children}
    </span>
  )
}
