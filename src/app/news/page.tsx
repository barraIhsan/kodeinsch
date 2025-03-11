import Navbar from "@/components/Navbar";
import ColoredSection from "@/components/ColoredSection";
import Hero from "./Hero";
import Latest from "./Latest";
import { newsData } from "@/data/news";

export default function page() {
  return (
    <>
      <Navbar />
      <ColoredSection
        className="from-[#235EDC] to-[#1B52C8] mt-20"
        left="-left-72 -bottom-20"
        right="-right-52 -top-16"
      >
        <Hero />
      </ColoredSection>
      <div className="container mx-auto overflow-hidden">
        <Latest title="Terbaru" news={newsData} />
      </div>
    </>
  );
}
