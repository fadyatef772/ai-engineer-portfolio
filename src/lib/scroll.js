// Small module-level bridge so nav links can drive Lenis (or fall back to native).
let lenis = null

export function setLenis(instance) {
  lenis = instance
}

export function scrollToId(id, opts = {}) {
  const el = typeof id === 'string' ? document.getElementById(id.replace(/^#/, '')) : id
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el, { offset: opts.offset ?? 0, duration: opts.duration ?? 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.1 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
