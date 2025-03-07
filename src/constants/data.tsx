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
<<<<<<< HEAD
    title: "Kodein Incubator",
    desc: "Di KODEIN Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
=======
    title: "Incubator",
    desc: "Di Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
>>>>>>> 4b33628534dc17935c2baaf7e918b2f4c82f01a7
    href: "#",
  },
<<<<<<< HEAD
]

export const curriculum: Array<{
  title: string;
  desc: string;
  details: string[];
  image: number;
}> = [
  {
    title: "Materi Diniyah",
    desc: "",
    details: ["Tauhid", "Tahfidz", "Tafsir", "Hadist", "Fiqih", "Siroh"],
    image: 1,
  },
  {
    title: "Materi IT",
    desc: "(Information Technology)",
    details: [
=======
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
>>>>>>> 4b33628534dc17935c2baaf7e918b2f4c82f01a7
      "Web Programming",
      "Mobile Programming",
      "UI/UX",
      "Database",
      "Graphic Design",
      "Motion Graphic",
<<<<<<< HEAD
      "Vidio Editing",
      "Networking",
      "IoT",
    ],
    image: 2,
  },
  {
    title: "Materi Diknas",
    desc: "",
    details: [
=======
      "Video Editing",
      "Networking",
      "IoT",
    ],
  },
  {
    title: "Materi Diknas",
    logo: "/img/logo/diknas.svg",
    list: [
>>>>>>> 4b33628534dc17935c2baaf7e918b2f4c82f01a7
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA Terpadu",
<<<<<<< HEAD
      "IPS Terpadu",
      "PKN",
      "Try Out UTBK",
    ],
    image: 3,
  },
];

=======
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
>>>>>>> 4b33628534dc17935c2baaf7e918b2f4c82f01a7
