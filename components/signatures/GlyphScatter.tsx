"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

// Seeded positions (x %, y %) chosen by hand so they feel scattered but composed.
type Glyph = { name: string; x: number; y: number; rot: number; size: number; path: string };

const GLYPHS: Glyph[] = [
  // eye
  { name: "eye", x: 12, y: 22, rot: -8, size: 38, path: "M2 18 C 14 4, 38 4, 50 18 C 38 32, 14 32, 2 18 Z M 26 12 a 6 6 0 1 0 0.1 0 Z" },
  // moon-arc
  { name: "moon", x: 78, y: 18, rot: 14, size: 32, path: "M30 4 C 14 4, 4 16, 4 28 C 4 40, 14 52, 30 52 C 18 44, 14 36, 14 28 C 14 20, 18 12, 30 4 Z" },
  // mountain
  { name: "mountain", x: 24, y: 76, rot: 0, size: 46, path: "M2 44 L 18 12 L 28 28 L 38 4 L 56 44 Z" },
  // droplet
  { name: "droplet", x: 88, y: 70, rot: -10, size: 26, path: "M16 2 C 26 18, 30 28, 30 36 C 30 46, 24 52, 16 52 C 8 52, 2 46, 2 36 C 2 28, 6 18, 16 2 Z" },
  // spiral
  { name: "spiral", x: 52, y: 8, rot: 6, size: 34, path: "M30 30 m -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0 m 8 0 a 12 12 0 1 1 24 0 a 12 12 0 1 1 -24 0 m 6 0 a 6 6 0 1 0 12 0" },
  // seed
  { name: "seed", x: 6, y: 52, rot: -22, size: 22, path: "M14 2 C 24 14, 24 26, 14 38 C 4 26, 4 14, 14 2 Z M 14 14 L 14 30" },
  // gate
  { name: "gate", x: 64, y: 88, rot: 0, size: 36, path: "M4 44 L 4 14 C 4 6, 14 4, 22 4 C 30 4, 40 6, 40 14 L 40 44 M 4 24 L 40 24" },
  // breath-line
  { name: "breath", x: 46, y: 52, rot: -4, size: 60, path: "M2 18 C 14 4, 28 32, 42 18 C 56 4, 70 32, 84 18" },
];

export function GlyphScatter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;

    const glyphs = Array.from(node.querySelectorAll<HTMLElement>("[data-glyph]"));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            glyphs.forEach((el, i) => {
              const dx = (parseFloat(el.dataset.dx ?? "0") || 0) * 60;
              const dy = (parseFloat(el.dataset.dy ?? "0") || 0) * 60;
              el.style.transform = `translate(${dx}px, ${dy}px) rotate(0deg)`;
              el.style.opacity = "0";
              el.style.transition = `transform 1200ms cubic-bezier(0.2, 0.7, 0.1, 1) ${i * 90}ms, opacity 800ms cubic-bezier(0.2, 0.7, 0.1, 1) ${i * 90}ms`;
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  el.style.transform = `translate(0, 0) rotate(var(--rot))`;
                  el.style.opacity = "1";
                });
              });
            });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="tyv-glyphs" ref={ref} aria-hidden="true">
      {GLYPHS.map((g, i) => {
        const dirs = [
          [-1, -1], [1, -1], [-1, 1], [1, 1], [0, -1.2], [-1.2, 0], [1.2, 0], [0, 1.2],
        ];
        const [dx, dy] = dirs[i % dirs.length];
        return (
          <span
            key={g.name}
            data-glyph
            data-dx={dx}
            data-dy={dy}
            style={
              {
                left: `${g.x}%`,
                top: `${g.y}%`,
                width: `${g.size}px`,
                "--rot": `${g.rot}deg`,
                transform: `rotate(${g.rot}deg)`,
              } as React.CSSProperties
            }
          >
            <svg viewBox="0 0 60 56" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path
                d={g.path}
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        );
      })}
      <style jsx>{`
        .tyv-glyphs {
          position: relative;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          aspect-ratio: 16 / 7;
        }
        .tyv-glyphs > span {
          position: absolute;
          transform-origin: center;
          opacity: 0.85;
          color: var(--ink);
        }
        .tyv-glyphs :global(svg) {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
}
