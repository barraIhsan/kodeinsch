export const leftMenus: Array<{
  label: string;
  href?: string;
  newTab?: boolean;
  menus?: Array<{
    label: string;
    desc: string;
    href: string;
  }>;
}> = [
  // TODO: For the time being, leave this empty for prod
  {
    label: "Sekolah Kami",
    menus: [
      {
        label: "Tentang Kami",
        desc: "",
        href: "/about",
      },
      // {
      //   label: "Akademik",
      //   desc: "lorem ipsum dolor sit amet",
      //   href: "#",
      // },
    ],
  },
  // {
  //   label: "Student Life",
  //   href: "#",
  //   menus: [
  //     {
  //       label: "Kegiatan Siswa",
  //       desc: "lorem ipsum dolor sit amet",
  //       href: "#",
  //     },
  //     {
  //       label: "Portfolio",
  //       desc: "lorem ipsum dolor sit amet",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "News",
  //   href: "#",
  // },
];

export const rightMenus: Array<{
  label: string;
  href: string;
  btnVariant: "default" | "outline";
  newTab?: boolean;
  className?: string;
}> = [
  {
    label: "School Tour",
    href: "#",
    btnVariant: "outline",
  },
  {
    label: "PPDB",
    href: "/form",
    btnVariant: "default",
    className:
      "bg-gradient-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]",
  },
];

export const programs: Array<{
  title: string;
  desc: string;
  newTab?: boolean;
  href: string;
}> = [
  {
    title: "Qur'an Camp",
    desc: "Siswa akan memoles kemampuan tilawah mereka di Pare, belajar tajwid dan makhraj, serta memperdalam hubungan spiritual dengan Al-Qur'an.",
    href: "#",
  },
  {
    title: "English Camp",
    desc: "Dua bulan di Pare Kampung Inggris akan memperkuat kemampuan Bahasa Inggris siswa, memastikan komunikasi efektif dalam dunia digital.",
    href: "#",
  },
  {
    title: "Incubator",
    desc: "Di Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
    href: "#",
  },
];

export const curriculums: Array<{
  title: string;
  desc?: string;
  logo: string;
  list: Array<string>;
}> = [
  {
    title: "Materi Diniyah",
    logo: "/img/logo/moon.svg",
    list: ["Tauhid", "Tahfidz", "Tafsir", "Hadist", "Fiqih", "Siroh"],
  },
  {
    title: "Materi IT",
    logo: "/img/logo/code.svg",
    desc: "(Information Technology)",
    list: [
      "Web Programming",
      "Mobile Programming",
      "UI/UX",
      "Database",
      "Graphic Design",
      "Motion Graphic",
      "Video Editing",
      "Networking",
      "IoT",
    ],
  },
  {
    title: "Materi Diknas",
    logo: "/img/logo/diknas.svg",
    list: [
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA Terpadu",
      "Try Out UTBK",
    ],
  },
];

export const roadmaps: Array<Array<Array<{ title: string; desc: string }>>> = [
  [
    [
      {
        title: "Komputer Dasar",
        desc: "Microsoft Word, Microsoft Excel, dan Microsoft Power Point",
      },
      {
        title: "UI/UX",
        desc: "Figma",
      },
    ],
    [
      {
        title: "Front-end",
        desc: "HTML/CSS",
      },
      {
        title: "Web Framework",
        desc: "TailwindCSS, ui/shadcn, Vite, React, dan Next.js",
      },
    ],
  ],
  [
    [
      {
        title: "Back-end",
        desc: "NodeJS, Express.js",
      },
      {
        title: "Multimedia",
        desc: "Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, dan Blender",
      },
    ],
    [
      {
        title: "Mobile Apps",
        desc: "Dart dan Flutter",
      },
      {
        title: "Sertifikasi",
        desc: "Project",
      },
    ],
  ],
  [
    [
      {
        title: "Sertifikasi",
        desc: "Project",
      },
    ],
    [
      {
        title: "Sertifikasi",
        desc: "Project",
      },
    ],
  ],
];

export const footerLinks: Array<{
  title: string;
  links: Array<{
    label: string;
    href: string;
    newTab?: boolean;
  }>;
}> = [
  {
    title: "Sekolah",
    links: [
      {
        label: "Tentang",
        href: "/about",
      },
      {
        label: "Berita",
        href: "#",
      },
      {
        label: "Akademik",
        href: "#",
      },
      {
        label: "Kontak",
        href: "#",
      },
    ],
  },
  {
    title: "Siswa",
    links: [
      {
        label: "Kegiatan",
        href: "#",
      },
      {
        label: "Portfolio",
        href: "#",
      },
    ],
  },
  {
    title: "PPDB",
    links: [
      {
        label: "School Tour",
        href: "#",
      },
      {
        label: "Daftar",
        href: "/form",
      },
    ],
  },
];

