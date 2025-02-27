import ColoredSection from "@/components/ColoredSection";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Mission from "./Mission";
import Facility from "./Facility";
import Affiliate from "./Affiliate";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <ColoredSection
        className="from-[#225EDB] to-[#205BD7] mt-20"
        left="hidden"
        right="-right-36 -top-16"
      >
        <Hero />
      </ColoredSection>
      <Mission />
      <ColoredSection
        className="from-[#F9242C] to-[#D12329] px-0! mt-0"
        left="-left-[28rem] -bottom-20"
        right="-right-52 -top-16"
      >
        <Facility />
      </ColoredSection>
      <Affiliate />

      <ColoredSection
        className="from-[#FF9D2D] to-kodein-orange px-0! mt-0"
        left="-left-36"
        right="-right-48 -top-16"
      >
        <Testimonial />
      </ColoredSection>
      <Footer />
    </>
  );
}
