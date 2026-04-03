import { experienceItems } from "@/data/portfolio";

export function ExperiencePage() {
  return (
    <div className="space-y-10">
      {experienceItems.map((item) => (
        <div
          key={`${item.place}-${item.role}`}
          className="border-b border-menu-border pb-8 last:border-0 last:pb-0"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="menu-course-title text-menu-ink">{item.place}</h3>
            <span className="menu-meta whitespace-nowrap">{item.period}</span>
          </div>
          <p className="mt-1 text-sm italic text-menu-muted">{item.role}</p>
          <ul className="mt-4 list-none space-y-2 p-0">
            {item.notes.map((line) => (
              <li
                key={line}
                className="menu-body relative pl-4 text-menu-body-text before:absolute before:left-0 before:text-menu-gold before:content-['·']"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
