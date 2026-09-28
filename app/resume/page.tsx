import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Syed Qasim Ali",
  description: "Digital resume of Syed Qasim Ali",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Digital <span className="text-accent">Resume</span>
          </h1>
          <p className="mt-2 text-text-secondary">
            Full-Stack Developer | AI Media Tools | Pakistan
          </p>
        </div>

        <a
          href="/resume.pdf"
          download="Syed_Qasim_Ali_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-dim"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </a>

        <div className="w-full rounded-md border border-border bg-surface p-8">
          <h2 className="text-xl font-bold text-accent">Experience</h2>
          <div className="mt-6 space-y-6">
            <ExperienceItem
              title="Associate Software Developer"
              company="Current"
              period="2024 — Present"
              description="Full-stack development with React, Next.js, and Node.js. Building AI media tools and automation workflows."
            />
            <ExperienceItem
              title="Frontend Developer"
              company="Freelance"
              period="2022 — 2024"
              description="Built responsive web applications with React and modern CSS frameworks. Integrated REST APIs and optimized performance."
            />
          </div>

          <h2 className="mt-10 text-xl font-bold text-accent">Education</h2>
          <div className="mt-6">
            <ExperienceItem
              title="Computer Science"
              company="University"
              period="2020 — 2024"
              description="Focus on software engineering, algorithms, and web technologies."
            />
          </div>

          <h2 className="mt-10 text-xl font-bold text-accent">Key Projects</h2>
          <ul className="mt-4 space-y-2 text-text-secondary" role="list">
            <li>• YouTube-Creator-Tool — Video workflow automation</li>
            <li>• SnipVid — Video editing and processing platform</li>
            <li>• S-Q-Creator-Studio — AI-powered content creation</li>
            <li>• Editor-Agent — AI video editing agent</li>
            <li>• Auto-Captions — Automated caption generation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <span className="font-mono text-sm text-text-secondary">{period}</span>
      </div>
      <p className="text-sm text-accent">{company}</p>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
    </div>
  );
}
