/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { carousels } from "@/constants/images";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const carouselPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="container mx-auto xl:h-[max(60rem,100vh)] overflow-hidden flex flex-col xl:flex-row gap-12 2xl:gap-24 justify-center items-center py-40 md:py-48 px-5 sm:px-12">
      <div className="flex-1">
        <div className="max-w-[70ch] space-y-5">
          <h1 className="font-extrabold text-4xl xl:text-6xl">
            Boarding School dengan fokus IT dan Multimedia
          </h1>
          <p className="text-lg xl:text-xl text-black/50">
            Tempat teknologi bertemu nilai Islami, membentuk generasi kreatif
            dan berintegritas melalui pendidikan modern dan moral kuat.
          </p>
        </div>
        <div className="border-y xl:border-t xl:border-b-0 border-gray-400/50 px-5 py-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-14 relative">
          <div>
            <p className="font-bold">Pendaftaran Masih Dibuka!</p>
            <p className="text-gray-400 text-sm">
              Gelombang ketiga: 10 Okt - 24 Nov 2024
            </p>
          </div>
          <Button className="shadow-2xl bg-gradient-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]">
            <Link href="#">Daftar Sekarang</Link>
          </Button>
          <div className="absolute -left-2 -top-3 size-5 animate-ping rounded-full bg-red-600" />
          <div className="absolute -left-2 -top-3 size-5 rounded-full bg-red-600" />
        </div>
      </div>
      <Carousel
        setApi={setApi}
        className="flex-1 relative"
        plugins={[carouselPlugin.current]}
      >
        <CarouselContent className="h-72 lg:w-full lg:h-[32rem] cursor-grab">
          {carousels.map((carousel, index) => (
            <CarouselItem key={index}>
              <Image
                {...carousel}
                className="size-full object-cover rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-8 inset-x-0 w-fit mx-auto flex justify-center gap-2 p-1 bg-gray-100 border border-gray-200 rounded-full">
          {Array.from({ length: carousels.length }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "size-3 rounded-full transition-colors duration-500",
                current - 1 === index ? "bg-black" : "bg-black/15",
              )}
            ></div>
          ))}
        </div>
      </Carousel>
    </main>
  );
}
