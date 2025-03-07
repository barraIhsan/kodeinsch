/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { aboutImg } from "@/constants/images";
import { curriculum } from "@/constants/data";
export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#235EDC] to-[#1B52C8] rounded-[20px] h-[176
      0px] relative overflow-hidden mx-10 lg:mx-20"
    >
      {/* Gambar latar belakang */}
      <Image
        {...aboutImg[4]}
        className="absolute bottom-0 left-40 w-48 sm:w-[470px] md:w-[938px] lg:w-[1406px] "
      />
      <Image
        {...aboutImg[5]}
        className="absolute left-0 w-20 sm:qw-[175px] md:w-[350px] lg:w-[525px]"
      />
      <Image
        {...aboutImg[6]}
        className="absolute right-0 w-28 sm:w-[215px] md:w-[428px] lg:w-[641px]"
      />

      {/* Konten utama */}
      <div className="container px-3 sm:px-5 md:px-10 lg:mx-auto relative z-10 w-">
        {/* Mengapa Kami Hadir */}
        <div className="flex flex-col-reverse sm:flex-col-reverse lg:flex-row  gap-0 lg:gap-20 py-9 sm:py-[75px] md:py-36 lg:py-[220px] items-center text-left">
          <div className="flex-1 grid gap-4 lg:gap-8 w-full text-center lg:text-left">
            <h3 className="font-extrabold text-xl md:text-4xl lg:text-6xl text-white">
              Mengapa Kami Hadir
            </h3>
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-left md:text-balance pl-7 md:pl-7 lg:pl-0 pr-4 md:pr-4">
              KODEIN dirancang untuk mempersiapkan siswa menghadapi dunia
              pendidikan tinggi dan karier di bidang teknologi dan industri
              kreatif. Kami berfokus pada membentuk generasi yang inovatif,
              berpikiran terbuka, dan siap berkontribusi dalam masyarakat
              global. Dengan pendekatan berbasis proyek, siswa kami dilatih
              untuk mengembangkan solusi nyata yang relevan dengan tantangan
              dunia, sekaligus dibekali keterampilan programming, multimedia,
              serta kemampuan manajemen proyek dan berpikir strategis.
            </p>
          </div>
          <div className="flex-1">
            <Image
              {...aboutImg[0]}
              className="rounded-"
            />
          </div>
        </div>

        {/* Kurikulum Kami */}
        <div className="pb-2 sm:pb-4 md:pb-9 lg:pb-56 w-fit">
          <h3 className="font-extrabold text-center text-6xl text-white mb-14">
            Kurikulum Kami
          </h3>
          <div className="grid xl:grid-cols-3 gap-10 lg:gap-20 lg:grid lg:grid-cols-2 ">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white w-20 sm:w-40 lg:w-80 xl:w-[30.313rem] lg:h-[26.688rem] p-5 pl-8 pt-8 rounded-2xl flex lg:flex-col gap-5 drop-shadow-2xl"
              >
                <div className="flex">
                  <Image {...aboutImg[item.image]} className="w-10 lg:w-14 xl:w-fit" />
                </div>
                <h4 className="font-bold text-xl lg:text-2xl text-black underline underline-offset-[12px] decoration-gray-100">
                  {item.title}{" "}
                  <span className="font-normal text-base lg:text-xl">
                    {item.desc}
                  </span>
                </h4>
                <ul className="xl:flex text-gray-400 text-xl flex-col max-h-44 flex-wrap lg:grid">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span>•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






