export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`text-text-dim mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="pulse-dot bg-lime size-1.5 rounded-full" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-text-primary text-3xl font-medium sm:text-4xl lg:text-5xl">
        {title} {gradientWord && <span className="text-gradient-signal">{gradientWord}</span>}
      </h2>
      {subtitle && <p className="text-text-secondary mt-4 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
