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
import { Button } from "@/components/ui/button";
import { leftMenus, rightMenus } from "@/constants/data";

export default function Navbar() {
  return (
    <nav className="bg-white backdrop-blur-lg fixed inset-x-0">
      <div className="container flex justify-between items-center px-12 py-5 mx-auto">
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
          <NavigationMenu>
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
              <Button variant={menu.btnVariant} className={menu.className}>
                <a href={menu.href}>{menu.label}</a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
