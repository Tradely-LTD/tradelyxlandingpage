import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "../lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Batches a scroll-triggered rise-and-scale reveal across a group of
 * sibling elements (cards, rows, list items) for a punchier, more
 * "engineered" entrance than a plain per-item fade.
 */
export function useRevealGroup<T extends HTMLElement>(
  selector = ":scope > *",
): RefObject<T | null> {
  const containerRef = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current) return;

      const items = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(selector),
      );
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: 56, scale: 0.94 });

      const st = ScrollTrigger.batch(items, {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: EASE.cinematic,
            stagger: 0.1,
            overwrite: true,
          }),
      });

      return () => st.forEach((t) => t.kill());
    },
    { scope: containerRef, dependencies: [reducedMotion] },
  );

  return containerRef;
}
