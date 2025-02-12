import Link from "next/link";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function FloatingButton() {
  return (
    <>
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
