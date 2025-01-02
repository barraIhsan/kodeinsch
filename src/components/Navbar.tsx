"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { leftMenus, rightMenus } from "@/constants/data";

export default function Navbar() {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  return (
    <>
      <nav className="bg-white backdrop-blur-lg fixed z-50 inset-x-0">
        <div className="container flex justify-between items-center px-5 md:px-12 py-5 mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="logo.svg"
                alt="Kodein Logo"
                width={111}
                height={56}
                className="h-8 w-fit"
              />
            </Link>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {leftMenus.map((menu, index) => (
                  <NavigationMenuItem key={index}>
                    {/* For dropdown */}
                    {menu.menus && (
                      <>
                        <NavigationMenuTrigger className="text-base">
                          {menu.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-96 md:grid-cols-2 gap-3 p-4">
                            {menu.menus.map((submenu, index) => (
                              <li
                                key={index}
                                className="p-3 rounded-md space-y-1 hover:bg-accent transition-colors"
                              >
                                <NavigationMenuLink asChild>
                                  <Link href={submenu.href}>
                                    <p className="font-semibold">
                                      {submenu.label}
                                    </p>
                                    <p className="text-sm leading-snug">
                                      {submenu.desc}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}

                    {/* For normal link */}
                    {!menu.menus && (
                      <Link href={menu.href}>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-base",
                          )}
                        >
                          {menu.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <ul className="flex gap-5 items-center">
            {rightMenus.map((menu, index) => (
              <li key={index}>
                <Button
                  variant={menu.btnVariant}
                  className={cn(menu.className, "hidden lg:inline-flex")}
                >
                  <Link href={menu.href}>{menu.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <button
            className="size-8 flex flex-col justify-center gap-1 lg:hidden mr-2"
            onClick={() => setNavMobileOpen(!navMobileOpen)}
          >
            <div
              className={cn(
                "h-1 w-8 rounded-md bg-black transition-transform",
                navMobileOpen && "rotate-45 translate-y-[150%] ",
              )}
            />
            <div
              className={
                navMobileOpen ? "opacity-0" : "h-1 w-8 rounded-md bg-black"
              }
            />
            <div
              className={cn(
                "h-1 w-8 rounded-md bg-black transition-transform",
                navMobileOpen && "-rotate-45 w-8 -translate-y-[150%] ",
              )}
            />
          </button>
        </div>
        <div
          className={cn(
            navMobileOpen
              ? "bg-white lg:hidden block translate-x-0 duration-300"
              : "translate-x-full",
            "fixed transition-transform inset-x-0",
          )}
        >
          <div className="container mx-auto px-5 md:px-12 py-4">
            <Accordion type="multiple">
              {leftMenus.map((menu, index) => (
                <AccordionItem
                  key={index}
                  value={menu.label}
                  className={!menu.menus ? "border-0" : ""}
                >
                  {menu.menus && (
                    <>
                      <AccordionTrigger className="leading-none font-medium text-xl py-4 hover:no-underline">
                        {menu.label}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-8">
                        <ul className="space-y-1">
                          {menu.menus.map((submenu, index) => (
                            <li key={index}>
                              <Button
                                variant="link"
                                className="p-0 font-normal"
                              >
                                <Link href={submenu.href} className="text-lg">
                                  {submenu.label}
                                </Link>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </>
                  )}
                  {!menu.menus && (
                    <Button
                      variant="link"
                      className="px-0 py-4 font-medium text-xl leading-none"
                    >
                      <Link href={menu.href}>{menu.label}</Link>
                    </Button>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
            <ul className="border-t border-gray-300 pt-4 flex gap-5">
              {rightMenus.map((menu, index) => (
                <li key={index}>
                  <Button variant={menu.btnVariant} className={menu.className}>
                    <Link href={menu.href}>{menu.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {navMobileOpen && (
        <div className="lg:hidden absolute inset-0 bg-black/30 z-40"></div>
      )}
    </>
  );
}
