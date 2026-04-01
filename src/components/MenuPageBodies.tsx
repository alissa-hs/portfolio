import { LinkedInIconLink } from "@/components/LinkedInIconLink";
import {
  chefWhisperClosing,
  chefWhisperThanks,
  easterEggFact,
  LINKEDIN_URL,
  RESUME_PDF_PATH,
  softSkills,
  storyCards,
} from "@/data/portfolio";
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
        <div className="space-y-4 text-center">
          <p className="menu-body text-[#3d4a5c]">
            I was raised across Tokyo, Taiwan, and the United States; moving
            among cultures early on deepened my curiosity about how people
            perceive, communicate, and get their needs met—what “human
            experience” looks like in practice, not only in theory. That lens
            sits alongside my training in cognitive science and computer
            science: I am drawn to how technology shapes real people, not just
            systems, and to improving their experience through thoughtful
            engineering. Building software is a creative act too—clarity,
            interaction, and craft all matter.
          </p>
          <p className="menu-body text-[#3d4a5c]">
            This menu is a portfolio in disguise; each section is a course in
            how I collaborate, ship, and think.
          </p>
          <p className="menu-body text-[#3d4a5c]">
            Turn the page when you are ready—the kitchen is open.
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

    case "resume":
      return (
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4 border-b border-[#d9cfc0] pb-6 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={RESUME_PDF_PATH}
              download
              className="menu-body inline-flex items-center justify-center rounded-full border border-[#cad9eb] bg-[#d7e4f5] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#1c3f6b] transition hover:brightness-95"
            >
              Download PDF
            </a>
            <a
              href={RESUME_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="menu-body inline-flex items-center justify-center rounded-full border border-[#d9cfc0] bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-[#1c2430] transition hover:bg-[#faf7f2]"
            >
              Open in new tab
            </a>
            <span className="flex items-center gap-2">
              <LinkedInIconLink
                className="text-[#1c4a7a]"
                iconClassName="h-6 w-6"
              />
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-body text-sm font-semibold text-[#1c4a7a] underline decoration-[#b8973d]/50 underline-offset-4 transition hover:decoration-[#b8973d]"
              >
                LinkedIn profile
              </a>
            </span>
          </div>

          <div className="overflow-hidden rounded-sm border border-[#d9cfc0] bg-[#ebe4d9]/40 shadow-inner">
            <iframe
              title="Résumé PDF"
              src={`${RESUME_PDF_PATH}#view=FitH`}
              className="h-[min(72vh,880px)] w-full min-h-[480px]"
            />
          </div>

          <p className="menu-body text-center text-sm text-[#5c6570]">
            If the preview does not appear in your browser, use{" "}
            <strong className="font-semibold text-[#3d4a5c]">Open in new tab</strong>{" "}
            or <strong className="font-semibold text-[#3d4a5c]">Download PDF</strong>
            .
          </p>
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
                  href={LINKEDIN_URL}
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
              <div className="mt-4 space-y-4">
                <p className="menu-body italic text-[#5c6570]">{easterEggFact}</p>
                <p className="menu-body italic text-[#5c6570]">
                  {chefWhisperThanks}
                </p>
                <p className="menu-body italic text-[#5c6570]">
                  {chefWhisperClosing}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      );

    default:
      return null;
  }
}