export const testimonials: Array<{
  rate: number;
  review: string;
  pfp: string;
  name: string;
  position: string;
}> = [
  {
    rate: 5,
    review:
      "Selain Ilmu, banyak pengalaman dan kesan yang saya rasakan seperti mentor belajar yang baik, fasilitas memadai, sekaligus itu membuat saya nyaman untuk bersekolah di Sekolah Developer Indonesia",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Halim",
    position: "Alumni angkatan 0",
  },
  {
    rate: 5,
    review:
      "Saya optimis apa yang dipelajari di Sekolah Developer Indonesia akan jauh melampaui apa yang akan dipelajari oleh anak saya saat menempuh  perguruan tinggi nanti.",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Bpk. Tri Aguska",
    position: "Wali santri angkatan 1",
  },
  {
    rate: 5,
    review:
      "Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Bpk. Herman Harminggana",
    position: "Wali santri angkatan 2",
  },
  {
    rate: 5,
    review:
      "Kami sebagai orang tua tidak salah memilih Sekolah Developer Indonesia untuk putra kami karena kurikulum Pendidikan IT yang sesuai harapan  kami. Kurikulum yang relevan dengan industry IT",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Bpk. Wihandani",
    position: "Wali santri angkatan 2",
  },
];

export const facilities: Array<{
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  desc: string;
}> = [
  {
    img: {
      src: "/img/facility/field.png",
      width: 4032,
      height: 2268,
      alt: "",
    },
    desc: "Lapangan",
  },
  {
    img: {
      src: "/img/facility/field.png",
      width: 4032,
      height: 2268,
      alt: "",
    },
    desc: "Aula",
  },
  {
    img: {
      src: "/img/facility/field.png",
      width: 4032,
      height: 2268,
      alt: "",
    },
    desc: "Tempat Makan",
  },
  {
    img: {
      src: "/img/facility/field.png",
      width: 4032,
      height: 2268,
      alt: "",
    },
    desc: "Kelas",
  },
  {
    img: {
      src: "/img/facility/field.png",
      width: 4032,
      height: 2268,
      alt: "",
    },
    desc: "Asrama",
  },
];

export const activites: Array<{
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  head: string;
  desc: string;
}> = [
  {
    img: {
      src: "/img/MoreActivity/club.png",
      alt: "",
      width: 2364,
      height: 1330,
    },
    head: "Club",
    desc: "Program dua bulan di Pare Kampung Inggris mengajarkan Bahasa Inggris lewat imersi, membangun kepercayaan diri siswa untuk berinteraksi dalam dunia profesional dan sosial digital.",
  },
  {
    img: {
      src: "/img/MoreActivity/koching.png",
      alt: "",
      width: 4032,
      height: 2268,
    },
    head: "Koching",
    desc: "Program ini bertujuan untuk mempermudah siswa dalam mengerjakan tugas / project dengan cara konsultasi kepada mentor atau musyrif dalam bidangnya",
  },
  {
    img: {
      src: "/img/MoreActivity/ekstrakulikuler.png",
      alt: "",
      width: 1280,
      height: 961,
    },
    head: "Ekstrakulikuler",
    desc: "Di samping kegiatan akademik, siswa juga dapat mengikuti futsal dan basket untuk menjaga kebugaran. Kegiatan ini penting untuk melengkapi keterampilan mereka di bidang digital.",
  },
  {
    img: {
      src: "/img/MoreActivity/tahfidz.png",
      alt: "",
      width: 1280,
      height: 963,
    },
    head: "Tahfidz Qur'an",
    desc: "Program Tahfidz Qur’an mendukung siswa dalam menghafal dan memahami makna Al-Qur’an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
  {
    img: {
      src: "/img/MoreActivity/kajian.png",
      alt: "",
      width: 1600,
      height: 1204,
    },
    head: "Kajian Islam",
    desc: "Program Tahfidz Qur’an mendukung siswa dalam menghafal dan memahami makna Al-Qur’an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
  {
    img: {
      src: "/img/MoreActivity/tryout.png",
      alt: "",
      width: 4096,
      height: 3072,
    },
    head: "Tryout Bulanan",
    desc: "Program Tahfidz Qur’an mendukung siswa dalam menghafal dan memahami makna Al-Qur’an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
  {
    img: {
      src: "/img/MoreActivity/sertifikat.png",
      alt: "",
      width: 358,
      height: 256,
    },
    head: "Sertifikat",
    desc: "Program Tahfidz Qur’an mendukung siswa dalam menghafal dan memahami makna Al-Qur’an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
  {
    img: {
      src: "/img/MoreActivity/ldks.png",
      alt: "",
      width: 4096,
      height: 2731,
    },
    head: "LDKS",
    desc: "Program Tahfidz Qur’an mendukung siswa dalam menghafal dan memahami makna Al-Qur’an dengan bimbingan terstruktur, memperkuat hafalan dan nilai-nilai islami.",
  },
];

export const portfolio: Array<{
  image: string;
  pfp: string;
  name: string;
  position: string;
}> = [
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Abdullah Umair",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Ahmad Yasin Abdurahman",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Athallariq Muhammad Harith",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Barra Ihsan De Nugra",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Fadhil Akbar Djunaedi",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Farhan Muthawally",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Hudzaifah",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Ibadurrohman",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Muhammad Abdullah Azzam",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Muhammad Dhiyaulhaq Izzatuna",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Muhammad Hanif Alhaddad",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Muhammad Mulky Ayyubi",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Muhammad Zidane Rizkiqo",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Radithia Abdul Jabbar",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Rais Fatihul Ihsan",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Yahya Abdurrahman Ayyash",
    position: "Angkatan 1",
  },
  {
    image: "/img/MoreActivity/club.png",
    pfp: "/img/logo/user-placeholder.svg",
    name: "Zawindra Rafif Ramadhan",
    position: "Angkatan 1",
  },
];
