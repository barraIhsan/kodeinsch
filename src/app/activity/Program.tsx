<<<<<<< HEAD
import Programs from "./ProgramComp";

export default function ProgramActivity() {
  return (
    <section className="container mx-auto py-8 border-x border-gray-200">
      <Programs
        title="English Camp"
        description="Dengan kurikulum intensif selama dua bulan di Kampung Inggris Pare, peserta akan mengalami peningkatan pesat dalam kemampuan berbahasa Inggris. Fokus utama pada pemahaman mendalam materi dan latihan berbicara yang intensif, serta metode pembelajaran yang inovatif, akan membekali peserta dengan keahlian yang sangat dibutuhkan dalam persaingan global. Lingkungan belajar yang mendukung dan fasilitas yang lengkap menjadikan Kampung Inggris Pare sebagai pilihan terbaik bagi siapa saja yang ingin menguasai bahasa Inggris dengan cepat dan efektif."
        imageSrc="/img/program/4.png"
        reverse={false}
      />

      <Programs
        title="Qur'an Camp"
        description="Dengan mengikuti Quran Camp, peserta akan memiliki kemampuan tilawah yang lebih baik, penguasaan tajwid dan makhraj yang benar, serta pemahaman yang mendalam tentang Al-Qur'an. Keterampilan ini akan menjadi bekal yang sangat berharga sepanjang hidup, baik dalam ibadah sehari-hari maupun dalam meningkatkan kualitas diri."
        imageSrc="/img/program/1.png"
        reverse={true}
      />

      <Programs
        title="Kodein Incubator"
        description="Di KODEIN Incubator, siswa tidak hanya belajar teori, tetapi juga langsung terjun ke dunia kerja nyata melalui proyek internal yang dirancang menyerupai proyek profesional. Dengan simulasi ini, siswa mendapatkan pengalaman berharga dalam mengelola proyek, bekerja sama dalam tim, dan menyelesaikan masalah. Pengalaman ini menjadi bekal yang sangat berharga ketika mereka menghadapi proyek eksternal di masa depan. Selain itu, siswa juga mendapatkan mentoring dari mentor-mentor yang berpengalaman di industri dan berkesempatan untuk berkolaborasi dengan siswa-siswa"
        imageSrc="/img/program/3.png"
        reverse={false}
      />
=======
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/components/Text";
import Image from "next/image";
import { activity } from "@/data/activity";
import { cn } from "@/lib/utils";
import styles from "@/app/shadow.module.css";

export default function Program({
  title,
  activities,
}: {
  title: string;
  activities: Array<activity>;
}) {
  return (
    <section className="z-10 py-12 border-x last:pb-24">
      <Carousel className="space-y-12">
        <div className="flex items-center justify-between px-5 border-y">
          <Title className="text-black my-3">{title}</Title>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="px-3 pl-12">
          {activities.map((activity, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 xl:basis-1/3"
            >
              <div
                className={cn(
                  "border rounded-2xl bg-linear-to-b from-white to-slate-50 to-70% outline-2 outline-white -outline-offset-3 p-3 h-full",
                  styles.shadow,
                )}
              >
                <Image
                  src={"/img/activity/" + activity.src}
                  width={600}
                  height={263}
                  alt={activity.title}
                  className="object-cover rounded-lg w-full h-56 mb-3"
                />
                <div className="px-5 py-3">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                    {activity.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 my-2">
                    {activity.desc}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
>>>>>>> origin/master
    </section>
  );
}
