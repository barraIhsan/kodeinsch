import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Program from "./Program";
import { classmeeting, contest, event, studyTour } from "@/data/activity";

export default function page() {
  return (
    <>
      <Navbar />
      <ColoredSection
        className="from-[#FF9D2D] to-[#EF7E30] mt-20"
        left="-left-72 -bottom-20"
        right="-right-52 -top-16"
      >
        <Hero />
      </ColoredSection>
      <div className="container mx-auto overflow-hidden">
        <Program title="Study Tour" activities={studyTour} />
        <Program title="Classmeeting" activities={classmeeting} />
        <Program title="Contests" activities={contest} />
        <Program title="Event" activities={event} />
      </div>
      <Footer className="pt-0" />
    </>
  );
}
