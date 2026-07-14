import {
  Search,
  Globe,
  Truck,
  BarChart3,
  Tag,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const SERVICES = [
  {
    icon: Search,
    title: "Strategic Sourcing",
    description:
      "TradelyX helps companies identify, assess, and engage with suppliers to ensure they are getting the best price and quality for their sourcing needs.",
  },
  {
    icon: Globe,
    title: "Trade Facilitation",
    description:
      "TradelyX assists companies in navigating the complexities of international trade, including customs clearance and documentation.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "TradelyX provides end-to-end supply chain management solutions, including forecasting, inventory management, and logistics.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description:
      "TradelyX offers comprehensive market intelligence reports and analysis to help companies identify key market trends and competitive advantages.",
  },
  {
    icon: Tag,
    title: "Pricing Analysis",
    description:
      "TradelyX provides pricing analysis to help companies identify and make the best pricing decisions for their products and services.",
  },
  {
    icon: ClipboardList,
    title: "Procurement Consulting",
    description:
      "TradelyX helps companies develop and implement efficient and cost-effective procurement strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Trade Assurance",
    description:
      "TradelyX Agro offers trade assurance services such as quality control, payment protection, and shipment tracking to help buyers and suppliers transact securely.",
  },
];

export default function Services() {
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-[1440px] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-[1300px]">
        <SectionHeading eyebrow="What we offer" title="Our" gradientWord="Services" />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-bg-card border-border hover:border-border-strong hover:shadow-[0_0_50px_-16px_rgba(47,227,127,0.35)] group flex flex-col gap-4 rounded-2xl border p-6 transition-all"
            >
              <div className="bg-signal/10 border-border-strong flex size-12 items-center justify-center rounded-xl border">
                <service.icon className="text-lime size-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-text-primary text-xl font-bold">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
