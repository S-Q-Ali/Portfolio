"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SystemWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SystemWindow({
  title,
  children,
  className = "",
  delay = 0,
}: SystemWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`glass-panel scan-line rounded-lg p-6 ${className}`}
    >
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent-glow animate-pulse-glow" />
          <h3 className="font-mono text-sm font-semibold text-accent-glow uppercase tracking-wider">
            {title}
          </h3>
        </div>
      )}
      {children}
    </motion.div>
  );
}
