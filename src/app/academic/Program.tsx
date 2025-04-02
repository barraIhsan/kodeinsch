import { Title } from "@/components/Text";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "@/app/shadow.module.css";
import { academic } from "@/data/academic";

export default function Program({
  title,
  logo,
  academics,
}: {
  title: string;
  logo?: string;
  academics: Array<academic>;
}) {
  return (
    <section className="z-10 py-12 border-x last:pb-24 space-y-12">
      <div className="px-5 flex items-center gap-5 border-y">
        {logo && (
          <Image
            src={"/img/logo/" + logo + ".svg"}
            width={32}
            height={32}
            alt={logo}
          />
        )}
        <Title className="text-black my-3">{title}</Title>
      </div>
      <div className="px-5 grid grid-cols-3 gap-5">
        {academics.map((academic, index) => (
          <div key={index} className="md:basis-1/2 xl:basis-1/3">
            <div
              className={cn(
                "border rounded-2xl bg-linear-to-b from-white to-slate-50 to-70% outline-2 outline-white -outline-offset-3 p-3 h-full",
                styles.shadow,
              )}
            >
              <Image
                src={"/img/program/" + academic.img}
                width={600}
                height={263}
                alt={academic.title}
                className="object-cover rounded-lg w-full h-56 mb-3"
              />
              <div className="px-5 py-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                  {academic.title}
                </p>
                <p className="text-sm sm:text-base text-gray-500 my-2">
                  {academic.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
