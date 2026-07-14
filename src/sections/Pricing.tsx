import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import { ButtonLink } from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const PLANS = [
  {
    name: "Trial Period",
    description: "Get a feel for the platform, zero commitment.",
    price: 0,
    features: [
      "100,000 Budget limitation",
      "3 Send RFQ",
      "5 Send Sale Offer",
      "1 No. of Products",
      "Domestic Freight",
      "1 Sub Accounts",
      "Low Customer Support",
    ],
    highlight: false,
  },
  {
    name: "Basic Plan",
    description: "For teams making their first cross-border trades.",
    price: 100000,
    features: [
      "1,000,000 Budget limitation",
      "20 Send RFQ",
      "20 Reply RFQ",
      "0-20 Send Sale Offer",
      "Basic Official Documentations for Trading",
      "20 Order Completed",
      "Comments/Review",
      "1 No. of Products",
      "Domestic Freight",
      "1 Sub Accounts",
      "Low Customer Support",
    ],
    highlight: false,
  },
  {
    name: "Gold Plan",
    description: "For scaling exporters running frequent orders.",
    price: 300000,
    features: [
      "10,000,000 Budget limitation",
      "100 Send RFQ",
      "100 Reply RFQ",
      "20-200 Send Sale Offer",
      "Full Official Documentations for Trading",
      "20-200 Order Completed",
      "Comments/Review",
      "5 No. of Products",
      "Domestic Freight",
      "International Freight",
      "3 Sub Accounts",
      "Medium Priority Listings",
      "High Customer Support",
    ],
    highlight: true,
  },
  {
    name: "Platinum Plan",
    description: "Unlimited scale for established trade houses.",
    price: 500000,
    features: [
      "Unlimited Budget limitation",
      "Unlimited Send RFQ",
      "Unlimited Reply RFQ",
      "Unlimited Send Sale Offer",
      "Full Official Documentations for Trading",
      "Unlimited Order Completed",
      "Comments/Review",
      "10 No. of Products",
      "Domestic Freight",
      "International Freight",
      "5 Sub Accounts",
      "High Priority Listings",
      "High Customer Support",
    ],
    highlight: false,
  },
];

function formatPrice(price: number, yearly: boolean) {
  if (price === 0) return "FREE";
  const value = yearly ? Math.round((price * 0.8) / 1000) * 1000 : price;
  return `₦${value.toLocaleString()}`;
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="pricing" className="mx-auto max-w-[1440px] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading eyebrow="Plans" title="Pricing for every" gradientWord="need" />

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setYearly(false)}
            className={clsx(
              "rounded-lg px-5 py-2 text-sm font-bold transition-colors",
              !yearly ? "bg-lime text-[#07240f]" : "border border-border text-text-secondary",
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={clsx(
              "flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-bold transition-colors",
              yearly ? "bg-lime text-[#07240f]" : "border border-border text-text-secondary",
            )}
          >
            Yearly
            <span className="bg-orange/15 text-orange rounded-full px-2 py-0.5 font-mono text-xs font-bold">
              20% off
            </span>
          </button>
        </div>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                "flex flex-col gap-5 rounded-2xl p-6",
                plan.highlight
                  ? "bg-signal/10 border-signal shadow-[0_0_60px_-16px_rgba(47,227,127,0.5)] border"
                  : "bg-bg-card border-border border",
              )}
            >
              {plan.highlight && (
                <span className="bg-lime w-fit rounded-full px-3 py-1 font-mono text-xs font-bold text-[#07240f]">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-text-primary text-xl font-bold">{plan.name}</h3>
                <p className="text-text-dim mt-1 text-sm">{plan.description}</p>
              </div>

              <div>
                <span className="font-display text-text-primary text-3xl font-medium">
                  {formatPrice(plan.price, yearly)}
                </span>
                {plan.price > 0 && <span className="text-text-dim text-sm"> / month</span>}
              </div>

              <ButtonLink
                href="#signup"
                className="w-full justify-center"
                variant={plan.highlight ? "primary" : "secondary"}
              >
                Get Started Now
              </ButtonLink>

              <div>
                <p className="text-text-dim text-sm font-bold">What's included?</p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-text-secondary flex items-start gap-2 text-sm">
                      <Check className="text-lime mt-0.5 size-4 shrink-0" strokeWidth={3} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
