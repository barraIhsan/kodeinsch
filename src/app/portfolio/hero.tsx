import { Title } from "@/components/Text";
import Image from "next/image";

export default function HeroPortfolio() {
  return (
    <main className="container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-8 py-14">
      <div className="flex-1 flex gap-8 flex-col justify-center">
        <Title className="text-white" shadow>
          Portfolio Siswa
        </Title>
        <p className="text-white text-lg lg:text-xl">
          Portfolio Web Siswa bertujuan untuk membantu siswa memamerkan hasil
          karya mereka secara online, memberikan pengalaman langsung dalam dunia
          desain web, serta meningkatkan kemampuan dalam pengelolaan dan
          pengembangan proyek digital.
        </p>
      </div>
      <div className="flex-1">
        <Image src="/img/hero/activity.svg" alt="" width={744} height={460} />
      </div>
    </main>
  );
}
