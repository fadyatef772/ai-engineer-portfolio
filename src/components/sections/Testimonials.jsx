import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <SectionWrapper id="testimonials" dark>
      <SectionTitle
        label="Client Reviews"
        title="What People"
        highlight="Say"
        subtitle="Feedback from clients, mentors, and collaborators I've had the pleasure of working with."
      />

      <div className="max-w-4xl mx-auto">
        {/* Featured card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="glass rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-5 pointer-events-none"
                style={{ backgroundColor: testimonials[current].color }}
              />

              <FaQuoteLeft
                className="text-4xl mb-6 opacity-40"
                style={{ color: testimonials[current].color }}
              />

              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}88)` }}
                  >
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-slate-400 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={14} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                >
                  <div
                    className={`rounded-full transition-all ${i === current ? 'w-6 h-2' : 'w-2 h-2'}`}
                    style={{ backgroundColor: i === current ? testimonials[current].color : '#374151' }}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* Small preview cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              className={`glass rounded-xl p-4 text-left transition-all border ${
                i === current ? 'border-white/20' : 'border-white/5 hover:border-white/10'
              }`}
              style={i === current ? { borderColor: `${t.color}40` } : {}}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} size={8} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-white">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role.split(',')[0]}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
