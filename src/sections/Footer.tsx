import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonLink } from "../components/Button";
import Logo from "../components/Logo";
import StoreBadge from "../components/StoreBadge";
import { useRevealGroup } from "../hooks/useRevealGroup";
import iconEmail from "../assets/figma-exports/icon-email.svg";
import iconLocation from "../assets/figma-exports/icon-location.svg";
import iconPhone from "../assets/figma-exports/icon-phone.svg";
import iconFacebook from "../assets/figma-exports/icon-facebook.svg";
import iconInstagram from "../assets/figma-exports/icon-instagram.svg";
import iconLinkedin from "../assets/figma-exports/icon-linkedin.svg";
import iconWhatsapp from "../assets/figma-exports/icon-whatsapp.svg";
import iconTelegram from "../assets/figma-exports/icon-telegram.svg";

const WHATSAPP_LINK = "https://wa.me/2348088888672";
const TELEGRAM_LINK = "https://t.me/+fjdFr7OKyi9jMzhk";

const MENU_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Why Join Us", href: "/#why-join" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "How it Works?", href: "/#how-it-works" },
  { label: "Escrow", href: "/#escrow" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Account Deletion", href: "/account-deletion" },
];

const CONTACT = [
  { icon: iconPhone, text: "+234 808 888 8672" },
  { icon: iconEmail, text: "info@tradelyx.com" },
  {
    icon: iconLocation,
    text: "Plot 1015 Fria Close, Gwandal Center, Opp Old EFCC Building, Wuse II, Abuja FCT, Nigeria",
  },
];

const SOCIALS = [
  { icon: iconFacebook, label: "Facebook", href: "https://www.facebook.com/tradelyx" },
  { icon: iconInstagram, label: "Instagram", href: "https://www.instagram.com/tradelyx" },
  { icon: iconLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/tradelyx/" },
  { icon: iconTelegram, label: "Telegram", href: TELEGRAM_LINK },
  { icon: iconWhatsapp, label: "WhatsApp", href: WHATSAPP_LINK },
];

export default function Footer() {
  const ctaRef = useRevealGroup<HTMLDivElement>();

  return (
    <footer id="contact" className="mx-auto max-w-[1440px] px-4 pb-8 md:px-6">
      <div
        ref={ctaRef}
        className="bg-signal/10 border-border-strong shadow-[0_0_100px_-30px_rgba(47,227,127,0.4)] mx-auto flex max-w-[1300px] flex-col items-center gap-6 rounded-2xl border px-6 py-14 text-center sm:px-16"
      >
        <h2 className="font-display text-text-primary text-3xl font-medium sm:text-4xl">
          Join our <span className="text-gradient-signal">community</span>
        </h2>
        <p className="text-text-secondary max-w-xl leading-relaxed">
          Join 10,000+ support agents that elevate their entire support
          experience with one straightforward platform. Get Started today.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["No credit card required", "Full access to all features", "Cancel at anytime"].map(
            (item) => (
              <span key={item} className="text-text-secondary flex items-center gap-2 text-sm">
                <Check className="text-lime size-4" strokeWidth={3} />
                {item}
              </span>
            ),
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="#signup">Get Started Now</ButtonLink>
          <ButtonLink href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" variant="outline">
            Join our Telegram Community
          </ButtonLink>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Logo />
          <p className="text-text-secondary max-w-sm leading-relaxed">
            TradelyX is Africa's premier B2B mobile marketplace connecting
            farmers, processors, and exporters with verified global buyers
            for agricultural trade.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-text-dim font-mono text-xs tracking-wide uppercase">Get it on</p>
            <div className="flex gap-3">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-text-primary font-bold">Menu</h3>
          {MENU_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-lime transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-text-primary font-bold">Contact</h3>
          {CONTACT.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <span className="border-border bg-bg-card flex size-8 shrink-0 items-center justify-center rounded-full border">
                <img src={item.icon} alt="" className="size-4 brightness-0 invert" />
              </span>
              <span className="text-text-secondary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-border mx-auto mt-12 flex max-w-[1300px] flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
        <p className="text-text-dim text-sm">Copyright © 2026 TradelyX</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-text-dim hover:text-lime text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="border-border bg-bg-card hover:border-border-strong hover:bg-signal/10 flex size-9 items-center justify-center rounded-full border transition-colors"
            >
              <img src={social.icon} alt="" className="size-4 brightness-0 invert" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
