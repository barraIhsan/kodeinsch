/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { affiliates } from "@/constants/images";
import { Title } from "@/components/Text";

export default function Affiliate() {
  return (
    <>
      <section className="flex flex-col xl:flex-row justify-between items-center container mx-auto px-4 pt-32 xl:pt-60 gap-16 xl:gap-28">
        <div className="space-y-4">
          <Title className="text-6xl">Afiliasi Kami</Title>
          <p className="text-gray-400 text-lg md:text-xl  font-thin max-w-3xl">
            Afiliasi antara lembaga, memberikan siswa akses ke program tambahan,
            beasiswa, dan peluang pertukaran pelajar, yang memperluas wawasan
            dan jaringan mereka untuk masa depan.
          </p>
        </div>
        <div className="max-w-full sm:max-w-3xl [--gap:50px] md:[--gap:100px] motion-safe:[mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] w-fit overflow-hidden">
          <ul className="flex gap-[--gap] md:gap-12 w-max animate-scroll">
            {affiliates.concat(affiliates).map((affiliate, index) => (
              <li key={index}>
                <Image {...affiliate} className="h-20 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col xl:flex-row justify-between items-center container mx-auto pb-12 xl:pb-64 pt-40 xl:pt-64 gap-20 sm:gap-16">
        <iframe
          src="https://www.youtube.com/embed/ibJ0lpj1a0E"
          className="flex-1 rounded-3xl border-none aspect-video size-full"
        />
        <div className="flex-1 space-y-4">
          <Title>Pentingnya Belajar IT di Era Modern</Title>
          <p className="text-gray-400 text-lg md:text-xl font-thin max-w-2xl">
            Information Technology (IT) sangat penting di era modern karena
            mendukung efisiensi, inovasi, dan konektivitas. TI memungkinkan
            bisnis global, otomatisasi, dan analisis data, serta melindungi
            interaksi digital, menjadikannya elemen vital untuk masa depan.
          </p>
        </div>
      </section>
    </>
  );
}
