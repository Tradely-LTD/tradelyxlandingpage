import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Users, MessageSquare, CheckCircle2, Ship, Play } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE } from "../lib/gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ButtonLink } from "../components/Button";

const RFQ_VIDEO_ID = "3HjSYKSt-Go";
const RFQ_VIDEO_TITLE = "TradelyX RFQ: Simplifying the Way You Source African Commodities!";

const TABS = [
  {
    key: "rfq",
    label: "Request For Quotations (RFQ)",
    roles: ["For Buyers", "For Sellers"],
    cta: "Post an RFQ →",
    steps: [
      { icon: FileText, text: "Post your product requirements — quantity, quality, and delivery terms." },
      { icon: Users, text: "Verified suppliers across Africa respond with tailored quotations." },
      { icon: MessageSquare, text: "Compare offers and negotiate directly in real-time chat." },
      { icon: CheckCircle2, text: "Accept a quote and pay securely into escrow." },
    ],
  },
  {
    key: "rff",
    label: "Request For Freight (RFF)",
    roles: ["For Buyers", "For Freight Forwarders"],
    cta: "Post an RFF →",
    steps: [
      { icon: Ship, text: "Post your shipment details — cargo, route, and preferred freight type." },
      { icon: Users, text: "Verified freight forwarders respond with rates and transit times." },
      { icon: MessageSquare, text: "Compare quotes and confirm booking details in real-time chat." },
      { icon: CheckCircle2, text: "Confirm your booking and track the shipment door-to-door." },
    ],
    summary: {
      title: "RFF Summary",
      badge: "In Progress",
      rows: [
        ["Cargo", "5 Tonnes Ginger Roots"],
        ["Route", "Abuja → Rotterdam"],
        ["Freight Type", "Ocean Freight"],
        ["Replies", "8 forwarder quotes"],
      ] as const,
    },
  },
] as const;

export default function HowItWorks() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("rfq");
  const activeTab = TABS.find((t) => t.key === active)!;

  const wrapRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const panelRef = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.set(stepRefs.current, { opacity: 0.3, scale: 0.86 });
        gsap.set(panelRef.current, { opacity: 0.2, y: 24 });
        gsap.set(lineFillRef.current, { scaleY: 0 });
        gsap.set(cometRef.current, { y: 0, opacity: 0 });

        const trackHeight = lineTrackRef.current?.offsetHeight ?? 0;
        const progress = { val: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        tl.to(
          progress,
          {
            val: 1,
            ease: EASE.scrub,
            onUpdate: () => {
              gsap.set(lineFillRef.current, { scaleY: progress.val });
              gsap.set(cometRef.current, {
                y: progress.val * trackHeight,
                opacity: progress.val > 0.02 && progress.val < 0.985 ? 1 : 0,
              });
            },
          },
          0,
        );

        tl.to(panelRef.current, { opacity: 1, y: 0, ease: EASE.scrub, duration: 0.6 }, 0.08);

        activeTab.steps.forEach((_, i) => {
          const start = i / activeTab.steps.length;
          tl.to(stepRefs.current[i], { opacity: 1, scale: 1, ease: EASE.bounce, duration: 0.5 }, start);
        });

        return () => tl.scrollTrigger?.kill();
      });

      return () => mm.revert();
    },
    { dependencies: [reducedMotion, active] },
  );

  return (
    <section id="how-it-works" ref={wrapRef} className="bg-bg-elevated relative md:h-[340vh]">
      <div className="bg-ledger-grid absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-[1440px] px-4 py-20 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:px-6 md:py-0">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="mb-3 flex items-center justify-center gap-2 font-mono text-xs tracking-[0.14em] text-text-dim uppercase">
            <span className="pulse-dot size-1.5 rounded-full bg-lime" /> Step-by-step
          </div>
          <h2 className="font-display text-center text-3xl font-medium text-text-primary sm:text-5xl">
            How it <span className="text-gradient-signal">works</span>
          </h2>

          <div className="mt-8 flex justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-lg px-6 py-3 text-sm font-bold transition-colors sm:text-base ${
                  active === tab.key
                    ? "bg-lime text-[#07240f]"
                    : "border border-border bg-transparent text-text-secondary hover:bg-white/6"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-10 grid gap-10 md:grid-cols-2 md:items-center"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-2">
                  {activeTab.roles.map((role) => (
                    <span
                      key={role}
                      className="border-border-strong text-lime rounded-full border px-4 py-1 font-mono text-xs font-bold"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <ol className="relative flex flex-col gap-6">
                  <div
                    ref={lineTrackRef}
                    className="bg-border absolute top-6 left-6 -z-10 h-[calc(100%-48px)] w-0.5 -translate-x-1/2"
                  />
                  <div
                    ref={lineFillRef}
                    className="bg-signal shadow-[0_0_12px_2px_rgba(47,227,127,0.6)] absolute top-6 left-6 -z-10 h-[calc(100%-48px)] w-0.5 origin-top -translate-x-1/2"
                  />
                  <div
                    ref={cometRef}
                    className="bg-lime absolute top-6 left-6 -z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 shadow-[0_0_16px_5px_rgba(168,207,69,0.8)]"
                  />
                  {activeTab.steps.map((step, i) => (
                    <li
                      key={step.text}
                      ref={(el) => {
                        stepRefs.current[i] = el;
                      }}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-signal-dim/40 border-border-strong flex size-12 shrink-0 items-center justify-center rounded-full border text-lime">
                        <step.icon className="size-5" strokeWidth={2} />
                      </div>
                      <p className="text-text-secondary pt-3 leading-relaxed">{step.text}</p>
                    </li>
                  ))}
                </ol>

                <ButtonLink href="#signup" className="w-fit">
                  {activeTab.cta}
                </ButtonLink>
              </div>

              <div ref={panelRef}>
                {activeTab.key === "rfq" ? (
                  <div className="bg-bg-card border-border shadow-[0_0_60px_-20px_rgba(47,227,127,0.25)] overflow-hidden rounded-2xl border">
                    <div className="aspect-video w-full">
                      <iframe
                        className="size-full"
                        src={`https://www.youtube-nocookie.com/embed/${RFQ_VIDEO_ID}`}
                        title={RFQ_VIDEO_TITLE}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${RFQ_VIDEO_ID}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border hover:bg-white/4 flex items-center gap-3 border-t p-5 transition-colors"
                    >
                      <span className="bg-signal-dim/40 border-border-strong text-lime flex size-9 shrink-0 items-center justify-center rounded-full border">
                        <Play className="size-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0">
                        <span className="text-text-primary block truncate text-sm font-bold">{RFQ_VIDEO_TITLE}</span>
                        <span className="text-text-dim font-mono text-xs uppercase tracking-wide">Watch on YouTube</span>
                      </span>
                    </a>
                  </div>
                ) : (
                  <div className="bg-bg-card border-border shadow-[0_0_60px_-20px_rgba(47,227,127,0.25)] rounded-2xl border p-6">
                    <div className="border-border flex items-center justify-between border-b pb-4">
                      <h3 className="text-text-primary text-lg font-bold">{activeTab.summary.title}</h3>
                      <span className="border-border-strong text-lime rounded-full border px-3 py-1 font-mono text-xs font-bold">
                        {activeTab.summary.badge}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 pt-4 font-mono">
                      {activeTab.summary.rows.map(([label, value]) => (
                        <div key={label} className="flex justify-between text-sm">
                          <span className="text-text-dim">{label}</span>
                          <span className="text-text-primary font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
