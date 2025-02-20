import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroActivity from "./Hero";
import ProgramActivity from "./Programs";

export default function page() {
  return (
    <>
      <Navbar />
      <ColoredSection
        className="from-[#FF9D2D] to-[#EF7E30] mt-24"
        left="-left-72 bottom-20"
        right="-right-52 -top-16"
      >
        <HeroActivity />
      </ColoredSection>
      <ProgramActivity />
      <Footer />
    </>
  );
}
