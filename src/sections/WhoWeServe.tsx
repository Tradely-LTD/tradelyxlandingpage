import { ButtonLink } from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";
import { useParallax } from "../hooks/useParallax";

const AUDIENCES = [
  {
    title: "Exporters and Importers",
    description:
      "Businesses engaged in international trade, looking to connect with global buyers and suppliers, streamline trade processes, and expand their market reach.",
  },
  {
    title: "Freight Forwarders and Logistics Provider",
    description:
      "Companies offering shipping, transportation, and logistics services, seeking a platform to connect with businesses in need of reliable and efficient freight solutions.",
  },
  {
    title: "Agents and Trade Intermediaries",
    description:
      "Individuals or organizations acting as intermediaries between buyers and sellers, facilitating trade transactions, and providing valuable trade-related services.",
  },
  {
    title: "Small and Medium-sized Enterprises",
    description:
      "SMEs looking to enter the global market, access new trade opportunities, and leverage digital tools to enhance their trade operations.",
  },
  {
    title: "Trade Associations and Chamber of Commerce",
    description:
      "Industry associations and chambers of commerce interested in offering their members a digital platform for networking, trade facilitation, and access to trade-related resources.",
  },
];

export default function WhoWeServe() {
  const gridRef = useRevealGroup<HTMLDivElement>();
  const glowRef = useParallax<HTMLDivElement>(0.24);

  return (
    <section id="who-we-serve" className="bg-bg-elevated relative overflow-hidden py-20">
      <div
        ref={glowRef}
        className="bg-signal/10 pointer-events-none absolute top-0 right-[-10%] -z-10 size-[420px] rounded-full blur-[130px] will-change-transform"
      />
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeading
            align="left"
            eyebrow="Coverage"
            title="Who we"
            gradientWord="serve"
            subtitle="Strategic sourcing: TradelyX helps companies identify, assess, and engage with suppliers to ensure they are getting the best price and quality for their sourcing needs."
          />

          <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience, i) => (
              <div
                key={audience.title}
                className="border-border hover:border-border-strong flex flex-col gap-4 rounded-2xl border p-6 transition-colors"
              >
                <span className="font-display text-signal text-4xl font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-text-primary text-xl font-bold">{audience.title}</h3>
                <p className="text-text-secondary flex-1 leading-relaxed">{audience.description}</p>
                <ButtonLink href="#signup" variant="outline" className="w-fit px-6 py-2 text-sm">
                  Register Now
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
