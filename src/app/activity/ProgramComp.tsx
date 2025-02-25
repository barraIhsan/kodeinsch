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

interface ProgramsProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

export default function Programs({
  title,
  description,
  imageSrc,
  reverse = false,
}: ProgramsProps) {
  return (
    <section className="container mx-auto py-8 border-x border-gray-200">
      <Carousel className="space-y-12">
        <div
          className={cn(
            "flex flex-col xl:flex-row gap-4 items-start justify-between",
            reverse && "xl:flex-row-reverse"
          )}
        >
          <div className="flex-1 space-y-4">
            <div className="flex gap-4 justify-between pb-2 items-center w-full border-b border-gray-200">
              <div className="flex gap-4">
                <Image
                  src="/img/logo/star.svg"
                  width={40}
                  height={40}
                  alt="star"
                />
                <Title>{title}</Title>
              </div>

              <div className="flex gap-3 items-end justify-end">
                <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
                <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
              </div>
            </div>

            <CarouselContent className="pt-4">
              <CarouselItem>
                <div
                  className={cn(
                    "p-3 pb-5 rounded-2xl space-y-5 shadow-md border-[0.5px] border-black/10",
                    styles.shadow
                  )}
                >
                  <div className="w-full h-[300px] overflow-hidden rounded-lg">
                    <Image
                      className="w-full h-full object-cover"
                      width={4032}
                      height={2268}
                      alt=""
                      src={imageSrc}
                    />
                  </div>
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

          <div className="flex-1 py-24 px-12 border-gray-200">
            <p className="text-gray-400 text-lg md:text-xl font-thin max-w-4xl">
              {description}
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
