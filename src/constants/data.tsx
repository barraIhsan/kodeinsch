export const leftMenus: Array<{
  label: string;
  href: string;
  newTab?: boolean;
  menus?: Array<{
    label: string;
    desc: string;
    href: string;
  }>;
}> = [
  // TODO: For the time being, leave this empty for prod
  // {
  //   label: "Sekolah Kami",
  //   href: "#",
  //   menus: [
  //     {
  //       label: "Tentang Kami",
  //       desc: "lorem ipsum dolor sit amet",
  //       href: "#",
  //     },
  //     {
  //       label: "Akademik",
  //       desc: "lorem ipsum dolor sit amet",
  //       href: "#",
  //     },
  //   ],
  // },
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
    href: "https://forms.gle/jmwgJAVRa5dEqKKd9",
    newTab: true,
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
    title: "Kodein Incubator",
    desc: "Di Kodein Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
    href: "#",
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
        href: "#",
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
        href: "#",
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
