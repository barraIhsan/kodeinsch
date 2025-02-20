import Image from "next/image";
import { Title } from "@/components/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./shadow.module.css";
import { cn } from "@/lib/utils";

export default function Programs({ reverse }: { reverse?: boolean }) {
  return (
    <section className="container mx-auto py-8 border-x border-gray-200">
      <Carousel className="space-y-12">
        <div className="flex flex-col items-start justify-between">
          <div className="flex gap-4 justify-between pb-2 items-center w-full border-b border-gray-200">
            <div className="flex gap-4 ">
              <Image
                src="/img/logo/star.svg"
                width={40}
                height={40}
                alt="star"
              />
              <Title>English Camp</Title>
            </div>

            <div className="flex gap-3 items-end justify-end">
              <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
              <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
            </div>
          </div>
          <div className={cn("flex gap-4 flex-col-reverse xl:flex-row", reverse && "flex-col-reverse")}>
            <div className="flex-1 py-24 px-12 border-r border-gray-200">
              <p className="text-gray-400 text-lg md:text-xl font-thin max-w-4xl  ">
                Dengan kurikulum intensif selama dua bulan di Kampung Inggris
                Pare, peserta akan mengalami peningkatan pesat dalam kemampuan
                berbahasa Inggris. Fokus utama pada pemahaman mendalam materi
                dan latihan berbicara yang intensif, serta metode pembelajaran
                yang inovatif, akan membekali peserta dengan keahlian yang
                sangat dibutuhkan dalam persaingan global. Lingkungan belajar
                yang mendukung dan fasilitas yang lengkap menjadikan Kampung
                Inggris Pare sebagai pilihan terbaik bagi siapa saja yang ingin
                menguasai bahasa Inggris dengan cepat dan efektif.
              </p>
            </div>
            <CarouselContent className="pt-12">
              <CarouselItem>
                <div
                  className={cn(
                    "p-3 pb-5 rounded-2xl space-y-5 shadow-md border-[0.5px] border-black/10",
                    styles.shadow
                  )}
                >
                  <Image
                    className="object-cover rounded-lg size-full"
                    width={4032}
                    height={2268}
                    alt=""
                    src="/img/program/4.png"
                  />
                  <p
                    className={cn(
                      "px-2.5 py-1 rounded-lg border-black/10 border-[0.5px] w-fit font-semibold",
                      styles.shadow
                    )}
                  >
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
