import type { GitHubRepo, PortfolioProject } from "./types";

const SHOW_REPOS = new Set([
  "youtube-creator-tool",
  "flowpost-studio",
  "s-q-creator-studio",
  "leads",
  "migration-in-ghl",
]);

function shouldSkip(repo: GitHubRepo): boolean {
  if (repo.fork || repo.archived) return true;
  return !SHOW_REPOS.has(repo.name.toLowerCase());
}

function calculateScore(repo: GitHubRepo): number {
  const daysSinceUpdate = Math.max(
    0,
    (Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24)
  );
  const recencyScore = Math.max(0, 90 - daysSinceUpdate) / 90;
  const starScore = Math.min(repo.stargazers_count, 50) / 50;
  const forkScore = Math.min(repo.forks_count, 20) / 20;
  const descriptionScore = repo.description ? 1 : 0;
  const languageScore = repo.language ? 0.5 : 0;

  return descriptionScore * 0.35 + recencyScore * 0.25 + starScore * 0.15 + forkScore * 0.15 + languageScore * 0.1;
}

export function filterAndRankProjects(repos: GitHubRepo[]): PortfolioProject[] {
  return repos
    .filter((repo) => !shouldSkip(repo))
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description ?? "No description provided.",
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language ?? "Unknown",
      topics: repo.topics,
      updatedAt: repo.updated_at,
      score: calculateScore(repo),
    }))
    .sort((a, b) => b.score - a.score);
}

export function getTopProjects(repos: GitHubRepo[], count: number = 6): PortfolioProject[] {
  return filterAndRankProjects(repos).slice(0, count);
}

export function getUniqueLanguages(projects: PortfolioProject[]): string[] {
  const languages = new Set(projects.map((p) => p.language));
  return Array.from(languages).sort();
}
