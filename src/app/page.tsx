import SkeletonLoader from "@/components/shared/SkeletonLoader";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/shared/Header"));
const Hero = dynamic(() => import("@/components/landing page/Hero/Hero"), {
  loading: () => <SkeletonLoader />,
});
const Vision = dynamic(
  () => import("@/components/landing page/vision/Vision"),
  {
    loading: () => <SkeletonLoader />,
  }
);
const VisionContent = dynamic(
  () => import("@/components/landing page/vision content/VisionContent"),
  {
    loading: () => <SkeletonLoader />,
  }
);
const Process = dynamic(
  () => import("@/components/landing page/process/Process"),
  {
    loading: () => <SkeletonLoader />,
  }
);
const Testimonials = dynamic(
  () => import("@/components/landing page/testimonials/Testimonials"),
  {
    loading: () => <SkeletonLoader />,
  }
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
