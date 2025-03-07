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
  {
    label: "Student Life",
    href: "#",
    menus: [
      {
        label: "Kegiatan Siswa",
        desc: "",
        href: "/activity",
      },
      //     {
      //       label: "Portfolio",
      //       desc: "lorem ipsum dolor sit amet",
      //       href: "#",
      //     },
    ],
  },
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
