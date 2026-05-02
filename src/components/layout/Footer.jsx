import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaHeart, FaArrowUp, FaDownload } from 'react-icons/fa'
import { scrollToSection } from '../../utils/helpers'

const socials = [
  { icon: FaGithub, href: 'https://github.com/fadyatef772', label: 'GitHub', color: '#00d4ff' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/fady-atef-kamal', label: 'LinkedIn', color: '#0077b5' },
  { icon: FaWhatsapp, href: 'https://wa.me/201022678326', label: 'WhatsApp', color: '#25d366' },
  { icon: FaEnvelope, href: 'mailto:fadyatef392@gmail.com', label: 'Email', color: '#ea4335' },
]

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact']

export default function Footer() {
  return (
    <footer className="relative bg-dark-2 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00d4ff 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold font-mono">FA</span>
              </div>
              <span className="text-white font-display font-bold text-xl">
                Fady<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AI Engineer & Data Scientist building intelligent solutions that transform data into real impact.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 border border-white/5"
                  whileHover={{ scale: 1.1, borderColor: color, color: color }}
                  style={{ '--hover-color': color }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <motion.a
                  href={`${import.meta.env.BASE_URL}cv/FADY-ATEF-KAMAL-DataScientist_Cv.pdf`}
                  download="Fady-Atef-Kamal-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all"
                  whileHover={{ scale: 1.02, x: 2 }}
                >
                  <FaDownload size={11} /> Download My CV
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:fadyatef392@gmail.com" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <FaEnvelope size={12} />
                  fadyatef392@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/201022678326" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <FaWhatsapp size={12} />
                  +20 10 2267 8326
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fady-atef-kamal" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <FaLinkedinIn size={12} />
                  linkedin.com/in/fady-atef-kamal
                </a>
              </li>
            </ul>
            <div className="mt-6 p-3 glass rounded-xl border border-green-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Available for freelance projects</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © 2024 Fady Atef Kamal · Built with
            <FaHeart className="text-red-500 text-xs" />
            AI, Data, and Passion
          </p>

          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
            whileHover={{ y: -2 }}
          >
            Back to top
            <span className="w-6 h-6 rounded-lg glass border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40">
              <FaArrowUp size={10} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
