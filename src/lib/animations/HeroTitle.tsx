"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);
export default function HeroTitle() {
  useGSAP(() => {
    gsap.from("h1", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%", // adjust as needed
        end: "center center", // adjust as needed
        scrub: true,
      },
    });
  });
  return (
    <h1
      className={`${amulya.className} min-[290px]:text-4xl md:text-8xl capitalize`}
    >
      NutriFix creates the future of health & fitness services
    </h1>
  );
}
