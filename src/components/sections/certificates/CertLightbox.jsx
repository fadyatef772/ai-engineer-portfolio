import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { asset } from '../../../lib/asset'

/** Large certificate preview with verify link and prev/next navigation. */
export default function CertLightbox({ cert, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-[180] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Controls */}
      <button
        onClick={onClose}
        data-cursor="hover"
        aria-label="Close"
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-line bg-bg/60 text-bone transition-colors hover:border-bone"
      >
        <FiX />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        data-cursor="hover"
        aria-label="Previous"
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/60 text-bone transition-colors hover:border-bone sm:left-6"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        data-cursor="hover"
        aria-label="Next"
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/60 text-bone transition-colors hover:border-bone sm:right-6"
      >
        <FiChevronRight />
      </button>

      <motion.div
        key={cert.id}
        className="flex max-h-full w-full max-w-4xl flex-col items-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={asset(cert.image)}
          alt={cert.title}
          className="max-h-[70vh] w-auto max-w-full rounded-lg border border-line bg-white/5 object-contain shadow-2xl"
        />
        <div className="mt-5 flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-lg text-bone">{cert.title}</h3>
            <p className="mt-1 text-sm text-bone-dim">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="btn btn-ghost shrink-0"
            >
              Verify <FiExternalLink />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
