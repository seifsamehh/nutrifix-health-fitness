"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
export function VisionParllax() {
  useGSAP(() => {
    gsap.from("h2", {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: "h2",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h2 className={`${amulya.className} text-4xl font-semibold `}>
              Our Vision <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Solutions for
              </span>
            </h2>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
  },
];
