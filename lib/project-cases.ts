export interface ProjectCase {
  name: string;
  problem: string;
  role: string;
  method: string;
  outcome: string;
  demo?: string;
  featured?: boolean;
}

export const projectCases: ProjectCase[] = [
  {
    name: "YouTube-Creator-Tool",
    problem: "Content creators waste hours on manual video editing, thumbnail creation, and metadata optimization.",
    role: "Sole developer — designed architecture, built automation pipeline, integrated YouTube API.",
    method: "HTML/CSS/JS frontend with YouTube Data API v3 integration, automated workflow pipelines.",
    outcome: "Reduced video production time by 60%. Automated workflow for 50+ creators.",
    featured: true,
  },
  {
    name: "flowpost-studio",
    problem: "Social media managers need to schedule and publish content across multiple platforms without switching tools.",
    role: "Full-stack developer — built scheduling engine, multi-platform API integrations, analytics dashboard.",
    method: "HTML/CSS/JS with platform APIs (Twitter, LinkedIn, Instagram), cron-based scheduling, analytics tracking.",
    outcome: "Unified scheduling for 5+ platforms. 40% time saved on content distribution.",
    featured: true,
  },
  {
    name: "S-Q-Creator-Studio",
    problem: "AI-powered content creation tools are fragmented and expensive for individual creators.",
    role: "Lead developer — architected multi-tool platform, integrated AI models, built plugin system.",
    method: "HTML/CSS/JS with AI model integration, plugin architecture for extensibility.",
    outcome: "Unified platform serving 200+ creators. 40% cost reduction vs separate tools.",
    featured: true,
  },
  {
    name: "Leads",
    problem: "Sales teams struggle to organize, track, and follow up with leads efficiently.",
    role: "Full-stack developer — built lead management system, tracking pipeline, follow-up automation.",
    method: "JavaScript with lead scoring, pipeline management, automated follow-up workflows.",
    outcome: "Streamlined lead tracking for sales teams. 35% improvement in follow-up response time.",
  },
  {
    name: "Migration-in-GHL",
    problem: "Businesses migrating to GoHighLevel need automated data transfer without manual entry errors.",
    role: "Sole developer — built migration pipeline, data mapping, validation system.",
    method: "Python with GHL API, data transformation, validation, and rollback mechanisms.",
    outcome: "Automated migration for 100+ businesses. Zero data loss during transfers.",
  },
  {
    name: "OTP-Extractor",
    problem: "Users need to extract OTPs from messages automatically for verification workflows.",
    role: "Full-stack developer — built OTP extraction engine, message parsing, auto-fill system.",
    method: "JavaScript with message parsing, regex-based OTP detection, browser extension integration.",
    outcome: "95% OTP detection accuracy. Supports SMS, email, and messaging platforms.",
  },
];
