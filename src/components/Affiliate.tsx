/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { affiliates } from "@/constants/images";

export default function Affiliate() {
    return (
        <section className="flex justify-between container mx-auto px-14 py-60">
            <div className="border-r-2 ">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Afiliasi Kami</h2>
                <p className="text-[#A0A0A0] text-xl font-thin max-w-2xl pr-10">
                Afiliasi antara lembaga, memberikan siswa akses ke program tambahan, beasiswa, dan peluang pertukaran pelajar, yang memperluas wawasan dan jaringan mereka untuk masa depan.
                </p>
            </div>
            <div className="shrink-0 flex gap-10 items-center">
                {affiliates.map((affiliate, index) => (
                    <Image key={index} {...affiliate} className="h-36 object-contain" />
                ))}
            </div>
        </section>
    );
}