// Resolve a /public asset against Vite's base URL so paths work both locally
// and on the GitHub Pages project path (base: '/ai-engineer-portfolio/').
export const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\//, '')}`
