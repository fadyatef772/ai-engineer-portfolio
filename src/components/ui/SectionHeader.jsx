import { MaskLines, Reveal } from './motion'

/** Consistent editorial section header: index + title, optional kicker/aside. */
export default function SectionHeader({ index, title, kicker, aside, id }) {
  return (
    <div className="mb-14 sm:mb-20" id={id}>
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="hair max-w-[90px]" />
          {kicker && <span className="u-label">{kicker}</span>}
        </div>
      </Reveal>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="display text-bone text-[clamp(2.25rem,7vw,5.5rem)]">
          <MaskLines lines={[title]} />
        </h2>
        {aside && (
          <Reveal delay={0.1} className="max-w-sm text-pretty text-sm leading-relaxed text-bone-dim">
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  )
}
