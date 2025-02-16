import { Title } from "@/components/Text";
import Image from "next/image";

const missions = [
  "Menghasilkan lulusan yang memiliki berbagai skill dalam bidang IT.",
  "Mengembangkan keterampilan IT peserta didik engan metode ‘learning by project’",
  "Menanamkan Tahuid, Aqidah dan Prinsip yang benar pada peserta didik.",
  "Membina akhlak dan kepribadian peserta didik.",
  "Menyelenggarakan pembelajaran yang menumbuh kembangkan kreatifitas dan inovatif peserta didik.",
];

export default function Mission() {
  return (
    <section className="container mx-auto border-x border-gray-300 pt-10">
      <Title className="text-center py-2.5 border-b border-gray-300">
        Visi Misi Kami
      </Title>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-8 space-y-5">
          <Image
            src="/img/logo/eye.svg"
            alt=""
            width={80}
            height={80}
            className="size-14 lg:size-20"
          />
          <div className="lg:pl-2.5">
            <p className="text-3xl font-semibold mb-5">Visi</p>
            <p className="text-gray-500 text-xl">
              Menjadi lembaga pendidikan terbaik bertaraf internasional untuk
              mencetak generasi muda yang proffesional, amanah dan siap bersaing
            </p>
          </div>
        </div>
        <div className="flex-1 p-8 border-t lg:border-t-0 lg:border-l border-gray-300 space-y-5 pb-40">
          <Image
            src="/img/logo/clip.svg"
            alt=""
            width={80}
            height={80}
            className="size-14 lg:size-20"
          />
          <div className="lg:pl-2.5">
            <p className="text-3xl font-semibold mb-5">Misi</p>
            <ul className="text-gray-500 text-xl ml-8">
              {missions.map((mission, index) => (
                <li key={index} className="list-disc">
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
