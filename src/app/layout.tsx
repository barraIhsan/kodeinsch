import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink_sans = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KODEIN Boarding School",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethink_sans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
