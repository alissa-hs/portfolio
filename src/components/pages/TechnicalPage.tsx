import { technicalGroups } from "@/data/portfolio";

export function TechnicalPage() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {technicalGroups.map((group) => (
        <div key={group.heading}>
          <h3 className="menu-section-label text-menu-label">
            {group.heading}
          </h3>
          <ul className="mt-3 list-none space-y-2 p-0">
            {group.items.map((skill) => (
              <li
                key={skill}
                className="menu-body border-b border-menu-border-light py-2 text-menu-body-text last:border-0"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
