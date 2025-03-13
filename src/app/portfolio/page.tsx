import ColoredSection from "@/components/ColoredSection";
import Navbar from "@/components/Navbar";
import HeroPortfolio from "./hero";
import PortfolioCards from "./PortfolioCards";
import Footer from "@/components/Footer";
import HeadPortfolio from "./pagePortfolio";

export default function portfolio() {
  return (
    <>
      <Navbar />

      <ColoredSection
        className="from-[#225EDB] to-[#205BD7] mt-24"
        left="-left-64 -top-16"
        right="hidden"
      >
        <HeroPortfolio />
      </ColoredSection>

      <HeadPortfolio />
      <div className="relative z-0 container mx-auto bg-gradient-to-b overflow-hidden">
        <PortfolioCards />
      </div>

      <Footer />
    </>
  );
}
