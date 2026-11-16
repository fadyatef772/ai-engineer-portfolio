import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { Reveal } from '../ui/motion'

/**
 * The six capability areas requested in the brief, populated strictly from
 * technologies evidenced in Fady's existing skills/projects data — nothing
 * invented, no fabricated proficiency numbers.
 */
const AREAS = [
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    blurb: 'Supervised & unsupervised modelling, from clean data to a tuned, explainable model.',
    tags: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM', 'ANN / MLP', 'Classification', 'Regression', 'SHAP Explainability'],
  },
  {
    id: 'genai',
    title: 'Generative AI & LLMs',
    blurb: 'Working with transformer models and language models for text understanding and generation.',
    tags: ['Transformers', 'BERT / GPT', 'Hugging Face', 'OpenAI', 'Fine-tuning', 'Embeddings'],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    blurb: 'Convolutional architectures for image understanding and visual feature extraction.',
    tags: ['CNN Architectures', 'Image Classification', 'Visual Feature Extraction'],
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    blurb: 'A core strength — multilingual text AI with a focus on the hard parts of Arabic.',
    tags: ['Arabic NLP', 'Sentiment Analysis', 'Sarcasm Detection', 'Text Preprocessing', 'NLTK', 'spaCy', 'PyArabic'],
  },
  {
    id: 'ds',
    title: 'Data Science & Analytics',
    blurb: 'The full analytical pipeline — EDA, statistics, and the dashboards that communicate it.',
    tags: ['Pandas', 'NumPy', 'EDA & Feature Engineering', 'Statistical Analysis', 'Power BI', 'Tableau', 'Plotly', 'Matplotlib', 'Seaborn'],
  },
  {
    id: 'backend',
    title: 'Backend & Deployment',
    blurb: 'Serving models as production APIs, containerised and version-controlled.',
    tags: ['FastAPI', 'Flask', 'REST APIs', 'Swagger / OpenAPI', 'Docker', 'Git & GitHub', 'Linux', 'SQL · PostgreSQL · MongoDB'],
  },
]

function Row({ area, index, open, onToggle }) {
  const reduce = useReducedMotion()
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        data-cursor="hover"
        className="group flex w-full items-center gap-5 py-6 text-left sm:py-8"
        aria-expanded={open}
      >
        <span className="font-mono text-xs text-bone-faint">{index}</span>
        <span
          className={`display flex-1 text-[clamp(1.5rem,4vw,2.75rem)] transition-colors duration-300 ${
            open ? 'text-bone' : 'text-bone-dim group-hover:text-bone'
          }`}
        >
          {area.title}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open ? 'rotate-45 border-accent text-accent' : 'border-line text-bone-dim group-hover:border-bone group-hover:text-bone'
          }`}
          aria-hidden="true"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-9 sm:pl-10">
              <p className="mb-5 max-w-xl text-sm leading-relaxed text-bone-dim">{area.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Expertise() {
  const [open, setOpen] = useState('aiml')

  return (
    <section id="expertise" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeader
        index="02"
        title="Expertise"
        kicker="What I work with"
        aside="Six areas, one through-line: taking a model from a notebook to something deployed and dependable."
      />
      <Reveal>
        <div className="border-t border-line">
          {AREAS.map((a, i) => (
            <Row
              key={a.id}
              area={a}
              index={String(i + 1).padStart(2, '0')}
              open={open === a.id}
              onToggle={() => setOpen(open === a.id ? null : a.id)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
