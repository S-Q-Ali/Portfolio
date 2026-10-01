"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Code, Play } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {caseStudy && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "auto" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="mt-4 space-y-3"
        >
          <div>
            <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Problem</p>
            <p className="mt-1 text-sm text-text-dim">{caseStudy.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Role</p>
            <p className="mt-1 text-sm text-text-dim">{caseStudy.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Method</p>
            <p className="mt-1 text-sm text-text-dim">{caseStudy.method}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Outcome</p>
            <p className="mt-1 text-sm text-text-dim">{caseStudy.outcome}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent-glow border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
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
              className="flex items-center gap-1 rounded-md bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold border border-gold/30 hover:bg-gold/20 transition-colors"
            >
              <Play className="h-3 w-3" />
              Launch
            </a>
          )}
          {!caseStudy?.isPrivate && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-glow border border-accent/30 hover:bg-accent/20 transition-colors"
            >
              <Code className="h-3 w-3" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
