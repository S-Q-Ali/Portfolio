import type { PortfolioProject } from "@/lib/github/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: PortfolioProject[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-md border border-border bg-surface p-12 text-center">
        <p className="text-text-secondary">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
