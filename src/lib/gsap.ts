import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Shared easing tokens so every scroll-driven section moves with the same feel.
export const EASE = {
  cinematic: "power4.out",
  scrub: "none",
  soft: "power2.out",
  snap: "power4.inOut",
  bounce: "back.out(1.7)",
  ambient: "sine.inOut",
} as const;

export { gsap, ScrollTrigger };
