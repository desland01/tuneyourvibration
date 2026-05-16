"use client";

import { useReducedMotion } from "@/lib/motion";

const FLAGS = [
  { color: "var(--lapis)", label: "sky" },
  { color: "#E8E3D6", label: "wind" },
  { color: "var(--vermilion)", label: "fire" },
  { color: "var(--jade)", label: "water" },
  { color: "var(--ember)", label: "earth" },
  { color: "var(--lapis)", label: "sky" },
  { color: "#E8E3D6", label: "wind" },
  { color: "var(--vermilion)", label: "fire" },
  { color: "var(--jade)", label: "water" },
  { color: "var(--ember)", label: "earth" },
];

export function PrayerFlags() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-flags" aria-hidden="true">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path
          d="M -40 60 C 200 90, 400 110, 600 100 C 800 90, 1000 80, 1240 60"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1"
          opacity="0.4"
        />
        {FLAGS.map((f, i) => {
          const t = i / (FLAGS.length - 1);
          // approximate point along the cord curve
          const x = -40 + t * 1280;
          const y = 60 + Math.sin(t * Math.PI) * 50 + (1 - Math.abs(0.5 - t) * 2) * 18;
          return (
            <g
              key={i}
              transform={`translate(${x} ${y})`}
              className={reduced ? undefined : "tyv-flags__sway"}
              style={{ animationDelay: `${(i % 3) * 0.7}s` }}
            >
              <rect x="-30" y="0" width="60" height="84" fill={f.color} opacity="0.86" />
              <line x1="-30" y1="0" x2="-30" y2="-16" stroke="var(--ink)" strokeWidth="0.6" opacity="0.5" />
              <line x1="30" y1="0" x2="30" y2="-16" stroke="var(--ink)" strokeWidth="0.6" opacity="0.5" />
              <text
                x="0"
                y="50"
                textAnchor="middle"
                fontSize="11"
                fontFamily="serif"
                fill="rgba(0,0,0,0.35)"
                fontStyle="italic"
              >
                ॐ
              </text>
            </g>
          );
        })}
      </svg>
      <style jsx>{`
        .tyv-flags {
          width: 100%;
          aspect-ratio: 6 / 1;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tyv-flags :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }
        .tyv-flags :global(.tyv-flags__sway) {
          transform-origin: center top;
          animation: tyv-flags-sway 8s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        @keyframes tyv-flags-sway {
          0%, 100% { transform: translate(var(--tx, 0), var(--ty, 0)) rotate(-2deg); }
          50% { transform: translate(var(--tx, 0), var(--ty, 0)) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}
