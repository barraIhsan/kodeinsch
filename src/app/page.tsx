import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />

      {/* Orange Section */}
      <div className="relative container mx-auto px-5 py-12 mt-12 rounded-2xl bg-gradient-to-b from-[#FF9D2D] to-kodein-orange">
        <Roadmap />

        <Image
          src="/img/decoration/roadmap-left.svg"
          alt=""
          width={606}
          height={1086}
          className="absolute left-0 top-0 pointer-events-none"
        />
        <Image
          src="/img/decoration/roadmap-right.svg"
          alt=""
          width={560}
          height={1013}
          className="absolute right-0 top-0 pointer-events-none"
        />
      </div>

      <Footer />
    </>
  );
}
