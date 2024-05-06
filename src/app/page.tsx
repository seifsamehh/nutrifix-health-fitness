import Header from "@/components/shared/Header";
import Hero from "@/components/landing page/Hero/Hero";
import Vision from "@/components/landing page/vision/Vision";
import VisionContent from "@/components/landing page/vision content/VisionContent";
import Process from "@/components/landing page/process/Process";
import Testimonials from "@/components/landing page/testimonials/Testimonials";
import Footer from "@/components/shared/Footer";

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
