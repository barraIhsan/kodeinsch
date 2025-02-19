/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { heros } from "@/constants/images";
import { Title } from "@/components/Text";

export default function Hero() {
  return (
    <main className="mx-auto overflow-hidden flex flex-col gap-12 2xl:gap-24 justify-center items-center py-36 px-5 sm:px-12 relative">
      <div className="flex flex-col items-center">
        <div className="max-w-[85ch] space-y-5 text-center">
          <Title h1>Boarding School dengan fokus IT dan Multimedia</Title>
          <p className="text-lg xl:text-xl text-black/50">
            Tempat teknologi bertemu nilai Islami, membentuk generasi kreatif
            dan berintegritas melalui pendidikan modern dan moral kuat.
          </p>
        </div>
        <div className="max-w-[70ch] w-full border-y xl:border-t xl:border-b-0 border-gray-400/50 px-5 py-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-14 relative">
          <div>
            <p className="font-bold">Pendaftaran Masih Dibuka!</p>
            <p className="text-gray-500 text-sm">
              Gelombang ketiga: 1 Feb - 30 Jun 2025
            </p>
          </div>
          <Button className="shadow-2xl bg-gradient-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]">
            <Link href="/form">Daftar Sekarang</Link>
          </Button>
          <div className="absolute -left-2 -top-3 size-5 animate-ping rounded-full bg-red-600" />
          <div className="absolute -left-2 -top-3 size-5 rounded-full bg-red-600" />
        </div>
      </div>
      <div className="relative drop-shadow-xl">
        <Image
          {...heros[0]}
          className="w-full lg:w-[45rem] rounded-2xl relative z-10 object-cover"
        />
        <Image
          {...heros[1]}
          className="w-full lg:w-[40rem] lg:rounded-2xl absolute -bottom-12 -rotate-2 rounded-3xl lg:-bottom-8 lg:-right-96 lg:rotate-12 object-cover"
        />
        <Image
          {...heros[2]}
          className="w-full lg:w-[40rem] rounded-2xl absolute -bottom-8 rotate-2 lg:-bottom-8 lg:-left-96 lg:-rotate-12 object-cover"
        />
      </div>
      <div className="absolute container mx-auto size-full border-x border-gray-200" />
    </main>
  );
}
