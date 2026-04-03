import type { MenuPageId } from "@/types/menu";

import { CoverPage } from "@/components/pages/CoverPage";
import { ExperiencePage } from "@/components/pages/ExperiencePage";
import { TechnicalPage } from "@/components/pages/TechnicalPage";
import { SoftSkillsPage } from "@/components/pages/SoftSkillsPage";
import { SelectionPage } from "@/components/pages/SelectionPage";
import { ResumePage } from "@/components/pages/ResumePage";
import { FinishingPage } from "@/components/pages/FinishingPage";

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
      return <CoverPage />;
    case "experience":
      return <ExperiencePage />;
    case "technical":
      return <TechnicalPage />;
    case "soft-skills":
      return <SoftSkillsPage />;
    case "selection":
      return <SelectionPage />;
    case "resume":
      return <ResumePage />;
    case "finishing":
      return (
        <FinishingPage
          showSecret={showSecret}
          onToggleSecret={onToggleSecret}
        />
      );
    default:
      return null;
  }
}
