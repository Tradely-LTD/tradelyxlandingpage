import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  children,
}: {
  eyebrow: string;
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} — TradelyX`;
  }, [title]);

  return (
    <div className="bg-ledger-grid relative">
      <div className="mx-auto max-w-[840px] px-4 pt-16 pb-24 md:px-6 md:pt-24">
        <Link
          to="/"
          className="text-text-secondary hover:text-lime inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <p className="text-signal font-mono text-xs tracking-wide uppercase mt-8">{eyebrow}</p>
        <h1 className="font-display text-text-primary mt-3 text-4xl font-medium sm:text-5xl">{title}</h1>
        {effectiveDate && <p className="text-text-dim mt-4 text-sm">Effective date: {effectiveDate}</p>}

        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </div>
  );
}

export function Section({ heading, children }: { heading?: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      {heading && (
        <h2 className="font-display text-text-primary text-xl font-medium sm:text-2xl">{heading}</h2>
      )}
      <div className="text-text-secondary space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="bg-lime mt-2.5 size-1.5 shrink-0 rounded-full" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
