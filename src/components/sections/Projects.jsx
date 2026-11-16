import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import { Reveal } from '../ui/motion'
import { projects } from '../../data/projects'
import ProjectVisual from './projects/ProjectVisual'
import ProjectModal from './projects/ProjectModal'

function ProjectRow({ project, index, flip, onOpen }) {
  return (
    <Reveal>
      <div className="grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <button
          onClick={onOpen}
          data-cursor="view"
          className={`group block w-full ${flip ? 'lg:order-2' : ''}`}
          aria-label={`Open ${project.title}`}
        >
          <ProjectVisual project={project} />
        </button>

        {/* Text */}
        <div className={flip ? 'lg:order-1' : ''}>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs text-accent">{index}</span>
            <span className="u-label">{project.category}</span>
            {project.featured && <span className="u-label text-accent">· Featured</span>}
          </div>
          <button onClick={onOpen} data-cursor="hover" className="group text-left">
            <h3 className="display text-[clamp(1.6rem,3.6vw,2.75rem)] text-bone transition-colors group-hover:text-accent-bright">
              {project.title}
            </h3>
          </button>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-bone-dim">{project.shortDesc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-5">
            <button onClick={onOpen} data-cursor="hover" className="group flex items-center gap-2">
              <span className="accent-link font-mono text-[12px] uppercase tracking-[0.14em] text-bone">
                View case
              </span>
              <FiArrowUpRight className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="text-bone-dim transition-colors hover:text-bone"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeader
        index="03"
        title="Selected Work"
        kicker="Featured projects"
        aside="Real projects — NLP engines, ML models, and data systems — built end to end. Open any one for the full case."
      />

      <div className="divide-y divide-line border-y border-line">
        {projects.map((p, i) => (
          <ProjectRow
            key={p.id}
            project={p}
            index={String(i + 1).padStart(2, '0')}
            flip={i % 2 === 1}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
