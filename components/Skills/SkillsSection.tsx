"use client";

import { motion } from "framer-motion";
import SystemWindow from "@/components/SystemWindow/SystemWindow";
import XPBar from "@/components/XPBar/XPBar";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Vite", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    title: "AI & Media",
    skills: [
      { name: "AI Media Tools", level: 80 },
      { name: "MCP", level: 75 },
      { name: "LLM Integration", level: 78 },
      { name: "Video Automation", level: 85 },
    ],
  },
];

export default function SkillsSection() {
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
          Skills & <span className="text-accent-glow">Expertise</span>
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <SystemWindow key={category.title} title={category.title} delay={idx * 0.1}>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <XPBar key={skill.name} label={skill.name} value={skill.level} />
                ))}
              </div>
            </SystemWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
