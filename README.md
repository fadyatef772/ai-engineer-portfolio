# Fady Atef Kamal — AI Engineer Portfolio

A premium, editorial, motion-driven portfolio for an AI Engineer. Dark canvas,
oversized display typography, a signature interactive **neural field**, custom
cursor, smooth inertia scroll, and masked scroll-reveals — all accessible and
`prefers-reduced-motion` aware.

## Tech stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite 5 | Framework & build tool |
| Tailwind CSS 3 | Design tokens & utility styling |
| Framer Motion | Reveals, staggers, transitions |
| Lenis | Smooth inertia scrolling |
| Canvas 2D | Signature neural-field hero visual |
| React Icons · React CountUp · React Hot Toast | Icons, animated stats, toasts |

> Three.js / React-Three-Fiber were removed — the hero's signature motion is a
> lightweight Canvas 2D neural field, cutting ~266 KB gzipped from the bundle.

## Sections

1. **Hero** — name + "AI Engineer", rotating focus, neural field, CTAs, tech marquee
2. **About** — background, specialization, bio, portrait, animated stats
3. **Expertise** — six capability areas as an interactive accordion
4. **Selected Work** — alternating project rows with generative visuals + detail modals
5. **Experience** — roles timeline, education, and verified certifications
6. **Contact** — big email CTA, social links, and a mailto quick-message form

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173/ai-engineer-portfolio/
```

## Build

```bash
npm run build      # outputs to /dist
npm run preview
```

## Content

All content lives in `src/data/*.js` (`personal`, `projects`, `skills`,
`experience`, `education`, `certifications`). Edit these to update the site —
no component changes needed. Your profile photo is at `public/images/profile.png`.

## Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Cursor, Loader, ScrollProgress
│   ├── providers/   # SmoothScroll (Lenis)
│   ├── sections/    # Hero, About, Expertise, Projects, Experience, Contact
│   ├── ui/          # motion helpers, SectionHeader
│   └── visual/      # NeuralField (Canvas 2D)
├── data/            # all editable content
├── lib/             # scroll helpers
└── index.css        # tokens, cursor, reduced-motion
```

## Notes

- Deployed as a GitHub Pages project site (`base: '/ai-engineer-portfolio/'` in `vite.config.js`).
- The contact form opens the visitor's email client via `mailto:` — no backend or keys required.

---

Built with React, Vite & Framer Motion by **Fady Atef Kamal**
