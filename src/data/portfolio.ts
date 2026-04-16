export type ProjectStatus = "in development" | "completed" | "deprecated";

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  status: ProjectStatus;
  github?: string;
  live?: string;
  keyFeatures?: string[];
};

export const projects: Project[] = [
  {
    title: "StrataHub",
    description:
      "Production-grade multi-tenant strata management SaaS with dedicated Manager, Resident, and Super Admin portals, built around strict building-scoped access control and operational workflows.",
    longDescription:
      "Built with Next.js, TypeScript, tRPC v11, PostgreSQL, Prisma, and Supabase to deliver type-safe full-stack workflows for documents, messaging, parcels, levies, and notifications. The platform uses signed storage URLs, role-based isolation across portals, and CI/CD deployment on Vercel with Docker-backed local development.",
    keyFeatures: [
      "Three isolated portals: Manager, Resident, and Super Admin",
      "Building-scoped role-based access control across five permission levels",
      "Type-safe API layer with tRPC v11 and TanStack Query",
      "Signed document upload and delivery via Supabase Storage",
      "Docker-based local setup with CI/CD on GitHub Actions and Vercel",
    ],
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Supabase", "Prisma ORM", "Docker", "Vercel"],
    status: "in development",
    live: "https://stratahub-six.vercel.app/login",
  },
  {
    title: "Vision Verse Interactive",
    description:
      "Led full-stack development of a multi-vendor SaaS retail platform supporting 200+ users — coordinating a team of 4–6 across 6 Agile sprints via JIRA while owning architecture, QA, and production rollout.",
    longDescription:
      "A decoupled Next.js + TypeScript frontend backed by a RESTful API layer and a normalised PostgreSQL schema. Delivered RBAC, barcode POS, real-time inventory, and cron-triggered email notifications for billing, payment reminders, and click & collect — verified across unit, integration, UAT, and manual QA cycles.",
    keyFeatures: [
      "Role-based access control (RBAC)",
      "Barcode POS system",
      "Real-time inventory management",
      "Cron-triggered email notifications",
      "Agile sprint coordination via JIRA",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "AWS", "JIRA", "Agile"],
    status: "completed",
  },
  {
    title: "JobPilot",
    description:
      "A personal job-search automation tool that scrapes listings, stores them in DynamoDB, and fires daily email digests — built as a portfolio piece demonstrating serverless architecture end-to-end.",
    longDescription:
      "FastAPI backend, Next.js frontend, DynamoDB for persistence, S3 for resume storage, SES for email digests, and Lambda + EventBridge for scheduled scraping. Integrates the Adzuna API for live job listings.",
    keyFeatures: [
      "Automated job scraping via Adzuna API",
      "DynamoDB persistence layer",
      "Daily email digests via AWS SES",
      "Serverless scheduling with Lambda + EventBridge",
      "Resume storage on S3",
    ],
    tags: ["FastAPI", "Next.js", "DynamoDB", "AWS Lambda", "EventBridge", "SES", "TypeScript"],
    status: "in development",
    github: "https://github.com/sahilpatel9910/jobpilot",
  },
  {
    title: "Multi-Gateway Payment Integration",
    description:
      "A controlled e-commerce environment integrating four payment gateways — Stripe, PayPal, Google Pay, and Square — in sandbox mode, with secure tokenisation, webhook handling, and PCI-DSS principles applied throughout.",
    longDescription:
      "Built to deeply understand payment gateway integration rather than abstract it away. Implemented complete checkout flows for each provider, including transaction state management and error handling.",
    keyFeatures: [
      "4 payment gateways (Stripe, PayPal, Google Pay, Square)",
      "Tokenisation and webhook handling",
      "Transaction state management",
      "PCI-DSS compliance principles",
      "Cart and checkout flow",
    ],
    tags: ["PHP", "Stripe", "PayPal", "Google Pay", "Square", "RESTful APIs"],
    status: "completed",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "End-to-end ML pipeline using 19 clinical attributes — data cleaning, preprocessing, and model evaluation across KNN and Decision Tree classifiers — exposed via a Flask API for interactive dashboards.",
    longDescription:
      "Trained on real-world clinical datasets, the system generates actionable risk insights and surfaces them through an interactive web interface built on Flask.",
    keyFeatures: [
      "19-attribute clinical dataset pipeline",
      "KNN and Decision Tree classifiers",
      "Data cleaning and preprocessing",
      "Flask API exposure",
      "Interactive dashboard",
    ],
    tags: ["Python", "scikit-learn", "Flask", "Pandas", "Jupyter Notebook"],
    status: "completed",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering recommendation engine using KNN to predict unseen movie ratings, with feature engineering and model evaluation — served via a Flask API for user-facing access.",
    longDescription:
      "Implements collaborative filtering on a movie ratings dataset, handling sparse matrices and performing cross-validation to optimise recommendation quality.",
    keyFeatures: [
      "Collaborative filtering with KNN",
      "Feature engineering on sparse ratings data",
      "Model evaluation and cross-validation",
      "Flask API for real-time recommendations",
    ],
    tags: ["Python", "scikit-learn", "Flask", "Pandas", "KNN", "Jupyter Notebook"],
    status: "completed",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer & Project Coordinator",
    company: "Vision Verse Interactive",
    period: "Jul 2025 – Dec 2025",
    location: "Sydney, NSW",
    description:
      "Owned the full delivery lifecycle of a multi-vendor SaaS retail platform — from sprint planning to production.",
    bullets: [
      "Coordinated a team of 4–6 developers across 6 Agile sprints via JIRA — managing ticket assignment, stand-ups, and sprint planning end-to-end.",
      "Architected a decoupled Next.js + TypeScript frontend, RESTful API backend, and PostgreSQL (Prisma ORM) data layer with normalised schemas for vendors, inventory, and transactions.",
      "Delivered RBAC, barcode POS, real-time inventory, and cron-triggered email notifications — verified across unit, integration, UAT, and manual QA cycles.",
      "Integrated LLM tools into the dev workflow for code scaffolding, test generation, and debugging — exercising architectural judgement to validate all AI output.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Institute of Plasma Research (IPR)",
    period: "Dec 2022 – Apr 2023",
    location: "Gandhinagar, India",
    description:
      "Developed responsive web interfaces and a cross-platform mobile application for a government research organisation.",
    bullets: [
      "Developed responsive web pages using React.js for dynamic and interactive websites.",
      "Built a cross-platform mobile application using Flutter (frontend), Node.js (backend), and MySQL (database).",
      "Developed Speech-to-Text conversion and Google Maps URL integration functionalities via plugin integration.",
    ],
  },
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Flutter", "HTML/CSS"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Django", "PHP", "RESTful APIs"],
  },
  {
    label: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite", "Prisma ORM", "AWS", "Vercel"],
  },
  {
    label: "Payments & Integrations",
    skills: ["Stripe", "PayPal", "Google Pay", "Square", "NodeMailer"],
  },
  {
    label: "Tools & Methods",
    skills: ["Git", "GitHub", "JIRA", "Agile/Scrum", "Notion", "Android Studio", "VS Code"],
  },
];
