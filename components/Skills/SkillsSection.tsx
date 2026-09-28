const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Python", "PHP"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vite"],
  },
  {
    title: "AI & Media",
    skills: ["Video Automation", "AI Media Tools", "MCP", "LLM Integration"],
  },
];

export default function SkillsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Skills & <span className="text-accent">Expertise</span>
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-md border border-border bg-surface p-6"
            >
              <h3 className="font-mono text-sm font-semibold text-accent uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-text-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
