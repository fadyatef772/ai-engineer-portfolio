import { motion } from 'framer-motion'
import { HiClock, HiCalendar, HiArrowRight } from 'react-icons/hi'
import SectionWrapper from '../layout/SectionWrapper'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import { blogPosts } from '../../data/blog'
import { formatDate } from '../../utils/helpers'

export default function Blog() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <SectionWrapper id="blog">
      <SectionTitle
        label="Articles"
        title="Thoughts &"
        highlight="Insights"
        subtitle="Writing about AI, machine learning, data science, and building real-world intelligent systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Featured post */}
        <motion.article
          className="lg:col-span-2 glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <div
            className="h-48 flex items-center justify-center relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${featured.color}20 0%, ${featured.color}08 100%)` }}
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative z-10 text-center px-8">
              <span className="text-7xl opacity-20">📝</span>
            </div>
            <div className="absolute top-4 left-4">
              <Badge color={featured.color}>{featured.category}</Badge>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><HiCalendar /> {formatDate(featured.date)}</span>
              <span className="flex items-center gap-1"><HiClock /> {featured.readTime}</span>
            </div>
            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors">
              {featured.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <Badge key={tag} color={featured.color} size="xs">{tag}</Badge>
                ))}
              </div>
              <motion.a
                href={featured.link}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: featured.color }}
                whileHover={{ x: 4 }}
              >
                Read More <HiArrowRight />
              </motion.a>
            </div>
          </div>
        </motion.article>

        {/* Sidebar posts */}
        <div className="space-y-4">
          {rest.slice(0, 4).map((post, i) => (
            <motion.article
              key={post.id}
              className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-base"
                  style={{ backgroundColor: `${post.color}20` }}
                >
                  <span style={{ filter: `drop-shadow(0 0 4px ${post.color})` }}>
                    {i === 0 ? '🤖' : i === 1 ? '🚀' : i === 2 ? '🧹' : '⚡'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <Badge color={post.color} size="xs">{post.category}</Badge>
                  <h4 className="text-white text-xs font-semibold mt-1.5 mb-1 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-0.5"><HiClock size={10} /> {post.readTime}</span>
                    <span>{formatDate(post.date).split(',')[0]}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
