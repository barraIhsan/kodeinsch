type ButtonVariant = "default" | "outline";
export const menus: Array<{
  label: string;
  href: string;
  btnVariant?: ButtonVariant;
}> = [
  {
    label: "Sekolah Kami",
    href: "#",
  },
  {
    label: "Akademik",
    href: "#",
  },
  {
    label: "Student Life",
    href: "#",
  },
  {
    label: "Student Portfolio",
    href: "#",
  },
  {
    label: "News",
    href: "#",
  },
  {
    label: "School Tour",
    href: "#",
    btnVariant: "outline",
  },
  {
    label: "Penerimaan Siswa Baru",
    href: "#",
    btnVariant: "default",
  },
];
