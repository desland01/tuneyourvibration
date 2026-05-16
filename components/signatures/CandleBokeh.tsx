"use client";

import { useReducedMotion } from "@/lib/motion";

const ORBS = [
  { left: 6, top: 14, size: 220, delay: 0, color: "var(--ember)" },
  { left: 72, top: 22, size: 160, delay: 1.4, color: "var(--vermilion)" },
  { left: 38, top: 60, size: 200, delay: 3.0, color: "var(--ember)" },
  { left: 84, top: 70, size: 140, delay: 4.6, color: "var(--rhododendron)" },
];

export function CandleBokeh() {
  const reduced = useReducedMotion();

  return (
    <div className="tyv-bokeh" aria-hidden="true">
      {ORBS.map((o, i) => (
        <span
          key={i}
          className={reduced ? "tyv-bokeh__orb tyv-bokeh__orb--still" : "tyv-bokeh__orb"}
          style={
            {
              left: `${o.left}%`,
              top: `${o.top}%`,
              width: `${o.size}px`,
              height: `${o.size}px`,
              background: `radial-gradient(circle, ${o.color} 0%, transparent 65%)`,
              animationDelay: `${o.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        .tyv-bokeh {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          mix-blend-mode: screen;
          z-index: 0;
        }
        .tyv-bokeh__orb {
          position: absolute;
          transform: translate(-50%, -50%);
          opacity: 0.32;
          filter: blur(28px);
          animation: tyv-bokeh-drift 14s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        .tyv-bokeh__orb--still {
          animation: none;
        }
        @keyframes tyv-bokeh-drift {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          25% { transform: translate(-50%, -50%) translate(12px, -10px); }
          50% { transform: translate(-50%, -50%) translate(-8px, 14px); }
          75% { transform: translate(-50%, -50%) translate(14px, 6px); }
        }
      `}</style>
    </div>
  );
}
