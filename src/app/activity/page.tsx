import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroActivity from "./Hero";
// import ProgramActivity from "./Program";
// import MoreActivity from "./MoreActivity";
import ProgramOne from "./Program1";
import ProgramTwo from "./Program2";
import ProgramThree from "./Program3";

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
      {/* <ProgramActivity /> */}
      <div className="relative z-0 container mx-auto py-12 lg:py-24 bg-gradient-to-b overflow-hidden">
        {" "}
        {/* <MoreActivity /> */}
        <ProgramOne />
        <ProgramTwo />
        <ProgramThree />
      </div>
      <Footer />
    </>
  );
}
