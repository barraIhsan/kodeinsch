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
    </section>
  );
}
