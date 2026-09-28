"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";
import SystemWindow from "@/components/SystemWindow/SystemWindow";

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Strengths & <span className="text-accent">Growth Areas</span>
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <SystemWindow title="Strengths" delay={0.1}>
            <ul className="space-y-3" role="list">
              {strengths.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-2 text-sm text-text-dim"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </SystemWindow>

          <SystemWindow title="Growth Areas" delay={0.2}>
            <ul className="space-y-3" role="list">
              {growthAreas.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-2 text-sm text-text-dim"
                >
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </SystemWindow>
        </div>
      </div>
    </section>
  );
}
