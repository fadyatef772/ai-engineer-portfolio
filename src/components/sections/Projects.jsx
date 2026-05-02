import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import { HiChip } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'

const categories = ['All', 'NLP', 'Machine Learning', 'Computer Vision', 'MLOps / API', 'Business Intelligence']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter))

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="Featured Work"
        title="My"
        highlight="Projects"
        subtitle="End-to-end AI and data science solutions — from concept and data to deployment and results."
      />

      {/* Filter tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
              activeFilter === cat
                ? 'bg-cyan-400/15 text-cyan-400 border-cyan-400/40'
                : 'glass border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Project header */}
              <div
                className="relative h-40 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}08 100%)` }}
              >
                {/* Animated grid */}
                <div className="absolute inset-0 bg-grid opacity-40" />

                {/* Icon */}
                <div
                  className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}40` }}
                >
                  <HiChip style={{ color: project.color }} size={28} />
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                    <FaStar size={8} /> Featured
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute bottom-3 left-3">
                  <Badge color={project.color} size="xs">{project.category}</Badge>
                </div>

                {/* Hover glow */}
                {hoveredId === project.id && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: `radial-gradient(circle at center, ${project.color}20 0%, transparent 70%)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{project.shortDesc}</p>

                {/* Problem */}
                <div className="mb-4 p-3 rounded-xl" style={{ backgroundColor: `${project.color}08`, borderLeft: `3px solid ${project.color}` }}>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold" style={{ color: project.color }}>Problem: </span>
                    {project.problem}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((t) => (
                    <Badge key={t} color={project.color} size="xs">{t}</Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge color={project.color} size="xs">+{project.tech.length - 4}</Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-white/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaGithub size={12} /> GitHub
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl text-white transition-all"
                      style={{ backgroundColor: `${project.color}30`, border: `1px solid ${project.color}50` }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </motion.a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-xl text-slate-600 glass border border-white/5 cursor-not-allowed">
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View all CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://github.com/fadyatef772"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 glass border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/30 font-semibold rounded-xl transition-all text-sm"
          whileHover={{ scale: 1.03 }}
        >
          <FaGithub /> View All on GitHub
        </motion.a>
      </motion.div>
    </SectionWrapper>
  )
}
