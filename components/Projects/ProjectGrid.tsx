"use client";

import type { PortfolioProject } from "@/lib/github/types";
import type { LanguageStat } from "@/lib/github/languages";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: PortfolioProject[];
  repoLanguages?: Record<string, LanguageStat[]>;
}

export default function ProjectGrid({ projects, repoLanguages = {} }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-md border border-border bg-surface p-12 text-center">
        <p className="text-text-dim">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          languages={repoLanguages[project.name] || []}
          index={index}
        />
      ))}
    </div>
  );
}
