import {
  chefWhisperClosing,
  chefWhisperThanks,
  easterEggFact,
  LINKEDIN_URL,
} from "@/data/portfolio";

type FinishingPageProps = {
  showSecret: boolean;
  onToggleSecret: () => void;
};

export function FinishingPage({
  showSecret,
  onToggleSecret,
}: FinishingPageProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="menu-section-label text-menu-label">Education</h3>
        <p className="menu-body mt-2 text-menu-body-text">
          University of California, Berkeley — B.A. Cognitive Science; minors in
          Computer Science and Data Science. Regent&apos;s and Chancellor Scholar
          Finalist; Cal Alumni Leadership Award; Estha M. Rodkey Scholarship.
        </p>
      </div>
      <div>
        <h3 className="menu-section-label text-menu-label">
          Reach the maître d&apos;
        </h3>
        <ul className="mt-3 list-none space-y-2 p-0">
          <li className="menu-body">
            <a className="menu-link" href="mailto:hsueh.alissa@gmail.com">
              hsueh.alissa@gmail.com
            </a>
          </li>
          <li className="menu-body">
            <a
              className="menu-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alissa-h-240859132
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-sm border border-menu-border bg-menu-paper-highlight p-5">
        <p className="menu-section-label text-menu-label">
          Chef&apos;s whisper
        </p>
        <button
          type="button"
          onClick={onToggleSecret}
          className="menu-link mt-2 text-sm tracking-wide"
        >
          {showSecret ? "Fold the note" : "Unfold the note"}
        </button>
        {showSecret ? (
          <div className="mt-4 space-y-4">
            <p className="menu-body italic text-menu-muted">{easterEggFact}</p>
            <p className="menu-body italic text-menu-muted">
              {chefWhisperThanks}
            </p>
            <p className="menu-body italic text-menu-muted">
              {chefWhisperClosing}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
