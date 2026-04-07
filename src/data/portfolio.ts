import type {
  ExperienceItem,
  SoftSkill,
  StoryCard,
  TechnicalGroup,
} from "@/types/portfolio";

/** Public PDF served from `public/resume.pdf` */
export const RESUME_PDF_PATH = "/resume.pdf";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/alissa-h-240859132/";

export const heroContent = {
  eyebrow: "Software Engineer | Product-Minded Builder",
  name: "Alissa",
};

export const experienceItems: ExperienceItem[] = [
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Third Party Risk Management",
    period: "Sep 2024 – Nov 2025",
    notes: [
      "Founding engineer on a greenfield vendor risk registry — designed and shipped cloud-native services supporting 10k+ vendors and firm-wide regulatory compliance across global markets.",
      "Built with TypeScript, Java Spring Boot, and AWS (S3, DynamoDB, ECS, Lambda, Aurora PostgreSQL); established CI/CD pipelines enabling rapid, reliable delivery of compliance-critical features.",
    ],
  },
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Spend & Data Automation",
    period: "Jul 2022 – Sep 2024",
    notes: [
      "Engineered SAP-to-internal-platform data integrations in Java and Spring Boot, enabling auditable financial data flows supporting oversight of ~$16B in annual non-compensation spend across multiple business units.",
      "Automated firm-wide charitable contribution approvals and invoice exception workflows using Groovy-based internal tooling — eliminating manual bottlenecks and strengthening financial reporting transparency and auditability.",
    ],
  },
  {
    place: "Meta (Facebook)",
    role: "Software Engineering Intern, Facebook University",
    period: "May – Aug 2020 & Jun – Aug 2019",
    notes: [
      "Engineered autoplay video story tiles for the Facebook Android app end-to-end — from design through cross-functional review to production launch — across two consecutive internship cycles.",
      "Collaborated with engineers, PMs, and designers through Facebook's full internal review and quality process to ship a production-ready feature at scale.",
    ],
  },
  {
    place: "Esampo.com",
    role: "Full Stack Developer Intern",
    period: "Mar – Aug 2021 · Tokyo",
    notes: [
      "Led full-stack rebrand and relaunch of a lifestyle platform for a venture-backed company — overhauling frontend, backend, and database layers on GCP for a live user base of 35k.",
    ],
  },
];

export const technicalGroups: TechnicalGroup[] = [
  {
    heading: "Languages",
    items: ["TypeScript", "Java", "Groovy", "JavaScript", "HTML / CSS"],
  },
  {
    heading: "AI & workflow",
    items: ["Claude", "Cursor", "GitHub Copilot"],
  },
  {
    heading: "Frameworks & services",
    items: ["Spring Boot", "REST APIs", "AWS Lambda", "Amazon ECS"],
  },
  {
    heading: "Data & cloud",
    items: [
      "Amazon S3",
      "DynamoDB",
      "Aurora PostgreSQL",
      "Google Cloud Platform",
    ],
  },
  {
    heading: "Platforms & craft",
    items: ["Android Studio", "Figma", "Adobe Creative Suite"],
  },
  {
    heading: "Language fluency",
    items: ["Japanese — native", "Mandarin — native"],
  },
];

export const storyCards: StoryCard[] = [
  {
    org: "Goldman Sachs",
    title: "Vendor Risk Registry Platform",
    meta: "Third Party Risk Management | 2024–2025",
    summary:
      "Founding engineer on a greenfield platform to centralize vendor data and risk oversight across Goldman Sachs' global vendor ecosystem — from concept through production.",
    challenge:
      "Vendor risk data was siloed across teams and regions with no unified source of truth. In an industry where 54% of data breaches are linked to third-party vendors and the average incident costs $5M, fragmented oversight at Goldman Sachs' scale created meaningful regulatory and financial exposure.",
    approach:
      "Architected and built cloud-native services on AWS (S3, DynamoDB, ECS, Lambda, Aurora PostgreSQL) with a TypeScript and Java Spring Boot stack, and established CI/CD pipelines for reliable, repeatable delivery of compliance-critical features.",
    impact:
      "Delivered a centralized registry supporting 10k+ vendors across the firm's global footprint, establishing a unified risk governance foundation and materially improving compliance visibility for regulatory reporting.",
  },
  {
    org: "Goldman Sachs",
    title: "Spend Data Integration & Workflow Automation",
    meta: "Spend & Data Automation | 2022–2024",
    summary:
      "Built the data infrastructure and automated workflows underpinning Goldman Sachs' non-compensation spend operations — a domain representing roughly half of the firm's $33.77B in total annual operating expenses.",
    challenge:
      "SAP financial systems and internal expense platforms operated in isolation, forcing manual reconciliation and creating auditability gaps in approval workflows across multiple business units overseeing ~$16B in annual activity.",
    approach:
      "Engineered Java and Spring Boot data integrations between SAP and internal platforms, then automated firm-wide charitable contribution approvals and invoice exception workflows using Groovy-based internal tooling.",
    impact:
      "Enabled reliable, auditable oversight of ~$16B in annual non-compensation spend, eliminated manual approval bottlenecks, and strengthened financial reporting transparency — directly supporting Goldman Sachs' firm-wide expense optimization program.",
  },
  {
    org: "Facebook",
    title: "Autoplay Video Story Tiles",
    meta: "Software Engineering Intern | 2019–2020",
    summary:
      "Shipped a new mobile UI feature — autoplay video story tiles — for the Facebook app across two consecutive internship cycles, from initial implementation through production launch.",
    challenge:
      "Facebook Stories reaches 500 million daily active users. Story discovery needed to feel more dynamic and engaging without degrading performance or disrupting the scrolling experience at that scale.",
    approach:
      "Implemented and iteratively refined the feature in Android Studio, coordinating with engineering, product, and design teams to meet Facebook's internal quality bar and launch requirements across both cycles.",
    impact:
      "Successfully launched the autoplay story tile feature to production on the Facebook Android app — taking full ownership from implementation through cross-functional sign-off, reaching the platform's 500M+ daily Stories audience.",
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Leadership",
    body: "Leading is about making people feel seen and connected. At Goldman Sachs, I was selected to lead my division's Americas Analyst Forum, bringing together 70+ analysts across offices through curated talk sessions and social events. This also heavily involved working with senior leadership to secure funding as well as support from them to connect people beyond titles. I learned that the best communities aren't built top-down; they grow when people feel genuinely heard and valued.",
  },
  {
    title: "Mentorship",
    body: "As a lead of Google's CSSI program, I guided 16 high schoool students through their first experiences with computer science, focusing on JavaScript, HTML, and CSS, many of whom had never written a line of code. Watching someone and guiding their way from from 'I can't do this' to 'I built that' is something I cherish and seek to continue fostering a sense of community in my next opportunity.",
  },
  {
    title: "Collaboration",
    body: "Good software is not built in silos. Whether working with engineers, PMs, or designers, the best outcomes happen when everyone's perspective is on the table early. I bring a cognitive science lens to cross-functional work: putting the users' needs first and foremost. Actively communicating with all parties involved to ensure alignment and smooth delivery.",
  },
];

export const easterEggFact =
  "I enjoy blending engineering and creativity, from shipping production systems to experimenting with warm, expressive web interactions.";

export const chefWhisperThanks =
  "Thank you for carefully reading through the menu.";

export const chefWhisperClosing =
  "The kitchen is always open to a return guest; I look forward to hearing from you.";
