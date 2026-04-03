import { LinkedInIconLink } from "@/components/LinkedInIconLink";
import { LINKEDIN_URL, RESUME_PDF_PATH } from "@/data/portfolio";

export function ResumePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-4 border-b border-menu-border pb-6 sm:flex-row sm:flex-wrap sm:justify-center">
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
          className="menu-body inline-flex items-center justify-center rounded-full border border-menu-border bg-transparent px-5 py-2.5 text-sm font-semibold tracking-wide text-menu-ink transition hover:bg-menu-paper-highlight"
        >
          Open in new tab
        </a>
        <span className="flex items-center gap-2">
          <LinkedInIconLink
            className="text-menu-link"
            iconClassName="h-6 w-6"
          />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link menu-body text-sm font-semibold"
          >
            LinkedIn profile
          </a>
        </span>
      </div>

      <div className="overflow-hidden rounded-sm border border-menu-border bg-menu-border-light/40 shadow-inner">
        <iframe
          title="Résumé PDF"
          src={`${RESUME_PDF_PATH}#view=FitH`}
          className="h-[min(72vh,880px)] w-full min-h-[480px]"
        />
      </div>

      <p className="menu-body text-center text-sm text-menu-muted">
        If the preview does not appear in your browser, use{" "}
        <strong className="font-semibold text-menu-body-text">
          Open in new tab
        </strong>{" "}
        or{" "}
        <strong className="font-semibold text-menu-body-text">
          Download PDF
        </strong>
        .
      </p>
    </div>
  );
}
