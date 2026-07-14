import iconWhatsapp from "../assets/figma-exports/icon-whatsapp.svg";

const WHATSAPP_LINK = "https://wa.me/2348088888672";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="bg-signal shadow-[0_0_0_1px_rgba(47,227,127,0.3),0_20px_40px_-12px_rgba(47,227,127,0.5)] fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full transition-transform hover:scale-110 md:right-8 md:bottom-8"
    >
      <img src={iconWhatsapp} alt="" className="size-7 brightness-0 invert" />
    </a>
  );
}
