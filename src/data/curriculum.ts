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
