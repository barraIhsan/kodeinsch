import Navbar from "@/components/Navbar";
import Hero from "@/app/Hero";
import Affiliate from "@/app/Affiliate";
import Program from "@/app/Program";
import Footer from "@/components/Footer";
import About from "@/app/About";
import Curriculum from "@/app/Curriculum";
import Roadmap from "@/app/Roadmap";
import Testimonial from "@/components/Testimonial";
import ColoredSection from "@/components/ColoredSection";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />

      {/* Blue Section */}
      <ColoredSection
        className="from-[#225EDC] to-[#1F58D2]"
        left="-left-24 bottom-12"
        right="-top-44"
      >
        <About />
        <Curriculum />
      </ColoredSection>

      <Affiliate />

      {/* Orange Section */}
      <ColoredSection className="from-[#FF9D2D] to-kodein-orange !px-0">
        <Roadmap />
        <Testimonial />
      </ColoredSection>

      <Footer />
      <FloatingButton />
    </>
  );
}
