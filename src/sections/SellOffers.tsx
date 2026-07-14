import { Sparkles, SlidersHorizontal, Timer, Rocket } from "lucide-react";
import { ButtonLink } from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";
import { useParallax } from "../hooks/useParallax";

const POINTS = [
  {
    icon: Sparkles,
    title: "Create Compelling Listings",
    description: "Highlight your products with detailed descriptions and high-quality images.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set Your Terms",
    description: "Define pricing, minimum quantities, and delivery options.",
  },
  {
    icon: Timer,
    title: "Limited-Time Offers",
    description: "Create urgency with time-limited discounted offers.",
  },
  {
    icon: Rocket,
    title: "Boost Visibility",
    description: "Premium placement options for maximum exposure.",
  },
];

export default function SellOffers() {
  const groupRef = useRevealGroup<HTMLDivElement>();
  const glowRef = useParallax<HTMLDivElement>(0.2);

  return (
    <section className="relative mx-auto max-w-[1440px] overflow-hidden px-4 py-20 md:px-6">
      <div
        ref={glowRef}
        className="bg-orange/10 pointer-events-none absolute top-0 left-0 -z-10 size-[420px] rounded-full blur-[130px] will-change-transform"
      />
      <div ref={groupRef} className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="For sellers"
            title="Maximize your sales with"
            gradientWord="Sell Offers"
            subtitle="Post a sell offer once — a Trade Alert notifies every interested buyer instantly, so you spend less time searching and more time closing."
          />

          <ul className="mt-8 flex flex-col gap-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <div className="bg-signal/10 border-border-strong flex size-11 shrink-0 items-center justify-center rounded-xl border">
                  <point.icon className="text-lime size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold">{point.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <ButtonLink href="#signup" className="mt-8 w-fit">
            Post a Sell Offer
          </ButtonLink>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="border-border bg-bg-card shadow-[0_0_60px_-16px_rgba(255,102,0,0.25)] relative rounded-2xl border p-6">
            <span className="bg-orange absolute -top-3 -right-3 flex size-7 items-center justify-center rounded-full font-mono text-xs font-bold text-white">
              1
            </span>
            <div className="flex items-center justify-between">
              <span className="bg-orange/15 text-orange rounded-full px-3 py-1 font-mono text-xs font-bold">
                Sell Offer
              </span>
              <span className="text-text-dim font-mono text-xs">Expires in 2d 14h</span>
            </div>

            <h3 className="text-text-primary mt-4 text-xl font-bold">5 Tonnes of Fresh Ginger Roots</h3>

            <div className="border-border mt-5 grid grid-cols-2 gap-4 border-t pt-5 font-mono text-sm">
              <div>
                <span className="text-text-dim block text-[11px] tracking-wide uppercase">Location</span>
                <span className="text-text-primary">Abuja, Nigeria</span>
              </div>
              <div>
                <span className="text-text-dim block text-[11px] tracking-wide uppercase">Qty Offered</span>
                <span className="text-text-primary">5 Tonnes</span>
              </div>
              <div>
                <span className="text-text-dim block text-[11px] tracking-wide uppercase">Payment</span>
                <span className="text-text-primary">Advance</span>
              </div>
              <div>
                <span className="text-text-dim block text-[11px] tracking-wide uppercase">Base Price</span>
                <span className="text-lime font-bold">₦1,000,000</span>
              </div>
            </div>

            <button className="bg-lime mt-6 w-full rounded-lg py-2.5 text-sm font-bold text-[#07240f]">
              View Offer
            </button>
          </div>

          <div className="border-border-strong bg-bg-elevated/90 absolute -bottom-6 -left-6 flex items-center gap-2 rounded-xl border px-4 py-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm">
            <span className="pulse-dot bg-lime size-1.5 shrink-0 rounded-full" />
            <span className="text-text-primary font-mono text-xs font-semibold whitespace-nowrap">
              Trade Alert sent to 12 buyers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
