"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

interface GoldBadgeProps {
  label?: string;
}

export default function GoldBadge({ label = "Featured" }: GoldBadgeProps) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold border border-gold/30"
    >
      <Crown className="h-3 w-3" />
      {label}
    </motion.span>
  );
}
