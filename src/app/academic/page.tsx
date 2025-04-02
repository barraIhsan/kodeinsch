import ColoredSection from "@/components/ColoredSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Program from "./Program";
import { programlainnya, programunggulan } from "@/data/academic";
import { Title } from "@/components/Text";
import Image from "next/image";
import Curriculum from "../Curriculum";

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
        <Program
          title="Program Unggulan"
          logo="star"
          academics={programunggulan}
        />
        <Program title="Program Lainnya" academics={programlainnya} />

        {/* Blue Section */}
        <ColoredSection
          className="from-[#225EDC] to-[#1F58D2]"
          left="-left-52 bottom-12"
          right="-top-44 -right-36"
        >
          <Curriculum />
        </ColoredSection>
      </div>

      <Footer />
    </>
  );
}
