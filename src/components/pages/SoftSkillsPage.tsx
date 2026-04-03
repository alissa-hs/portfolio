import { softSkills } from "@/data/portfolio";

export function SoftSkillsPage() {
  return (
    <div className="space-y-8">
      {softSkills.map((skill) => (
        <div key={skill.title}>
          <h3 className="menu-course-title text-menu-ink">{skill.title}</h3>
          <p className="menu-body mt-2 text-menu-body-text">{skill.body}</p>
        </div>
      ))}
    </div>
  );
}
