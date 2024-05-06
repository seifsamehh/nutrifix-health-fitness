import { Button } from "@/components/ui/button";
import { getStrapiData } from "@/data/StrapiData";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../public/fonts/Amulya/Amulya-Bold.woff2",
      style: "normal",
    },
  ],
  weight: "700",
  display: "swap",
});

const defaultLinkText = "Join Us";

export default async function HeroBtn() {
  const path = "/api/landing-page";
  const buttonClassName = `${amulya.className} text-xl bg-primary text-primary-foreground w-48`;

  try {
    const data = await getStrapiData(path);
    const linkText = data?.blocks?.[0]?.link?.text || defaultLinkText;

    return (
      <Button asChild className="mt-12">
        <LoginLink postLoginRedirectURL="/home" className={buttonClassName}>
          {linkText}
        </LoginLink>
      </Button>
    );
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }

    return (
      <Button asChild className="mt-12">
        <LoginLink postLoginRedirectURL="/home" className={buttonClassName}>
          {defaultLinkText}
        </LoginLink>
      </Button>
    );
  }
}
