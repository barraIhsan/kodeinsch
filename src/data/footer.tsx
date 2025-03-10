export const links: Array<{
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
        href: "/activity",
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
