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
        <Program title="⭐Program Unggulan" academics={programunggulan} />
        <div className="z-10 border-x last:pb-24">
          <div className="flex items-center justify-between px-5 border-y border-gray-200">
            <Title className="text-black my-3">Kegiatan-Kegiatan Lainnya</Title>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-5 pb-28 border-gray-200 border-b">
            {programlainnya.map((program, index) => (
              <div className="" key={index}>
                <div className="bg-white border-gray-300 drop-shadow-lg p-3 rounded-2xl space-y-2">
                  <Image
                    width={1000}
                    height={1000}
                    src={program.img}
                    alt={program.title}
                    className="object-cover rounded-lg w-full h-56"
                  />
                  <p className="text-3xl font-semibold py-1 px-2.5 w-fit">
                    {program.title}
                  </p>
                  <p className="px-2.5 w-fit text-gray-400 text-xl pb-8">
                    {program.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Section */}
        <ColoredSection
          className="from-[#225EDC] to-[#1F58D2]"
          left="-left-52 bottom-12"
          right="-top-44 -right-36"
        >
          <Curriculum />
        </ColoredSection>
      </div>

      <Footer className="pt-0" />
    </>
  );
}
