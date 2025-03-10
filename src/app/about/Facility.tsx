/* eslint-disable jsx-a11y/alt-text */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/components/Text";
import { facilities } from "@/data/facility";
import Image from "next/image";

export default function Facility() {
  return (
    <section className="z-10 py-12">
      <Carousel className="space-y-12">
        <div className="flex items-center justify-between px-5 sm:px-12 xl:px-28">
          <Title className="text-white" shadow>
            Fasilitas
          </Title>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="-ml-5 pl-12 md:pl-32 xl:pl-48">
          {facilities.map((facility, index) => (
            <CarouselItem key={index} className="min-w-96 pl-5 shrink">
              <div className="bg-white p-3 rounded-2xl space-y-2">
                <Image {...facility.img} className="object-cover rounded-lg" />
                <p className="font-semibold py-1 px-2.5 rounded-lg bg-white drop-shadow-lg w-fit border">
                  {facility.desc}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
