import { GoogleGeminiEffectDemo } from "@/lib/animations/GoogleGeminiEffectDemo";
import dynamic from "next/dynamic";

const HeaderHome = dynamic(() => import("@/components/shared/HeaderHome"));
const FooterHome = dynamic(() => import("@/components/shared/FooterHome"));

export default function page() {
  return (
    <>
      <HeaderHome />
      <GoogleGeminiEffectDemo />
      <FooterHome />
    </>
  );
}
