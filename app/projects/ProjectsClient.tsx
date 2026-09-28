"use client";

import { useState, useMemo } from "react";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import ProjectFilters from "@/components/Projects/ProjectFilters";
import type { PortfolioProject } from "@/lib/github/types";

interface ProjectsClientProps {
  projects: PortfolioProject[];
  languages: string[];
}

export default function ProjectsClient({ projects, languages }: ProjectsClientProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedLanguage) return projects;
    return projects.filter((p) => p.language === selectedLanguage);
  }, [projects, selectedLanguage]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All <span className="text-accent">Projects</span>
          </h1>
          <p className="mt-2 text-text-secondary">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        <ProjectFilters
          languages={languages}
          selected={selectedLanguage}
          onSelect={setSelectedLanguage}
        />

        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
