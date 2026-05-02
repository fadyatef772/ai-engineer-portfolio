import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import toast, { Toaster } from 'react-hot-toast'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import { personalInfo } from '../../data/personal'

const contactLinks = [
  { icon: FaEnvelope, label: 'Email', value: 'fadyatef392@gmail.com', href: 'mailto:fadyatef392@gmail.com', color: '#ea4335' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: 'fady-atef-kamal', href: 'https://www.linkedin.com/in/fady-atef-kamal', color: '#0077b5' },
  { icon: FaGithub, label: 'GitHub', value: 'fadyatef772', href: 'https://github.com/fadyatef772', color: '#00d4ff' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+20 10 2267 8326', href: 'https://wa.me/201022678326', color: '#25d366' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields.')
      return
    }
    setSending(true)
    // Simulate sending (replace with EmailJS integration)
    await new Promise((r) => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    toast.success('Message sent! I\'ll get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <SectionWrapper id="contact" dark>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#1a1a2e', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.1)' },
        }}
      />

      <SectionTitle
        label="Get In Touch"
        title="Let's"
        highlight="Connect"
        subtitle="Have a project in mind? Let's discuss how AI and data science can solve your challenge."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {/* Left: Info */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Ready to build something great?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a data science project, need an ML model, want to deploy an AI system,
              or just want to talk about possibilities — I'm here and happy to help.
            </p>
          </div>

          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/15 transition-all group"
                whileHover={{ x: 4, scale: 1.01 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon style={{ color }} size={15} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Status */}
          <div className="glass rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">Currently Available</span>
            </div>
            <p className="text-slate-500 text-xs">Response time: usually within 24 hours</p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-8 border border-white/8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="ML project / Data dashboard / API deployment..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, what you need, and your timeline..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending || sent}
              className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm transition-all ${
                sent
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-neon-cyan'
              }`}
              whileHover={{ scale: sending || sent ? 1 : 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : sent ? (
                <><HiCheckCircle size={18} /> Message Sent!</>
              ) : (
                <><FaPaperPlane size={13} /> Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
