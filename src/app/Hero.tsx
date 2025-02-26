/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Title } from "@/components/Text";

export default function Hero() {
  return (
    <main className="container border-x mx-auto overflow-hidden flex flex-col gap-12 2xl:gap-24 justify-center items-center py-36 relative z-0">
      <div className="flex flex-col items-center px-5 sm:px-12">
        <div className="max-w-[85ch] space-y-5 text-center">
          <Title h1>Boarding School dengan fokus IT dan Multimedia</Title>
          <p className="text-lg xl:text-xl text-black/50">
            Tempat teknologi bertemu nilai Islami, membentuk generasi kreatif
            dan berintegritas melalui pendidikan modern dan moral kuat.
          </p>
        </div>
        <div className="max-w-[70ch] w-full px-5 border-y xl:border-t xl:border-b-0 border-gray-400/50 py-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-14 relative">
          <div>
            <p className="font-bold">Pendaftaran Masih Dibuka!</p>
            <p className="text-gray-500 text-sm">
              Gelombang ketiga: 1 Feb - 30 Jun 2025
            </p>
          </div>
          <Button className="shadow-2xl bg-linear-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]">
            <Link href="/form">Daftar Sekarang</Link>
          </Button>
          <div className="absolute -left-2 -top-3 size-5 animate-ping rounded-full bg-red-600" />
          <div className="absolute -left-2 -top-3 size-5 rounded-full bg-red-600" />
        </div>
      </div>
      <div className="relative drop-shadow-xl w-fit lg:max-w-none">
        <Image
          src="/img/hero/home/1.png"
          alt="hero"
          width={720}
          height={500}
          className="w-full lg:w-[45rem] rounded-2xl relative z-10 object-cover"
        />
        <Image
          src="/img/hero/home/2.png"
          alt="hero"
          width={620}
          height={460}
          className="w-full lg:w-[35rem] rounded-2xl absolute -bottom-1 -rotate-2 lg:bottom-5 lg:-right-28 xl:-right-60 2xl:-right-[23rem] lg:rotate-12 object-cover"
        />
        <Image
          src="/img/hero/home/3.png"
          alt="hero"
          width={620}
          height={460}
          className="w-full lg:w-[35rem] rounded-2xl absolute bottom-2 rotate-2 lg:bottom-5 lg:-left-28 xl:-left-60 2xl:-left-[23rem] lg:-rotate-12 object-cover"
        />
      </div>
    </main>
  );
}
