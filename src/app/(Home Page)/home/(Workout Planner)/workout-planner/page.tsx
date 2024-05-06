import HeaderHome from "@/components/shared/HeaderHome";
import { GoogleGeminiEffectDemo } from "@/lib/animations/GoogleGeminiEffectDemo";
import FooterHome from "@/components/shared/FooterHome";
import WorkoutForm from "@/components/home page/categories/workout/WorkoutForm";

export default function page() {
  return (
    <>
      <HeaderHome />
      <main className="workout">
        <GoogleGeminiEffectDemo />
        <WorkoutForm />
      </main>
      <FooterHome />
    </>
  );
}
