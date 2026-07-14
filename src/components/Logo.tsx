import logo from "../assets/figma-exports/logo.svg";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/#home" className={`flex items-center shrink-0 ${className}`}>
      <img src={logo} alt="TradelyX" className="h-9 w-auto" />
      <span className="-ml-1.5 text-2xl font-black text-lime">x</span>
    </a>
  );
}
