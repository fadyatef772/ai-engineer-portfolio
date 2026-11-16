/**
 * Generative project visual — built purely from the project's accent colour and
 * metadata, so there are no external image dependencies (and nothing to break).
 * A layered gradient field + dot grid + oversized category wordmark.
 */
export default function ProjectVisual({ project, className = '' }) {
  const c = project.color || '#3d5afe'
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      style={{ '--c': c }}
    >
      {/* Colour field */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-swift group-hover:scale-110"
        style={{
          background: `radial-gradient(120% 120% at 18% 12%, ${c}2e, transparent 58%), radial-gradient(100% 120% at 92% 96%, ${c}1f, transparent 55%), linear-gradient(135deg, #0e0e13, #07070a)`,
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(237,233,224,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(120% 120% at 30% 20%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(120% 120% at 30% 20%, #000 20%, transparent 75%)',
        }}
      />
      {/* Oversized category wordmark */}
      <div className="absolute inset-0 flex items-end p-6 sm:p-8">
        <span
          className="display text-[clamp(2.5rem,7vw,5rem)] leading-[0.85] opacity-90"
          style={{ color: c }}
        >
          {project.category}
        </span>
      </div>
      {/* Top meta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 sm:p-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-dim">
          {project.tech[0]}
        </span>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
      </div>
      {/* keep a pleasant aspect */}
      <div className="pt-[66%]" />
    </div>
  )
}
