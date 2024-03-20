"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PagePreload() {
  useGSAP(() => {
    gsap.to(".block", {
      duration: 1.5, // Faster animation
      width: "0%",
      ease: "power1.in",
      delay: 1, // Shortened delay,
      stagger: 0.2, // Add stagger to animate each block one after another
    });
  });
  return (
    <div className="loading">
      <div className="overlay">
        <div className="block block-1 bg-foreground"></div>
        <div className="block block-2 bg-foreground"></div>
        <div className="block block-3 bg-foreground"></div>
        <div className="block block-4 bg-foreground"></div>
        <div className="block block-5 bg-foreground"></div>
        <div className="block block-6 bg-foreground"></div>
        <div className="block block-7 bg-foreground"></div>
        <div className="block block-8 bg-foreground"></div>
        <div className="block block-9 bg-foreground"></div>
        <div className="block block-10 bg-foreground"></div>
        <div className="block block-11 bg-foreground"></div>
        <div className="block block-12 bg-foreground"></div>
        <div className="block block-13 bg-foreground"></div>
        <div className="block block-14 bg-foreground"></div>
        <div className="block block-15 bg-foreground"></div>
        <div className="block block-16 bg-foreground"></div>
        <div className="block block-17 bg-foreground"></div>
        <div className="block block-18 bg-foreground"></div>
        <div className="block block-19 bg-foreground"></div>
        <div className="block block-20 bg-foreground"></div>
      </div>
    </div>
  );
}
