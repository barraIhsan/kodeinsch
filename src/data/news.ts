export interface newsModel {
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
}

export const newsData: Array<newsModel> = [
  {
    img: {
      src: "1.png",
      alt: "",
      width: 1600,
      height: 1204,
    },
    title: "Libur Ramadhan",
    desc: "Siswa-Siswa SEKOLAH DEVELOPER INDONESIA akan menghabiskan Waktunya di bulan Suci Ramadhan dengan menambah amalannya di Rumah.",
  },
  {
    img: {
      src: "1.png",
      alt: "",
      width: 1600,
      height: 1204,
    },
    title: "Kelas 12 Lulus??",
    desc: "Siswa-Siswa SEKOLAH DEVELOPER INDONESIA yang berada di bangku kelas 12 akan segera pamit",
  },
  {
    img: {
      src: "1.png",
      alt: "",
      width: 1600,
      height: 1204,
    },
    title: "Qur'an Camp",
    desc: "Siswa akan memoles kemampuan tilawah mereka di Pare, belajar tajwid dan makhraj, serta memperdalam hubungan spiritual dengan Al-Qur'an.",
  },
];
