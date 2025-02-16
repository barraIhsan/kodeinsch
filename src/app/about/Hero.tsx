import { Title } from "@/components/Text";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-8 py-14">
      <div className="flex-1 flex gap-8 flex-col justify-center">
        <Title className="text-white" shadow>
          Sekolah Developer Indonesia // KODEIN
        </Title>
        <p className="text-white text-lg lg:text-xl">
          SEKOLAH DEVELOPER INDONESIA adalah salah satu wadah pendidikan IT
          setingkat SMA yang menggabungkan ilmu-ilmu Teknologi dengan ilmu-ilmu
          keislaman dalam rangka mencetak generasi muda muslim yang amanah dan
          siap bersaing dalam industri IT.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/img/hero/about.svg"
          alt=""
          width={744}
          height={460}
          className="object-cover"
        />
      </div>
    </main>
  );
}
