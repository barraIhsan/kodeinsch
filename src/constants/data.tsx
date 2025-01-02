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
