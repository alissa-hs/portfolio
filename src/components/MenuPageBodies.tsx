import { easterEggFact, softSkills, storyCards } from "@/data/portfolio";
import type { MenuPageId } from "@/types/menu";

const experienceItems = [
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Third Party Risk Management",
    period: "Sep 2024 – Nov 2025",
    notes: [
      "Founding engineer on a centralized vendor risk registry for 10k+ vendors and firm-wide regulatory compliance.",
      "AWS (S3, DynamoDB, ECS, Lambda, Aurora PostgreSQL), TypeScript, Java Spring Boot, CI/CD.",
    ],
  },
  {
    place: "Goldman Sachs",
    role: "Software Engineer, Spend & Data Automation",
    period: "Jul 2022 – Sep 2024",
    notes: [
      "Data integrations between SAP and internal expense platforms; reliable flows across business units.",
      "Java / Spring Boot; Groovy automation for charitable contribution approvals and invoice exceptions; ~$16B annual non-comp spend oversight.",
    ],
  },
  {
    place: "Meta (Facebook)",
    role: "Software Engineering Intern, Facebook University",
    period: "May – Aug 2020 & Jun – Aug 2019",
    notes: [
      "Autoplay video story tiles for the Facebook Android app, from design through production launch.",
    ],
  },
  {
    place: "Esampo.com",
    role: "Full Stack Developer Intern",
    period: "Mar – Aug 2021 · Tokyo",
    notes: [
      "Rebrand and relaunch of a lifestyle site on GCP; frontend, backend, database, and local testing for 35k users.",
    ],
  },
];

const technicalGroups = [
  {
    heading: "Languages",
    items: ["TypeScript", "Java", "Groovy", "JavaScript", "HTML / CSS"],
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
    items: ["Android Studio", "CI/CD pipelines", "WordPress", "Adobe Creative Suite"],
  },
];

export function MenuPageBody({
  pageId,
  showSecret,
  onToggleSecret,
}: {
  pageId: MenuPageId;
  showSecret: boolean;
  onToggleSecret: () => void;
}) {
  switch (pageId) {
    case "cover":
      return (
        <div className="space-y-8 text-center">
          <p className="menu-body text-[#3d4a5c]">
            Welcome. This menu is a portfolio in disguise: each section is a
            course in how I build, collaborate, and ship. Turn the page when you
            are ready—the kitchen is open.
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.35em] text-[#8a7a62] uppercase">
            Seasonal tasting · Engineering
          </p>
        </div>
      );

    case "experience":
      return (
        <div className="space-y-10">
          {experienceItems.map((item) => (
            <div
              key={`${item.place}-${item.role}`}
              className="border-b border-[#d9cfc0] pb-8 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="menu-course-title text-[#1c2430]">
                  {item.place}
                </h3>
                <span className="menu-meta whitespace-nowrap">{item.period}</span>
              </div>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-sm italic text-[#5c6570]">
                {item.role}
              </p>
              <ul className="mt-4 list-none space-y-2 p-0">
                {item.notes.map((line) => (
                  <li
                    key={line}
                    className="menu-body relative pl-4 text-[#3d4a5c] before:absolute before:left-0 before:text-[#b8973d] before:content-['·']"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "technical":
      return (
        <div className="grid gap-8 sm:grid-cols-2">
          {technicalGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="menu-section-label text-[#8a7a62]">
                {group.heading}
              </h3>
              <ul className="mt-3 list-none space-y-2 p-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="menu-body border-b border-[#ebe4d9] py-2 text-[#3d4a5c] last:border-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "soft-skills":
      return (
        <div className="space-y-8">
          {softSkills.map((skill) => (
            <div key={skill.title}>
              <h3 className="menu-course-title text-[#1c2430]">{skill.title}</h3>
              <p className="menu-body mt-2 text-[#3d4a5c]">{skill.body}</p>
            </div>
          ))}
        </div>
      );

    case "selection":
      return (
        <div className="space-y-10">
          {storyCards.map((card) => (
            <div
              key={`${card.org}-${card.title}`}
              className="border-b border-[#d9cfc0] pb-8 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="menu-course-title text-[#1c2430]">{card.title}</h3>
                <span className="menu-meta">{card.org}</span>
              </div>
              <p className="menu-meta mt-1">{card.meta}</p>
              <p className="menu-body mt-3 text-[#3d4a5c]">{card.summary}</p>
              <div className="mt-4 space-y-2 border-l-2 border-[#b8973d]/40 pl-4">
                <p className="menu-body text-sm text-[#5c6570]">
                  <span className="font-semibold text-[#1c2430]">Challenge · </span>
                  {card.challenge}
                </p>
                <p className="menu-body text-sm text-[#5c6570]">
                  <span className="font-semibold text-[#1c2430]">Approach · </span>
                  {card.approach}
                </p>
                <p className="menu-body text-sm text-[#5c6570]">
                  <span className="font-semibold text-[#1c2430]">Impact · </span>
                  {card.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "finishing":
      return (
        <div className="space-y-8">
          <div>
            <h3 className="menu-section-label text-[#8a7a62]">Education</h3>
            <p className="menu-body mt-2 text-[#3d4a5c]">
              University of California, Berkeley — B.A. Cognitive Science; minors
              in Computer Science and Data Science. Regent&apos;s and Chancellor
              Scholar Finalist; Cal Alumni Leadership Award; Estha M. Rodkey
              Scholarship.
            </p>
          </div>
          <div>
            <h3 className="menu-section-label text-[#8a7a62]">Reach the maître d&apos;</h3>
            <ul className="mt-3 list-none space-y-2 p-0">
              <li className="menu-body">
                <a
                  className="text-[#1c4a7a] underline decoration-[#b8973d]/50 underline-offset-4 transition hover:decoration-[#b8973d]"
                  href="mailto:ahsth3636@gmail.com"
                >
                  ahsth3636@gmail.com
                </a>
              </li>
              <li className="menu-body">
                <a
                  className="text-[#1c4a7a] underline decoration-[#b8973d]/50 underline-offset-4 transition hover:decoration-[#b8973d]"
                  href="https://linkedin.com/in/alissa-h-240859132/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/alissa-h-240859132
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-[#d9cfc0] bg-[#faf7f2] p-5">
            <p className="menu-section-label text-[#8a7a62]">Chef&apos;s whisper</p>
            <button
              type="button"
              onClick={onToggleSecret}
              className="mt-2 font-[family-name:var(--font-playfair)] text-sm tracking-wide text-[#1c4a7a] underline decoration-[#b8973d]/40 underline-offset-4 transition hover:decoration-[#b8973d]"
            >
              {showSecret ? "Fold the note" : "Unfold the note"}
            </button>
            {showSecret ? (
              <p className="menu-body mt-4 italic text-[#5c6570]">{easterEggFact}</p>
            ) : null}
          </div>
        </div>
      );

    default:
      return null;
  }
}
