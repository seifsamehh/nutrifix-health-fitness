import { GoogleGeminiEffectDemoDiet } from "@/lib/animations/GoogleGeminiEffectDemoDiet";
import dynamic from "next/dynamic";

const HeaderHome = dynamic(() => import("@/components/shared/HeaderHome"));
const FooterHome = dynamic(() => import("@/components/shared/FooterHome"));

export default function page() {
  return (
    <>
      <HeaderHome />
      <GoogleGeminiEffectDemoDiet />
      <FooterHome />
    </>
  );
}
