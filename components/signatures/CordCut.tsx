"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

export function CordCut() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [cut, setCut] = useState(false);

  useEffect(() => {
    if (reduced) {
      setCut(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setCut(true), 600);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="tyv-cord" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 80 480" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="cord-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ink)" stopOpacity="0.85" />
            <stop offset="48%" stopColor="var(--ember-deep)" stopOpacity="0.9" />
            <stop offset="52%" stopColor="var(--ember-deep)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--ink)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#cord-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          {/* Top section */}
          <path
            d="M40 8 C 28 60, 52 110, 36 160 C 28 184, 50 196, 40 220"
            className={`tyv-cord__top ${cut ? "tyv-cord--cut" : ""}`}
          />
          {/* Bottom section */}
          <path
            d="M40 260 C 50 286, 30 320, 44 358 C 52 384, 28 422, 40 472"
            className={`tyv-cord__bot ${cut ? "tyv-cord--cut" : ""}`}
          />
          {/* Frayed tip (top) */}
          <g
            className={`tyv-cord__fray ${cut ? "tyv-cord--show" : ""}`}
            stroke="var(--ember-deep)"
            strokeWidth="1.2"
          >
            <path d="M40 220 L 36 232" />
            <path d="M40 220 L 44 234" />
            <path d="M40 220 L 39 236" />
          </g>
          {/* Frayed tip (bottom) */}
          <g
            className={`tyv-cord__fray ${cut ? "tyv-cord--show" : ""}`}
            stroke="var(--ember-deep)"
            strokeWidth="1.2"
          >
            <path d="M40 260 L 36 248" />
            <path d="M40 260 L 44 246" />
            <path d="M40 260 L 41 244" />
          </g>
        </g>
      </svg>
      <style jsx>{`
        .tyv-cord {
          width: 100%;
          max-width: 80px;
          margin: 0 auto;
          aspect-ratio: 80 / 480;
        }
        .tyv-cord :global(svg) {
          width: 100%;
          height: 100%;
          display: block;
        }
        .tyv-cord :global(.tyv-cord__top),
        .tyv-cord :global(.tyv-cord__bot) {
          transition: transform 800ms cubic-bezier(0.2, 0.7, 0.1, 1);
        }
        .tyv-cord :global(.tyv-cord__top.tyv-cord--cut) {
          transform: translateY(-6px);
        }
        .tyv-cord :global(.tyv-cord__bot.tyv-cord--cut) {
          transform: translateY(6px);
        }
        .tyv-cord :global(.tyv-cord__fray) {
          opacity: 0;
          transition: opacity 400ms cubic-bezier(0.2, 0.7, 0.1, 1) 200ms;
        }
        .tyv-cord :global(.tyv-cord__fray.tyv-cord--show) {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
