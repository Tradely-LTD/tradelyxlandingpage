import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useRevealGroup } from "../hooks/useRevealGroup";

const FAQS = [
  {
    question: "What do we do?",
    answer:
      "TradelyX is a B2B marketplace platform that connects buyers, sellers, and freight forwarders across borders, making global trade simpler, safer, and more transparent.",
  },
  {
    question: "How does TradelyX work?",
    answer:
      "Create an account, list or search for products, and use our built-in RFQ and messaging tools to negotiate terms directly with verified trade partners.",
  },
  {
    question: "How does RFQ work?",
    answer:
      "Submit a Request For Quotation with your product details, and verified suppliers respond with tailored quotations you can compare and act on in real time.",
  },
  {
    question: "How does RFF work?",
    answer:
      "Submit a Request For Freight with your shipment details, and vetted freight forwarders respond with quotes so you can choose the best logistics partner.",
  },
  {
    question: "How to join TradelyX?",
    answer:
      "Sign up for free from the website or mobile app, complete your business profile, and start sourcing, selling, or shipping right away.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const listRef = useRevealGroup<HTMLDivElement>();

  return (
    <section id="faq" className="mx-auto max-w-[1440px] px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          align="left"
          eyebrow="Support"
          title="Frequently asked"
          gradientWord="questions"
        />
        <div className="-mt-4 flex flex-col gap-4 md:col-start-1 md:row-start-2">
          <p className="text-text-secondary">Still need help? Contact us.</p>
          <a
            href="mailto:info@tradelyx.com"
            className="border-border bg-bg-card text-lime hover:border-border-strong flex w-fit items-center gap-2 rounded-lg border px-4 py-3 font-bold"
          >
            <Mail className="size-5" />
            info@tradelyx.com
          </a>
        </div>

        <div ref={listRef} className="flex flex-col gap-3 md:col-start-2 md:row-span-2 md:row-start-1">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="bg-bg-card border-border overflow-hidden rounded-2xl border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-text-primary text-lg font-bold">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-lime shrink-0"
                  >
                    <ChevronDown className="size-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-secondary px-6 pb-5 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
