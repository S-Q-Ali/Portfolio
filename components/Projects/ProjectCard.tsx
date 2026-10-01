"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Code, Play } from "lucide-react";
import type { PortfolioProject } from "@/lib/github/types";
import type { LanguageStat } from "@/lib/github/languages";
import { projectCases } from "@/lib/project-cases";
import GoldBadge from "@/components/GoldBadge/GoldBadge";

interface ProjectCardProps {
  project: PortfolioProject;
  languages?: LanguageStat[];
  index?: number;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  Python: "bg-green-500/10 text-green-400 border-green-500/30",
  CSS: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Shell: "bg-gray-500/10 text-gray-400 border-gray-500/30",
};

export default function ProjectCard({ project, languages = [], index = 0 }: ProjectCardProps) {
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
          {languages.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-accent-glow uppercase tracking-wider">Languages</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className={`rounded-md px-2 py-1 text-xs font-medium border ${
                      languageColors[lang.name] || "bg-accent/10 text-accent-glow border-accent/20"
                    }`}
                  >
                    {lang.name} {lang.percentage}%
                  </span>
                ))}
              </div>
            </div>
          )}
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
