# Alissa Hsueh — Portfolio

An interactive portfolio styled as a restaurant menu. Built with Next.js, React, and Tailwind CSS.

## Concept

The portfolio uses a tasting-menu metaphor: each section is a "course," navigation pills are menu items, and pages turn with a directional 3D flip animation. The framing is intentional — it reflects a belief that how something is presented is part of the craft.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 + PostCSS |
| Language | TypeScript 5 |
| Typography | Playfair Display (Google Fonts) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, font setup, metadata
│   ├── page.tsx         # Entry point
│   └── globals.css      # Design tokens, component classes, animations
├── components/
│   ├── MenuPortfolio.tsx    # Page state, navigation, keyboard handling
│   ├── MenuPageBodies.tsx   # Content for each section
│   └── LinkedInIconLink.tsx # Reusable icon link
├── data/
│   ├── menu.ts          # Section metadata (titles, subtitles, nav labels)
│   └── portfolio.ts     # Portfolio content (hero, projects, skills)
└── types/
    ├── menu.ts          # MenuPageId, MenuPageMeta
    └── portfolio.ts     # StoryCard, SoftSkill
```

Content lives in `src/data/` — separated from rendering logic so updates don't require touching components.

## How the Page Flip Works

Page turns use CSS 3D transforms rather than a JS animation library. Two keyframe animations handle directionality:

- **Forward** (`menu-page-turn-in`): new page rotates in from the left (`rotateY(-14deg)` → `0deg`)
- **Back** (`menu-page-turn-in-back`): new page rotates in from the right (`rotateY(14deg)` → `0deg`)

The `direction` state in `MenuPortfolio` tracks which way the user is navigating, and the appropriate CSS class is applied to the incoming page element. Re-keying the element on `pageIndex` forces React to remount it, which restarts the animation on every navigation.

Animations are disabled for users with `prefers-reduced-motion` set.

## Sections

| Nav Label | Title | Contents |
|---|---|---|
| Cover | Welcome | Introduction |
| Experience | The kitchen résumé | Work history |
| Technical | Mise en place | Languages, frameworks, tools |
| Soft skills | Service & room | Leadership, mentorship, collaboration |
| Selection | Signature plates | Three in-depth project stories |
| Resume | The printed folio | Embedded PDF + download |
| Finishing | Sweet endings | Education, contact, easter egg |

## Running Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Navigation

- Click any nav pill to jump to a section
- Previous / Next buttons in the page footer
- Left / Right arrow keys

## Development Notes

Built with [Cursor](https://cursor.sh) using AI-assisted development. The architecture, design decisions, and all content are my own; Cursor was used as a coding collaborator throughout. The `CLAUDE.md` and `AGENTS.md` files in the repo root are instruction files for AI coding tools — they're not part of the application.
