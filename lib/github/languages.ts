import { GITHUB_USERNAME } from "../constants";

const GITHUB_API_BASE = "https://api.github.com";

export interface LanguageStat {
  name: string;
  percentage: number;
  bytes: number;
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

export async function fetchRepoLanguages(repoName: string): Promise<LanguageStat[]> {
  const url = `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`;

  const response = await fetch(url, {
    headers: getGitHubHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return [];
  }

  const data: Record<string, number> = await response.json();

  const totalBytes = Object.values(data).reduce((sum, bytes) => sum + bytes, 0);

  if (totalBytes === 0) return [];

  return Object.entries(data)
    .map(([name, bytes]) => ({
      name,
      percentage: Math.round((bytes / totalBytes) * 1000) / 10,
      bytes,
    }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 4);
}
