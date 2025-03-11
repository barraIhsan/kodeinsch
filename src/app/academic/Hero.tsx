import { Title } from "@/components/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "@/app/shadow.module.css";

export default function Hero() {
  return (
    <main className="container mx-auto flex flex-col lg:flex-row justify-between gap-12 py-14">
      <div className="flex-1 flex gap-8 flex-col justify-center">
        <Title className="text-white" shadow>
          Akademik
        </Title>
        <p className="text-white text-lg lg:text-xl">
        Akademik ini adalah segala hal yang terkait dengan apa yang siswa akan dapatkan dari program pendidikan SEKOLAH DEVELOPER INDONESIA.
        </p>
      </div>
      <div className="flex-1 relative flex justify-center md:justify-between">
      </div>
    </main>
  );
}
