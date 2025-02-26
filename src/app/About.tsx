import { Title } from "@/components/Text";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col-reverse xl:flex-row justify-between items-center gap-8 lg:gap-12">
      <div className="flex-1 space-y-5 lg:space-y-8">
        <Title className="text-white" shadow>
          Mengapa Kami Hadir
        </Title>
        <p className="text-white text-md md:text-xl">
          <span className="font-bold">Sekolah Developer Indonesia </span>
          dirancang untuk mempersiapkan siswa menghadapi dunia pendidikan tinggi
          dan karier di bidang teknologi dan industri kreatif. Kami berfokus
          pada membentuk generasi yang inovatif, berpikiran terbuka, dan siap
          berkontribusi dalam masyarakat global. Dengan pendekatan berbasis
          proyek, siswa kami dilatih untuk mengembangkan solusi nyata yang
          relevan dengan tantangan dunia, sekaligus dibekali keterampilan
          programming, multimedia, serta kemampuan manajemen proyek dan berpikir
          strategis.
        </p>
      </div>
      <div className="flex-1 h-[30rem] flex justify-center items-center">
        <Image
          className="object-cover rounded-3xl size-full"
          width={4032}
          height={2268}
          alt=""
          src="/img/about.png"
        />
      </div>
    </section>
  );
}
