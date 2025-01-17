/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { affiliates } from "@/constants/images";

export default function Affiliate() {
    return (
        <>
            <section className="flex justify-between container mx-auto px-14 pt-60">
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
            <section className="flex flex-row-reverse justify-between items-center container mx-auto px-14 py-64">
                <div className="">
                        <h2 className="text-5xl max-w-lg font-extrabold text-gray-900 mb-4">Pentingnya Belajar IT 
                        di Era Modern</h2>
                        <p className="text-[#A0A0A0] text-xl font-thin max-w-2xl pr-10">
                        Information Technology (IT) sangat penting di era modern karena mendukung efisiensi, inovasi, dan konektivitas. TI memungkinkan bisnis global, otomatisasi, dan analisis data, serta melindungi interaksi digital, menjadikannya elemen vital untuk masa depan.
                        </p>
                </div>
                <iframe width="620" height="350" src="https://www.youtube.com/embed/TKXxJbiQpIE?si=VhYwyKnBTNmAOVyr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-lg"/>
            </section>
        </>
    );
}