import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Affiliate from "@/components/Affiliate";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";
import Image from "next/image";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />
      <Affiliate />

      {/* Orange Section */}
      <div className="relative container mx-auto px-5 py-12 mt-12 sm:rounded-2xl bg-gradient-to-b from-[#FF9D2D] to-kodein-orange">
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
