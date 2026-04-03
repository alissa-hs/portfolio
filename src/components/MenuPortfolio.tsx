"use client";

import { useCallback, useEffect, useState } from "react";

import { heroContent } from "@/data/portfolio";
import { menuPages } from "@/data/menu";
import type { MenuPageId } from "@/types/menu";

import { LinkedInIconLink } from "@/components/LinkedInIconLink";
import { MenuPageBody } from "@/components/MenuPageBodies";

export function MenuPortfolio() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [showSecret, setShowSecret] = useState(false);

  const total = menuPages.length;
  const current = menuPages[pageIndex] ?? menuPages[0];

  const goTo = useCallback((index: number, dir: "forward" | "back") => {
    const next = Math.min(Math.max(index, 0), total - 1);
    const nextPage = menuPages[next];
    if (nextPage?.id !== "finishing") {
      setShowSecret(false);
    }
    setDirection(dir);
    setPageIndex(next);
  }, [total]);

  const goNext = useCallback(() => {
    goTo(pageIndex + 1, "forward");
  }, [goTo, pageIndex]);

  const goPrev = useCallback(() => {
    goTo(pageIndex - 1, "back");
  }, [goTo, pageIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div className="menu-dining-room flex min-h-screen flex-col px-4 py-8 sm:px-8 md:py-12 lg:px-12">
      <header className="mx-auto w-full max-w-4xl text-center">
        <p className="text-[0.7rem] tracking-[0.45em] text-menu-gold-light uppercase sm:text-[0.72rem]">
          Portfolio
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <h1 className="text-4xl font-semibold tracking-wide text-white sm:text-5xl">
            {heroContent.name} Hsueh
          </h1>
          <LinkedInIconLink />
        </div>
        <p className="mt-2 text-base text-menu-gold-light sm:text-lg">
          {heroContent.eyebrow}
        </p>
      </header>

      <nav
        className="mx-auto mt-8 flex w-full max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        aria-label="Menu sections"
      >
        {menuPages.map((page, index) => {
          const active = index === pageIndex;
          return (
            <button
              key={page.id}
              type="button"
              onClick={() =>
                goTo(index, index > pageIndex ? "forward" : "back")
              }
              className={`menu-nav-pill ${active ? "menu-nav-pill--active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {page.navLabel}
            </button>
          );
        })}
      </nav>

      <div className="mx-auto mt-10 flex w-full max-w-3xl flex-1 flex-col lg:max-w-4xl xl:max-w-5xl">
        <div className="menu-paper flex flex-1 flex-col rounded-sm px-8 py-12 shadow-2xl sm:px-12 sm:py-14 lg:px-14 lg:py-16">
          <div className="menu-paper-inner flex flex-1 flex-col">
            <div className="menu-ornament mx-auto mb-10" aria-hidden />

            <div
              key={`${current.id}-${pageIndex}`}
              className={
                direction === "forward"
                  ? "menu-page-flip-forward flex-1"
                  : "menu-page-flip-back flex-1"
              }
            >
              <p className="text-center text-[0.7rem] tracking-[0.4em] text-menu-label uppercase sm:text-[0.72rem]">
                {current.navLabel}
              </p>
              <h2 className="mt-3 text-center text-3xl font-semibold text-menu-ink sm:text-4xl">
                {current.title}
              </h2>
              {current.subtitle ? (
                <p className="mt-3 text-center text-lg italic text-menu-muted sm:text-xl">
                  {current.subtitle}
                </p>
              ) : null}

              <div className="mt-12 flex-1">
                <MenuPageBody
                  pageId={current.id as MenuPageId}
                  showSecret={showSecret}
                  onToggleSecret={() => setShowSecret((s) => !s)}
                />
              </div>
            </div>
          </div>

          <footer className="mt-12 flex flex-col items-center gap-4 border-t border-menu-border pt-8 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={goPrev}
              disabled={pageIndex === 0}
              className="menu-turn-btn disabled:cursor-not-allowed disabled:opacity-35"
            >
              ← Previous course
            </button>
            <p className="text-xs tracking-[0.25em] text-menu-label uppercase">
              Page {pageIndex + 1} of {total}
            </p>
            <button
              type="button"
              onClick={goNext}
              disabled={pageIndex === total - 1}
              className="menu-turn-btn disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next course →
            </button>
          </footer>
        </div>

        <p className="mt-6 text-center text-xs text-menu-muted">
          Use arrow keys to turn the page.
        </p>
      </div>
    </div>
  );
}
