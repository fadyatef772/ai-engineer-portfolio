import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { Reveal } from '../ui/motion'

/**
 * Capability areas mirror Fady's CV "Technical Skills" grouping — every tag is
 * a skill he lists, nothing invented and no fabricated proficiency numbers.
 */
const AREAS = [
  {
    id: 'llm',
    title: 'LLM & Generative AI',
    blurb: 'Building with LLMs end to end — RAG, agentic workflows, fine-tuning and vector search.',
    tags: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'Dify', 'Agentic Workflows', 'Prompt Engineering', 'Retrieval Strategy Optimization', 'Vector Search (pgvector)', 'LLM Fine-Tuning (BERT 8-class)', 'OpenRouter API', 'Hugging Face Transformers', 'Vertex AI (Gemini, Imagen 3, VTO)', 'PoC Development'],
  },
  {
    id: 'infra',
    title: 'AI Infrastructure & DevOps',
    blurb: 'Shipping and running AI in production — containers, CI/CD and cloud.',
    tags: ['Docker', 'Kubernetes (K8s)', 'CI/CD (GitHub Actions, Jenkins)', 'Google Cloud Platform', 'Cloud Run', 'Cloud Build', 'Vercel', 'Hugging Face Spaces', 'Production Monitoring', 'Model Deployment', 'Clean Architecture', 'Environment Management', 'Security Auditing'],
  },
  {
    id: 'api',
    title: 'AI Integration & API Development',
    blurb: 'Serving models and tools through clean, typed, real-time APIs.',
    tags: ['FastAPI', 'REST API Design', 'WebSocket', 'SSE', 'Tool & API Integration', 'Internal System Connectivity', 'Pydantic v2', 'asyncpg', 'Dependency Injection', 'Protocol-Based Interfaces'],
  },
  {
    id: 'ml',
    title: 'Machine Learning & Deep Learning',
    blurb: 'Classical ML, ensembles, neural nets and computer vision — rigorously evaluated.',
    tags: ['Supervised & Unsupervised Learning', 'Ensemble Methods (CatBoost, AdaBoost, Gradient Boosting)', 'SMOTE', 'Neural Networks', 'BERT', 'PyTorch', 'TensorFlow', 'Computer Vision (YOLOv8, FaceNet, U-Net)', 'scikit-learn', 'Model Evaluation (F1, ROC/AUC, RMSE)'],
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    blurb: 'Multilingual text AI with deep Arabic support.',
    tags: ['Text Preprocessing', 'NLTK', 'Arabic RTL Pipelines', 'Bilingual NLP (Arabic + English)', 'Negation-Safe Stopword Removal', 'ISRI Stemming', 'Sentiment Analysis'],
  },
  {
    id: 'databases',
    title: 'Databases',
    blurb: 'Relational, vector and multi-tenant data done right.',
    tags: ['PostgreSQL', 'Supabase (RLS, pgvector)', 'MySQL', 'SQL Server', 'Connection Pooling', 'Star Schema', 'Data Warehouse', 'Row-Level Security', 'Multi-Tenant Architecture'],
  },
  {
    id: 'data-bi',
    title: 'Data & BI',
    blurb: 'From EDA and feature engineering to dashboards that decide.',
    tags: ['Python (Pandas, NumPy)', 'EDA', 'Feature Engineering', 'Power BI (DAX, Star Schema)', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'SQL (T-SQL, Window Functions, CTEs)'],
  },
  {
    id: 'tools',
    title: 'Tools',
    blurb: 'The day-to-day toolchain.',
    tags: ['Git / GitHub (Git Flow)', 'Docker Compose', 'Jupyter Notebook', 'Playwright', 'Tavily API', 'Excel (Advanced)', 'WordPress', 'Google Apps Script'],
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
  const [open, setOpen] = useState('llm')

  return (
    <section id="expertise" className="shell scroll-mt-24 py-24 sm:py-32">
      <SectionHeader
        index="02"
        title="Expertise"
        kicker="What I work with"
        aside="The full stack of building and shipping AI — from LLM systems and agents to production infrastructure."
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
