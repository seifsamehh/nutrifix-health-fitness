"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { getStrapiData } from "@/data/StrapiData";

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

  // data fetching
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const strapiData = await getStrapiData("/api/landing-page");
      const title = strapiData.blocks[1]?.title || "";
      const subTitle = strapiData.blocks[1]?.subTitle || "";
      setTitle(title);
      setSubTitle(subTitle);
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h2 className={`${amulya.className} text-4xl font-semibold `}>
              {title || "Our Vision"} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {subTitle || "Solutions For"}
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
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478198/NutriFix/fitness-concept-illustration_1284-7547_b7dyua.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478253/NutriFix/fitness-and-health-frame-vector-20820125_jhdsvh.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478294/NutriFix/health-fitness-icons_23-2147494946_tmgp2t.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478335/NutriFix/15-health-and-fitness-icons-2_iakldy.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478372/NutriFix/fitness-vs-health-chart_mc2tul.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478413/NutriFix/istockphoto-1167778624-170667a_k6p2rw.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478448/NutriFix/provide-fitness-and-health-services_m7xxa7.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478521/NutriFix/HealthInsurance_hc4wqm.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478600/NutriFix/health-and-fitness-essay_kh261w.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478647/NutriFix/world-health-day-2023-mental-health-physical-fitness_qmxvkl.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478702/NutriFix/World-Health-Day-1_su4m81.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478198/NutriFix/fitness-concept-illustration_1284-7547_b7dyua.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478253/NutriFix/fitness-and-health-frame-vector-20820125_jhdsvh.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478294/NutriFix/health-fitness-icons_23-2147494946_tmgp2t.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478372/NutriFix/fitness-vs-health-chart_mc2tul.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478413/NutriFix/istockphoto-1167778624-170667a_k6p2rw.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478448/NutriFix/provide-fitness-and-health-services_m7xxa7.webp",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478600/NutriFix/health-and-fitness-essay_kh261w.png",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478647/NutriFix/world-health-day-2023-mental-health-physical-fitness_qmxvkl.avif",
  },
  {
    image:
      "https://res.cloudinary.com/dp9iqarvw/image/upload/v1711478702/NutriFix/World-Health-Day-1_su4m81.png",
  },
];
