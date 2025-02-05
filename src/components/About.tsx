import { curriculums } from "@/constants/data";
import Image from "next/image";

export default function About() {
  return (
    <div className="2xl:px-32 sm:px-8 lg:px-20 py-12 lg:py-16 2xl:py-24">
    <div className="bg-blue-700 flex flex-col gap-6 lg:gap-10 shadow-xl rounded-xl size-full px-5 sm:px-12 lg:px-16 py-5 sm:py-48">
      <section className="flex flex-col-reverse xl:flex-row justify-between items-center container gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">
            Mengapa Kami Hadir
          </h2>
          <p className="text-gray-100 text-md md:text-xl font-thin w-full sm:max-w-3xl">
            KODEIN dirancang untuk mempersiapkan siswa menghadapi dunia
            pendidikan tinggi dan karier di bidang teknologi dan industri
            kreatif. Kami berfokus pada membentuk generasi yang inovatif,
            berpikiran terbuka, dan siap berkontribusi dalam masyarakat global.
            Dengan pendekatan berbasis proyek, siswa kami dilatih untuk
            mengembangkan solusi nyata yang relevan dengan tantangan dunia,
            sekaligus dibekali keterampilan programming, multimedia, serta
            kemampuan manajemen proyek dan berpikir strategis.
          </p>
        </div>
        <div className="flex-1 pt-24 sm:pt-0">
        <Image className="object-cover rounded-3xl" width={4032} height={2268} alt="" src="/img/about/about.png" />
        </div>
      </section>
      <section className="flex flex-col items-center pt-12 sm:pt-36">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-16 mb-10">
          Kurikulum Kami
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          {curriculums.map((curriculum, index) => (
            <div className="bg-white px-8 py-10 rounded-3xl flex-1 min-w-72" key={index}>
              <Image className="pb-4" src={curriculum.logo} width={80} height={80} alt=""/>
              <h2 className="text-2xl font-bold">{curriculum.title}</h2>
              <hr className="mt-2 mb-5" />
              <ul className="text-gray-400 list-disc list-inside flex flex-col flex-wrap max-h-[40ch] lg:max-h-[15ch]">
                {curriculum.list.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
