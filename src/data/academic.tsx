import { club, ekstrakulikuler, englishcamp, incubator, kajianislam, koching, ldks, qurancamp, sertifikat, tahfidzquran, tryoutbulanan } from "../../public/img/program";

export interface academic {
  img: string;
  title: string;
  desc: string;
}

export const programunggulan: Array<academic> = [
  {
    img: "4.png",
    title: "English Camp",
    desc: "Program dua bulan di Pare Kampung Inggris mengajarkan Bahasa Inggris lewat imersi, membangun kepercayaan diri siswa untuk berinteraksi dalam dunia profesional dan sosial digital.",
  },
  {
    img: "1.png",
    title: "Qur'an Camp",
    desc: "Peserta akan menghabiskan satu bulan di Pare untuk melatih tilawah, memperkuat iman, dan menjadikan Al-Qur'an panduan hidup.",
  },
  {
    img: "3.png",
    title: "Incubator",
    desc: "Program ini memberikan kesempatan dan eksperien kepada siswa untuk mengerjakan internal project sebagai simulasi dan persiapan untuk projek-projek eksternal kedepannya.",
  },
];

export const programlainnya: Array<academic> = [
  {
    img: club.src,
    title: "Club",
    desc: "Kami memiliki dua pilihan club yaitu Programming dan Multimedia Club. Dua club ini dibuat untuk lebih mengasah dan lebih mendalami pelajaran yang telah diberikan di kelas.",
  },
  {
    img: koching.src,
    title: "Koching",
    desc: "Program ini bertujuan untuk mempermudah siswa dalam mengerjakan tugas / project dengan cara konsultasi kepada mentor atau musyrif dalam bidangnya",
  },
  {
    img: ekstrakulikuler.src,
    title: "Ekstrakulikuler",
    desc: "Di samping kegiatan akademik, siswa juga dapat mengikuti futsal dan basket untuk menjaga kebugaran. Kegiatan ini penting untuk melengkapi keterampilan mereka di bidang digital.",
  },
  {
    img: tahfidzquran.src,
    title: "Tahfidz Qur'an",
    desc: "Program Tahfidz Qur'an mendukung siswa dalam menghafal dan memahami makna Al-Qur'an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
  {
    img: kajianislam.src,
    title: "Qur'an Camp",
    desc: "Dalam Program Kajian Islam, siswa diajak mendalami nilai-nilai Islam melalui kajian rutin yang membahas topik keagamaan, akhlak, dan kehidupan sehari-hari.",
  },
  {
    img: tryoutbulanan.src,
    title: "Tryout Bulanan",
    desc: "Program Tryout Diknas bulanan membantu siswa mempersiapkan diri menghadapi ujian resmi dengan latihan soal yang sesuai standar, meningkatkan pemahaman dan kesiapan mereka.",
  },
  {
    img: sertifikat.src,
    title: "Sertifikat",
    desc: "Meskipun menempuh pendidikan paket C, siswa didorong untuk meraih berbagai sertifikasi tambahan yang relevan, memperkuat keterampilan dan daya saing mereka.",
  },
  {
    img: ldks.src,
    title: "LDKS",
    desc: "Program LDKS bertujuan untuk membentuk generasi muda yang siap memimpin dengan nilai-nilai positif, meningkatkan kedisiplinan, dan mempererat kebersamaan di antara sesama siswa.",
  },
];
