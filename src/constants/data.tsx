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
