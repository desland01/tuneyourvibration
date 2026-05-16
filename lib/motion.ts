"use client";

import { useEffect, useState } from "react";

export const ease = {
  out: "cubic-bezier(0.2, 0.7, 0.1, 1)" as const,
  drift: "cubic-bezier(0.45, 0, 0.15, 1)" as const,
};

export const duration = {
  quick: 0.18,
  calm: 0.48,
  slow: 0.9,
} as const;

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }

    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, []);

  return reduced;
}
