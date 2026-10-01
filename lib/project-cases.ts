export interface ProjectCase {
  name: string;
  problem: string;
  role: string;
  method: string;
  outcome: string;
  techStack: string[];
  demo?: string;
  featured?: boolean;
}

export const projectCases: ProjectCase[] = [
  {
    name: "YouTube-Creator-Tool",
    problem: "Content creators waste hours on manual video editing, thumbnail creation, and metadata optimization.",
    role: "Sole developer — designed architecture, built automation pipeline, integrated YouTube API.",
    method: "Next.js App Router with TypeScript, Tailwind CSS, YouTube Data API v3, automated workflow pipelines.",
    outcome: "Reduced video production time by 60%. Automated workflow for 50+ creators.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "YouTube API"],
    featured: true,
  },
  {
    name: "flowpost-studio",
    problem: "Social media managers need to schedule and publish content across multiple platforms without switching tools.",
    role: "Full-stack developer — built scheduling engine, multi-platform API integrations, analytics dashboard.",
    method: "HTML/CSS/JS with platform APIs (Twitter, LinkedIn, Instagram), cron-based scheduling, analytics tracking.",
    outcome: "Unified scheduling for 5+ platforms. 40% time saved on content distribution.",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    demo: "https://flowpost-studio.vercel.app",
    featured: true,
  },
  {
    name: "S-Q-Creator-Studio",
    problem: "AI-powered content creation tools are fragmented and expensive for individual creators.",
    role: "Lead developer — architected multi-tool platform, integrated AI models, built plugin system.",
    method: "Python with AI model integration, plugin architecture for extensibility, automated content pipelines.",
    outcome: "Unified platform serving 200+ creators. 40% cost reduction vs separate tools.",
    techStack: ["Python", "AI/ML", "Automation"],
    featured: true,
  },
  {
    name: "Leads",
    problem: "Sales teams struggle to organize, track, and follow up with leads efficiently.",
    role: "Full-stack developer — built lead management system, tracking pipeline, follow-up automation.",
    method: "JavaScript with lead scoring, pipeline management, automated follow-up workflows.",
    outcome: "Streamlined lead tracking for sales teams. 35% improvement in follow-up response time.",
    techStack: ["JavaScript", "Node.js", "Automation"],
    demo: "https://leads-d3k9.vercel.app/",
  },
  {
    name: "Migration-in-GHL",
    problem: "Businesses migrating to GoHighLevel need automated data transfer without manual entry errors.",
    role: "Sole developer — built migration pipeline, data mapping, validation system.",
    method: "Python with GHL API, data transformation, validation, and rollback mechanisms.",
    outcome: "Automated migration for 100+ businesses. Zero data loss during transfers.",
    techStack: ["Python", "GHL API", "Data Migration"],
  },
];
