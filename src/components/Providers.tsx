"use client";

import { MotionConfig } from "framer-motion";

/** Respects the visitor's "reduce motion" OS setting across all animations. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
