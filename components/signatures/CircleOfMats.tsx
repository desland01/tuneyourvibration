"use client";

import { useReducedMotion } from "@/lib/motion";

const MAT_COUNT = 7;

export function CircleOfMats() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-mats" aria-hidden="true">
      <svg viewBox="0 0 720 360" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="mat-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--ember)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: MAT_COUNT }).map((_, i) => {
          const angle = (-90 + (180 / (MAT_COUNT - 1)) * i) * (Math.PI / 180);
          const cx = 360 + Math.cos(angle) * 260;
          const cy = 340 + Math.sin(angle) * 260;
          const rot = (angle * 180) / Math.PI + 90;
          return (
            <g
              key={i}
              transform={`translate(${cx} ${cy}) rotate(${rot})`}
              className={reduced ? undefined : "tyv-mats__pulse"}
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <circle r="40" fill="url(#mat-glow)" />
              <rect
                x="-18"
                y="-44"
                width="36"
                height="88"
                rx="10"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1.1"
                opacity="0.55"
              />
              <line
                x1="-12"
                y1="-30"
                x2="12"
                y2="-30"
                stroke="var(--ink)"
                strokeWidth="0.8"
                opacity="0.4"
              />
            </g>
          );
        })}
        {/* central bowl */}
        <g transform="translate(360 340)" opacity="0.7">
          <ellipse cx="0" cy="0" rx="36" ry="14" fill="none" stroke="var(--ember-deep)" strokeWidth="1.4" />
          <ellipse cx="0" cy="-6" rx="34" ry="10" fill="none" stroke="var(--ember-deep)" strokeWidth="0.8" />
        </g>
      </svg>
      <style jsx>{`
        .tyv-mats {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          aspect-ratio: 2 / 1;
        }
        .tyv-mats :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }
        .tyv-mats :global(.tyv-mats__pulse) {
          animation: tyv-mat-pulse 6.5s cubic-bezier(0.45, 0, 0.15, 1) infinite;
          transform-origin: center;
        }
        @keyframes tyv-mat-pulse {
          0%, 80%, 100% { opacity: 0.55; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
