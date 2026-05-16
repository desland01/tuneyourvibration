"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

const RING_COUNT = 6;

export function BowlWave() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ringsRef = useRef<SVGCircleElement[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;

    let raf = 0;
    let lastY = window.scrollY;
    let velocity = 0;
    let phase = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      velocity = Math.min(1, Math.abs(dy) / 60);
    };

    const tick = () => {
      phase += 0.012 + velocity * 0.06;
      velocity *= 0.92;

      ringsRef.current.forEach((circle, index) => {
        const t = (phase + index / RING_COUNT) % 1;
        const scale = 0.18 + t * 1.05;
        const opacity = (1 - t) * 0.6;
        circle.setAttribute("transform", `scale(${scale.toFixed(3)})`);
        circle.setAttribute("opacity", opacity.toFixed(3));
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="tyv-bowlwave" ref={containerRef} aria-hidden="true">
      <svg viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="bowl-glow" cx="0" cy="0" r="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--ember)" stopOpacity="0.32" />
            <stop offset="60%" stopColor="var(--ember)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="0" cy="0" r="160" fill="url(#bowl-glow)" stroke="none" />
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <circle
            key={i}
            ref={(node) => {
              if (node) ringsRef.current[i] = node;
            }}
            cx="0"
            cy="0"
            r="120"
            transform="scale(0.18)"
          />
        ))}
      </svg>
    </div>
  );
}
