"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/github/types";
import { projectCases } from "@/lib/project-cases";
import GoldBadge from "@/components/GoldBadge/GoldBadge";

interface ProjectCardProps {
  project: PortfolioProject;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const caseStudy = projectCases.find(
    (c) => c.name.toLowerCase() === project.name.toLowerCase()
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-panel glass-panel-hover group rounded-lg p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text transition-colors hover:text-accent-glow"
            >
              {project.name}
            </a>
          </h3>
          {caseStudy?.featured && <GoldBadge />}
        </div>
        <div className="flex items-center gap-3 text-sm text-text-dim">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            {project.forks}
          </span>
        </div>
      </div>

      <p className="mt-2 text-sm text-text-dim line-clamp-2">
        {caseStudy?.problem ?? project.description}
      </p>

      {caseStudy && (
        <div className="mt-3 space-y-1 text-xs text-text-dim">
          <p><span className="text-accent-glow">Outcome:</span> {caseStudy.outcome}</p>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-surface-light px-2 py-1 font-mono text-xs text-accent-glow">
          {project.language}
        </span>
        <div className="flex items-center gap-3">
          {caseStudy?.demo && (
            <a
              href={caseStudy.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-gold hover:text-gold/80 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Demo
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-text-dim transition-colors hover:text-accent-glow"
          >
            <ExternalLink className="h-3 w-3" />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
