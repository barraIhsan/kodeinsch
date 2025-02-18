import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Form() {
  return (
    <>
      <Navbar />
      <iframe
        src="https://forms.gle/jmwgJAVRa5dEqKKd9"
        className="container mx-auto w-full h-screen mt-24"
      />
      <Footer />
    </>
  );
}
