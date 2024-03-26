"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function PagePreload() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("body", {
      overflow: "hidden",
    })
      .to(".preloader .text-container", {
        duration: 0,
        opacity: 1,

        ease: "Power3.easeOut",
      })
      .from(".preloader .text-container h1", {
        duration: 1.5,
        delay: 0.2,
        y: 200,
        skewY: 10,
        stagger: 0.4,

        ease: "Power3.easeOut",
      })
      .to(".preloader .text-container h1", {
        duration: 1.2,
        y: 200,
        skewY: -20,
        stagger: 0.2,

        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 1,

        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(
        "body",
        {
          overflow: "auto",
        },
        "-=1"
      )
      .to(".preloader", {
        display: "none",
      });
  });
  return (
    <section className="loading-screen">
      <div className="preloader bg-foreground">
        <div className="text-container text-background">
          <h1 className={`${amulya.className} big-text`}>NutriFix</h1>
          <h1 className={`${amulya.className} big-text`}>Health</h1>
          <h1 className={`${amulya.className} big-text`}>Fitness</h1>
        </div>
      </div>
    </section>
  );
}
