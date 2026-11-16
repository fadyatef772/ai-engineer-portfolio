// Featured projects — Fady's real, code-backed work. Descriptions are grounded
// in his CV and repository descriptions (no invented metrics or links).
// Private repos intentionally carry no public github link to avoid broken URLs.
export const projects = [
  {
    id: 1,
    title: 'Marketly.ai — AI Marketing Operating System',
    shortDesc:
      'Founder-built generative-AI marketing & SEO intelligence platform for SMBs, orchestrated with LangGraph agents over a RAG pipeline.',
    fullDesc: `A multi-tenant SaaS that acts as an AI marketing operating system for SMBs in the MENA
    region. Built around LangGraph agentic orchestration with a retrieval-augmented pipeline
    (Voyage AI embeddings + pgvector vector search), prompt-engineered content generation, and a
    metered provider gateway for cost attribution — all on a row-level-secure Supabase backend.`,
    problem:
      'SMBs lack the time and expertise to run data-driven marketing and SEO. Marketly turns that into an automated, agent-driven workflow.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'RAG', 'Voyage AI', 'pgvector', 'Supabase', 'React', 'TypeScript'],
    category: 'Generative AI',
    color: '#6b80ff',
    features: [
      'LangGraph agentic orchestration',
      'RAG with Voyage AI embeddings + pgvector',
      'Prompt-engineered content generation',
      'Metered provider gateway for cost attribution',
      'Multi-tenant with row-level security on Supabase',
    ],
    github: null,
    live: null,
    tags: ['GenAI', 'LangGraph', 'RAG', 'Founder'],
    featured: true,
  },
  {
    id: 2,
    title: 'Inzox CV Maker — AI CV Generation SaaS',
    shortDesc:
      'Live AI-powered CV-generation SaaS built with agentic AI patterns and Clean Architecture, shipped through full CI/CD.',
    fullDesc: `As AI Engineer at INZOX, contributed production features to a live CV-generation SaaS using
    agentic AI patterns and Clean Architecture. Full CI/CD via Jenkins with auto-deploy on push to main,
    and a strict promotion discipline — main deploys to staging automatically, production is
    manager-controlled — with zero regressions across staging and production databases.`,
    problem:
      'Generating tailored, well-structured CVs at scale needs reliable AI generation plus production-grade delivery and data integrity.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins', 'Clean Architecture'],
    category: 'Generative AI',
    color: '#00d4ff',
    features: [
      'Agentic AI generation patterns',
      'Clean Architecture',
      'Jenkins CI/CD with auto-deploy on main',
      'Strict staging → production promotion',
      'Zero-regression database discipline',
    ],
    github: null,
    live: null,
    tags: ['GenAI', 'SaaS', 'Inzox', 'MLOps'],
    featured: true,
  },
  {
    id: 3,
    title: 'AI Bulk Image Generator + Virtual Try-On',
    shortDesc:
      'Production SaaS generating 1,000+ images concurrently via an asyncio worker pool, with real-time job updates and Google Vertex AI (Imagen 3, VTO).',
    fullDesc: `A production platform that processes 1,000+ bulk images concurrently using an asyncio worker
    pool with exponential-backoff retries, streaming real-time job updates over SSE + WebSocket. Built on a
    Protocol-based Clean Architecture for swappable AI providers (Google Vertex AI — Imagen 3 and Virtual
    Try-On), Dockerized and Kubernetes-ready, with a full production security audit including
    credential-leak remediation.`,
    problem:
      'Generating product imagery at scale — including virtual try-on — demands high concurrency, resilience, and swappable providers.',
    tech: ['Python', 'FastAPI', 'Vertex AI', 'Imagen 3', 'asyncio', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Vercel'],
    category: 'Generative AI',
    color: '#f59e0b',
    features: [
      '1,000+ images processed concurrently',
      'asyncio worker pool + exponential backoff',
      'SSE + WebSocket real-time job updates',
      'Protocol-based Clean Architecture (swappable providers)',
      'Production security audit + credential-leak remediation',
    ],
    github: null,
    live: null,
    tags: ['GenAI', 'Vertex AI', 'VTO', 'MLOps'],
    featured: true,
  },
  {
    id: 4,
    title: 'Sentinel CV — Computer Vision Monitoring',
    shortDesc:
      'Unified computer-vision monitoring platform integrating five CV capabilities behind a cached model manager with graceful degradation.',
    fullDesc: `A unified computer-vision monitoring platform for supervised environments. Integrates five CV
    capabilities — face recognition, pose, fall and violence detection — behind an LRU-caching model manager
    with graceful degradation, covered by 54 framework-independent tests that run with no GPU or model
    weights required.`,
    problem:
      'Supervised environments need integrity and safety monitoring that combines multiple CV models reliably and testably.',
    tech: ['Python', 'YOLOv8', 'TensorFlow', 'Keras', 'FaceNet', 'OpenCV', 'Streamlit'],
    category: 'Computer Vision',
    color: '#10b981',
    features: [
      'Five CV capabilities (face, pose, fall, violence)',
      'LRU-caching model manager',
      'Graceful degradation',
      '54 framework-independent tests (no GPU or weights)',
    ],
    github: 'https://github.com/fadyatef772/Computer_Vision_Sentinel-CV',
    live: null,
    tags: ['Computer Vision', 'YOLOv8', 'OpenCV'],
    featured: true,
  },
  {
    id: 5,
    title: 'SEO Intelligence Engine',
    shortDesc:
      'Standalone search-intelligence system — keyword ranking, SERP crawling and real search volume with cost-tiered provider routing.',
    fullDesc: `A standalone search-intelligence sub-system: keyword ranking, SERP crawling, real search volume
    and 12-month seasonality via Serper / DataForSEO / Google Trends, with cost-tiered, cheap-provider-first
    routing. A detection-based SERP model with rank-reversion history and Gemini-based keyword expansion;
    CI via GitHub Actions running crawl, embedding-backfill and detection jobs against a live database.`,
    problem:
      'Reliable SEO intelligence needs multi-source data, strict cost control, and continuous detection jobs.',
    tech: ['Python', 'FastAPI', 'pgvector', 'Voyage AI', 'Serper', 'DataForSEO', 'Google Trends', 'Gemini', 'GitHub Actions'],
    category: 'Generative AI',
    color: '#06b6d4',
    features: [
      'Keyword ranking + SERP crawling',
      'Real search volume + 12-month seasonality',
      'Cost-tiered, cheap-provider-first routing',
      'Gemini-based keyword expansion',
      'CI jobs against a live DB · 737+ tests',
    ],
    github: null,
    live: null,
    tags: ['SEO', 'RAG', 'Data'],
    featured: true,
  },
  {
    id: 6,
    title: 'Tifl — Adaptive Learning for Children with Down Syndrome',
    shortDesc:
      'Bilingual (Arabic/English) adaptive learning platform pairing an ML-driven engine with speech and a modern web client.',
    fullDesc: `A bilingual (AR/EN) adaptive learning platform for children with Down syndrome, pairing an
    ML-driven adaptive engine with speech recognition (Whisper) and a modern React/TypeScript client — so
    content adapts to each child's pace in either language.`,
    problem:
      'Children with Down syndrome benefit from adaptive, bilingual, speech-enabled learning tailored to their pace.',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'Whisper', 'SQLAlchemy', 'Pydantic', 'React', 'TypeScript', 'TailwindCSS'],
    category: 'Machine Learning',
    color: '#ec4899',
    features: [
      'Bilingual AR/EN adaptive content',
      'ML-driven adaptive engine',
      'Speech recognition via Whisper',
      'Modern React/TypeScript client',
    ],
    github: 'https://github.com/fadyatef772/Tifil',
    live: null,
    tags: ['ML', 'EdTech', 'Accessibility', 'Arabic'],
    featured: true,
  },
  {
    id: 7,
    title: 'Multilingual Text Preprocessing Engine',
    shortDesc:
      'Dockerized FastAPI service providing configurable English & Arabic NLP preprocessing through a dynamic pipeline architecture.',
    fullDesc: `A full-stack NLP service that cleans and prepares raw text for machine-learning tasks, supporting
    both English and Arabic through a configurable API and a simple GUI. Users submit raw text, choose the
    language and preprocessing options, and receive cleaned text plus the list of applied steps — all running
    inside a single Docker container.`,
    problem:
      'Raw text is noisy and inconsistent, and standard pipelines lack Arabic-specific handling (diacritics, tatweel, Alef normalization). A unified, configurable preprocessing layer was missing for multilingual ML workflows.',
    tech: ['Python', 'FastAPI', 'NLTK', 'PyArabic', 'Pydantic', 'Docker'],
    category: 'NLP',
    color: '#8b5cf6',
    features: [
      'English & Arabic preprocessing pipeline',
      'Arabic: tashkeel, tatweel, Alef/Ya normalization',
      'English: lowercasing, stemming, lemmatization',
      'Dynamic JSON-configurable options',
      'FastAPI + GUI + Docker in one container',
    ],
    architecture:
      'User Interface → FastAPI Router → Dynamic Pipeline Service → Language Processor → Utility Functions',
    github: 'https://github.com/fadyatef772/text-preprocessor',
    live: null,
    tags: ['NLP', 'Arabic', 'FastAPI', 'Docker'],
    featured: true,
  },
  {
    id: 8,
    title: 'Inzox Trip Agent — Agentic Travel Assistant',
    shortDesc:
      'An agentic AI trip-planning assistant built at INZOX. (Awaiting a fuller description and stack from you.)',
    fullDesc: `An agentic AI assistant for trip planning, developed at INZOX. This entry is intentionally
    minimal — share a one-line description and the tech stack and I'll flesh it out properly rather than
    guess at details.`,
    problem: 'Planning a trip end-to-end benefits from an AI agent that can reason over options and constraints.',
    tech: ['Agentic AI', 'LLM Agents'],
    category: 'Generative AI',
    color: '#7c3aed',
    features: ['Agentic trip-planning workflow'],
    github: 'https://github.com/inzox-trip-agent',
    live: null,
    tags: ['GenAI', 'Agents', 'Inzox'],
    featured: false,
  },
]
