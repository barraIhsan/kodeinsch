import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { collage } from "@/constants/collage";

export default function Hero() {
  return (
    <main className="container mx-auto xl:h-[max(60rem,100vh)] overflow-hidden flex flex-col xl:flex-row gap-12 2xl:gap-24 justify-center items-center py-40 md:py-48 px-5 sm:px-12">
      <div className="">
        <div className="max-w-[70ch] space-y-5">
          <h1 className="font-extrabold text-4xl xl:text-6xl">
            Boarding School dengan fokus IT dan Multimedia
          </h1>
          <p className="text-lg xl:text-xl text-black/50">
            Tempat teknologi bertemu nilai Islami, membentuk generasi kreatif
            dan berintegritas melalui pendidikan modern dan moral kuat.
          </p>
        </div>
        <div className="border-y xl:border-t xl:border-b-0 border-gray-400/50 px-5 py-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-14 relative">
          <div>
            <p className="font-bold">Pendaftaran Masih Dibuka!</p>
            <p className="text-gray-400 text-sm">
              Gelombang ketiga: 10 Okt - 24 Nov 2024
            </p>
          </div>
          <Button className="shadow-2xl bg-gradient-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]">
            <Link href="#">Daftar Sekarang</Link>
          </Button>
          <div className="absolute -left-2 -top-3 size-5 animate-ping rounded-full bg-red-600" />
          <div className="absolute -left-2 -top-3 size-5 rounded-full bg-red-600" />
        </div>
      </div>
      {/* eslint-disable jsx-a11y/alt-text */}
      <div className="h-[45rem] w-[42rem] grid grid-cols-[3fr,2fr] grid-rows-[1fr,1fr,1fr,2fr] gap-3">
        <div className="bg-gray-100 rounded-2xl p-5 flex gap-1 overflow-hidden">
          <Image
            {...collage[0]}
            className="size-36 xl:size-28 2xl:size-36 object-cover border-4 border-white rounded-xl object-right shadow-lg"
          />
          <Image
            {...collage[1]}
            className="size-36 xl:size-28 2xl:size-36 object-cover border-4 border-white rounded-t-xl object-left shadow-lg"
          />
          <Image
            {...collage[2]}
            className="size-36 xl:size-28 2xl:size-36 object-cover border-4 border-white rounded-xl object-right shadow-lg"
          />
        </div>
        <div className="bg-gray-100 rounded-2xl row-span-2 p-3 2xl:p-5 overflow-hidden relative">
          <Image
            {...collage[3]}
            className="w-56 xl:w-48 2xl:w-56 h-40 xl:h-32 2xl:h-40 border-4 border-white rounded-xl object-cover absolute -right-5 2xl:-right-12 shadow-lg"
          />
          <Image
            {...collage[4]}
            className="w-52 xl:w-48 2xl:w-52 h-32 xl:h-28 2xl:h-32 border-4 border-white rounded-xl object-cover absolute bottom-5 shadow-lg"
          />
        </div>
        <div className="bg-gray-100 rounded-2xl row-span-2 overflow-hidden">
          <Image {...collage[5]} className="size-full object-cover" />
        </div>
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          <Image {...collage[6]} className="size-full object-cover" />
        </div>
        <div className="bg-gray-100 rounded-2xl p-5 flex gap-1 overflow-hidden">
          <Image
            {...collage[7]}
            className="size-56 border-4 border-white rounded-xl object-cover shadow-lg"
          />
          <Image
            {...collage[8]}
            className="size-56 border-4 border-white rounded-xl object-cover shadow-lg shrink-0"
          />
        </div>
        <div className="bg-gray-100 rounded-2xl px-4 2xl:px-6 py-5 2xl:py-9 overflow-hidden">
          <Image
            {...collage[9]}
            className="w-60 h-64 object-cover rounded-xl border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
