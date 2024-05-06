// import { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://nutrifix-health-fitness.vercel.app/",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://nutrifix-health-fitness.vercel.app/home",
//       lastModified: new Date(),
//       changeFrequency: "yearly",
//       priority: 1,
//     },
//     {
//       url: "https://nutrifix-health-fitness.vercel.app/feedback",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.5,
//     },
//     {
//       url: "https://nutrifix-health-fitness.vercel.app/workout-planner",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.5,
//     },
//     {
//       url: "https://nutrifix-health-fitness.vercel.app/diet-planner",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.5,
//     },
//   ];
// }

import { SitemapEntry } from "@/interfaces/SitmapEntry";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; changeFrequency: string; priority: number }[] = [
    { path: "/", changeFrequency: "yearly", priority: 1 },
    { path: "/home", changeFrequency: "yearly", priority: 1 },
    { path: "/feedback", changeFrequency: "monthly", priority: 0.5 },
    { path: "/workout-planner", changeFrequency: "monthly", priority: 0.5 },
    { path: "/diet-planner", changeFrequency: "monthly", priority: 0.5 },
  ];

  return pages.map((page) => ({
    url: `https://nutrifix-health-fitness.vercel.app${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as SitemapEntry["changeFrequency"],
    priority: page.priority,
  }));
}
