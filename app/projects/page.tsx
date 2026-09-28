import ProjectsClient from "./ProjectsClient";
import { fetchGitHubRepos } from "@/lib/github/fetch";
import { filterAndRankProjects, getUniqueLanguages } from "@/lib/github/filter";

export const revalidate = 3600;

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos();
  const projects = filterAndRankProjects(repos);
  const languages = getUniqueLanguages(projects);

  return <ProjectsClient projects={projects} languages={languages} />;
}
