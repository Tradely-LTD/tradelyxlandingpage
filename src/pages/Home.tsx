import Hero from "../sections/Hero";
import CommodityTicker from "../sections/CommodityTicker";
import ValueProps from "../sections/ValueProps";
import Services from "../sections/Services";
import WhyJoin from "../sections/WhyJoin";
import WhoWeServe from "../sections/WhoWeServe";
import HowItWorks from "../sections/HowItWorks";
import EscrowFlow from "../sections/EscrowFlow";
import SellOffers from "../sections/SellOffers";
import TradeAlerts from "../sections/TradeAlerts";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import FAQ from "../sections/FAQ";
import EndlessPossibilities from "../sections/EndlessPossibilities";

export default function Home() {
  return (
    <>
      <Hero />
      <CommodityTicker />
      <ValueProps />
      <Services />
      <WhyJoin />
      <WhoWeServe />
      <HowItWorks />
      <EscrowFlow />
      <SellOffers />
      <TradeAlerts />
      <Testimonials />
      <Pricing />
      <FAQ />
      <EndlessPossibilities />
    </>
  );
}
