import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "../lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Smoothly tracks the pointer within an element and exposes the position
 * as `--mx` / `--my` CSS custom properties (percentages) for a
 * cursor-reactive glow. Skipped on touch devices and reduced-motion.
 */
export function useCursorGlow<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 50, y: 30 };
    const apply = () => {
      el.style.setProperty("--mx", `${pos.x}`);
      el.style.setProperty("--my", `${pos.y}`);
    };
    const xTo = gsap.quickTo(pos, "x", { duration: 0.7, ease: "power3.out", onUpdate: apply });
    const yTo = gsap.quickTo(pos, "y", { duration: 0.7, ease: "power3.out", onUpdate: apply });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      xTo(((e.clientX - rect.left) / rect.width) * 100);
      yTo(((e.clientY - rect.top) / rect.height) * 100);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return ref;
}
