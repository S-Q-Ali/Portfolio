import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Design — Syed Qasim Ali",
  description: "System design showcase",
};

const designs = [
  {
    title: "Video Processing Pipeline",
    description:
      "Scalable video processing workflow: upload → transcode → distribute. Uses message queues for async processing, CDN for delivery, and metadata DB for tracking.",
    components: ["Upload Service", "Message Queue", "Transcoder Workers", "CDN", "Metadata DB"],
  },
  {
    title: "AI Media Tools Platform",
    description:
      "Platform for AI-powered media tools. API gateway routes to specialized services (caption generation, video analysis). Caches results and streams progress.",
    components: ["API Gateway", "Caption Service", "Analysis Service", "Cache", "WebSocket"],
  },
  {
    title: "Real-time Collaboration System",
    description:
      "Multi-user editing with operational transforms. WebSocket servers sync changes, presence service tracks users, and conflict resolution ensures consistency.",
    components: ["WebSocket Server", "Presence Service", "OT Engine", "Persistence DB", "Load Balancer"],
  },
];

export default function SystemDesignPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            System <span className="text-accent">Design</span>
          </h1>
          <p className="mt-2 text-text-secondary">
            Architecture patterns and system designs I work with
          </p>
        </div>

        <div className="space-y-8">
          {designs.map((design, index) => (
            <article
              key={design.title}
              className="rounded-md border border-border bg-surface p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-lg font-bold text-accent">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-text-primary">{design.title}</h2>
                  <p className="mt-2 text-sm text-text-secondary">{design.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {design.components.map((component) => (
                      <span
                        key={component}
                        className="rounded-md bg-background px-3 py-1 font-mono text-xs text-accent"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
