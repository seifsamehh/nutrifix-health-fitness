import LogoutBtn from "@/actions/LogoutBtn";
import { ModeToggle } from "@/lib/animations/ModeToggle";
import UserImg from "@/lib/user/UserImg";

import localFont from "next/font/local";
import Link from "next/link";

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

export default function HeaderHome() {
  return (
    <header>
      <header className="flex justify-between items-center py-4 px-8">
        <div className="left">
          <Link
            href={"/home"}
            title="NutriFix"
            aria-label="NutriFix"
            className={`${amulya.className} text-4xl bg-gradient-to-r from-[#015a6a] to-[#67ddab] dark:from-[#80daeb] dark:to-[#67ddab] inline-block text-transparent bg-clip-text`}
          >
            NutriFix
          </Link>
        </div>
        <div className="right flex justify-center items-center min-[290px]:gap-2 md:gap-4">
          <UserImg />
          <LogoutBtn />
          <ModeToggle />
        </div>
      </header>
    </header>
  );
}
