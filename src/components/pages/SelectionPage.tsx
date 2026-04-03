import { storyCards } from "@/data/portfolio";

export function SelectionPage() {
  return (
    <div className="space-y-10">
      {storyCards.map((card) => (
        <div
          key={`${card.org}-${card.title}`}
          className="border-b border-menu-border pb-8 last:border-0 last:pb-0"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="menu-course-title text-menu-ink">{card.title}</h3>
            <span className="menu-meta">{card.org}</span>
          </div>
          <p className="menu-meta mt-1">{card.meta}</p>
          <p className="menu-body mt-3 text-menu-body-text">{card.summary}</p>
          <div className="mt-4 space-y-2 border-l-2 border-menu-gold/40 pl-4">
            {(["challenge", "approach", "impact"] as const).map((key) => (
              <p key={key} className="menu-body text-sm text-menu-muted">
                <span className="font-semibold capitalize text-menu-ink">
                  {key} ·{" "}
                </span>
                {card[key]}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
