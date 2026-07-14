import { FileText, Users, Lock, Truck, CheckCircle2, Wallet } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const STEPS = [
  {
    icon: FileText,
    title: "Post Your Need",
    description: "Buyers post exactly what they need — quantity, quality, and delivery terms.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Sellers Compete",
    description: "Verified sellers send competing offers. You compare and pick the best deal.",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Funds Go to Escrow",
    description: "Payment moves into a secure smart contract — held safely until delivery is confirmed.",
    highlight: true,
  },
  {
    icon: Truck,
    title: "Seller Ships",
    description: "Goods are shipped with tracking, and documents are uploaded to the platform.",
    highlight: false,
  },
  {
    icon: CheckCircle2,
    title: "Buyer Approves",
    description: "The buyer inspects the delivery and approves once fully satisfied.",
    highlight: false,
  },
  {
    icon: Wallet,
    title: "Payment Released",
    description: "Escrow instantly releases payment to the seller. Deal complete.",
    highlight: true,
  },
] as const;

export default function EscrowFlow() {
  const groupRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="escrow" className="mx-auto max-w-[1440px] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading
          eyebrow="Zero payment risk"
          title="Your money, always"
          gradientWord="protected"
          subtitle="Every trade on TradelyX follows the same guaranteed path from request to release — funds only move when both sides are satisfied."
        />

        <div
          ref={groupRef}
          className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-6 md:gap-4"
        >
          <div className="border-border absolute top-8 right-[8%] left-[8%] hidden h-px border-t border-dashed md:block" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center gap-3 text-center">
              <div
                className={`relative z-10 flex size-16 items-center justify-center rounded-full border ${
                  step.highlight
                    ? "bg-signal/15 border-signal shadow-[0_0_40px_-8px_rgba(47,227,127,0.6)]"
                    : "bg-bg-card border-border-strong"
                }`}
              >
                <step.icon className={step.highlight ? "text-signal size-7" : "text-lime size-6"} strokeWidth={1.75} />
              </div>
              <span className="text-text-dim font-mono text-[11px] tracking-widest uppercase">
                Step {i + 1}
              </span>
              <h3 className="font-display text-text-primary text-base font-medium sm:text-lg">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
