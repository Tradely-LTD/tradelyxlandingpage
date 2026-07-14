import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

export function useCountUp<T extends HTMLElement>(
  target: number,
  { decimals = 0, prefix = "", suffix = "" }: { decimals?: number; prefix?: string; suffix?: string } = {},
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;

      if (reducedMotion) {
        ref.current.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
        return;
      }

      const counter = { val: 0 };
      const tween = gsap.to(counter, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${counter.val.toFixed(decimals)}${suffix}`;
          }
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { dependencies: [reducedMotion, target, decimals, prefix, suffix] },
  );

  return ref;
}
