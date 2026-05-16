"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

type Props = {
  primary: string;
  secondary: string;
  primaryAlt: string;
  secondaryAlt: string;
};

export function PortraitDissolve({ primary, secondary, primaryAlt, secondaryAlt }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setRevealed(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="tyv-portrait" ref={ref}>
      <figure className="tyv-portrait__frame">
        <img className="tyv-portrait__a" src={primary} alt={primaryAlt} loading="lazy" />
        <img
          className={`tyv-portrait__b ${revealed ? "tyv-portrait__b--show" : ""}`}
          src={secondary}
          alt={secondaryAlt}
          loading="lazy"
        />
        <figcaption className="tyv-portrait__caption">
          <span>Charlotte</span>
          <span>·</span>
          <span>Lalitpur</span>
        </figcaption>
      </figure>
      <style jsx>{`
        .tyv-portrait {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
        }
        .tyv-portrait__frame {
          position: relative;
          margin: 0;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--canvas-deep);
        }
        .tyv-portrait__a,
        .tyv-portrait__b {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 1800ms cubic-bezier(0.45, 0, 0.15, 1);
        }
        .tyv-portrait__b {
          opacity: 0;
        }
        .tyv-portrait__b--show {
          opacity: 1;
        }
        .tyv-portrait__caption {
          position: absolute;
          left: 16px;
          bottom: 16px;
          z-index: 2;
          display: flex;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--canvas) 92%, transparent);
          background: color-mix(in oklch, var(--lapis-deep) 55%, transparent);
          padding: 8px 14px;
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
}
