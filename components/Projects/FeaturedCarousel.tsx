"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/github/types";
import type { LanguageStat } from "@/lib/github/languages";
import ProjectCard from "./ProjectCard";

interface FeaturedCarouselProps {
  projects: PortfolioProject[];
  repoLanguages?: Record<string, LanguageStat[]>;
}

export default function FeaturedCarousel({
  projects,
  repoLanguages = {},
}: FeaturedCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  if (projects.length === 0) {
    return (
      <div
        role="status"
        className="rounded-md border border-border bg-surface p-12 text-center"
      >
        <p className="text-text-dim">No projects found.</p>
      </div>
    );
  }

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 24 : scroller.clientWidth * 0.8;
    scroller.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll to previous projects"
          className="glass-panel glass-panel-hover flex h-9 w-9 items-center justify-center rounded-md text-accent-glow"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll to next projects"
          className="glass-panel glass-panel-hover flex h-9 w-9 items-center justify-center rounded-md text-accent-glow"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Featured projects carousel"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-carousel-card
            className="w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-[calc((100%-3rem)/3)]"
          >
            <ProjectCard
              project={project}
              languages={repoLanguages[project.name] || []}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
