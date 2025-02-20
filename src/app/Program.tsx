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
      className="border-x border-gray-200 container mx-auto grid gap-14 lg:pt-12 pb-12 lg:pb-20"
    >
      <Title className="py-2.5 text-center border-b border-gray-200">
        Program Unggulan
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
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
              <Button variant="outline" size="lg">
                Info Selengkapnya
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <hr className="w-full" />
        <Button variant="outline" size="lg">
          Lihat Semua
        </Button>
        <hr className="w-full" />
      </div>
    </section>
  );
}
