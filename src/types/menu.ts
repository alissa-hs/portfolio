export type MenuPageId =
  | "cover"
  | "experience"
  | "technical"
  | "soft-skills"
  | "selection"
  | "resume"
  | "finishing";

export type MenuPageMeta = {
  id: MenuPageId;
  /** Short label in the top navigation */
  navLabel: string;
  /** Large title on the menu page */
  title: string;
  /** Optional subtitle under the title (menu-style tagline) */
  subtitle?: string;
};
