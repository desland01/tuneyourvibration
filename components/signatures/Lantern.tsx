"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/motion";

type Props = { children: ReactNode };

export function Lantern({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const onFocusIn = () => setActive(true);
    const onFocusOut = (e: FocusEvent) => {
      if (!node.contains(e.relatedTarget as Node)) setActive(false);
    };
    node.addEventListener("focusin", onFocusIn);
    node.addEventListener("focusout", onFocusOut);
    return () => {
      node.removeEventListener("focusin", onFocusIn);
      node.removeEventListener("focusout", onFocusOut);
    };
  }, [reduced]);

  return (
    <div className="tyv-lantern" ref={ref}>
      <svg
        className="tyv-lantern__frame"
        viewBox="0 0 600 760"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Top cap */}
        <g fill="none" stroke="var(--ember-deep)" strokeWidth="1.4" strokeLinecap="round">
          <path d="M 240 40 L 360 40" />
          <path d="M 230 60 L 370 60" />
          <path d="M 220 80 L 380 80 L 380 720 L 220 720 Z" />
          {/* hanging hook */}
          <path d="M 300 12 C 290 22, 290 32, 300 40" />
          {/* base */}
          <path d="M 200 720 L 400 720 L 380 748 L 220 748 Z" />
          {/* corner ribbons */}
          <path d="M 220 80 L 220 720" />
          <path d="M 380 80 L 380 720" />
          {/* horizontal supports */}
          <path d="M 220 180 L 380 180" opacity="0.5" />
          <path d="M 220 560 L 380 560" opacity="0.5" />
        </g>
        {/* flame */}
        <g transform="translate(300 240)" className={active ? "tyv-lantern__flame tyv-lantern__flame--steady" : "tyv-lantern__flame"}>
          <ellipse cx="0" cy="0" rx="50" ry="80" fill="var(--ember)" opacity="0.18" />
          <ellipse cx="0" cy="6" rx="32" ry="54" fill="var(--ember)" opacity="0.4" />
          <ellipse cx="0" cy="12" rx="18" ry="32" fill="var(--vermilion)" opacity="0.7" />
        </g>
      </svg>
      <div className="tyv-lantern__inner">{children}</div>
      <style jsx>{`
        .tyv-lantern {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
        .tyv-lantern__frame {
          width: 100%;
          height: auto;
          display: block;
        }
        .tyv-lantern__inner {
          position: absolute;
          inset: 12% 16% 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        .tyv-lantern__flame {
          transform-origin: center;
          animation: tyv-lantern-breath 5.5s cubic-bezier(0.45, 0, 0.15, 1) infinite;
        }
        .tyv-lantern__flame--steady {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .tyv-lantern__flame {
            animation: none;
          }
        }
        @keyframes tyv-lantern-breath {
          0%, 100% { transform: scale(0.92) translateY(0); }
          50% { transform: scale(1.06) translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
