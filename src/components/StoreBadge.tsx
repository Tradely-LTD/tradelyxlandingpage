import googlePlay from "../assets/figma-exports/badge-google-play.svg";
import appStore from "../assets/figma-exports/badge-app-store.svg";

const STORE_LINKS = {
  google: "https://play.google.com/store/apps/details?id=com.tradely.tradelyx",
  apple: "https://apps.apple.com/us/app/tradely-x/id6476217622",
};

export default function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <a
      href={STORE_LINKS[store]}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-border p-0.5 transition-all hover:scale-105 hover:border-border-strong"
    >
      <img
        src={store === "apple" ? appStore : googlePlay}
        alt={store === "apple" ? "Download on the App Store" : "Get it on Google Play"}
        className="h-10 w-auto"
      />
    </a>
  );
}
