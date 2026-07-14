import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const styles = {
  primary:
    "bg-lime text-[#07240f] hover:bg-white shadow-[0_0_0_1px_rgba(168,207,69,0.3),0_20px_40px_-12px_rgba(168,207,69,0.45)]",
  secondary: "bg-white/8 text-text-primary border border-border hover:bg-white/14",
  outline: "bg-transparent text-lime border border-border-strong hover:bg-lime/10",
};

type Variant = keyof typeof styles;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-semibold whitespace-nowrap transition-all duration-200";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant; className?: string; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant; className?: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </a>
  );
}
