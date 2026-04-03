export type StoryCard = {
  org: string;
  title: string;
  meta: string;
  summary: string;
  challenge: string;
  approach: string;
  impact: string;
};

export type SoftSkill = {
  title: string;
  body: string;
};

export type ExperienceItem = {
  place: string;
  role: string;
  period: string;
  notes: string[];
};

export type TechnicalGroup = {
  heading: string;
  items: string[];
};
