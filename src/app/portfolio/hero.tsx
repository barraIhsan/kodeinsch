import { Title } from "@/components/Text";
import Image from "next/image";

export default function HeroPortfolio() {
  return (
    <main className="container mx-auto flex flex-col-reverse lg:flex-row justify-between gap-8 py-14">
      <div className="flex-1 flex gap-8 flex-col justify-center">
        <Title className="text-white" shadow>
          Portfolio Siswa
        </Title>
        <p className="text-white text-lg lg:text-xl max-w-xl">
          Portfolio Web Siswa bertujuan untuk membantu siswa memamerkan hasil
          karya mereka secara online, memberikan pengalaman langsung dalam dunia
          desain web, serta meningkatkan kemampuan dalam pengelolaan dan
          pengembangan proyek digital.
        </p>
      </div>
      <div className="flex-1 relative flex justify-center md:justify-between">
        <div className="lg:-bottom-50 lg:-left-16 relative lg:absolute rounded-xl hidden md:block">
          <Image
            src="/img/hero/yasinporto.png"
            alt="yasin"
            width={253}
            height={549}
            className="w-[14rem] h-[30rem] object-cover rounded-lg"
          />
        </div>
        <div className="lg:-bottom-50 lg:-right-44 relative lg:absolute rounded-xl hidden md:block">
          <Image
            src="/img/hero/barraporto.png"
            alt="yasin"
            width={744}
            height={549}
            className="w-[40rem] h-[30rem] object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
