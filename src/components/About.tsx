import { curriculums } from "@/constants/data";
export default function About() {
  return (
    <div className="bg-blue-600 mx-48 my-20 py-56 px-28 rounded-3xl">
      <section className="flex flex-col xl:flex-row justify-between container">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">
            Mengapa Kami Hadir
          </h2>
          <p className="text-gray-100 text-lg md:text-xl font-thin max-w-2xl">
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
        <div></div>
      </section>
      <section className="flex flex-col items-center pt-40">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-16 mb-10">
          Kurikulum Kami
        </h2>
        <div className="flex gap-12 w-full">
          {curriculums.map((curriculum, index) => (
            <div className="bg-white px-8 py-14 rounded-3xl flex-1" key={index}>
              <h2 className="text-2xl font-bold">{curriculum.title}</h2>
              <hr className="mt-2 mb-5" />
              <ul className="text-gray-400 list-disc list-inside flex flex-col flex-wrap max-h-[15ch]">
                {curriculum.list.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
