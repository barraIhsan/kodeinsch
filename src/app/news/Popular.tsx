import { popularModel } from "@/data/popular";
import { cn } from "@/lib/utils";
import styles from "@/app/shadow.module.css";
import { Title } from "@/components/Text";

export default function Popular({
  title,
  popularNews,
}: {
  title: string;
  popularNews: Array<popularModel>;
}) {
  return (
    <section className="z-10 border-r  last:pb-24 space-y-12">
      <div className="border-y px-5 py-3 ">
        <Title className="text-black">{title}</Title>
      </div>
      <div className="flex flex-col px-5 gap-5">
        {popularNews.map((item, index) => (
          <div
            key={index}
            className={cn(
              "border rounded-2xl bg-linear-to-b from-white to-slate-50 to-70% outline-2 outline-white -outline-offset-3 p-3 h-full",
              styles.shadow
            )}
          >
            <div className="px-5 py-3">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                {item.title}
              </p>
              <p className="text-sm sm:text-base text-gray-500 my-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
