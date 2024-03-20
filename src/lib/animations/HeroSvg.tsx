"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSvg() {
  useGSAP(() => {
    gsap.to("svg", {
      y: 200, // adjust this value to control the distance the SVG moves
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "svg",
        start: "top top",
        end: "+=100%", // adjust this value to control when the animation ends
        scrub: true,
      },
    });
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute min-[290px]:bottom-1/2 md:bottom-0 left-0"
      version="1.1"
      viewBox="0 0 800 400"
    >
      <path
        d="M1.7937121391296387,333.63226318359375C59.192814111709595,307.17486572265625,252.31687601407367,185.05230204264322,346.1883239746094,174.88787841796875C440.0597719351451,164.72345479329428,489.53660583496094,278.3258412679036,565.0223999023438,272.6457214355469C640.5081939697266,266.9656016031901,760.0896402994791,162.7802530924479,799.1030883789062,140.80715942382812"
        fill="none"
        strokeWidth="29"
        stroke="#67ddab"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
