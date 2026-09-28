import type { PortfolioProject } from "@/lib/github/types";

interface ProjectCardProps {
  project: PortfolioProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-md border border-border bg-surface p-6 transition-colors hover:border-accent/50">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary transition-colors hover:text-accent"
          >
            {project.name}
          </a>
        </h3>
        <div className="flex items-center gap-1 text-sm text-text-secondary">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {project.stars}
        </div>
      </div>

      <p className="mt-2 text-sm text-text-secondary line-clamp-2">{project.description}</p>

      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-md bg-background px-2 py-1 font-mono text-xs text-accent">
          {project.language}
        </span>
        <span className="text-xs text-text-secondary">
          {formatDate(project.updatedAt)}
        </span>
      </div>
    </article>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
