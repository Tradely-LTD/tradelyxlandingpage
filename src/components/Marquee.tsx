import { useReducedMotion } from "../hooks/useReducedMotion";

export default function Marquee({
  items,
  speed = 32,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={`flex flex-wrap gap-x-10 gap-y-3 ${className}`}>
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee gap-10"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
