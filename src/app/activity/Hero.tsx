import { Title } from "@/components/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "@/app/shadow.module.css";

export default function Hero() {
  return (
    <main className="container mx-auto flex flex-col lg:flex-row justify-between gap-12 py-14">
      <div className="flex-1 flex gap-8 flex-col justify-center">
        <Title className="text-white" shadow>
          Kegiatan - Kegiatan Siswa
        </Title>
        <p className="text-white text-lg lg:text-xl">
          Berikut adalah beberapa kegiatan-kegiatan yg kami selenggarakan atau
          kegiatan/lomba yang para siswa SEKOLAH DEVELOPER INDONESIA ikuti
          sesuai inisiatif mereka.
        </p>
      </div>
      <div className="flex-1 relative flex justify-center md:justify-between">
        <div className="lg:-bottom-56 lg:left-0 relative lg:absolute p-3 pb-8 bg-white rounded-xl hidden md:block">
          <Image
            src="/img/hero/activity/1.png"
            alt="hero"
            width={300}
            height={384}
            className="w-[18rem] h-96 object-cover rounded-lg"
          />
          <div
            className={cn(
              "size-fit -right-5 bottom-14 absolute py-2.5 px-3 bg-linear-to-b from-[#2F6CD1] to-[#1A53C8] border border-[#1B52C8] text-white rounded-lg max-w-[15ch]",
              styles.shadow,
            )}
          >
            <p className="text-xs font-semibold">Kawah Ijen</p>
            <p className="text-[0.5rem] text-white/60">
              Para Siswa healing di Kawah Ijen setelah 2 bulan belajar di Pare.
            </p>
          </div>
        </div>
        <div className="lg:-top-24 lg:right-0 relative lg:absolute p-3 pb-8 bg-white rounded-xl">
          <Image
            src="/img/hero/activity/2.png"
            alt="hero"
            width={300}
            height={384}
            className="w-[18rem] h-96 object-cover rounded-lg"
          />
          <div
            className={cn(
              "size-fit -left-5 top-8 absolute py-2.5 px-3 bg-linear-to-b from-[#F7252C] to-[#D12328] border border-[#D5232A] text-white rounded-lg max-w-[15ch]",
              styles.shadow,
            )}
          >
            <p className="text-xs font-semibold">Go-Kart</p>
            <p className="text-[0.5rem] text-white/60">
              Siswa healing dengan bermain permainan Go-Kart.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
