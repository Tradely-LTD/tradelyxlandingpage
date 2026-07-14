import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useCursorGlow } from "../hooks/useCursorGlow";
import StoreBadge from "../components/StoreBadge";
import { ButtonLink } from "../components/Button";
import heroFanned from "../assets/mockups/hero-fanned.png";
import heroFactory from "../assets/mockups/hero-factory.jpg";

const STATS = [
  { value: 54, label: "Countries reached" },
  { value: 4200, label: "Verified suppliers", suffix: "+" },
  { value: 0, label: "Payment fraud", prefix: "$" },
];

export default function Hero() {
  const wrapRef = useRef<HTMLElement>(null);
  const heroRef = useCursorGlow<HTMLDivElement>();
  const gridRef = useRef<HTMLDivElement>(null);
  const glowARef = useRef<HTMLDivElement>(null);
  const glowBRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tiltWrapRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!wrapRef.current) return;

      const lines = gsap.utils.toArray<HTMLElement>(".hero-line");

      if (reducedMotion) {
        STATS.forEach((s, i) => {
          const el = statRefs.current[i];
          if (el) el.textContent = `${s.prefix ?? ""}${s.value.toLocaleString()}${s.suffix ?? ""}`;
        });
        return;
      }

      // ---- page-load cinematic intro ----
      gsap.set(lines, { yPercent: 110 });
      gsap.set(".hero-fade, .hero-eyebrow", { opacity: 0, y: 20 });
      gsap.set(phoneRef.current, { opacity: 0, scale: 0.86, rotateZ: -2 });
      gsap.set(chipRef.current, { opacity: 0, y: 14, scale: 0.9 });

      const intro = gsap.timeline({ defaults: { ease: EASE.cinematic } });
      intro
        .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
        .to(lines, { yPercent: 0, duration: 1.1, stagger: 0.14 }, 0.15)
        .to(phoneRef.current, { opacity: 1, scale: 1, rotateZ: 0, duration: 1.2, ease: EASE.bounce }, 0.35)
        .to(chipRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: EASE.bounce }, 1.1)
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.75)
        .add(() => {
          STATS.forEach((s, i) => {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: s.value,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                const el = statRefs.current[i];
                if (el) el.textContent = `${s.prefix ?? ""}${Math.round(counter.val).toLocaleString()}${s.suffix ?? ""}`;
              },
            });
          });
        }, 1.0);

      // ---- ambient float on the status chip + glow blobs ----
      const floatChip = gsap.to(chipRef.current, {
        y: "+=10", duration: 3.2, ease: EASE.ambient, yoyo: true, repeat: -1, delay: 1.2,
      });
      const floatA = gsap.to(glowARef.current, {
        y: "+=26", duration: 5.5, ease: EASE.ambient, yoyo: true, repeat: -1,
      });
      const floatB = gsap.to(glowBRef.current, {
        y: "-=30", duration: 6.8, ease: EASE.ambient, yoyo: true, repeat: -1, delay: 0.4,
      });

      // ---- scroll-scrubbed cinematic depth (desktop only) ----
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        tl.to(gridRef.current, { yPercent: 22, ease: EASE.scrub }, 0)
          .to(glowARef.current, { yPercent: -38, xPercent: 14, ease: EASE.scrub }, 0)
          .to(glowBRef.current, { yPercent: 42, xPercent: -16, ease: EASE.scrub }, 0)
          .to(contentRef.current, {
            yPercent: -22,
            opacity: 0.15,
            filter: "blur(6px)",
            ease: EASE.scrub,
          }, 0)
          .to(phoneRef.current, { yPercent: -48, scale: 1.18, ease: EASE.scrub }, 0);

        return () => tl.scrollTrigger?.kill();
      });

      return () => {
        floatChip.kill();
        floatA.kill();
        floatB.kill();
        mm.revert();
      };
    },
    { scope: wrapRef, dependencies: [reducedMotion] },
  );

  return (
    <section id="home" ref={wrapRef} className="relative md:h-[220vh]">
      <div
        ref={heroRef}
        className="relative isolate overflow-hidden px-4 pt-10 pb-10 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:px-6 md:pt-28 md:pb-12"
      >
        <div
          ref={gridRef}
          className="pointer-events-none absolute inset-x-0 top-0 -z-30 h-[560px] overflow-hidden md:inset-[-15%] md:h-auto"
        >
          <img
            src={heroFactory}
            alt="Fresh produce sorted and crated at a food processing facility, ready for export"
            className="size-full object-cover"
          />
          <div className="bg-bg-page/60 pointer-events-none absolute inset-0" />
          <div className="from-bg-page/75 pointer-events-none absolute inset-0 hidden bg-gradient-to-r via-transparent to-transparent md:block" />
          <div className="from-bg-page via-bg-page/30 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>
        <div className="cursor-glow pointer-events-none absolute inset-0 -z-10" />
        <div className="scanline -z-10" />
        <div
          ref={glowARef}
          className="pointer-events-none absolute -top-48 -left-48 -z-10 size-[480px] rounded-full bg-signal/25 blur-[120px]"
        />
        <div
          ref={glowBRef}
          className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-[420px] rounded-full bg-orange/15 blur-[130px]"
        />

        <div
          ref={contentRef}
          className="mx-auto grid w-full max-w-[1300px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <span className="hero-eyebrow border-border-strong text-lime mb-7 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.14em] uppercase">
              <span className="pulse-dot size-1.5 shrink-0 rounded-full bg-lime" />
              Africa → Global · Escrow Secured
            </span>

            <h1 className="text-4xl leading-[0.98] font-medium text-text-primary sm:text-6xl lg:text-[80px]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-line block">Your product deserves</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-line text-gradient-signal block font-semibold">a global stage.</span>
              </span>
            </h1>

            <p className="hero-fade text-text-secondary mt-6 max-w-lg text-lg leading-relaxed sm:text-xl">
              From farm, factory, or kitchen — TradelyX connects African
              exporters and processors with verified global buyers, directly,
              with zero payment risk secured by escrow.
            </p>

            <div className="hero-fade mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="#signup">Post your first RFQ →</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                See how it works
              </ButtonLink>
            </div>

            <div className="hero-fade mt-8 flex flex-col gap-2">
              <p className="text-text-dim font-mono text-xs tracking-wide uppercase">Get it on</p>
              <div className="flex gap-3">
                <StoreBadge store="google" />
                <StoreBadge store="apple" />
              </div>
            </div>

            <div className="hero-fade border-border mt-10 grid grid-cols-3 divide-x divide-border border-t pt-6 font-mono">
              {STATS.map((s, i) => (
                <div key={s.label} className={i === 0 ? "pr-4" : "px-4"}>
                  <span
                    ref={(el) => {
                      statRefs.current[i] = el;
                    }}
                    className="hero-stat block font-display text-2xl font-medium text-text-primary sm:text-3xl"
                  >
                    0
                  </span>
                  <span className="text-text-dim mt-1 block text-[11px] tracking-wide uppercase">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div ref={tiltWrapRef} className="cursor-tilt relative mx-auto w-[280px] sm:w-[340px] md:w-[420px]">
            <img
              ref={phoneRef}
              src={heroFanned}
              alt="TradelyX app — home feed and RFQ replies"
              className="w-full will-change-transform"
              style={{ filter: "drop-shadow(0 40px 90px rgba(47,227,127,0.4))" }}
            />
            <div
              ref={chipRef}
              className="border-border-strong bg-bg-elevated/90 absolute bottom-10 -left-6 flex items-center gap-2 rounded-xl border px-4 py-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            >
              <span className="pulse-dot bg-lime size-1.5 shrink-0 rounded-full" />
              <span className="text-text-primary font-mono text-xs font-semibold whitespace-nowrap">
                Payment secured by escrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
