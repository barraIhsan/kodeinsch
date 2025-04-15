import Navbar from "@/components/Navbar";
import ColoredSection from "@/components/ColoredSection";
import Hero from "./Hero";
import Latest from "./Latest";
import { newsData } from "@/data/news";
import Popular from "./Popular";
import { populerNews } from "@/data/popular";
import Footer from "@/components/Footer";

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
      <div className="flex container mx-auto items-start">
        <div className="overflow-hidden flex-2">
          <Latest title="Terbaru" news={newsData} />
        </div>
        <div className="mt-12 flex-1">
          <Popular title="Populer" popularNews={populerNews}></Popular>
        </div>
      </div>
      <Footer className="pt-0"></Footer>
    </>
  );
}
