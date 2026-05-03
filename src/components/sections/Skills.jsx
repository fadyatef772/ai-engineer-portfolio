import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { skillCategories } from '../../data/skills'
import { ANIMATION_VARIANTS } from '../../utils/constants'

function SkillBar({ name, level, color, delay = 0 }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory)

  return (
    <SectionWrapper id="skills" dark>
      <SectionTitle
        label="Technical Skills"
        title="My"
        highlight="Arsenal"
        subtitle="A comprehensive toolkit built through hands-on projects, research, and continuous learning."
      />

      {/* Category filter tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12"
        variants={ANIMATION_VARIANTS.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
            activeCategory === 'all'
              ? 'bg-cyan-400/15 text-cyan-400 border-cyan-400/40 shadow-neon-cyan'
              : 'glass border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
              activeCategory === cat.id
                ? 'text-white border-white/30'
                : 'glass border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            style={activeCategory === cat.id ? {
              backgroundColor: `${cat.color}20`,
              borderColor: `${cat.color}60`,
              color: cat.color,
            } : {}}
          >
            {cat.title}
          </button>
        ))}
      </motion.div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.map((category, ci) => (
            <motion.div
              key={category.id}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold font-mono"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {ci + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                  <p className="text-slate-500 text-xs">{category.skills.length} skills</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={si * 0.1}
                  />
                ))}
              </div>

              {/* Bottom tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {category.skills.slice(0, 3).map((s) => (
                  <Badge key={s.name} color={category.color} size="xs">
                    {s.name}
                  </Badge>
                ))}
                {category.skills.length > 3 && (
                  <Badge color={category.color} size="xs">+{category.skills.length - 3}</Badge>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
