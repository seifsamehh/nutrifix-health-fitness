// "use client";

// import { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";

// import { getStrapiData } from "@/data/StrapiData";
// import { visionImages } from "@/constants/visionImages";
// import localFont from "next/font/local";

// // Amulya font
// const amulya = localFont({
//   src: [
//     {
//       path: "../../../public/fonts/Amulya/Amulya-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "swap",
// });

// gsap.registerPlugin(ScrollTrigger);
// export function VisionParllax() {
//   useGSAP(() => {
//     gsap.from("h2", {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       scrollTrigger: {
//         trigger: "h2",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//       },
//     });
//   });

//   // data fetching
//   const [title, setTitle] = useState("");
//   const [subTitle, setSubTitle] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const strapiData = await getStrapiData("/api/landing-page");
//       const title = strapiData.blocks[1]?.title || "";
//       const subTitle = strapiData.blocks[1]?.subTitle || "";
//       setTitle(title);
//       setSubTitle(subTitle);
//     }
//     fetchData();
//   }, []);
//   return (
//     <div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         vision={visionImages}
//         titleComponent={
//           <h2 className={`${amulya.className} text-4xl font-semibold `}>
//             {title || "Our Vision"} <br />
//             <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//               {subTitle || "Solutions For"}
//             </span>
//           </h2>
//         }
//       />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

import { getStrapiData } from "@/data/StrapiData";
import { visionImages } from "@/constants/visionImages";
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

gsap.registerPlugin(ScrollTrigger);

export function VisionParallax() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const strapiData = await getStrapiData("/api/landing-page");
      const blocks = strapiData.blocks || [];
      const block1 = blocks[1] || {};
      const blockTitle = block1.title || "";
      const blockSubTitle = block1.subTitle || "";
      setTitle(blockTitle);
      setSubTitle(blockSubTitle);
    }
    fetchData();
  }, []);

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
        vision={visionImages}
        titleComponent={
          <h2 className={`${amulya.className} text-4xl font-semibold `}>
            {title || "Our Vision"} <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {subTitle || "Solutions For"}
            </span>
          </h2>
        }
      />
    </div>
  );
}
