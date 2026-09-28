"use client";

import { motion } from "framer-motion";
import { MapPin, Users, BookOpen } from "lucide-react";
import type { GitHubUser } from "@/lib/github/types";

interface HeroProps {
  user: GitHubUser;
}

export default function Hero({ user }: HeroProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-accent/30 blur-lg" />
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              width={128}
              height={128}
              className="relative rounded-full border-2 border-accent-glow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="glow-text text-accent-glow">{user.login}</span>
            </h1>
            <p className="text-xl text-text-dim sm:text-2xl">
              {user.bio ?? "Full-Stack Developer"}
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-text-dim">
              <MapPin className="h-4 w-4" />
              {user.location ?? "Pakistan"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-8"
          >
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
          </motion.div>
        </div>
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
    <div className="glass-panel rounded-lg px-6 py-4 text-center">
      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-glow">
        {icon}
      </div>
      <p className="font-mono text-2xl font-bold text-accent-glow">{value}</p>
      <p className="text-sm text-text-dim">{label}</p>
    </div>
  );
}
