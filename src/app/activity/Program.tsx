import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/components/Text";
import Image from "next/image";
import { activity } from "@/data/activity";
import { cn } from "@/lib/utils";
import styles from "@/app/shadow.module.css";

export default function Program({
  title,
  activities,
}: {
  title: string;
  activities: Array<activity>;
}) {
  return (
    <section className="z-10 py-12 border-x border-gray-200">
      <Carousel className="space-y-12">
        <div className="flex items-center justify-between px-5 border-y border-gray-200">
          <Title className="text-black my-3">{title}</Title>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="pl-0 px-3 divide-x border-gray-200">
          {activities.map((activity, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 xl:basis-1/3"
            >
              <div
                className={cn(
                  "border border-gray-200 rounded-2xl bg-gradient-to-b from-white to-slate-50 to-70% outline outline-2 outline-white -outline-offset-[3px] p-3 h-full",
                  styles.shadow,
                )}
              >
                <Image
                  src={"/img/activity/" + activity.src}
                  width={600}
                  height={263}
                  alt={activity.title}
                  className="object-cover rounded-lg w-full h-56 mb-3"
                />
                <div className="px-5 py-3">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                    {activity.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 my-2">
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
