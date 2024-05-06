import HeaderHome from "@/components/shared/HeaderHome";
import { GoogleGeminiEffectDemoDiet } from "@/lib/animations/GoogleGeminiEffectDemoDiet";
import DietForm from "@/components/home page/categories/diet/DietForm";
import FooterHome from "@/components/shared/FooterHome";

export default function page() {
  return (
    <>
      <HeaderHome />
      <main className="diet-planner">
        <GoogleGeminiEffectDemoDiet />
        <DietForm />
      </main>
      <FooterHome />
    </>
  );
}
