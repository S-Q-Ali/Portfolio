const strengths = [
  "Full-stack development with modern JavaScript/TypeScript",
  "Building scalable web applications with React and Next.js",
  "AI media tooling and video workflow automation",
  "API design and integration",
  "Open source contribution and collaboration",
  "Problem-solving with clean, maintainable code",
];

const growthAreas = [
  "System design and architecture at scale",
  "Advanced DevOps and CI/CD pipelines",
  "Cloud infrastructure (AWS, GCP)",
  "Machine learning and AI model deployment",
  "Technical writing and documentation",
  "Leadership and mentorship",
];

export default function StrengthsSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Strengths & <span className="text-accent">Growth Areas</span>
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-accent uppercase tracking-wider">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Strengths
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-border bg-surface p-6">
            <h3 className="flex items-center gap-2 font-mono text-sm font-semibold text-accent uppercase tracking-wider">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Growth Areas
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {growthAreas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
