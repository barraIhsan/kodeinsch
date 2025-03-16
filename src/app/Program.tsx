"use client";
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/Text";
import styles from "./shadow.module.css";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Program() {
  const [expand, setExpand] = useState(false);
  return (
    <section
      id="program"
      className="border-x container mx-auto grid gap-14 lg:pt-12 pb-12 lg:pb-20"
    >
      <Title className="py-2.5 text-center border-b">Program Unggulan</Title>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-5 sm:px-12">
        {programs.map((program, index) => (
          <div
            key={index}
            className={cn(
              "border rounded-2xl bg-linear-to-b from-white to-slate-50/70 outline-2 outline-white -outline-offset-3 p-3",
              index > 2 && !expand && "hidden",
              styles.shadow,
            )}
          >
            <div className="relative mb-8">
              <Image
                {...program.img}
                src={"/img/program/" + program.img.src}
                className="w-full object-cover rounded-md h-40"
              />
              <Image
                src={"/img/logo/" + program.logo}
                alt=""
                width={64}
                height={64}
                className="p-2 rounded-full size-16 absolute bg-white -bottom-7 left-4 object-contain"
              />
            </div>
            <div className="px-5 py-3">
              <h5 className="text-lg sm:text-xl lg:text-2xl font-bold">
                {program.title}
              </h5>
              <p className="text-sm sm:text-base text-gray-500 mt-2 mb-8 h-full">
                {program.desc}
              </p>
              <Button variant="outline" size="lg">
                Info Selengkapnya
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5">
        <hr className="w-full" />
        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "Lihat lebih sedikit" : "Lihat lebih banyak"}
        </Button>
        <hr className="w-full" />
      </div>
    </section>
  );
}
