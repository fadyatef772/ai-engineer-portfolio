import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import { Reveal, MaskLines, Magnetic } from '../ui/motion'
import { personalInfo } from '../../data/personal'
import { asset } from '../../lib/asset'

const SOCIALS = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: FiMail },
  { label: 'LinkedIn', value: '/fady-atef-kamal', href: personalInfo.linkedin, Icon: FiLinkedin },
  { label: 'GitHub', value: '/fadyatef772', href: personalInfo.github, Icon: FiGithub },
  { label: 'WhatsApp', value: 'Message me', href: `https://wa.me/${personalInfo.whatsapp}`, Icon: SiWhatsapp },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || 'Hello Fady'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    toast.success('Opening your email client…')
  }

  const field = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line pt-24 sm:pt-32">
      <div className="shell">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs text-accent">06</span>
            <span className="hair max-w-[90px]" />
            <span className="u-label">Contact</span>
          </div>
        </Reveal>

        <h2 className="display text-bone text-[clamp(2.5rem,9vw,8rem)]">
          <MaskLines lines={["Let's build", 'something']} />
          <span className="text-accent">
            <MaskLines lines={['intelligent.']} delay={0.18} />
          </span>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left: pitch + email + socials */}
          <div>
            <Reveal>
              <p className="max-w-md text-[15px] leading-relaxed text-bone-dim">
                I&apos;m open to AI &amp; ML engineering roles and freelance projects — from a single
                model to a deployed, end-to-end system. Tell me what you&apos;re building.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <Magnetic className="mt-10 block">
                <a
                  href={`mailto:${personalInfo.email}`}
                  data-cursor="hover"
                  className="accent-link inline-block font-display text-[clamp(1.25rem,3.2vw,2.25rem)] text-bone"
                >
                  {personalInfo.email}
                </a>
              </Magnetic>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={asset(personalInfo.cvUrl)}
                target="_blank"
                rel="noreferrer"
                download
                data-cursor="hover"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:text-accent"
              >
                <FiDownload /> Download CV / Résumé
              </a>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line">
              {SOCIALS.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group bg-surface/50 p-5 transition-colors hover:bg-surface"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Icon className="text-bone-dim transition-colors group-hover:text-accent" />
                    <FiArrowUpRight className="text-bone-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone" />
                  </div>
                  <p className="u-label">{label}</p>
                  <p className="mt-1 truncate text-sm text-bone">{value}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right: quick message form (mailto) */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8">
              <p className="u-label mb-6">Quick message</p>
              <div className="space-y-5">
                <Input label="Your name" value={form.name} onChange={field('name')} required />
                <Input label="Your email" type="email" value={form.email} onChange={field('email')} />
                <div>
                  <label className="u-label mb-2 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={field('message')}
                    required
                    rows={4}
                    className="w-full resize-none border-0 border-b border-line bg-transparent py-2 text-bone outline-none transition-colors placeholder:text-bone-faint focus:border-accent"
                    placeholder="What can I help you build?"
                  />
                </div>
              </div>
              <button type="submit" data-cursor="hover" className="btn btn-primary mt-8 w-full">
                Send message <FiArrowUpRight />
              </button>
              <p className="mt-3 text-center text-[11px] text-bone-faint">
                Opens your email app, pre-filled — no data stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>

      <Footer />
    </section>
  )
}

function Input({ label, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="u-label mb-2 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border-0 border-b border-line bg-transparent py-2 text-bone outline-none transition-colors placeholder:text-bone-faint focus:border-accent"
      />
    </div>
  )
}

function Footer() {
  return (
    <footer className="shell mt-24 border-t border-line py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img
            src={asset('/logo-mark.png')}
            alt="Fady Atef Kamal monogram"
            className="h-8 w-8 shrink-0 object-contain opacity-90"
          />
          <div>
            <p className="font-display text-lg text-bone">Fady Atef Kamal</p>
            <p className="mt-1 text-[12px] text-bone-faint">AI Engineer · {personalInfo.location}</p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-bone-faint">
          © {new Date().getFullYear()} — Built with React, Vite &amp; Framer Motion
        </p>
      </div>
    </footer>
  )
}
