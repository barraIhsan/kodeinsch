"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import {
  SiFacebook,
  SiYoutube,
  SiInstagram,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const colors = ["text-kodein-orange", "text-kodein-blue", "text-kodein-red"];
  return (
    <footer className="container mx-auto flex flex-col mb-24 mt-12 gap-6 lg:gap-10 shadow-xl border border-black/20 rounded-xl size-full px-5 sm:px-12 lg:px-16 py-5 sm:py-10">
      <div className="flex flex-col gap-16 lg:flex-row justify-between pt-4">
        <div className="flex justify-center items-start">
          <Image
            width={535}
            height={86}
            alt=""
            className="w-80 2xl:w-[32rem] object-contain"
            src="/img/full-logo.png"
          />
        </div>
        <ul className="2xl:max-w-xl 2xl:w-full flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-12 lg:text-right">
          {footerLinks.map((footerLink, index) => (
            <li
              key={index}
              className="w-full text-center sm:text-left sm:w-fit 2xl:w-full"
            >
              <ul className="flex items-center sm:items-end flex-col gap-1">
                <li
                  className={cn(
                    colors[index],
                    "text-2xl lg:text-xl 2xl:text-3xl pb-1 w-fit px-5 sm:px-0 2xl:pb-3 border-b border-black/10 font-semibold mb-4",
                  )}
                >
                  {footerLink.title}
                </li>
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-lg lg:text-base 2xl:text-xl text-gray-500 hover:text-gray-600 transition-colors"
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <hr className="w-full" />
        <Button
          size="icon"
          variant="outline"
          className="aspect-square size-12 2xl:size-14 rounded-2xl"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="size-4 2xl:!size-6" />
        </Button>
      </div>
      <div className="flex flex-col gap-3 md:flex-row justify-between py-5">
        <small className="text-gray-500 2xl:text-base text-center md:text-left">
          Copyright &copy;{new Date().getFullYear()} Sekolah Developer
          Indonesia. All Rights Reserved. Powered By Tim Creative
        </small>
        <div className="flex justify-center md:justify-start gap-3 2xl:gap-6">
          <a href="#">
            <SiFacebook className="size-4 2xl:size-6 text-gray-500 hover:text-gray-600 transition-colors" />
          </a>
          <a href="#">
            <SiYoutube className="size-4 2xl:size-6 text-gray-500 hover:text-gray-600 transition-colors" />
          </a>
          <a href="#">
            <SiInstagram className="size-4 2xl:size-6 text-gray-500 hover:text-gray-600 transition-colors" />
          </a>
          <a href="#">
            <SiTiktok className="size-4 2xl:size-6 text-gray-500 hover:text-gray-600 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
