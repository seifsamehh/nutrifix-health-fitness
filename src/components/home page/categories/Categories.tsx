import { AnimatedPinDemo } from "@/lib/animations/AnimatedPinDemo";

import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/Amulya/Amulya-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/Amulya/Amulya-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function Categories() {
  return (
    <section className="categories">
      <h2 className={`${amulya.className} text-center text-7xl`}>
        Our Services
      </h2>
      <AnimatedPinDemo />
    </section>
  );
}
