import SectionHeader from '../ui/SectionHeader'
import { Reveal, Stagger, StaggerItem } from '../ui/motion'
import { experiences } from '../../data/experience'
import { education } from '../../data/education'

function Role({ exp }) {
  return (
    <div className="group grid gap-4 py-8 transition-colors sm:grid-cols-[0.8fr_2fr] sm:gap-10">
      {/* Left: period + company */}
      <div>
        <p className="font-mono text-[12px] text-accent">{exp.period}</p>
        <p className="mt-2 font-display text-lg text-bone">{exp.company}</p>
        <p className="mt-1 text-[12px] text-bone-faint">
          {exp.type} · {exp.location}
        </p>
      </div>
      {/* Right: role + detail */}
      <div>
        <h4 className="font-display text-xl text-bone transition-colors group-hover:text-accent-bright">
          {exp.role}
        </h4>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-bone-dim">{exp.description}</p>
        <ul className="mt-4 grid gap-1.5">
          {exp.responsibilities.slice(0, 3).map((r) => (
            <li key={r} className="flex gap-2.5 text-[13px] text-bone-dim/90">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
              {r}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeader
        index="04"
        title="Experience"
        kicker="Where I've worked"
        aside="A path through AI product teams, digital agencies, and hands-on data systems — INZOX and Velir included."
      />

      {/* Experience timeline */}
      <Reveal>
        <div className="divide-y divide-line border-y border-line">
          {experiences.map((e) => (
            <Role key={e.id} exp={e} />
          ))}
        </div>
      </Reveal>

      {/* Education */}
      <div className="mt-24">
        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="u-label">Education</span>
            <span className="hair" />
          </div>
        </Reveal>
        <Stagger className="grid gap-5 md:grid-cols-2">
          {education.map((ed) => (
            <StaggerItem key={ed.id}>
              <div className="h-full rounded-xl border border-line bg-surface/50 p-6 sm:p-8">
                <p className="font-mono text-[12px] text-accent">{ed.period}</p>
                <h4 className="mt-3 font-display text-xl text-bone">{ed.field}</h4>
                <p className="mt-1 text-sm text-bone-dim">{ed.degree} · {ed.institution}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-bone-dim/90">{ed.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ed.courses.slice(0, 5).map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Certifications now live in their own immersive gallery section (#certificates). */}
    </section>
  )
}
