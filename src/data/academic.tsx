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
    title: "English Camp",
    desc: "Program dua bulan di Pare Kampung Inggris mengajarkan Bahasa Inggris lewat imersi, membangun kepercayaan diri siswa untuk berinteraksi dalam dunia profesional dan sosial digital.",
  },
  {
    img: koching.src,
    title: "Qur'an Camp",
    desc: "Peserta akan menghabiskan satu bulan di Pare untuk melatih tilawah, memperkuat iman, dan menjadikan Al-Qur'an panduan hidup.",
  },
  {
    img: ekstrakulikuler.src,
    title: "Incubator",
    desc: "Program ini memberikan kesempatan dan eksperien kepada siswa untuk mengerjakan internal project sebagai simulasi dan persiapan untuk projek-projek eksternal kedepannya.",
  },
  {
    img: tahfidzquran.src,
    title: "English Camp",
    desc: "Program dua bulan di Pare Kampung Inggris mengajarkan Bahasa Inggris lewat imersi, membangun kepercayaan diri siswa untuk berinteraksi dalam dunia profesional dan sosial digital.",
  },
  {
    img: kajianislam.src,
    title: "Qur'an Camp",
    desc: "Peserta akan menghabiskan satu bulan di Pare untuk melatih tilawah, memperkuat iman, dan menjadikan Al-Qur'an panduan hidup.",
  },
  {
    img: tryoutbulanan.src,
    title: "Incubator",
    desc: "Program ini memberikan kesempatan dan eksperien kepada siswa untuk mengerjakan internal project sebagai simulasi dan persiapan untuk projek-projek eksternal kedepannya.",
  },
  {
    img: sertifikat.src,
    title: "Incubator",
    desc: "Program ini memberikan kesempatan dan eksperien kepada siswa untuk mengerjakan internal project sebagai simulasi dan persiapan untuk projek-projek eksternal kedepannya.",
  },
  {
    img: ldks.src,
    title: "Incubator",
    desc: "Program ini memberikan kesempatan dan eksperien kepada siswa untuk mengerjakan internal project sebagai simulasi dan persiapan untuk projek-projek eksternal kedepannya.",
  },
];
