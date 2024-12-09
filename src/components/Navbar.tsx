import { Button } from "@/components/ui/button";
import { menus } from "@/constants/data";

export default function Navbar() {
  return (
    <nav className="bg-slate-200 shadow-md backdrop-blur-lg fixed inset-x-0">
      <div className="container flex justify-between items-center px-12 py-5 mx-auto">
        {/* TODO: change to the actual logo */}
        <p className="font-black text-3xl tracking-wider">LOGO</p>
        <ul className="flex gap-5 items-center">
          {menus.map((menu, index) => (
            <li key={index}>
              <Button variant={menu.btnVariant || "link"}>
                <a href={menu.href}>{menu.label}</a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
