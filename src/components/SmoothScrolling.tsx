"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.15, duration: 1, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
}
