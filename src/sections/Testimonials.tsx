import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const TESTIMONIALS = [
  {
    quote:
      "TradelyX's RFQ feature helped us find reliable suppliers for our cocoa processing business in just 48 hours.",
    author: "Business Owner",
    location: "Ghana",
  },
  {
    quote:
      "TradelyX alerts helped me secure a major shea butter contract I would have otherwise missed.",
    author: "Business Owner",
    location: "Ghana",
  },
];

export default function Testimonials() {
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="testimonials" className="mx-auto max-w-[1440px] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading eyebrow="Social proof" title="Trusted by traders" gradientWord="across Africa" />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.quote} className="bg-bg-card border-border flex flex-col gap-4 rounded-2xl border p-8">
              <Quote className="text-signal size-8" strokeWidth={1.5} fill="currentColor" />
              <p className="text-text-primary text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-text-primary font-bold">{t.author}</p>
                <p className="text-orange font-mono text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
