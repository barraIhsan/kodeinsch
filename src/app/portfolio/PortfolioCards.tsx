/* eslint-disable jsx-a11y/alt-text */
"@/components/ui/carousel";
import { portfolio } from "@/constants/data";
import Image from "next/image";

export default function PortfolioCards() {
  return (
    <section className="z-10 border-x border-gray-200">
      <div className="flex items-center justify-between px-5 border-y border-gray-200"></div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-5 pb-48">
        {portfolio.map((item, index) => (
          <div className="" key={index}>
            <div className="bg-white border-gray-300 drop-shadow-lg p-3 rounded-2xl space-y-2">
              <Image
                src={item.image}
                alt={item.position}
                width={482}
                height={343}
                className="object-cover rounded-lg"
              />
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  alt={item.name}
                  src={item.pfp}
                  className="object-cover rounded-full size-10"
                />
                <div>
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
