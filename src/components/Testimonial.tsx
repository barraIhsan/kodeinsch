import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "./Text";
import { cn } from "@/lib/utils";
import styles from "@/app/shadow.module.css";

export default function Testimonial() {
  return (
    <section className="z-10 py-12">
      <Carousel className="space-y-12">
        <div className="flex items-center justify-between px-5 sm:px-12 xl:px-28">
          <Title className="text-white" shadow>
            Testimoni
          </Title>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="-ml-5 pl-12 md:pl-32 xl:pl-48">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="min-w-96 pl-5 shrink">
              <div
                className={cn(
                  "bg-white p-8 rounded-2xl w-full space-y-5",
                  styles.shadow,
                )}
              >
                <div className="px-2 py-1 bg-gray-100 border rounded-lg size-fit relative">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="fill-kodein-orange/30 stroke-none"
                      />
                    ))}
                  </div>
                  <div className="absolute top-1 left-2 flex">
                    {Array.from({ length: 5 }).map((_, index) => {
                      if (testimonial.rate >= index + 1) {
                        return (
                          <Star
                            key={index}
                            className="fill-kodein-orange stroke-none"
                          />
                        );
                      } else if (Math.floor(testimonial.rate - 0.5) == index) {
                        return (
                          <StarHalf
                            key={index}
                            className="fill-kodein-orange stroke-none"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                <p className="text-gray-500 text-xl">{testimonial.review}</p>
                <hr />
                <div className="flex gap-4 items-center">
                  <Image
                    width={40}
                    height={40}
                    alt={testimonial.name}
                    src={testimonial.pfp}
                    className="object-cover rounded-full size-10"
                  />
                  <div>
                    <p className="font-semibold text-xl">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
