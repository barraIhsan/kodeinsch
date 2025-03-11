import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD
import HeroActivity from "./Hero";
import ProgramActivity from "./Program";
=======
import Hero from "./Hero";
import { studyTour } from "@/data/activity";
<<<<<<< HEAD
import Program from "./Program";
=======
>>>>>>> origin/master
>>>>>>> e4117614cf22f6302e8905af6f1c050ec1091af0

export default function page() {
  return (
    <>
      <Navbar />
      <ColoredSection
<<<<<<< HEAD
        className="from-[#FF9D2D] to-[#EF7E30] mt-24"
        left="-left-72 bottom-20"
        right="-right-52 -top-16"
      >
        <HeroActivity />
      </ColoredSection>
      <ProgramActivity />
      <Footer />
=======
        className="from-[#FF9D2D] to-[#EF7E30] mt-20"
        left="-left-72 -bottom-20"
        right="-right-52 -top-16"
      >
        <Hero />
      </ColoredSection>
      <div className="container mx-auto overflow-hidden">
        <Program title="Study Tour" activities={studyTour} />

        
      </div>
      <Footer className="pt-0" />
>>>>>>> origin/master
    </>
  );
}
