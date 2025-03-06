import ColoredSection from "@/components/ColoredSection";
import Navbar from "@/components/Navbar";
import HeroPortfolio from "./hero";
import PagePortfolio from "./pagePortfolio";

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

      <PagePortfolio />
      
    </>
  );
}
