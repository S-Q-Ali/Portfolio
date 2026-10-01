import { GITHUB_USERNAME } from "../constants";
import type { GitHubRepo, GitHubUser } from "./types";

const GITHUB_API_BASE = "https://api.github.com";

function isGitHubRepo(value: unknown): value is GitHubRepo {
  if (typeof value !== "object" || value === null) return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.id === "number" &&
    typeof r.name === "string" &&
    typeof r.stargazers_count === "number" &&
    typeof r.forks_count === "number" &&
    typeof r.html_url === "string" &&
    typeof r.updated_at === "string" &&
    typeof r.fork === "boolean"
  );
}

function isGitHubUser(value: unknown): value is GitHubUser {
  if (typeof value !== "object" || value === null) return false;
  const u = value as Record<string, unknown>;
  return (
    typeof u.login === "string" &&
    typeof u.public_repos === "number" &&
    typeof u.followers === "number" &&
    typeof u.avatar_url === "string"
  );
}

function getGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const endpoint = process.env.GITHUB_TOKEN
    ? `${GITHUB_API_BASE}/user/repos?per_page=100&sort=updated`
    : `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

  const response = await fetch(endpoint, {
    headers: getGitHubHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("GitHub API returned unexpected data format");
  }

  const repos = data.filter(isGitHubRepo);

  return repos;
}

export async function fetchGitHubUser(): Promise<GitHubUser> {
  const url = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`;

  const response = await fetch(url, {
    headers: getGitHubHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  const data: unknown = await response.json();

  if (!isGitHubUser(data)) {
    throw new Error("GitHub API returned unexpected user data format");
  }

  return data;
}
