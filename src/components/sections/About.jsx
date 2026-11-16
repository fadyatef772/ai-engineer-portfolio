import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '../ui/SectionHeader'
import { Reveal, Stagger, StaggerItem } from '../ui/motion'
import { personalInfo } from '../../data/personal'
import { asset } from '../../lib/asset'

const FACTS = [
  { k: 'Based in', v: 'Cairo, Egypt' },
  { k: 'Foundation', v: 'BSc Computer Science — Software Engineering, ACU' },
  { k: 'Specialization', v: 'PG Diploma, Data Science & AI — Digilians (NTI + Military Academy)' },
  { k: 'Experience', v: 'IBM · Velir · M Squared · Art Vision' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 })

  return (
    <section id="about" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeader
        index="01"
        title="About"
        kicker="Who I am"
        aside="An engineer who ships intelligent systems — grounded in software engineering, sharpened by data science."
      />

      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait */}
        <Reveal className="lg:order-1">
          <div className="group relative mx-auto max-w-sm lg:mx-0" data-cursor="hover">
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <img
                src={asset(personalInfo.profileImage)}
                alt="Fady Atef Kamal"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-swift group-hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src = asset(personalInfo.profileImageFallback)
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="u-label text-bone">AI Engineer</span>
              </div>
            </div>
            {/* corner index */}
            <span className="absolute -right-3 -top-3 font-mono text-[11px] text-bone-faint">✦</span>
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="lg:order-2">
          <Reveal>
            <p className="text-balance font-display text-[clamp(1.4rem,2.8vw,2.1rem)] font-light leading-snug text-bone">
              I turn complex, messy data into AI products that work in the real world —
              <span className="text-bone-dim"> not a list of buzzwords, but systems that ship.</span>
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-bone-dim">
            <Reveal delay={0.05}>
              <p>
                My foundation is in Computer Science and Software Engineering at Al-Ahram Canadian
                University, which I sharpened with a specialized post-graduate diploma in Data Science
                &amp; AI from Digilians, run with NTI and the Military Academy. That mix — engineering
                discipline plus a data-science toolkit — is how I approach every problem.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I&apos;ve worked across global tech and digital-strategy teams including IBM and Velir,
                building predictive machine-learning models, running advanced statistical analysis, and
                managing the full data lifecycle — including cleaning complex datasets of over 10,000
                records. I care most about practical AI: models that get deployed, measured, and used.
              </p>
            </Reveal>
          </div>

          {/* Facts */}
          <Stagger className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line sm:grid-cols-2" gap={0.06}>
            {FACTS.map((f) => (
              <StaggerItem key={f.k} className="bg-surface/60 p-5">
                <p className="u-label mb-2">{f.k}</p>
                <p className="text-sm leading-snug text-bone">{f.v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Stats band */}
      <div ref={ref} className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line md:grid-cols-4">
        {personalInfo.stats.map((s) => (
          <div key={s.label} className="bg-surface/60 px-5 py-8 text-center sm:py-10">
            <p className="display text-[clamp(2rem,5vw,3.25rem)] text-bone">
              {inView ? <CountUp end={s.value} duration={2} suffix={s.suffix} /> : `0${s.suffix}`}
            </p>
            <p className="u-label mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
