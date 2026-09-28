import type { GitHubRepo, PortfolioProject } from "./types";

function calculateScore(repo: GitHubRepo): number {
  const daysSinceUpdate = Math.max(
    0,
    (Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24)
  );
  const recencyScore = Math.max(0, 30 - daysSinceUpdate) / 30;
  const starScore = Math.min(repo.stargazers_count, 50) / 50;
  const forkScore = Math.min(repo.forks_count, 20) / 20;

  return starScore * 0.2 + forkScore * 0.2 + recencyScore * 0.6;
}

export function filterAndRankProjects(repos: GitHubRepo[]): PortfolioProject[] {
  return repos
    .filter((repo) => !repo.fork)
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
