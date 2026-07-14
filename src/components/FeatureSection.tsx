import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { useParallax } from "../hooks/useParallax";
import { useRevealGroup } from "../hooks/useRevealGroup";

export default function FeatureSection({
  id,
  index,
  eyebrow,
  title,
  description,
  icon,
  screenshot,
  screenshotAlt,
  imageSide = "right",
}: {
  id?: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
  screenshot: string;
  screenshotAlt: string;
  imageSide?: "left" | "right";
}) {
  const groupRef = useRevealGroup<HTMLDivElement>();
  const gridRef = useParallax<HTMLDivElement>(0.22);
  const shotRef = useParallax<HTMLImageElement>(-0.1);

  const visual = (
    <div className="border-border bg-bg-card relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border">
      <div ref={gridRef} className="bg-ledger-grid absolute inset-[-15%] opacity-60 will-change-transform" />
      <span className="text-text-dim absolute top-5 left-5 z-10 font-mono text-xs tracking-widest">
        {index}
      </span>
      <img
        ref={shotRef}
        src={screenshot}
        alt={screenshotAlt}
        className="relative h-[85%] w-auto object-contain will-change-transform"
      />
      <div className="bg-signal/10 border-border-strong shadow-[0_0_40px_-10px_rgba(47,227,127,0.6)] absolute right-5 bottom-5 flex size-14 items-center justify-center rounded-xl border backdrop-blur-sm">
        {icon}
      </div>
    </div>
  );

  const copy = (
    <div className="flex flex-col gap-4">
      <span className="text-lime font-mono text-sm font-bold tracking-wide uppercase">{eyebrow}</span>
      <h2 className="font-display text-text-primary text-3xl leading-tight font-medium sm:text-4xl">
        {title}
      </h2>
      <p className="text-text-secondary text-lg leading-relaxed">{description}</p>
      <ButtonLink href="#signup" variant="secondary" className="mt-2 w-fit">
        Get Started Now
      </ButtonLink>
    </div>
  );

  return (
    <section id={id} className="mx-auto max-w-[1440px] px-4 py-16 md:px-6">
      <div
        ref={groupRef}
        className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 md:gap-16"
      >
        {imageSide === "left" ? (
          <>
            <div className="order-1">{visual}</div>
            <div className="order-2">{copy}</div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{copy}</div>
            <div className="order-1 md:order-2">{visual}</div>
          </>
        )}
      </div>
    </section>
  );
}
