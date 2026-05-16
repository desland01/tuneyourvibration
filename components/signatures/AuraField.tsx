"use client";

import { useReducedMotion } from "@/lib/motion";

export function AuraField() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-aura" aria-hidden="true">
      <svg viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="aura-1" cx="0" cy="0" r="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--ember)" stopOpacity="0.32" />
            <stop offset="48%" stopColor="var(--ember)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aura-2" cx="0" cy="0" r="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--rhododendron)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--rhododendron)" stopOpacity="0" />
          </radialGradient>
          <filter id="aura-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 0.9  0 0 0 0 0.8  0 0 0 0 0.5  0 0 0 0.05 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
        <circle
          cx="0"
          cy="0"
          r="190"
          fill="url(#aura-1)"
          className={reduced ? undefined : "tyv-aura__breath"}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        />
        <circle cx="0" cy="0" r="150" fill="url(#aura-2)" />
        <circle cx="0" cy="0" r="190" fill="white" filter="url(#aura-noise)" opacity="0.4" />
      </svg>
      <style jsx>{`
        .tyv-aura {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          aspect-ratio: 1;
        }
        .tyv-aura :global(svg) {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .tyv-aura :global(.tyv-aura__breath) {
          animation: tyv-aura-breath 10s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        @keyframes tyv-aura-breath {
          0%, 100% { transform: scale(0.96); opacity: 0.85; }
          50% { transform: scale(1.06); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
