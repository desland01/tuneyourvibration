"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

export function PalmRest() {
  const ref = useRef<SVGSVGElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const svg = ref.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("[data-draw]"));

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            paths.forEach((p, i) => {
              const len = p.getTotalLength();
              p.style.strokeDasharray = `${len}`;
              p.style.strokeDashoffset = `${len}`;
              p.style.transition = `stroke-dashoffset 1400ms cubic-bezier(0.2, 0.7, 0.1, 1) ${i * 90}ms`;
              requestAnimationFrame(() => {
                p.style.strokeDashoffset = "0";
              });
            });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(svg);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="tyv-palm" aria-hidden="true">
      <svg ref={ref} viewBox="0 0 280 320" preserveAspectRatio="xMidYMid meet">
        <g
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* palm outline */}
          <path
            data-draw
            d="M88 308 C 78 268, 60 232, 60 198 C 60 174, 70 156, 84 156 C 90 156, 96 162, 96 172 L 96 196 C 96 196, 94 158, 96 132 C 98 110, 110 96, 118 96 C 128 96, 134 108, 134 124 L 134 188 C 134 188, 134 122, 138 96 C 142 72, 154 60, 162 60 C 172 60, 178 72, 178 92 L 178 186 C 178 186, 180 112, 188 90 C 196 70, 210 64, 218 70 C 226 76, 228 92, 224 116 L 220 194 C 220 194, 222 158, 232 142 C 244 124, 256 128, 256 144 C 256 158, 248 184, 244 208 C 240 232, 230 268, 218 290 C 206 314, 188 320, 160 320 C 132 320, 108 318, 88 308 Z"
          />
          {/* heart line */}
          <path data-draw d="M86 230 C 110 222, 144 222, 180 230 C 200 234, 218 240, 232 246" />
          {/* head line */}
          <path data-draw d="M84 256 C 116 250, 168 250, 226 264" />
          {/* life line */}
          <path data-draw d="M122 226 C 116 244, 108 268, 102 296" />
          {/* fate line */}
          <path data-draw d="M156 308 C 158 280, 160 246, 162 214" />
          {/* finger creases */}
          <path data-draw d="M96 196 L 104 198" />
          <path data-draw d="M134 188 L 146 192" />
          <path data-draw d="M178 186 L 188 190" />
          <path data-draw d="M220 194 L 230 198" />
        </g>
      </svg>
      <style jsx>{`
        .tyv-palm {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
        }
        .tyv-palm :global(svg) {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
}
