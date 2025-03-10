import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD
import HeroActivity from "./Hero";
import ProgramActivity from "./Program";
=======
import Hero from "./Hero";
import Program from "./Program";
import { studyTour } from "@/data/activity";
>>>>>>> origin/master

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
