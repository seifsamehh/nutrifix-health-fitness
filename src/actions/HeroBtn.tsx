import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../public/fonts/Amulya/Amulya-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Amulya/Amulya-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Amulya/Amulya-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function HeroBtn() {
  return (
    <Button asChild className="mt-12">
      <LoginLink
        postLoginRedirectURL="/home"
        className={`${amulya.className} text-xl bg-primary text-primary-foreground w-48`}
      >
        Join Us
      </LoginLink>
    </Button>
  );
}
