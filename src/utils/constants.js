export const COLORS = {
  primary: '#00d4ff',
  secondary: '#7c3aed',
  accent: '#06b6d4',
  dark: '#0a0a0f',
  dark2: '#0f0f1a',
  dark3: '#1a1a2e',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const NAV_LINKS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Services', href: 'services' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' },
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  },
}
