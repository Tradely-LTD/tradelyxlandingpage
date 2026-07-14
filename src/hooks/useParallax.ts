import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE } from "../lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Ties an element's vertical position to scroll progress through its own
 * viewport pass, creating a depth layer. `speed` > 0 lags behind the
 * scroll (background/distant), `speed` < 0 leads ahead (foreground).
 * Disabled below the `md` breakpoint and under reduced-motion.
 */
export function useParallax<T extends HTMLElement>(
  speed = 0.25,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tween = gsap.fromTo(
          ref.current,
          { yPercent: -speed * 100 },
          {
            yPercent: speed * 100,
            ease: EASE.scrub,
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { dependencies: [reducedMotion, speed] },
  );

  return ref;
}
