import type { SoftSkill, StoryCard } from "@/types/portfolio";

/** Public PDF served from `public/resume.pdf` */
export const RESUME_PDF_PATH = "/resume.pdf";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/alissa-h-240859132/";

export const heroContent = {
  eyebrow: "Software Engineer | Product-Minded Builder",
  titlePrefix: "Hi, I'm",
  name: "Alissa",
  titleSuffix: "I build thoughtful systems and fun digital experiences.",
  intro:
    "This is placeholder intro copy for now. I enjoy building reliable, scalable platforms and exploring playful design interactions that make technical products feel more human.",
  ctaLabel: "Explore Story Mode Projects",
  ctaTarget: "#projects",
};

export const storyCards: StoryCard[] = [
  {
    org: "Goldman Sachs",
    title: "Vendor Risk Registry Platform",
    meta: "Third Party Risk Management | 2024-2025",
    summary:
      "Founding engineer for a centralized registry supporting 10k+ vendors and global compliance initiatives.",
    challenge:
      "Vendor data was fragmented and difficult to govern across teams and regions.",
    approach:
      "Built cloud-native services on AWS with TypeScript and Java SpringBoot APIs in a scalable architecture.",
    impact:
      "Improved compliance visibility and established a stronger firm-wide risk foundation.",
  },
  {
    org: "Goldman Sachs",
    title: "Spend Data Integration & Workflow Automation",
    meta: "Spend & Data Automation | 2022-2024",
    summary:
      "Engineered financial data integrations and automated approvals for critical internal operations.",
    challenge:
      "Finance and expense operations required reliable integrations and transparent approval workflows.",
    approach:
      "Built Java/SpringBoot data integrations and automated workflows with Groovy-based internal tooling.",
    impact:
      "Supported oversight of ~$16B in annual spend while improving reporting transparency and auditability.",
  },
  {
    org: "Facebook",
    title: "Autoplay Video Story Tiles",
    meta: "Software Engineering Intern | 2019-2020",
    summary:
      "Built and shipped autoplay story tile functionality for the Facebook mobile app.",
    challenge:
      "Story discovery needed to feel more engaging while preserving performance and usability.",
    approach:
      "Implemented and tested Android features in production-ready workflows with cross-functional partners.",
    impact:
      "Delivered a polished interactive UI enhancement and launched to production.",
  },
];

export const softSkills: SoftSkill[] = [
  {
    title: "Leadership",
    body: "Selected as a Goldman Sachs forum leader to connect 70+ analysts across Americas offices through events and talks.",
  },
  {
    title: "Mentorship",
    body: "Mentored 16 Google-sponsored students through programming foundations in JavaScript, HTML, and CSS.",
  },
  {
    title: "Collaboration",
    body: "Partner closely with engineers, PMs, and designers to balance user experience, technical feasibility, and execution speed.",
  },
];

export const easterEggFact =
  "I enjoy blending engineering and creativity, from shipping production systems to experimenting with warm, expressive web interactions.";

/** Gratitude for engaging with the menu */
export const chefWhisperThanks =
  "Thank you for carefully reading through the menu.";

/** Shown under the whisper; restaurant metaphor, invitation to reconnect */
export const chefWhisperClosing =
  "The kitchen is always open to a return guest; I look forward to hearing from you.";
