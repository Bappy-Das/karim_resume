export interface SkillItem {
  name: string;
  iconName: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface Publication {
  id: string;
  number?: string;
  title: string;
  category?: string;
  journalOrConference: string;
  date?: string;
  description: string;
  authors?: string;
  year?: string;
  image?: string;
  tags?: string[];
  link?: string;
  badge?: string;
  isHighlighted?: boolean;
  stats?: { label: string; value: string }[];
}

export interface Tutorial {
  id: string;
  title: string;
  tag: string;
  duration: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  youtubeId: string;
  views: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  stats?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge: string;
  responsibilities: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  number?: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  link?: string;
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "FAZLE KARIM",
    role: "IT & Data Analytics Professional",
    subtitle: "Business Intelligence • Predictive Analytics • Machine Learning",
    status: "AVAILABLE",
    statusText: "Open for Data Analytics, BI & Research Roles",
    bio: "Dedicated IT and Data Analytics professional with a Master's in Business Analytics and a Bachelor's in Computer Science Engineering. Specializing in uncovering actionable insights from complex datasets to drive impactful organizational decisions using Python, SQL, Tableau, and Excel. Strong foundation in IT infrastructure, predictive analytics, and statistical modeling. Deeply committed to leveraging technical expertise to pursue advanced research and academic excellence in Information Technology.",
    email: "mdpemu2011@gmail.com",
    phone: "+1 (213) 274-4246",
    location: "38 West Main Street, Apt 310, New Britain, CT",
    profileImage: "/images/fazlekarimformal.jpg",
    resumeUrl: "#resume",
    socials: {
      linkedin: "https://www.linkedin.com/in/mpemu/",
      github: "https://github.com/p3mu",
      youtube: "https://www.youtube.com/@mpemu",
      leetcode: "https://leetcode.com/mpemu",
      whatsapp: "https://wa.me/12132744246",
      googleScholar: "https://scholar.google.com/citations?user=6vgKh_UAAAAJ&hl=en&authuser=3",
      scholar: "https://scholar.google.com/citations?user=6vgKh_UAAAAJ&hl=en&authuser=3",
      kaggle: "https://www.kaggle.com/mdpemu",
    },
  },

  frequentTech: [
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "SQL", icon: "sql", color: "#336791" },
    { name: "Power BI", icon: "powerbi", color: "#F2C811" },
    { name: "Tableau", icon: "tableau", color: "#E97627" },
    { name: "Excel", icon: "excel", color: "#217346" },
    { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
    { name: "Predictive Analytics", icon: "analytics", color: "#38BDF8" },
    { name: "Statistical Modeling", icon: "stats", color: "#A855F7" },
    { name: "Machine Learning", icon: "ml", color: "#EC4899" },
    { name: "IT Infrastructure", icon: "infra", color: "#10B981" },
  ],

  experience: [
    {
      id: "bi-analyst",
      role: "Business Intelligence Analyst",
      company: "Storage Parts Direct",
      location: "Florida, USA",
      period: "February 2021 – February 2022",
      type: "Full-time",
      badge: "BI & Data Engineering",
      responsibilities: [
        "Design intuitive dashboards using Power BI and SQL to visualize Key Performance Indicators (KPIs) and support data-driven decision-making.",
        "Collaborate with cross-functional technical teams to define business requirements, metrics, and actionable goals to improve data architecture.",
        "Engineered automated ETL data extraction pipelines and optimized SQL queries across enterprise database schemas.",
        "Delivered executive performance summaries enabling stakeholders to optimize inventory turnaround and revenue forecasts.",
      ],
      technologies: ["Power BI", "SQL", "Tableau", "Python", "Excel", "Data Modeling"],
    },
    {
      id: "data-analyst-opt",
      role: "Data Analyst (OPT)",
      company: "Storage Parts Direct / Analytics Consulting",
      location: "USA",
      period: "Prior Experience",
      type: "Contract / OPT",
      badge: "Analytics & UAT",
      responsibilities: [
        "Collaborated with stakeholders to gather business requirements, analyze data, and document functional IT needs.",
        "Improved business processes, supported technical project delivery, and performed rigorous user acceptance testing (UAT).",
        "Created complex reports and interactive dashboards using Excel, SQL, and Power BI while recommending data-driven technical solutions.",
      ],
      technologies: ["SQL", "Excel (VBA/Macros)", "Power BI", "UAT Testing", "Business Analysis"],
    },
    {
      id: "it-support-cpt",
      role: "Information Technology Support (CPT)",
      company: "Enterprise Technical Operations",
      location: "USA",
      period: "Prior Experience",
      type: "CPT",
      badge: "IT Operations",
      responsibilities: [
        "Assisted in managing and deploying content across various digital platforms, including websites and multimedia systems.",
        "Conducted digital research and analyzed audience engagement metrics to support data outreach strategies.",
        "Collaborated on multimedia IT projects, ensuring cohesive messaging and effective digital deployment.",
      ],
      technologies: ["IT Support", "Web Analytics", "Digital Research", "Multimedia Systems"],
    },
    {
      id: "it-executive",
      role: "Information Technology Executive",
      company: "IT Infrastructure Services",
      location: "Corporate Operations",
      period: "Prior Experience",
      type: "Full-time",
      badge: "Infrastructure & Systems",
      responsibilities: [
        "Managed IT infrastructure and supported technical operations to ensure seamless data flow and systems reliability.",
        "Maintained network security, user access controls, and database server performance monitoring.",
        "Troubleshot hardware/software discrepancies to maintain 99.9% organizational operational uptime.",
      ],
      technologies: ["IT Infrastructure", "Systems Reliability", "Network Admin", "Data Security"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Business Administration (MBA), Business Analytics",
      institution: "International American University",
      period: "January 2024 – May 2025",
      details:
        "Advanced coursework in Predictive Analytics, Big Data Strategy, Business Intelligence, Quantitative Methods, and Enterprise Decision Science.",
    },
    {
      degree: "Bachelor of Science (BSc), Computer Science and Engineering",
      institution: "Daffodil International University",
      period: "September 2014 – January 2019",
      details:
        "Rigorous foundation in Algorithms, Database Management Systems, Statistical Computing, Software Architecture, and Artificial Intelligence.",
    },
  ] as EducationItem[],

  skillCategories: [
    {
      title: "CORE COMPETENCIES",
      icon: "layout",
      skills: [
        { name: "Data Analysis", iconName: "analytics", color: "#38BDF8" },
        { name: "Data Visualization", iconName: "tableau", color: "#E97627" },
        { name: "Business Intelligence", iconName: "powerbi", color: "#F2C811" },
        { name: "Statistical Modeling", iconName: "stats", color: "#A855F7" },
        { name: "Predictive Analytics", iconName: "ml", color: "#EC4899" },
        { name: "Machine Learning", iconName: "python", color: "#3776AB" },
        { name: "IT Infrastructure", iconName: "infra", color: "#10B981" },
        { name: "UAT Testing & Agile", iconName: "agile", color: "#60A5FA" },
      ],
    },
    {
      title: "TECHNICAL TOOLS & DATABASES",
      icon: "server",
      skills: [
        { name: "Python (Pandas/NumPy)", iconName: "python", color: "#3776AB" },
        { name: "SQL (PostgreSQL/MySQL)", iconName: "postgresql", color: "#336791" },
        { name: "Tableau Desktop & Server", iconName: "tableau", color: "#E97627" },
        { name: "Power BI & DAX", iconName: "powerbi", color: "#F2C811" },
        { name: "Advanced Excel (VBA/Pivots)", iconName: "excel", color: "#217346" },
        { name: "R Programming", iconName: "stats", color: "#276DC3" },
        { name: "Docker Containerization", iconName: "docker", color: "#2496ED" },
        { name: "Git & Version Control", iconName: "git", color: "#F05032" },
      ],
    },
    {
      title: "PROFESSIONAL CERTIFICATIONS",
      icon: "cloud",
      skills: [
        { name: "Microsoft Business Analyst Professional", iconName: "powerbi", color: "#00A4EF" },
        { name: "DataCamp Data Analyst Professional", iconName: "python", color: "#03EF62" },
        { name: "AI in Healthcare Specialization", iconName: "analytics", color: "#FF6B6B" },
        { name: "Tableau Desktop Specialist", iconName: "tableau", color: "#E97627" },
        { name: "SQL for Data Science", iconName: "postgresql", color: "#336791" },
        { name: "Predictive Modeling in Python", iconName: "ml", color: "#F59E0B" },
      ],
    },
    {
      title: "RESEARCH & DOMAIN METHODOLOGIES",
      icon: "wrench",
      skills: [
        { name: "Healthcare AI & Neuroimaging", iconName: "analytics", color: "#06B6D4" },
        { name: "Aspect-Based Sentiment NLP", iconName: "python", color: "#8B5CF6" },
        { name: "Multi-Modal Fraud Detection", iconName: "infra", color: "#EF4444" },
        { name: "Feature Engineering & Tuning", iconName: "ml", color: "#10B981" },
        { name: "EHR & Claims Analytics", iconName: "tableau", color: "#3B82F6" },
        { name: "KPI Design & Architecture", iconName: "powerbi", color: "#F59E0B" },
      ],
    },
  ] as SkillCategory[],

  publications: [
    {
      id: "blockchain-agriculture-uav",
      number: "01",
      title: "Blockchain based Agriculture Using the Application of UAV and Deep Learning Technique: AlexNet CNN",
      category: "Agriculture AI • Deep Learning",
      journalOrConference: "Malaysian Journal of Science and Advanced Technology",
      date: "May 27, 2023",
      year: "2023",
      authors: "Fazle Karim, et al.",
      description:
        "Smart-agriculture research using UAVs and an AlexNet CNN to detect crop diseases in Bangladesh, with blockchain integrated to improve supply-chain management and crop-protection data.",
      image: "/images/proj-careflow.jpg",
      tags: ["Blockchain", "Deep Learning", "AlexNet CNN", "UAV", "Agriculture AI"],
      link: "https://linkedin.com/in/mpemu",
      stats: [
        { label: "Accuracy", value: "98.2%" },
        { label: "Architecture", value: "AlexNet CNN" },
      ],
    },
    {
      id: "intelligent-bug-prediction",
      number: "02",
      title: "Intelligent Software Bug Prediction: An Empirical Approach",
      category: "Software Engineering • Machine Learning",
      journalOrConference: "IEEE Xplore",
      date: "Mar 21, 2023",
      year: "2023",
      authors: "Fazle Karim, et al.",
      description:
        "Compared six ML algorithms and a deep-learning sequential neural network on NASA's PROMISE dataset for software bug prediction. SVM outperformed other models, and feature selection meaningfully improved accuracy.",
      image: "/images/proj-ecommerce.jpg",
      tags: ["Machine Learning", "Software Bug Prediction", "NASA PROMISE", "SVM", "Deep Learning"],
      link: "https://linkedin.com/in/mpemu",
      stats: [
        { label: "Best Model", value: "SVM" },
        { label: "Dataset", value: "NASA PROMISE" },
      ],
    },
    {
      id: "heart-failure-readmissions-forecasting",
      number: "03",
      title:
        "Data-Driven Forecasting of Heart Failure Readmissions: Balancing Accuracy and Interpretability With Machine Learning",
      category: "Healthcare Analytics • Explainable AI",
      journalOrConference: "IEEE Xplore",
      date: "Jul 6, 2025",
      year: "2025",
      authors: "Fazle Karim, et al.",
      description:
        "Explores interpretable machine learning models for predicting heart failure readmissions while maintaining high predictive accuracy. Evaluates multiple algorithms and explainability techniques to support reliable, data-driven clinical decision making.",
      image: "/images/proj-school.jpg",
      tags: ["Healthcare AI", "Heart Failure", "Explainable AI", "Predictive Analytics", "Clinical Decision"],
      link: "https://linkedin.com/in/mpemu",
      stats: [
        { label: "Domain", value: "Clinical AI" },
        { label: "Status", value: "Coming Soon" },
      ],
    },
    {
      id: "sentiment-analysis-social-media-insights",
      number: "01",
      title: "Sentiment analysis of social media data: Business insights and consumer behavior trends in the USA",
      category: "NLP & Sentiment Analysis",
      journalOrConference: "Edelweiss Applied Science and Technology 9 (1), 545-565",
      date: "2025",
      year: "2025",
      authors:
        "Md Abdullah Al Montaser, Bishnu Padh Ghosh, Ayan Barua, Fazle Karim, Bimol Chandra Das, Reza E Rabbi Shawon, Muhammad Shoyaibur Rahman Chowdhury",
      citations: 30,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=3701471535983594604",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:u-x6o8ySG0sC",
      description:
        "Explores consumer sentiment and behavior trends through social media data across key US platforms (X-Twitter, Facebook, Instagram, TikTok). Leverages official Graph and microblogging APIs alongside machine learning models (Logistic Regression, Random Forest, XGBoost) to extract real-time business insights and consumer perception metrics.",
      tags: ["NLP", "Sentiment Analysis", "XGBoost", "Social Media APIs", "Consumer Insights"],
      badge: "30 Citations",
      isHighlighted: true,
      stats: [
        { label: "Citations", value: "30" },
        { label: "Algorithms", value: "XGBoost & LR" },
      ],
    },
    {
      id: "optimizing-energy-consumption-southern-california",
      number: "02",
      title:
        "Optimizing energy consumption patterns in southern california: An ai-driven approach to sustainable resource management",
      category: "Clean Energy & Sustainability",
      journalOrConference: "Journal of Ecohumanism 4 (1), 2920-2935",
      date: "2025",
      year: "2025",
      authors:
        "Ayan Barua, Fazle Karim, Muhammad Mahmudul Islam, Niropam Das, Md Fakhrul Islam Sumon, A Rahman, Pravakar Debnath, Mitu Karmakar, MA Khan",
      citations: 27,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=39604035771361801",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:UeHWp8X0CEIC",
      directPaperLink:
        "https://www.researchgate.net/profile/Arifur-Rahman-49/publication/388564158_Optimizing_Energy_Consumption_Patterns_in_Southern_California_An_AI-_Driven_Approach_to_Sustainable_Resource_Management/links/679d66ed52b58d39f26004bf/Optimizing-Energy-Consumption-Patterns-in-Southern-California-An-AI-Driven-Approach-to-Sustainable-Resource-Management.pdf",
      description:
        "Focuses on applying artificial intelligence toward optimal energy consumption and sustainable resource management across Southern California. Analyzed multi-year hourly electricity records across residential, commercial, and industrial facilities with environmental indicators.",
      tags: ["Clean Energy AI", "Sustainability", "Resource Optimization", "Time Series", "Machine Learning"],
      badge: "27 Citations",
      isHighlighted: true,
      stats: [
        { label: "Citations", value: "27" },
        { label: "Focus", value: "Sustainable AI" },
      ],
    },
    {
      id: "sentiment-analysis-social-media-trends",
      number: "03",
      title: "Sentiment analysis of social media data: Business insights and consumer behavior trends in the USA",
      category: "Business Analytics & NLP",
      journalOrConference: "Edelweiss Applied Science and Technology 9 (1), 515-535",
      date: "Jan 2025",
      year: "2025",
      authors:
        "Md Abdullah Al Montaser, Bishnu Padh Ghosh, Ayan Barua, Fazle Karim, Bimol Chandra Das, Reza E Rabbi Shawon, Muhammad Shoyaibur Rahman Chowdhury",
      citations: 19,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16651007000016087865",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:eQOLeE2rZwMC",
      directPaperLink: "https://www.academia.edu/download/122374252/Sentiment_analysis_of_social_media_data.pdf",
      description:
        "Investigated large-scale social media interactions and microblogging datasets to quantify consumer sentiment trajectories in the US marketplace, applying strategic metrics (accuracy, precision, recall, F1-score) to evaluate classifier performance.",
      tags: ["Business Analytics", "Consumer Trends", "Predictive Modeling", "Social Media"],
      badge: "19 Citations",
      stats: [
        { label: "Citations", value: "19" },
        { label: "Scope", value: "US Consumer Trends" },
      ],
    },
    {
      id: "aspect-based-sentiment-amazon",
      number: "04",
      title:
        "Aspect-based sentiment analysis of amazon product reviews using machine learning models and hybrid feature engineering",
      category: "NLP & E-Commerce",
      journalOrConference: "2025 International Conference on New Trends in Computing Sciences (ICTCS), IEEE",
      date: "Apr 2025",
      year: "2025",
      authors: "Md Rezwane Sadik, Umma Hafsah Himu, Ifrat Ikhtear Uddin, Md Abubakkar, Fazle Karim, Yousuf Abdullah Borna",
      citations: 17,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1623218356342717315",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:Tyk-4Ss8FVUC",
      directPaperLink: "https://openreview.net/pdf?id=chSD4sqSpS",
      description:
        "Designed a fine-grained aspect-based sentiment analysis (ABSA) framework for Amazon customer reviews of consumer electronics. Combined TF-IDF and word n-grams with Support Vector Machines (SVM), achieving 91% accuracy while addressing real-world class imbalance.",
      tags: ["Aspect-Based NLP", "Amazon Reviews", "SVM", "Feature Engineering", "IEEE ICTCS"],
      badge: "17 Citations",
      isHighlighted: true,
      stats: [
        { label: "Citations", value: "17" },
        { label: "Accuracy", value: "91%" },
      ],
    },
    {
      id: "low-carbon-technology-trade",
      number: "05",
      title: "Machine learning-driven analysis of low-carbon technology trade and its economic impact in the USA",
      category: "Clean Tech & Economics",
      journalOrConference: "Journal of Ecohumanism 4 (1), 4961-4984",
      date: "2025",
      year: "2025",
      authors: "Md Sumon Gazi, Ayan Barua, Fazle Karim, Md Ismail Hossain Siddiqui, Niropam Das, Md Raisul Islam, MA Al Montaser",
      citations: 17,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=17552648178178935857",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:IjCSPb-OGe4C",
      directPaperLink:
        "https://www.researchgate.net/profile/Md-Gazi-20/publication/392764525_Machine_Learning-Driven_Analysis_of_Low-Carbon_Technology_Trade_and_Its_Economic_Impact_in_the_USA/links/68236b34026fee1034f7ce10/Machine-Learning-Driven-Analysis-of-Low-Carbon-Technology-Trade-and-Its-Economic-Impact-in-the-USA.pdf",
      description:
        "Applied machine learning analytics to evaluate US low-carbon technology import and export trade flows, assessing macroeconomic contributions, trade pattern shifts, and the efficacy of sustainable economic policies.",
      tags: ["Economics AI", "Clean Energy", "Trade Analytics", "Low-Carbon Tech", "Macro Analytics"],
      badge: "17 Citations",
      stats: [
        { label: "Citations", value: "17" },
        { label: "Domain", value: "Macro Economics" },
      ],
    },
    {
      id: "ai-business-analytics-supply-chain-flexible",
      number: "06",
      title: "Artificial intelligence and business analytics for flexible supply chain management",
      category: "Supply Chain & Operations",
      journalOrConference: "International Journal of Innovative Science and Research Technology 10 (6), 2997-3009",
      date: "Jun 2025",
      year: "2025",
      authors: "Md Raisul Islam Khan, Ayan Barua, Fazle Karim, Niropam Das",
      citations: 4,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=16294693389388750281",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:Y0pCki6q_DkC",
      description:
        "Investigated how AI-powered technologies, predictive analytics, and Dynamic Capabilities Theory enhance supply chain flexibility and resilience, analyzing real-world enterprise operational strategies.",
      tags: ["Supply Chain", "Business Analytics", "Predictive Analytics", "Dynamic Capabilities"],
      badge: "4 Citations",
      stats: [
        { label: "Citations", value: "4" },
        { label: "Framework", value: "Dynamic Capabilities" },
      ],
    },
    {
      id: "neuroimaging-alzheimers-prognostication",
      number: "07",
      title: "Analyzing neuroimaging epiphenomena: Machine learning approaches in alzheimer's prognostication",
      category: "Healthcare AI & Neuroimaging",
      journalOrConference: "2024 International Conference on Computer and Applications (ICCA), IEEE, 1-6",
      date: "Dec 2024",
      year: "2024",
      authors: "Sharmin Sultana, Bushra Uddin, Mohammad Shihab Uddin, MD Salah Uddin, Fazle Karim, Mohiuddin Mehedi",
      citations: 4,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=977807164128586596",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:u5HHmVD_uO8C",
      directPaperLink:
        "https://www.researchgate.net/profile/Sharmin-Sultana-71/publication/387711819_Analyzing_Neuroimaging_Epiphenomena_Machine_Learning_Approaches_in_Alzheimer's_Prognostication/links/6778d7b0117f340ec3f23341/Analyzing-Neuroimaging-Epiphenomena-Machine-Learning-Approaches-in-Alzheimers-Prognostication.pdf",
      description:
        "Deployed machine learning and deep learning models to detect incipient indicators of Alzheimer's Disease from MRI neuroimaging scans in the Open Access Series of Imaging Studies (OASIS) dataset, enabling early therapeutic intervention.",
      tags: ["Healthcare AI", "Alzheimer's", "MRI Neuroimaging", "OASIS Dataset", "IEEE ICCA"],
      badge: "IEEE ICCA",
      stats: [
        { label: "Citations", value: "4" },
        { label: "Dataset", value: "OASIS MRI" },
      ],
    },
    {
      id: "multimodal-ai-medicare-fraud-detection",
      number: "08",
      title:
        "Real-Time, Multi-Modal Artificial Intelligence For Medicare Fraud Detection: An Integrated Framework Combining Claims, Electronic Health Records, And Provider Behavioral Signals",
      category: "Healthcare AI & Fraud Detection",
      journalOrConference: "INTERNATIONAL JOURNAL OF ADVANCES IN SIGNAL AND IMAGE SCIENCES, 183-202",
      date: "May 2026",
      year: "2026",
      authors:
        "Ashraful Islam, Md Sumon Rana, Fazle Karim, Md Yousuf Biplob, Mohammad Abdus Sami, Md Lutfor Rahman, Subha Shamarukh",
      citations: 2,
      citedLink: "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=15426020645657739767",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:YsMSGLbcyi4C",
      directPaperLink: "https://www.xlescience.org/index.php/IJASIS/article/download/1827/829",
      description:
        "Formulated a real-time, multi-modal AI detection framework fusing Medicare claims, electronic health records (EHR), and provider behavioral signals. Utilizes autoencoders, deep classifiers, and Graph Neural Networks (GNNs) with an estimated ROC-AUC of 0.96.",
      tags: ["Fraud Detection", "Healthcare AI", "Graph Neural Networks", "EHR Analytics", "Streaming Pipeline"],
      badge: "IJASIS",
      stats: [
        { label: "Citations", value: "2" },
        { label: "ROC-AUC", value: "0.96" },
      ],
    },
    {
      id: "ai-business-analytics-supply-chain-efficiency",
      number: "09",
      title: "Artificial intelligence and business analytics: Driving efficiency in digital supply chain management",
      category: "Supply Chain & Operations",
      journalOrConference: "International Journal of Innovative Science and Research Technology 10 (6), 1501-1510",
      date: "Jun 2025",
      year: "2025",
      authors: "Md Raisul Islam Khan, Ayan Barua, Fazle Karim, Niropam Das",
      citations: 0,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6vgKh_UAAAAJ&pagesize=100&citation_for_view=6vgKh_UAAAAJ:W7OEmFMy1HYC",
      description:
        "Investigated how enterprise AI integration, robotic process automation (RPA), and predictive modeling drive performance benchmarks, cost reduction, and operational resilience across digital procurement and logistics networks.",
      tags: ["Digital Supply Chain", "RPA", "Business Analytics", "Procurement", "Operations"],
      stats: [
        { label: "Citations", value: "0" },
        { label: "Focus", value: "Digital Logistics" },
      ],
    },
  ] as Publication[],

  projects: [
    {
      id: "bi-executive-dashboard",
      title: "Executive Business Intelligence & KPI Analytics Suite",
      subtitle: "Power BI, SQL & Tableau Enterprise Dashboards",
      description:
        "Interactive executive BI reporting dashboard visualizing sales funnels, regional customer acquisition, KPI trends, and revenue attribution metrics.",
      longDescription:
        "Engineered scalable business intelligence reporting solutions utilizing Power BI, SQL data warehouses, and Tableau. Features automated DAX measures, dynamic drill-down sales funnels, customer cohort retention modeling, and real-time KPI alerts for corporate executives.",
      image: "/images/proj-school.jpg",
      tags: ["Power BI", "SQL", "Tableau", "DAX", "Excel"],
      features: [
        "Automated multi-source SQL ETL pipelines and star-schema data modeling",
        "Executive KPI summary cards with month-over-month variance tracking",
        "Dynamic geographic heatmaps and customer lifetime value (CLV) cohort analysis",
        "Role-based access permissions and automated scheduled email PDF exports",
      ],
      liveUrl: "https://linkedin.com/in/mpemu",
      githubUrl: "https://github.com/mpemu",
      stats: [
        { label: "Data Records Processed", value: "2.5M+" },
        { label: "Reporting Efficiency Gain", value: "75%" },
        { label: "Automated KPI Metrics", value: "45+" },
      ],
    },
    {
      id: "medicare-fraud-project",
      title: "Real-Time Medicare Fraud Detection AI",
      subtitle: "Multi-Modal Healthcare Claims & EHR Anomaly Detection",
      description:
        "Machine learning engine analyzing insurance claims, patient EHR records, and provider billing patterns to flag Medicare fraud in real-time.",
      longDescription:
        "Built an integrated healthcare analytics engine combining claim histories, clinical records, and billing velocity metrics to identify fraudulent billing patterns with high precision and low false-positive rates.",
      image: "/images/proj-careflow.jpg",
      tags: ["Python", "SQL", "Machine Learning", "EHR Analytics", "Tableau"],
      features: [
        "Supervised and unsupervised anomaly detection on billing time series",
        "Graph network analysis linking suspicious provider clusters and claim anomalies",
        "Interactive investigation dashboard with risk probability scorecards",
        "Automated compliance audit reports for healthcare administrators",
      ],
      liveUrl: "https://linkedin.com/in/mpemu",
      githubUrl: "https://github.com/mpemu",
      stats: [
        { label: "Detection Precision", value: "96.4%" },
        { label: "Stream Latency", value: "< 120ms" },
        { label: "Claims Analyzed", value: "500K+" },
      ],
    },
    {
      id: "amazon-sentiment-project",
      title: "Aspect-Based E-Commerce Sentiment Intelligence",
      subtitle: "NLP & Machine Learning Review Intelligence Platform",
      description:
        "Natural Language Processing system uncovering fine-grained aspect sentiments and customer product feedback from large-scale e-commerce reviews.",
      longDescription:
        "Developed an end-to-end NLP analytics pipeline utilizing hybrid feature engineering (TF-IDF, word embeddings, linguistic rules) and machine learning classifiers to extract sentiment scores across specific product attributes (quality, price, usability, customer service).",
      image: "/images/proj-ecommerce.jpg",
      tags: ["Python", "NLP", "Pandas", "Scikit-Learn", "Tableau"],
      features: [
        "Multi-class aspect extraction across hardware and e-commerce categories",
        "Real-time sentiment polarity scoring with confidence intervals",
        "Visual sentiment radar charts and customer feedback topic modeling",
        "Actionable product improvement recommendations based on negative clusters",
      ],
      liveUrl: "https://linkedin.com/in/mpemu",
      githubUrl: "https://github.com/mpemu",
      stats: [
        { label: "Accuracy Score", value: "93.8%" },
        { label: "Vocabulary Size", value: "50,000+" },
        { label: "Aspect Categories", value: "8 Key Metrics" },
      ],
    },
  ] as Project[],

  tutorials: [
    {
      id: "pub-1",
      title: "Analyzing Neuroimaging Epiphenomena: Machine Learning Approaches in Alzheimer's Prognostication",
      tag: "Research • Healthcare AI",
      duration: "Peer-Reviewed",
      description:
        "Research paper on 3D fMRI/PET neuroimaging epiphenomena analysis and machine learning predictive modeling for Alzheimer's disease progression.",
      thumbnail: "/images/thumb-docker.jpg",
      youtubeUrl: "https://linkedin.com/in/mpemu",
      youtubeId: "research-1",
      views: "Academic Research",
    },
    {
      id: "pub-2",
      title: "Real-Time, Multi-Modal Artificial Intelligence For Medicare Fraud Detection",
      tag: "Research • Fraud Detection",
      duration: "Peer-Reviewed",
      description:
        "Integrated framework combining insurance claims, EHR data, and provider behavioral signals for real-time anomaly detection.",
      thumbnail: "/images/thumb-nestjs.jpg",
      youtubeUrl: "https://linkedin.com/in/mpemu",
      youtubeId: "research-2",
      views: "Academic Research",
    },
    {
      id: "pub-3",
      title: "Aspect-Based Sentiment Analysis of Amazon Product Reviews using Machine Learning & Hybrid Features",
      tag: "Research • NLP",
      duration: "Peer-Reviewed",
      description:
        "Hybrid feature engineering NLP system classifying fine-grained product aspect sentiments from large-scale e-commerce reviews.",
      thumbnail: "/images/thumb-redis.jpg",
      youtubeUrl: "https://linkedin.com/in/mpemu",
      youtubeId: "research-3",
      views: "Academic Research",
    },
  ],

  certificates: [
    {
      id: "cert-1",
      number: "01",
      title: "AI in Healthcare",
      issuer: "Coursera",
      date: "Specialized Credential",
      description:
        "Comprehensive training in machine learning applications for healthcare data, clinical diagnosis models, healthcare epiphenomena analysis, and prognostic AI frameworks.",
      link: "https://www.coursera.org/account/accomplishments/specialization/9RHRZ19EE0MT",
    },
    {
      id: "cert-2",
      number: "02",
      title: "Microsoft Business Analyst",
      issuer: "Coursera",
      date: "Professional Credential",
      description:
        "Professional certification covering business requirement analysis, enterprise data visualization, interactive Power BI executive dashboards, and statistical decision-making.",
      link: "https://www.coursera.org/account/accomplishments/specialization/NDQO0CNNHZK2",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Engineering Lead",
      role: "Storage Parts Direct",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      quote:
        "Fazle has an exceptional knack for turning complex raw SQL queries and inventory tables into crisp, actionable Power BI executive dashboards.",
      platform: "LinkedIn",
      verified: true,
    },
    {
      id: "t2",
      name: "Graduate Advisor",
      role: "International American University",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      quote:
        "Fazle's academic work in business analytics and healthcare AI predictive modeling demonstrated outstanding analytical rigor and methodological depth.",
      platform: "LinkedIn",
      verified: true,
    },
    {
      id: "t3",
      name: "Senior Data Scientist",
      role: "Health Informatics Lab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote:
        "The Alzheimer's neuroimaging prognostic model developed by Fazle showcased brilliant feature selection and statistical validation.",
      platform: "LinkedIn",
      verified: true,
    },
  ],
};
