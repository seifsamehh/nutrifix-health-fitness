import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/shared/Header"));
const Hero = dynamic(() => import("@/components/landing page/Hero/Hero"));
const Vision = dynamic(() => import("@/components/landing page/vision/Vision"));
const VisionContent = dynamic(
  () => import("@/components/landing page/vision content/VisionContent")
);
const Process = dynamic(
  () => import("@/components/landing page/process/Process")
);
const Testimonials = dynamic(
  () => import("@/components/landing page/testimonials/Testimonials")
);
const Footer = dynamic(() => import("@/components/shared/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="landing-page">
        <Hero />
        <Vision />
        <VisionContent />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
