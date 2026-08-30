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
  name: string;
  issuer: string;
  date?: string;
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
    profileImage: "/images/fazlekarim.png",
    resumeUrl: "#resume",
    socials: {
      linkedin: "https://www.linkedin.com/in/mpemu",
      github: "https://github.com/mpemu",
      youtube: "https://www.youtube.com/@mpemu",
      leetcode: "https://leetcode.com/mpemu",
      whatsapp: "https://wa.me/12132744246",
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
      details: "Advanced coursework in Predictive Analytics, Big Data Strategy, Business Intelligence, Quantitative Methods, and Enterprise Decision Science.",
    },
    {
      degree: "Bachelor of Science (BSc), Computer Science and Engineering",
      institution: "Daffodil International University",
      period: "September 2014 – January 2019",
      details: "Rigorous foundation in Algorithms, Database Management Systems, Statistical Computing, Software Architecture, and Artificial Intelligence.",
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
      description: "Smart-agriculture research using UAVs and an AlexNet CNN to detect crop diseases in Bangladesh, with blockchain integrated to improve supply-chain management and crop-protection data.",
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
      description: "Compared six ML algorithms and a deep-learning sequential neural network on NASA's PROMISE dataset for software bug prediction. SVM outperformed other models, and feature selection meaningfully improved accuracy.",
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
      title: "Data-Driven Forecasting of Heart Failure Readmissions: Balancing Accuracy and Interpretability With Machine Learning",
      category: "Healthcare Analytics • Explainable AI",
      journalOrConference: "IEEE Xplore",
      date: "Jul 6, 2025",
      year: "2025",
      authors: "Fazle Karim, et al.",
      description: "Explores interpretable machine learning models for predicting heart failure readmissions while maintaining high predictive accuracy. Evaluates multiple algorithms and explainability techniques to support reliable, data-driven clinical decision making.",
      image: "/images/proj-school.jpg",
      tags: ["Healthcare AI", "Heart Failure", "Explainable AI", "Predictive Analytics", "Clinical Decision"],
      link: "https://linkedin.com/in/mpemu",
      stats: [
        { label: "Domain", value: "Clinical AI" },
        { label: "Status", value: "Coming Soon" },
      ],
    },
  ] as Publication[],

  projects: [
    {
      id: "bi-executive-dashboard",
      title: "Executive Business Intelligence & KPI Analytics Suite",
      subtitle: "Power BI, SQL & Tableau Enterprise Dashboards",
      description: "Interactive executive BI reporting dashboard visualizing sales funnels, regional customer acquisition, KPI trends, and revenue attribution metrics.",
      longDescription: "Engineered scalable business intelligence reporting solutions utilizing Power BI, SQL data warehouses, and Tableau. Features automated DAX measures, dynamic drill-down sales funnels, customer cohort retention modeling, and real-time KPI alerts for corporate executives.",
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
      description: "Machine learning engine analyzing insurance claims, patient EHR records, and provider billing patterns to flag Medicare fraud in real-time.",
      longDescription: "Built an integrated healthcare analytics engine combining claim histories, clinical records, and billing velocity metrics to identify fraudulent billing patterns with high precision and low false-positive rates.",
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
      description: "Natural Language Processing system uncovering fine-grained aspect sentiments and customer product feedback from large-scale e-commerce reviews.",
      longDescription: "Developed an end-to-end NLP analytics pipeline utilizing hybrid feature engineering (TF-IDF, word embeddings, linguistic rules) and machine learning classifiers to extract sentiment scores across specific product attributes (quality, price, usability, customer service).",
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
      description: "Research paper on 3D fMRI/PET neuroimaging epiphenomena analysis and machine learning predictive modeling for Alzheimer's disease progression.",
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
      description: "Integrated framework combining insurance claims, EHR data, and provider behavioral signals for real-time anomaly detection.",
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
      description: "Hybrid feature engineering NLP system classifying fine-grained product aspect sentiments from large-scale e-commerce reviews.",
      thumbnail: "/images/thumb-redis.jpg",
      youtubeUrl: "https://linkedin.com/in/mpemu",
      youtubeId: "research-3",
      views: "Academic Research",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Engineering Lead",
      role: "Storage Parts Direct",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      quote: "Fazle has an exceptional knack for turning complex raw SQL queries and inventory tables into crisp, actionable Power BI executive dashboards.",
      platform: "LinkedIn",
      verified: true,
    },
    {
      id: "t2",
      name: "Graduate Advisor",
      role: "International American University",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      quote: "Fazle's academic work in business analytics and healthcare AI predictive modeling demonstrated outstanding analytical rigor and methodological depth.",
      platform: "LinkedIn",
      verified: true,
    },
    {
      id: "t3",
      name: "Senior Data Scientist",
      role: "Health Informatics Lab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote: "The Alzheimer's neuroimaging prognostic model developed by Fazle showcased brilliant feature selection and statistical validation.",
      platform: "LinkedIn",
      verified: true,
    },
  ],
};
