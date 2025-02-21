import { Title } from "@/components/Text";
import { curriculums } from "@/constants/data";
import Image from "next/image";
import styles from "./shadow.module.css";
import { cn } from "@/lib/utils";

export default function Curriculum() {
  return (
    <section className="pt-20 xl:pt-36 flex flex-col items-center gap-11">
      <Title className="text-white" shadow>
        Kurikulum Kami
      </Title>
      <div className="flex flex-col xl:flex-row gap-10 w-full">
        {curriculums.map((curriculum, index) => (
          <div
            className={cn(
              "bg-white p-8 rounded-2xl flex-1 min-w-72",
              styles.shadow,
            )}
            key={index}
          >
            <Image
              className="size-16 mb-4"
              src={curriculum.logo}
              width={80}
              height={80}
              alt="logo"
            />
            <h2 className="text-2xl font-bold">
              {curriculum.title}
              {curriculum.desc && (
                <small className="font-normal text-base">
                  {" "}
                  {curriculum.desc}
                </small>
              )}
            </h2>
            <hr className="mt-2 mb-5" />
            <ul className="text-gray-500 list-disc list-inside flex flex-col flex-wrap max-h-[40ch] lg:max-h-[17ch]">
              {curriculum.list.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
