import AuthButtons from "@/actions/AuthButtons";
import { NavbarDemo } from "@/lib/NavbarDemo";
import { ModeToggle } from "@/lib/animations/ModeToggle";
import { DrawerDemo } from "@/lib/DrawerDemo";

import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <div className="left">
        <p
          className={`${amulya.className} text-4xl bg-gradient-to-r from-[#015a6a] to-[#67ddab] dark:from-[#80daeb] dark:to-[#67ddab] inline-block text-transparent bg-clip-text`}
        >
          NutriFix
        </p>
      </div>
      <div className="middle">
        <NavbarDemo />
      </div>
      <div className="right flex justify-center items-center min-[290px]:gap-2 md:gap-4">
        <AuthButtons />
        <ModeToggle />
        <DrawerDemo />
      </div>
    </header>
  );
}
