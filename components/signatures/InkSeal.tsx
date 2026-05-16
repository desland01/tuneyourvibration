"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

type Props = { initials?: string };

export function InkSeal({ initials = "TV" }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const svg = ref.current;
    if (!svg) return;
    const path = svg.querySelector<SVGPathElement>("[data-draw]");
    if (!path) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const len = path.getTotalLength();
            path.style.strokeDasharray = `${len}`;
            path.style.strokeDashoffset = `${len}`;
            path.style.transition = `stroke-dashoffset 1800ms cubic-bezier(0.2, 0.7, 0.1, 1)`;
            requestAnimationFrame(() => {
              path.style.strokeDashoffset = "0";
            });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(svg);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <span className="tyv-seal" aria-hidden="true">
      <svg ref={ref} viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="seal-noise">
            <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="2" seed="11" />
            <feDisplacementMap in="SourceGraphic" scale="1.2" />
          </filter>
        </defs>
        <g filter="url(#seal-noise)">
          <path
            data-draw
            d="M 40 6 a 34 34 0 1 1 -0.1 0 Z M 40 16 a 24 24 0 1 1 -0.1 0 Z"
            fill="none"
            stroke="var(--vermilion)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </g>
        <text
          x="40"
          y="46"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="18"
          fontStyle="italic"
          fill="var(--vermilion)"
        >
          {initials}
        </text>
      </svg>
      <style jsx>{`
        .tyv-seal {
          display: inline-block;
          width: 56px;
          height: 56px;
        }
        .tyv-seal :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>
    </span>
  );
}
