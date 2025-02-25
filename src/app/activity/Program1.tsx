import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/components/Text";
import { activites } from "@/constants/data";
import Image from "next/image";
 
export default function ProgramOne() {
  return (
    <section className="z-10 py-12 border-x border-b border-gray-200">
      <Carousel className="space-y-12">
        <div className="flex items-center justify-between px-5 border-y border-gray-200">
          <Title className="text-black my-3">Study Tour</Title>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="px-3">
          {activites.map((activity, index) => (
            <CarouselItem key={index} className="pl-5 basis-1/3">
              <div>
                <div className="bg-white border-gray-300 drop-shadow-lg p-3 rounded-2xl space-y-2">
                  <Image
                    {...activity.img}
                    className="object-cover rounded-lg w-full h-56"
                  />
                  <p className="text-3xl font-semibold py-1 px-2.5 w-fit">
                    {activity.head}
                  </p>
                  <p className="px-2.5 w-fit text-gray-400 text-xl pb-8">
                    {activity.desc}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
