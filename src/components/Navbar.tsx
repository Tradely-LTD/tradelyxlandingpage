import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ButtonLink } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Why Join Us", href: "/#why-join" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "How it works?", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-border bg-bg-page/80 shadow-[0_0_40px_-12px_rgba(47,227,127,0.25)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-text-secondary transition-colors hover:bg-white/6 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="/#contact"
            className="rounded-lg px-4 py-2 font-medium text-text-secondary transition-colors hover:bg-white/6 hover:text-text-primary"
          >
            Contact
          </a>
          <ButtonLink href="#signup" className="px-6 py-2.5 text-sm">
            Sign Up
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-text-primary xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mx-auto mt-2 flex max-w-[1440px] flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-xl xl:hidden"
          >
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border px-6 py-4 font-medium text-text-primary last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#signup"
              onClick={() => setMobileOpen(false)}
              className="m-4 rounded-lg bg-lime px-6 py-3 text-center font-bold text-[#07240f]"
            >
              Sign Up
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
