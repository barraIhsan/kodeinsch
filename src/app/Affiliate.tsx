/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { affiliates } from "@/constants/images";
import { Title } from "@/components/Text";

export default function Affiliate() {
  return (
    <>
      <section className="border-x border-gray-200 container mx-auto pt-32 xl:pt-44">
        <div className="border-y border-gray-200 flex flex-col items-center gap-16 xl:gap-28 xl:flex-row justify-between px-5 sm:px-12 py-20">
          <div className="space-y-4">
            <Title>Afiliasi Kami</Title>
            <p className="text-gray-500 text-lg md:text-xl  font-thin max-w-3xl">
              Afiliasi antara lembaga, memberikan siswa akses ke program
              tambahan, beasiswa, dan peluang pertukaran pelajar, yang
              memperluas wawasan dan jaringan mereka untuk masa depan.
            </p>
          </div>
          <div className="max-w-full sm:max-w-3xl [--gap:5rem] motion-safe:[mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] w-fit overflow-hidden">
            <ul className="flex gap-[--gap] w-max animate-scroll">
              {affiliates.concat(affiliates).map((affiliate, index) => (
                <li key={index}>
                  <Image {...affiliate} className="w-fit h-20 object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-x border-gray-200 flex flex-col xl:flex-row justify-between items-center container mx-auto px-5 sm:px-12 py-32 gap-20 md:gap-16">
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
