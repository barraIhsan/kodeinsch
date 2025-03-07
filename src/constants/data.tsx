
export const leftMenus: Array<{
  label: string;
  href: string;
  menus?: Array<{
    label: string;
    desc: string;
    href: string;
  }>;
}> = [
  {
    label: "Sekolah Kami",
    href: "#",
    menus: [
      {
        label: "Tentang Kami",
        desc: "lorem ipsum dolor sit amet",
        href: "#",
      },
      {
        label: "Akademik",
        desc: "lorem ipsum dolor sit amet",
        href: "#",
      },
    ],
  },
  {
    label: "Student Life",
    href: "#",
    menus: [
      {
        label: "Kegiatan Siswa",
        desc: "lorem ipsum dolor sit amet",
        href: "#",
      },
      {
        label: "Portfolio",
        desc: "lorem ipsum dolor sit amet",
        href: "#",
      },
    ],
  },
  {
    label: "News",
    href: "#",
  },
];

export const rightMenus: Array<{
  label: string;
  href: string;
  btnVariant: "default" | "outline";
  className?: string;
}> = [
  {
    label: "School Tour",
    href: "#",
    btnVariant: "outline",
  },
  {
    label: "PPDB",
    href: "#",
    btnVariant: "default",
    className:
      "bg-gradient-to-b from-[#4385DC] to-[#1B52C8] hover:from-[#1B52C8] hover:to-[#4385DC]",
  },
];

export const programs: Array<{
  title: string,
  desc: string,
  href: string,
  image: number
}> = [
  {
    title: "Qur'an Camp",
    desc: "Siswa akan memoles kemampuan tilawah mereka di Pare, belajar tajwid dan makhraj, serta memperdalam hubungan spiritual dengan Al-Qur'an.",
    href: "#",
    image: 0
  },
  {
    title: "English Camp",
    desc: "Dua bulan di Pare Kampung Inggris akan memperkuat kemampuan Bahasa Inggris siswa, memastikan komunikasi efektif dalam dunia digital.",
    href: "#",
    image: 1
  },
  {
    title: "Kodein Incubator",
    desc: "Di KODEIN Incubator, siswa terlibat dalam proyek internal sebagai simulasi dunia kerja, membekali mereka dengan pengalaman yang relevan untuk proyek eksternal.",
    href: "#",
    image: 2
  },
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
      "Web Programming",
      "Mobile Programming",
      "UI/UX",
      "Database",
      "Graphic Design",
      "Motion Graphic",
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
      "Matematika",
      "Bahasa Indonesia",
      "Bahasa Inggris",
      "IPA Terpadu",
      "IPS Terpadu",
      "PKN",
      "Try Out UTBK",
    ],
    image: 3,
  },
];

