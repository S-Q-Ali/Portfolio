import type { GitHubUser } from "@/lib/github/types";

interface HeroProps {
  user: GitHubUser;
}

export default function Hero({ user }: HeroProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center gap-8">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width={128}
            height={128}
            className="rounded-full border-2 border-accent"
          />

          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-accent">{user.login}</span>
            </h1>
            <p className="text-xl text-text-secondary sm:text-2xl">
              {user.bio ?? "Full-Stack Developer"}
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-text-secondary">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {user.location ?? "Pakistan"}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <StatCard label="Repos" value={user.public_repos} />
            <StatCard label="Followers" value={user.followers} />
            <StatCard label="Following" value={user.following} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-border bg-surface px-6 py-4 text-center">
      <p className="font-mono text-2xl font-bold text-accent">{value}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}
