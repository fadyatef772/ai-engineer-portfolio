export const truncate = (text, maxLength = 120) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }))

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const lerp = (a, b, t) => a + (b - a) * t
