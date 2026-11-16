import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[180] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          data-cursor="hover"
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg/60 text-bone transition-colors hover:border-bone"
        >
          <FiX />
        </button>

        <ProjectVisual project={project} className="rounded-none border-0 border-b" />

        <div className="p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="chip" style={{ borderColor: `${project.color}66`, color: project.color }}>
              {project.category}
            </span>
            {project.featured && <span className="u-label text-accent">Featured</span>}
          </div>

          <h3 className="display text-[clamp(1.6rem,4vw,2.5rem)] text-bone">{project.title}</h3>

          <div className="mt-8 space-y-8">
            <Block label="The problem">{project.problem}</Block>
            <Block label="Overview">{project.fullDesc}</Block>
            {project.architecture && (
              <div>
                <p className="u-label mb-3">Architecture</p>
                <p className="rounded-lg border border-line bg-bg/50 p-4 font-mono text-[12px] leading-relaxed text-bone-dim">
                  {project.architecture}
                </p>
              </div>
            )}
            {project.features?.length > 0 && (
              <div>
                <p className="u-label mb-3">Key work</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-bone-dim">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: project.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="u-label mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {(project.github || project.live) && (
            <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" data-cursor="hover" className="btn btn-ghost">
                  <FiGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" data-cursor="hover" className="btn btn-primary">
                  <FiExternalLink /> Live site
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Block({ label, children }) {
  return (
    <div>
      <p className="u-label mb-3">{label}</p>
      <p className="text-[15px] leading-relaxed text-bone-dim">{children}</p>
    </div>
  )
}
