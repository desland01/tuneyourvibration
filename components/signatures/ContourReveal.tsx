"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

// Hand-traced Himalayan-style ridgeline contours. Three lines at different elevations.
const RIDGES = [
  "M 0 180 C 80 160, 140 110, 220 130 C 300 150, 380 70, 470 90 C 560 110, 640 50, 740 80 C 840 110, 920 60, 1000 100 C 1080 140, 1140 80, 1200 100",
  "M 0 230 C 90 220, 180 180, 260 200 C 340 220, 430 140, 520 170 C 620 200, 720 130, 820 170 C 920 210, 1020 150, 1200 190",
  "M 0 280 C 100 270, 200 250, 320 260 C 440 270, 560 240, 700 260 C 840 280, 980 260, 1200 280",
];

export function ContourReveal() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || reduced) return;

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("[data-ridge]"));

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            paths.forEach((p, i) => {
              const len = p.getTotalLength();
              p.style.strokeDasharray = `${len}`;
              p.style.strokeDashoffset = `${len}`;
              p.style.transition = `stroke-dashoffset 2400ms cubic-bezier(0.2, 0.7, 0.1, 1) ${i * 280}ms, opacity 1200ms ease ${i * 280}ms`;
              p.style.opacity = "0";
              requestAnimationFrame(() => {
                p.style.strokeDashoffset = "0";
                p.style.opacity = String(1 - i * 0.15);
              });
            });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(svg);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="tyv-contour" aria-hidden="true">
      <svg ref={svgRef} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax meet">
        {RIDGES.map((d, i) => (
          <path
            key={i}
            data-ridge
            d={d}
            fill="none"
            stroke="var(--ink)"
            strokeWidth={1.3 - i * 0.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={reduced ? 1 - i * 0.15 : 1}
          />
        ))}
        {/* horizon dashes */}
        <g stroke="var(--ember)" strokeWidth="0.6" opacity="0.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={i} x1={i * 30} y1="310" x2={i * 30 + 16} y2="310" />
          ))}
        </g>
      </svg>
      <style jsx>{`
        .tyv-contour {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          aspect-ratio: 1200 / 320;
        }
        .tyv-contour :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </div>
  );
}
