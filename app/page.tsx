import { Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import HeroSkeleton from "@/components/Hero/HeroSkeleton";
import ProjectGrid from "@/components/Projects/ProjectGrid";
import SkillsSection from "@/components/Skills/SkillsSection";
import StrengthsSection from "@/components/Strengths/StrengthsSection";
import { fetchGitHubRepos, fetchGitHubUser } from "@/lib/github/fetch";
import { getTopProjects } from "@/lib/github/filter";

export const revalidate = 3600;

export default async function HomePage() {
  const [user, repos] = await Promise.all([fetchGitHubUser(), fetchGitHubRepos()]);
  const topProjects = getTopProjects(repos, 6);

  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero user={user} />
      </Suspense>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Best <span className="text-accent">Projects</span>
            </h2>
            <a
              href="/projects"
              className="text-sm font-medium text-accent hover:text-accent-glow transition-colors"
            >
              View all →
            </a>
          </div>
          <div className="mt-8">
            <ProjectGrid projects={topProjects} />
          </div>
        </div>
      </section>

      <SkillsSection />
      <StrengthsSection />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Syed Qasim Ali — Full-Stack Developer",
    description:
      "Portfolio of Syed Qasim Ali, showcasing projects, skills, and experience.",
  };
}
