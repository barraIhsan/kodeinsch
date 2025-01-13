/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { program as programImg } from "@/constants/images";
import { programs } from "@/constants/data";

export default function Program() {
  return (
    <section 
      id="program"
      className="container mx-auto grid gap-14 px-4 sm:px-8 lg:px-0"
    >
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
        Program Unggulan
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {programs.map((program, index) => (
          <div key={index} className="border border-black/20 rounded-2xl drop-shadow-lg bg-white flex-1 max-w-full">
          <div className="grid grid-rows-[auto_1fr_auto] h-full">
            <div className="relative">
              <Image {...programImg[program.image]} className="w-full px-3 pt-3" />
            </div>
            <div className="grid gap-2 px-6 sm:px-8 pt-6">
              <h5 className="text-lg sm:text-xl lg:text-2xl font-bold">{program.title}</h5>
              <p className="text-sm sm:text-base text-[#A0A0A0]">
                {program.desc}
              </p>
            </div>
            <button className="text-sm sm:text-base font-semibold border-2 border-black/20 w-fit py-2 px-4 sm:px-6 rounded-xl transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-8 ml-6 sm:ml-8 mb-6">
              Info Selengkapnya
            </button>
          </div>
        </div>
        ))}
      </div>
    </section>

  )
}
