"use client";

import { motion } from "framer-motion";

interface XPBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

export default function XPBar({
  label,
  value,
  max = 100,
  color = "bg-accent",
}: XPBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-dim">{label}</span>
        <span className="font-mono text-accent">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-light">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
