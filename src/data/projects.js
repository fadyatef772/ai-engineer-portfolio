export const projects = [
  {
    id: 1,
    title: 'Multilingual Text Preprocessing Engine',
    shortDesc: 'Dockerized FastAPI application providing configurable NLP preprocessing for English and Arabic text with a dynamic pipeline architecture.',
    fullDesc: `A full-stack NLP project designed to clean and prepare raw text data for machine learning tasks.
    The system supports both English and Arabic text preprocessing through a configurable API and a simple GUI.
    Users input raw text, choose the language, select preprocessing options, and receive cleaned text along
    with the list of applied processing steps. Built using FastAPI, modular Python services, and runs inside
    a single Docker container.`,
    problem: 'Raw text data is noisy and inconsistent. Standard pipelines lack Arabic-specific handling (diacritics, tatweel, Alef normalization). A unified, configurable preprocessing layer was missing for multilingual ML workflows.',
    tech: ['Python', 'FastAPI', 'NLTK', 'PyArabic', 'Pydantic', 'Docker', 'HTML/CSS/JS'],
    category: 'NLP',
    color: '#00d4ff',
    features: [
      'English & Arabic preprocessing pipeline',
      'Arabic: tashkeel, tatweel, Alef/Ya normalization',
      'English: lowercasing, stemming, lemmatization',
      'Dynamic JSON-configurable options',
      'FastAPI + GUI + Docker in one container',
    ],
    architecture: 'User Interface → FastAPI Router → Dynamic Pipeline Service → Language Processor → Utility Functions',
    github: 'https://github.com/fadyatef772',
    live: null,
    image: '/images/projects/nlp-engine.png',
    tags: ['NLP', 'Python', 'FastAPI', 'Arabic', 'Docker'],
    featured: true,
  },
  {
    id: 2,
    title: 'Autism Classification ML Application',
    shortDesc: 'Graduation project — ML model predicting types of autism in children from behavioral patterns, with integrated personalized learning exercises.',
    fullDesc: `Developed as a graduation project at ACU, supervised by Dr. Mohamed Adly at ITI and
    Ain Shams University. The application predicts specific types of autism in children based on behavioral
    pattern analysis using supervised learning techniques. Includes personalized learning exercises to
    support cognitive development and enhance children's independence through task-based learning.`,
    problem: 'Early detection of autism types using behavioral data is critical for designing effective support programs. Manual assessment is time-consuming and inconsistent.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Classification Models'],
    category: 'Machine Learning',
    color: '#7c3aed',
    features: [
      'Behavioral pattern analysis',
      'Multi-class autism type classification',
      'Data preprocessing & feature extraction',
      'Supervised learning pipeline',
      'Personalized learning exercise integration',
    ],
    github: 'https://github.com/fadyatef772',
    live: null,
    image: '/images/projects/autism-ml.png',
    tags: ['ML', 'Healthcare', 'Classification', 'Python'],
    featured: true,
  },
  {
    id: 3,
    title: 'Heart Disease Prediction Model',
    shortDesc: 'Logistic Regression predictive model for identifying heart disease likelihood from clinical health metrics, with ROC curves and SHAP explainability.',
    fullDesc: `Developed a predictive model to assist healthcare professionals in identifying the likelihood
    of heart disease in patients based on clinical health metrics. Analyzed large-scale health datasets
    using Python and Pandas, implemented a Logistic Regression model with Scikit-learn, and created
    correlation heatmaps and ROC curves to interpret feature importance.`,
    problem: 'Healthcare professionals needed a fast, accurate screening tool to identify high-risk patients from routine clinical data without waiting for expensive specialist tests.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib', 'Logistic Regression'],
    category: 'Machine Learning',
    color: '#ef4444',
    features: [
      'Clinical data preprocessing & EDA',
      'Logistic Regression with hyperparameter tuning',
      'Correlation heatmaps for feature analysis',
      'ROC curve and performance metrics',
      'Feature importance visualization',
    ],
    github: 'https://github.com/fadyatef772',
    live: null,
    image: '/images/projects/heart-disease.png',
    tags: ['ML', 'Healthcare', 'Python', 'Scikit-learn'],
    featured: true,
  },
  {
    id: 4,
    title: 'Ashgar Facility Management System',
    shortDesc: 'Google Sheets + Apps Script centralized management system automating maintenance, HR, and customer relations for a major residential compound.',
    fullDesc: `Built for M Squared Hospitality Services under the supervision of Major General Ahmed Ghenowa.
    Designed a comprehensive facility management system that automates customer and employee data tracking,
    maintenance workflows, and the HR ATTEND system. Structured complex databases for electromechanical
    assets and resident information, transforming manual workflows into high-accuracy digital formats.`,
    problem: 'A large residential compound managed everything manually — maintenance records, HR attendance, customer relations — leading to errors, data loss, and operational delays.',
    tech: ['Google Sheets', 'Apps Script', 'Dashboard Design', 'Database Structuring', 'Excel'],
    category: 'Business Intelligence',
    color: '#10b981',
    features: [
      'Centralized facility management dashboard',
      'Automated ATTEND system for HR',
      'Electromechanical asset database',
      'Customer & resident data tracking',
      'Sales and inventory trend analysis',
    ],
    github: 'https://github.com/fadyatef772',
    live: null,
    image: '/images/projects/ashgar.png',
    tags: ['BI', 'Automation', 'Dashboard', 'Google Sheets'],
    featured: false,
  },
  {
    id: 5,
    title: 'Decision Sciences Analysis — Velir',
    shortDesc: 'Python-powered data intelligence automation for a US digital agency\'s Decision Sciences team, supporting high-level client business strategy.',
    fullDesc: `During the internship at Velir, supported the Decision Sciences team by developing Python scripts
    to automate complex data intelligence tasks and contributed to predictive data modeling efforts to help
    clients interpret market trends and consumer behavior. Managed fully remote deliverables in a fast-paced
    US digital agency environment.`,
    problem: 'The Decision Sciences team had repetitive data processing tasks that required automation, and clients needed predictive modeling to guide strategic market decisions.',
    tech: ['Python', 'Pandas', 'Data Modeling', 'Statistical Analysis', 'Remote Collaboration'],
    category: 'Data Science',
    color: '#06b6d4',
    features: [
      'Python automation scripts for data intelligence',
      'Predictive modeling for market trend analysis',
      'Consumer behavior pattern analysis',
      'Executive-level strategic data insights',
      'Fully remote cross-team collaboration',
    ],
    github: 'https://github.com/fadyatef772',
    live: null,
    image: '/images/projects/velir.png',
    tags: ['Data Science', 'Python', 'Analytics', 'Remote'],
    featured: false,
  },
  {
    id: 6,
    title: 'Art Vision Corporate Website',
    shortDesc: 'Responsive WordPress corporate website for Art Vision Advertising with SEO optimization, showcasing full-service branding and digital printing solutions.',
    fullDesc: `Designed and built the official corporate website for Art Vision Advertising at artvisionadv.com.
    Developed a responsive, user-friendly interface to showcase the agency's full-service branding solutions
    including custom signage, digital printing, and exhibition services. Implemented SEO strategies to
    increase site visibility and drive traffic.`,
    problem: 'Art Vision lacked a professional online presence to showcase their branding portfolio and attract new corporate clients in the digital space.',
    tech: ['WordPress', 'SEO', 'HTML/CSS', 'Responsive Design', 'Content Strategy'],
    category: 'Web Development',
    color: '#f59e0b',
    features: [
      'Responsive design for all devices',
      'SEO optimization strategy',
      'Portfolio showcase sections',
      'Service pages: LED screens, billboards, signage',
      'Contact and inquiry system',
    ],
    github: null,
    live: 'https://artvisionadv.com',
    image: '/images/projects/artvision.png',
    tags: ['WordPress', 'SEO', 'Web', 'Design'],
    featured: false,
  },
]
