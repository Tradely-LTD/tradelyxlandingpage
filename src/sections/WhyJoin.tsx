import { useRef } from "react";
import { BadgeCheck, Lock, Plane, TrendingUp, Handshake, Globe2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useRevealGroup } from "../hooks/useRevealGroup";
import { useParallax } from "../hooks/useParallax";

const TONES = [
  { text: "text-signal", bg: "bg-signal/15", ring: "border-signal", glow: "rgba(47,227,127,0.65)" },
  { text: "text-lime", bg: "bg-lime/15", ring: "border-lime", glow: "rgba(168,207,69,0.65)" },
  { text: "text-orange", bg: "bg-orange/15", ring: "border-orange", glow: "rgba(255,102,0,0.6)" },
];

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Trade with Verified Businesses",
    points: [
      "Connect with trusted buyers and suppliers across Africa and globally.",
      "All partners are verified with business registration and KYC checks.",
      "Expand your reach and tap into new markets securely.",
    ],
  },
  {
    icon: Lock,
    title: "Secure Payments with Smart Contract Escrow",
    points: [
      "Trade with zero payment risk — funds are held in a secure smart contract until you confirm delivery.",
      "Avoid fraud and defaults — our technology guarantees safety for both buyers and sellers.",
      "Supports stablecoins (USDT/USDC) and integration with local payment rails.",
    ],
  },
  {
    icon: Plane,
    title: "Streamlined Logistics & Documentation",
    points: [
      "Access our network of vetted logistics partners for competitive shipping rates.",
      "Generate and manage essential trade documents (e.g. eWaybills, invoices) directly on the platform.",
      "Simplify customs clearance with digital documentation.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Unlock Growth with Trade Finance",
    points: [
      "Get introduced to financing partners through Tradely Capital.",
      "Access invoice financing and loans based on your transaction history on our platform.",
      "Solve cash flow challenges and fulfil larger orders.",
    ],
  },
  {
    icon: Handshake,
    title: "Fair & Fast Dispute Resolution",
    points: [
      "Protected from day one — if issues arise, our structured resolution process ensures a fair outcome.",
      "Access mediation and, if needed, arbitration from certified trade experts.",
      "Resolve conflicts quickly without costly legal fees or damaged relationships.",
    ],
  },
  {
    icon: Globe2,
    title: "Designed for African Trade",
    points: [
      "Navigate cross-border trade with tools designed for the AfCFTA era.",
      "Get support tailored to the realities of intra-African and global export from Africa.",
    ],
  },
];

export default function WhyJoin() {
  const wrapRef = useRef<HTMLElement>(null);
  const spineFillRef = useRef<HTMLDivElement>(null);
  const listRef = useRevealGroup<HTMLDivElement>(":scope > .wj-row");
  const glowARef = useParallax<HTMLDivElement>(0.28);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !spineFillRef.current) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.set(spineFillRef.current, { scaleY: 0 });
        const tween = gsap.to(spineFillRef.current, {
          scaleY: 1,
          ease: EASE.scrub,
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { dependencies: [reducedMotion] },
  );

  return (
    <section id="why-join" ref={wrapRef} className="relative mx-auto max-w-[1440px] overflow-hidden px-4 py-20 md:px-6">
      <div
        ref={glowARef}
        className="bg-signal/15 pointer-events-none absolute -top-32 left-1/4 -z-10 size-[420px] rounded-full blur-[120px] will-change-transform"
      />

      <div className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-[300px_1fr] md:gap-16">
        <div className="flex justify-center md:sticky md:top-32 md:block md:self-start">
          <div className="relative flex size-[220px] items-center justify-center">
            <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 size-full opacity-90">
              <circle
                cx="100" cy="100" r="86" fill="none" stroke="var(--color-signal)" strokeOpacity="0.55"
                strokeWidth="6" strokeLinecap="round" strokeDasharray="140 400"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100" cy="100" r="86" fill="none" stroke="var(--color-lime)" strokeOpacity="0.55"
                strokeWidth="6" strokeLinecap="round" strokeDasharray="110 430" strokeDashoffset="-160"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100" cy="100" r="86" fill="none" stroke="var(--color-orange)" strokeOpacity="0.5"
                strokeWidth="6" strokeLinecap="round" strokeDasharray="90 450" strokeDashoffset="-290"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="text-center">
              <span className="text-text-dim mb-2 flex items-center justify-center gap-2 font-mono text-xs tracking-[0.14em] uppercase">
                <span className="pulse-dot bg-lime size-1.5 rounded-full" /> The advantage
              </span>
              <h2 className="font-display text-text-primary text-3xl leading-tight font-medium">
                Why join <span className="text-gradient-signal">TradelyX</span>
              </h2>
            </div>
          </div>
        </div>

        <div ref={listRef} className="relative flex flex-col gap-10">
          <div className="border-border absolute top-2 bottom-2 left-6 hidden w-px border-l border-dashed md:block" />
          <div
            ref={spineFillRef}
            className="bg-signal absolute top-2 bottom-2 left-6 hidden w-px origin-top shadow-[0_0_12px_2px_rgba(47,227,127,0.6)] md:block"
          />

          {PILLARS.map((pillar, i) => {
            const tone = TONES[i % TONES.length];
            return (
              <div key={pillar.title} className="wj-row relative flex flex-col gap-4 md:flex-row md:pl-20">
                <div
                  className={`bg-bg-card absolute top-0 left-0 z-10 hidden size-12 shrink-0 items-center justify-center rounded-full border md:flex ${tone.ring}`}
                  style={{ boxShadow: `0 0 22px -4px ${tone.glow}` }}
                >
                  <pillar.icon className={`size-5 ${tone.text}`} strokeWidth={1.75} />
                </div>

                <div className="bg-bg-card border-border hover:border-border-strong flex flex-1 flex-col gap-3 rounded-2xl border p-6 transition-colors">
                  <div className={`flex size-12 items-center justify-center rounded-xl md:hidden ${tone.bg}`}>
                    <pillar.icon className={`size-5 ${tone.text}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-text-primary text-lg font-bold">{pillar.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="text-text-secondary flex gap-2 text-sm leading-relaxed">
                        <span className={`mt-2 size-1 shrink-0 rounded-full ${tone.text.replace("text-", "bg-")}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
