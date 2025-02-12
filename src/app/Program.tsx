/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { program as programImg } from "@/constants/images";
import { programs } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/Text";

export default function Program() {
  return (
    <section
      id="program"
      className="container mx-auto grid gap-14 px-4 lg:pt-12 pb-12 lg:pb-36 sm:px-8 lg:px-0"
    >
      <Title className="text-center">Program Unggulan</Title>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="border border-black/20 rounded-2xl shadow-lg bg-white p-3"
          >
            <div className="relative mb-8">
              <Image
                {...programImg[index]}
                className="w-full object-cover rounded-md h-40"
              />
              <Image
                src={programImg[index].logo}
                alt=""
                width={64}
                height={64}
                className="p-2 rounded-full size-16 absolute bg-white -bottom-7 left-4"
              />
            </div>
            <div className="px-5 py-3">
              <h5 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {program.title}
              </h5>
              <p className="text-sm sm:text-base text-gray-500 mt-2 mb-8">
                {program.desc}
              </p>
              <Button variant="outline" className="px-6 py-3">
                Info Selengkapnya
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
