"use client";

import { useReducedMotion } from "@/lib/motion";

const LANDMARKS = [
  { cx: 180, cy: 150, label: "Pashupatinath" },
  { cx: 380, cy: 110, label: "Boudhanath" },
  { cx: 540, cy: 170, label: "Swayambhunath" },
  { cx: 420, cy: 280, label: "Patan Durbar" },
];

export function CourtyardPlan() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-courtyard" aria-hidden="true">
      <svg viewBox="0 0 720 420" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="var(--ink)" strokeWidth="0.4" opacity="0.18" />
          </pattern>
          <radialGradient id="landmark-glow">
            <stop offset="0%" stopColor="var(--ember)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="720" height="420" fill="url(#grid)" />
        {/* Newari courtyard structure */}
        <g
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.75"
        >
          <rect x="240" y="180" width="240" height="120" />
          <rect x="270" y="210" width="180" height="60" />
          <line x1="240" y1="180" x2="270" y2="210" />
          <line x1="480" y1="180" x2="450" y2="210" />
          <line x1="240" y1="300" x2="270" y2="270" />
          <line x1="480" y1="300" x2="450" y2="270" />
          {/* surrounding paths */}
          <path d="M 60 80 C 150 100, 300 120, 360 210" strokeDasharray="4 6" />
          <path d="M 660 100 C 580 130, 480 150, 420 220" strokeDasharray="4 6" />
          <path d="M 360 360 C 280 380, 200 360, 120 320" strokeDasharray="4 6" />
        </g>
        {LANDMARKS.map((l, i) => (
          <g
            key={l.label}
            className={reduced ? undefined : "tyv-court__pulse"}
            style={{ animationDelay: `${i * 1.4}s`, transformOrigin: `${l.cx}px ${l.cy}px` }}
          >
            <circle cx={l.cx} cy={l.cy} r="32" fill="url(#landmark-glow)" />
            <circle cx={l.cx} cy={l.cy} r="4" fill="var(--ember-deep)" />
            <text
              x={l.cx}
              y={l.cy - 14}
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-body)"
              fill="var(--ink)"
              letterSpacing="0.16em"
              style={{ textTransform: "uppercase" }}
            >
              {l.label}
            </text>
          </g>
        ))}
      </svg>
      <style jsx>{`
        .tyv-courtyard {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          aspect-ratio: 720 / 420;
        }
        .tyv-courtyard :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
        }
        .tyv-courtyard :global(.tyv-court__pulse) {
          animation: tyv-court-pulse 5.6s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        @keyframes tyv-court-pulse {
          0%, 70%, 100% { opacity: 0.55; }
          35% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
