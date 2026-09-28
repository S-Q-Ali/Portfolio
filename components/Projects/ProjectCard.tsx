"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/github/types";

interface ProjectCardProps {
  project: PortfolioProject;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-panel glass-panel-hover group rounded-lg p-6"
    >
      <div className="flex items-start justify-between gap-4">
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
        {project.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-surface-light px-2 py-1 font-mono text-xs text-accent-glow">
          {project.language}
        </span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-text-dim transition-colors hover:text-accent-glow"
        >
          <ExternalLink className="h-3 w-3" />
          View
        </a>
      </div>
    </motion.article>
  );
}
