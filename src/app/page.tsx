import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Affiliate from "@/components/Affiliate";
import Program from "@/components/Program";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />
      <About />
      {/* <Affiliate /> */}
      <Footer />
    </>
  );
}
