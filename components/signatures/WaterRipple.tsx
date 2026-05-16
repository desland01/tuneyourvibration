"use client";

import { useReducedMotion } from "@/lib/motion";

export function WaterRipple() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-water" aria-hidden="true">
      <svg viewBox="0 0 240 320" preserveAspectRatio="xMidYMid meet">
        {/* glass */}
        <g fill="none" stroke="var(--ink)" strokeWidth="1.1" strokeLinecap="round">
          <path d="M 60 60 L 70 300 L 170 300 L 180 60" />
          <ellipse cx="120" cy="60" rx="60" ry="10" />
        </g>
        {/* water surface */}
        <ellipse
          cx="120"
          cy="120"
          rx="54"
          ry="9"
          fill="var(--mist)"
          opacity="0.85"
        />
        {/* water body */}
        <path
          d="M 76 120 L 84 290 L 156 290 L 164 120 A 54 9 0 0 1 76 120"
          fill="color-mix(in oklch, var(--mist) 60%, transparent)"
        />
        {/* ripple ring */}
        <ellipse
          cx="120"
          cy="120"
          rx="20"
          ry="3.5"
          fill="none"
          stroke="var(--lapis)"
          strokeWidth="0.9"
          className={reduced ? undefined : "tyv-water__ripple"}
        />
      </svg>
      <style jsx>{`
        .tyv-water {
          width: 100%;
          max-width: 240px;
          margin: 0 auto;
        }
        .tyv-water :global(svg) {
          width: 100%;
          height: auto;
          display: block;
        }
        .tyv-water :global(.tyv-water__ripple) {
          transform-origin: 120px 120px;
          transform-box: view-box;
          animation: tyv-water-ripple 9s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        @keyframes tyv-water-ripple {
          0%, 90%, 100% { transform: scale(0.92); opacity: 0; }
          5% { transform: scale(0.92); opacity: 0.8; }
          40% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
