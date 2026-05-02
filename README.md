# Fady Atef Kamal — AI Engineer Portfolio

A professional 3D animated portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

- 3D neural network hero with React Three Fiber
- Glassmorphism dark UI with neon cyan & purple accents
- Framer Motion scroll animations throughout
- Fully responsive (mobile, tablet, desktop)
- 12 complete sections: Hero, About, Skills, Projects, Experience, Education, Certifications, Services, Achievements, Testimonials, Blog, Contact
- All content separated into `/src/data` files for easy editing

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Framework & build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| React Three Fiber + Drei | 3D WebGL canvas |
| Three.js | 3D primitives & geometry |
| React Icons | Icon library |
| React Type Animation | Typing effect in hero |
| React CountUp | Animated counters |
| React Hot Toast | Toast notifications |

## Installation & Setup

```bash
# 1. Clone or navigate to the project
cd ai-engineer-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

All editable content is in `/src/data/`:

| File | Content |
|------|---------|
| `personal.js` | Name, bio, links, contact |
| `skills.js` | Skill categories and proficiency |
| `projects.js` | Project cards with descriptions |
| `experience.js` | Work history timeline |
| `education.js` | Education background |
| `certifications.js` | Certificate cards |
| `services.js` | Service offerings |
| `achievements.js` | Stats counters |
| `testimonials.js` | Client reviews |
| `blog.js` | Article cards |

## Adding Your Profile Photo

Place your photo at: `public/images/profile.png`

## Contact Form Setup (Optional)

To enable real email sending, install EmailJS:

```bash
npm install @emailjs/browser
```

Then update `Contact.jsx` with your EmailJS service ID, template ID, and public key.

## Project Structure

```
src/
├── components/
│   ├── 3d/          # Three.js / R3F canvas components
│   ├── layout/      # Navbar, Footer, SectionWrapper
│   ├── sections/    # All 12 page sections
│   └── ui/          # Reusable Button, Card, Badge, SectionTitle
├── data/            # All editable content
├── hooks/           # useScrollAnimation, useMousePosition
├── styles/          # globals.css, animations.css
└── utils/           # constants.js, helpers.js
```

---

Built with AI, Data, and Passion by **Fady Atef Kamal**
