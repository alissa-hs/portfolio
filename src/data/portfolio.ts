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
    place: "Esampo.com",
    role: "Software Engineer (Freelance)",
    period: "Mar 2026 – Present · Remote",
    notes: [
      "Leveraged Claude Code as a force multiplier to lead migration of a legacy WordPress/GCP platform to a modern architecture — accelerating architectural decisions and full-stack implementation across 700 posts, 300+ interactive quizzes, and 2,000+ media assets.",
      "Evaluated and integrated modern tooling (Vercel, Supabase, Cloudflare, TinaCMS) to build a maintainable content platform, enabling non-engineering stakeholders to edit content directly and eliminating the previous developer bottleneck.",
    ],
  },
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Third Party Risk Management",
    period: "Sep 2024 – Nov 2025",
    notes: [
      "Core engineer on the founding team of a greenfield, cloud-native platform consolidating fragmented third-party vendor risk data into a centralized registry supporting 10,000+ vendors and firm-wide regulatory compliance — among the first teams at the firm to build natively on AWS.",
      "Architected a distributed microservices backend on AWS (ECS, Lambda, DynamoDB, Aurora PostgreSQL) with RESTful API contracts that let downstream teams integrate without direct database access, eliminating prior timeout errors; established JUnit/Mockito testing achieving 90% code coverage across the service layer.",
      "Designed and owned the platform's production alerting and observability pipeline (CloudWatch, PagerDuty) with a structured on-call rotation, enabling detection of data-refresh failures before they impacted downstream regulatory reports.",
    ],
  },
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Spend & Data Automation",
    period: "Jul 2022 – Sep 2024",
    notes: [
      "Replaced a fully manual charitable contribution approval process with an automated workflow, integrating third-party payment provider Candex to eliminate manual handoffs and payment delays while preserving a full audit trail.",
      "Engineered data integration pipelines between SAP and internal expense management platforms using Java and Spring Boot, supporting oversight of ~$16B in annual non-compensation spend.",
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
      "Migrated 100+ pages of high-traffic PHP quiz infrastructure (ovulation calculators, wellness tools) from on-premise to GCP with zero downtime.",
      "Independently architected the migration and executed a full UI/UX redesign for a women's lifestyle platform with 35,000+ users.",
    ],
  },
];

export const technicalGroups: TechnicalGroup[] = [
  {
    heading: "Languages",
    items: ["Java", "Python", "TypeScript", "Groovy", "SQL"],
  },
  {
    heading: "AI & workflow",
    items: ["Claude Code", "Cursor", "GitHub Copilot"],
  },
  {
    heading: "Frameworks & services",
    items: [
      "Spring Boot",
      "RESTful APIs",
      "Microservices",
      "AWS Lambda",
      "Amazon ECS",
    ],
  },
  {
    heading: "Data & cloud",
    items: [
      "Amazon S3",
      "DynamoDB",
      "Aurora PostgreSQL",
      "CloudWatch",
      "Google Cloud Platform",
    ],
  },
  {
    heading: "Modern web stack",
    items: ["Next.js", "Vercel", "Supabase", "Cloudflare", "TinaCMS"],
  },
  {
    heading: "Product & delivery",
    items: ["A/B testing", "Agile / Scrum", "Android Studio", "Figma"],
  },
  {
    heading: "Language fluency",
    items: [
      "English — native",
      "Japanese — fluent",
      "Mandarin Chinese — fluent",
    ],
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

/** Bookends: a short credit on the cover, the fuller colophon on the last page. */
export const coverCredit =
  "Written, designed, and illustrated by Alissa Hsueh — fork included.";

export const colophon =
  "Menu written, designed, and built by Alissa Hsueh — including the fork you have been dining with.";

export const chefWhisperClosing =
  "The kitchen is always open to a return guest; I look forward to hearing from you.";
