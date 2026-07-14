import { Bell, Timer, TrendingUp, SlidersHorizontal, Sprout, Ship } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const FEATURES = [
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Receive alerts the moment buyers post RFQs matching your products.",
  },
  {
    icon: Timer,
    title: "Limited-Time Offers",
    description: "Get notified about discounted deals before they expire.",
  },
  {
    icon: TrendingUp,
    title: "Market Updates",
    description: "Stay informed about price trends and demand shifts.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Alert Settings",
    description: "Tailor notifications to your specific business interests.",
  },
];

const TOASTS = [
  { icon: Sprout, text: "New RFQ match: Sesame Seeds — Lagos", tone: "signal" as const },
  { icon: Timer, text: "Offer expires in 2h — Ginger Roots", tone: "orange" as const },
  { icon: TrendingUp, text: "Cocoa prices up 4% this week", tone: "lime" as const },
  { icon: Ship, text: "Custom alert created: “Shea Butter export”", tone: "signal" as const },
];

const TONE_CLASS = {
  signal: "text-signal bg-signal/10",
  orange: "text-orange bg-orange/10",
  lime: "text-lime bg-lime/10",
};

export default function TradeAlerts() {
  const gridRef = useRevealGroup<HTMLDivElement>();
  const toastRef = useRevealGroup<HTMLDivElement>();

  return (
    <section className="bg-bg-elevated relative overflow-hidden py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="mx-auto grid max-w-[1300px] items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Never miss a deal"
              title="Stay ahead with"
              gradientWord="Trade Alerts"
              subtitle="The instant a buyer or seller matches what you're looking for, TradelyX notifies you — so you can move before the opportunity does."
            />

            <div ref={gridRef} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="bg-signal/10 border-border-strong flex size-10 shrink-0 items-center justify-center rounded-lg border">
                    <f.icon className="text-lime size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold">{f.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={toastRef} className="mx-auto flex w-full max-w-sm flex-col gap-4">
            {TOASTS.map((t, i) => (
              <div
                key={t.text}
                className="border-border-strong bg-bg-card animate-float-slow flex items-center gap-3 rounded-xl border p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${TONE_CLASS[t.tone]}`}>
                  <t.icon className="size-4" strokeWidth={1.75} />
                </div>
                <span className="text-text-primary font-mono text-xs leading-snug">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
