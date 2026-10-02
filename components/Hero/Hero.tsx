"use client";

import { motion } from "framer-motion";
import { MapPin, Users, BookOpen, Shield } from "lucide-react";
import type { GitHubUser } from "@/lib/github/types";

interface HeroProps {
  user: GitHubUser;
}

export default function Hero({ user }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src="/assets/BG.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-bg/70" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="glow-text text-accent-glow">{user.login}</span>
              </h1>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold border border-gold/30">
                S-Rank
              </span>
            </div>
            <p className="text-xl text-text-dim sm:text-2xl">
              {user.bio ?? "Full-Stack Developer"}
            </p>
            <p className="flex items-center gap-2 text-sm text-text-dim">
              <MapPin className="h-4 w-4" />
              {user.location ?? "Pakistan"}
            </p>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-4">
            <StatCard icon={<BookOpen className="h-5 w-5" />} label="Repos" value={user.public_repos} />
            <StatCard icon={<Users className="h-5 w-5" />} label="Followers" value={user.followers} />
            <StatCard
              icon={
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              label="Following"
              value={user.following}
            />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-bg/60 px-4 py-2 backdrop-blur-md">
            <Shield className="h-4 w-4 text-gold" />
            <span className="font-mono text-sm text-gold">Shadow Monarch</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="glass-panel rounded-lg px-4 py-3 text-center">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-glow">
        {icon}
      </div>
      <p className="font-mono text-xl font-bold text-accent-glow">{value}</p>
      <p className="text-xs text-text-dim">{label}</p>
    </div>
  );
}
