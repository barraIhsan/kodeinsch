import { Title } from "@/components/Text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { roadmaps } from "@/data/roadmap";

export default function Roadmap() {
  let count = 1;
  return (
    <section className="sm:px-5 px-12 py-12 flex flex-col items-center">
      <Title className="text-white mb-20" shadow>
        Roadmap
      </Title>
      <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr] grid-rows-[repeat(6,auto-fit)] lg:grid-rows-[repeat(4,auto-fit)] gap-x-4 gap-y-8 lg:gap-y-16 w-full sm:w-fit lg:max-w-7xl">
        {roadmaps.map((roadmap, index) => (
          <>
            {index % 2 == 1 && (
              <>
                <div className="hidden lg:block" />
                <div className="relative z-10 lg:block hidden">
                  <div className="flex justify-center items-center bg-gradient-to-b from-[#2F6CD1] to-[#1A53C8] relative rounded-2xl size-44 bg-clip-padding border-2 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:-m-[2px] before:bg-gradient-to-b before:from-[#4385DC] before:to-[#1B52C8]">
                    <p className="font-extrabold text-4xl text-white">
                      1{index}
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="relative z-10 lg:hidden block">
              <div
                className={
                  `flex justify-center items-center bg-gradient-to-b from-[#2F6CD1] to-[#1A53C8] rounded-2xl size-44 relative mx-auto bg-clip-padding border-2 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:-m-[2px] before:bg-gradient-to-b before:from-[#4385DC] before:to-[#1B52C8]` +
                  (index != 0 ? " mt-12" : "")
                }
              >
                <p className="font-extrabold text-4xl text-white">1{index}</p>
              </div>
            </div>
            <Accordion type="multiple" key={index} className="space-y-4 z-10">
              {roadmap.map((items, index) => (
                <AccordionItem
                  value={(index + 1).toString()}
                  className="border-none bg-white rounded-2xl shadow-lg"
                  key={index}
                >
                  <AccordionTrigger className="border-none px-10 py-5 font-extrabold text-3xl hover:no-underline sm:gap-28">
                    <p className="text-transparent bg-gradient-to-b from-[#2B66CF] to-[#2058CA] bg-clip-text">
                      Semester {count++}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="px-10 py-5 space-y-4 text-lg sm:text-xl border-t">
                    {items.map((item, index) => (
                      <div key={index} className="max-w-[23ch]">
                        <p className="font-bold after:content-[':']">
                          {item.title}
                        </p>
                        <p className="text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {index % 2 == 0 && (
              <>
                <div className="relative z-10 lg:block hidden">
                  <div className="flex justify-center items-center bg-gradient-to-b from-[#2F6CD1] to-[#1A53C8] relative rounded-2xl size-44 bg-clip-padding border-2 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:-m-[2px] before:bg-gradient-to-b before:from-[#4385DC] before:to-[#1B52C8]">
                    <p className="font-extrabold text-4xl text-white">
                      1{index}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </>
            )}
          </>
        ))}
        <div />
        <div className="relative z-10 xl:size-full">
          <div className="flex justify-center items-center bg-gradient-to-b from-[#2F6CD1] to-[#1A53C8] relative rounded-2xl px-12 py-5 bg-clip-padding border-2 border-transparent before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:-m-[2px] before:bg-gradient-to-b before:from-[#4385DC] before:to-[#1B52C8]">
            <p className="font-extrabold text-xl sm:text-3xl text-white">
              Lulus
            </p>
          </div>
        </div>
        <hr className="absolute w-px h-full border-2 border-kodein-blue border-dashed right-1/2" />
      </div>
    </section>
  );
}
