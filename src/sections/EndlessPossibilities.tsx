import StoreBadge from "../components/StoreBadge";
import { useParallax } from "../hooks/useParallax";
import { useRevealGroup } from "../hooks/useRevealGroup";

export default function EndlessPossibilities() {
  const bgRef = useParallax<HTMLDivElement>(0.2);
  const groupRef = useRevealGroup<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 md:px-6">
      <div
        ref={groupRef}
        className="border-border-strong bg-bg-elevated shadow-[0_0_100px_-30px_rgba(47,227,127,0.4)] relative mx-auto flex max-w-[1300px] flex-col items-center gap-6 overflow-hidden rounded-2xl border px-6 py-16 text-center sm:px-16"
      >
        <div ref={bgRef} className="bg-ledger-grid pointer-events-none absolute inset-[-20%] opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(47,227,127,0.18),transparent_60%)]" />

        <h2 className="font-display text-text-primary max-w-2xl text-3xl font-medium sm:text-4xl">
          Endless <span className="text-gradient-signal">possibilities</span>
        </h2>
        <p className="text-text-secondary max-w-xl text-lg leading-relaxed">
          Join thousands of businesses already trading smarter with TradelyX —
          source, sell, and ship across borders from one platform.
        </p>
        <div className="flex flex-col items-center gap-3">
          <p className="text-text-dim font-mono text-xs tracking-wide uppercase">Get it on</p>
          <div className="flex gap-4">
            <StoreBadge store="google" />
            <StoreBadge store="apple" />
          </div>
        </div>
      </div>
    </section>
  );
}
