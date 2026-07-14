import Marquee from "../components/Marquee";

const COMMODITIES = [
  "TOMATO",
  "CASHEW",
  "COCOA",
  "SESAME",
  "GINGER",
  "SHEA BUTTER",
  "GROUNDNUT",
  "HIBISCUS",
  "SOYBEAN",
  "PALM OIL",
  "CASSAVA",
  "MAIZE",
];

export default function CommodityTicker() {
  return (
    <div className="border-border bg-bg-elevated border-y py-5">
      <Marquee
        items={COMMODITIES.map((c) => `● ${c}`)}
        speed={38}
        className="text-text-dim font-mono text-sm tracking-[0.2em]"
      />
    </div>
  );
}
