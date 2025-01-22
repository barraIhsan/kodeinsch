/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { affiliates } from "@/constants/images";

export default function Affiliate() {
  return (
    <>
      <section className="flex justify-between container mx-auto px-14 pt-60">
        <div className="">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Afiliasi Kami
          </h2>
          <p className="text-gray-400 text-xl font-thin max-w-3xl pr-10">
            Afiliasi antara lembaga, memberikan siswa akses ke program tambahan,
            beasiswa, dan peluang pertukaran pelajar, yang memperluas wawasan
            dan jaringan mereka untuk masa depan.
          </p>
        </div>
        <div className="shrink-0 flex gap-6 items-center [mask:linear-gradient(90deg,transparent,white_10%,white_80%,transparent)]">
          {affiliates.map((affiliate, index) => (
            <Image key={index} {...affiliate} className="h-20 object-contain" />
          ))}
        </div>
      </section>
      <section className="flex flex-row justify-between items-center container mx-auto px-14 py-64 gap-10">
        <iframe
          width="620"
          height="350"
          src="https://www.youtube.com/embed/TKXxJbiQpIE?si=VhYwyKnBTNmAOVyr"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-3xl"
        />
        <div>
          <h2 className="text-5xl max-w-lg font-extrabold text-gray-900 mb-4">
            Pentingnya Belajar IT di Era Modern
          </h2>
          <p className="text-gray-400 text-xl font-thin max-w-2xl pr-10">
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
