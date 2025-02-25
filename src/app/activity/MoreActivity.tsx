/* eslint-disable jsx-a11y/alt-text */
"@/components/ui/carousel";
import { Title } from "@/components/Text";
import { activites } from "@/constants/data";
import Image from "next/image";

export default function MoreActivity() {
  return (
    <section className="z-10 border-x border-gray-200">
      <div className="flex items-center justify-between px-5 border-y border-gray-200">
        <Title className="text-black my-3">Kegiatan-Kegiatan Lainnya</Title>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-5 pb-48 border-gray-200 border-b">
        {activites.map((activity, index) => (
          <div className="" key={index}>
            <div className="bg-white border-gray-300 drop-shadow-lg p-3 rounded-2xl space-y-2">
              <Image {...activity.img} className="object-cover rounded-lg w-full h-56" />
              <p className="text-3xl font-semibold py-1 px-2.5 w-fit">
                {activity.head}
              </p>
              <p className="px-2.5 w-fit text-gray-400 text-xl pb-8">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
