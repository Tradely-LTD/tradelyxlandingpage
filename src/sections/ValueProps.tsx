import { Boxes, ShieldCheck, Repeat2, MessageCircle } from "lucide-react";
import FeatureSection from "../components/FeatureSection";
import exploreCategories from "../assets/mockups/explore-categories.svg";
import freightSelect from "../assets/mockups/freight-select.svg";
import fannedCards from "../assets/mockups/fanned-cards.svg";
import chatThread from "../assets/mockups/chat-thread.svg";

export default function ValueProps() {
  return (
    <>
      <FeatureSection
        index="01"
        eyebrow="Digital Supply Chain solution"
        title="Africa sourcing hub for Food and Agriculture"
        description="TradelyX is a digital supply chain finance solution that connects buyers and suppliers from all over the world in a secure, reliable, and cost-effective manner. Our mission is to revolutionize the agro commodity industry in Africa and the world by addressing the gaps in the current supply chain system, promoting export businesses, and reducing the barriers to trade."
        icon={<Boxes className="text-lime size-6" strokeWidth={1.75} />}
        screenshot={exploreCategories}
        screenshotAlt="TradelyX app — browse categories and latest sellers offers"
        imageSide="right"
      />
      <FeatureSection
        index="02"
        eyebrow="Secured Transactions"
        title="Say goodbye to financial risk and legal disputes"
        description="TradelyX provides a secure and transparent trading environment for agro commodity businesses. Our platform ensures fair transactions, dispute resolution, and peace of mind. Trade confidently with TradelyX by your side!"
        icon={<ShieldCheck className="text-lime size-6" strokeWidth={1.75} />}
        screenshot={fannedCards}
        screenshotAlt="TradelyX app — post freight quotes, sell offers, and find freight agents"
        imageSide="left"
      />
      <FeatureSection
        index="03"
        eyebrow="Streamline your freight needs"
        title="Wide network of trusted freight forwarders"
        description="Gain access to a wide network of reliable and experienced freight forwarders. We have carefully vetted our partners to ensure they meet the highest standards of professionalism and service quality. Rest assured that your cargo will be handled with utmost care and delivered efficiently to its destination."
        icon={<Repeat2 className="text-lime size-6" strokeWidth={1.75} />}
        screenshot={freightSelect}
        screenshotAlt="TradelyX app — choose service and track order detail"
        imageSide="right"
      />
      <FeatureSection
        index="04"
        eyebrow="Experience the convenience"
        title="Real-time communication, built in"
        description="Stay connected with freight forwarders through our built-in messaging system. Easily discuss shipment details, negotiate terms, and track the progress of your cargo. Our platform facilitates seamless communication, ensuring that you are always up to date on the status of your shipment."
        icon={<MessageCircle className="text-lime size-6" strokeWidth={1.75} />}
        screenshot={chatThread}
        screenshotAlt="TradelyX app — real-time chat with a supplier"
        imageSide="left"
      />
    </>
  );
}
