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
  title: string;
  desc: string;
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
    desc: "Dua bulan di Pare Kampung Inggris akan memperkuat kemampuan Bahasa Inggris siswa, memastikan komunikasi efektif dalam dunia digital.",
    href: "#",
  },
];

export const curriculums: Array<{
  title: string;
  logo: string;
  list: Array<string>
}> = [
  {
    title: "Materi Diniyah",
    logo: "/img/about/logoDiniyah.svg",
    list: ["Tauhid","Tahfidz","Tafsir","Hadist","Fiqih","Siroh",]
  },
  {
    title: "Materi IT(Information Technology)",
    logo: "/img/about/logoCode.svg",
    list: ["Web Programming","Mobile Programming","UI/UX","Database","Graphic Design","Motion Graphic","Video Editing","Networking","IoT",]
  },
  {
    title: "Materi Diknas",
    logo: "/img/about/logoKemendik.png",
    list: ["Matematika","Bahasa Indonesia","Bahasa Inggris","IPA Terpadu","IPS Terpadu","PKN","Try Out UTBK",]
  },
]

export const footerLinks: Array<{
  title: string;
  links: Array<{
    label: string;
    href: string;
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
