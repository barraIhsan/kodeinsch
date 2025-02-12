import Navbar from "@/components/Navbar";
import Hero from "@/app/Hero";
import Affiliate from "@/app/Affiliate";
import Program from "@/app/Program";
import Footer from "@/components/Footer";
import About from "@/app/About";
import Curriculum from "@/app/Curriculum";
import Roadmap from "@/app/Roadmap";
import Testimonial from "@/components/Testimonial";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import ColoredSection from "@/components/ColoredSection";

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
      <div className="fixed bottom-10 right-10 size-16 bg-[#25D366]/50 rounded-full flex justify-center items-center animate-ping" />
      <Link
        className="fixed bottom-10 right-10 size-16 flex justify-center items-center rounded-full bg-[#25D366] z-40"
        href="https://wa.me/6282170270241"
        target="_blank"
      >
        <SiWhatsapp className="fill-white size-8" />
      </Link>
    </>
  );
}
