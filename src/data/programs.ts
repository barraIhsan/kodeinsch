export const programs: Array<{
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
  logo: string;
  newTab?: boolean;
  href: string;
}> = [
  {
    img: {
      src: "/img/program/1.png",
      alt: "",
      width: 1600,
      height: 1204,
    },
    title: "Qur'an Camp",
    desc: "Siswa akan memoles kemampuan tilawah mereka di Pare, belajar tajwid dan makhraj, serta memperdalam hubungan spiritual dengan Al-Qur'an.",
    logo: "/img/logo/moon.svg",
    href: "#",
  },
  {
    img: {
      src: "/img/program/2.png",
      alt: "",
      width: 1600,
      height: 903,
    },
    title: "English Camp",
    desc: "Dua bulan di Pare Kampung Inggris akan memperkuat kemampuan Bahasa Inggris siswa, memastikan komunikasi efektif dalam dunia digital.",
    logo: "/img/logo/language.svg",
    href: "#",
  },
  {
    img: {
      src: "/img/program/3.png",
      alt: "",
      width: 1280,
      height: 853,
    },
    title: "Incubator",
    desc: "Di Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
    logo: "/img/logo/luggage.svg",
    href: "#",
  },
];
