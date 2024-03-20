import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Parallax } from "@/hooks/useParallaxAnimation";
import Script from "next/script";
import { WebsiteData } from "@/interfaces/websiteData";
import Preloader from "@/components/shared/Preloader";
import { ThemeProvider } from "@/config/theme-provider";
import CrispChat from "@/components/shared/CrispChat";
import { Toaster } from "@/components/ui/sonner";
import Notification from "@/components/shared/Notification";
import ConsentCookies from "@/components/shared/ConsentCookies";

// Synonym font
const synonym = localFont({
  src: [
    {
      path: "../../public/fonts/Synonym/Synonym-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Synonym/Synonym-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Synonym/Synonym-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f3" },
    { media: "(prefers-color-scheme: dark)", color: "#015a6a" },
  ],
};

export const metadata: Metadata = {
  title:
    "NutriFix - Personalized Workouts & Nutrition Plans for a Healthier You",
  description:
    "Elevate your fitness journey with NutriFix! Access tailored workout plans, personalized meal guides, and accurate calorie estimations.",
  generator: "Next.js",
  metadataBase: new URL("https://nutrifix-health-fitness.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
    },
  },
  applicationName:
    "NutriFix - Personalized Workouts & Nutrition Plans for a Healthier You",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Fitness Hub",
    "Personalized Workouts",
    "Nutrition Plans",
    "Calorie Estimation",
    "Healthy Lifestyle",
    "Wellness Platform",
    "Workout Guidance",
    "Meal Planner",
    "Fitness Tracker",
    "NutriFix App",
    "NutriFix",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-eldin-website.vercel.app/" },
  ],
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-57x57.png",
        sizes: "57x57",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-72x72.png",
        sizes: "72x72",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-114x114.png",
        sizes: "114x114",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-120x120.png",
        sizes: "120x120",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-144x144.png",
        sizes: "144x144",
      },
      {
        rel: "apple-touch-icon",
        url: "/assets/apple-touch-icon-152x152.png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/apple-touch-icon.png",
        sizes: "57x57",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/maskable_icon.png",
        color: "#f3f3f3",
      },
    ],
  },
  openGraph: {
    title:
      "NutriFix - Personalized Workouts & Nutrition Plans for a Healthier You",
    description:
      "Elevate your fitness journey with NutriFix! Access tailored workout plans, personalized meal guides, and accurate calorie estimations.",
    url: "https://nutrifix-health-fitness.vercel.app/",
    siteName:
      "NutriFix - Personalized Workouts & Nutrition Plans for a Healthier You",
    images: [
      {
        url: "/assets/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "NutriFix Website",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NutriFix - Personalized Workouts & Nutrition Plans for a Healthier You",
    description:
      "Elevate your fitness journey with NutriFix! Access tailored workout plans, personalized meal guides, and accurate calorie estimations.",
    creator: "@seiffsameh",
    images: ["/assets/maskable_icon.png"],
  },
  verification: {
    google: "google",
    other: {
      me: ["seiffsameh00@gmail.com", "https://seif-eldin-website.vercel.app/"],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health",
};

const website: WebsiteData = {
  "@context": "https://schema.org",
  "@type": "website",
  name: "NutriFix",
  url: "https://nutrifix-health-fitness.vercel.app/",
  logo: "https://res.cloudinary.com/dp9iqarvw/image/upload/v1707374139/NutriFix/maskable_icon_oigvx2.png",
  favicon:
    "https://res.cloudinary.com/dp9iqarvw/image/upload/v1707374139/NutriFix/maskable_icon_oigvx2.png",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Cairo Governorate",
    postalCode: "11835",
    addressCountry: "Egypt",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201060865699",
    email: "seiffsameh00@gmail.com",
  },
  description:
    "Elevate your fitness journey with NutriFix! Access tailored workout plans, personalized meal guides, and accurate calorie estimations.",
  foundingDate: "February 3, 2024",
  founders: ["Seif Eldin Sameh"],
  industry: "Fitness & Health",
  socialMedia: {
    github: "https://github.com/seifsamehh",
    linkedin: "https://www.linkedin.com/in/seif-eldin-sameh-81b8661b7/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = JSON.stringify(website);
  return (
    <html lang="en">
      <body className={synonym.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <Notification />
          <Parallax>{children}</Parallax>
          <ConsentCookies />
        </ThemeProvider>
        <CrispChat />
        <Toaster expand position="bottom-left" />
        <Script
          id="structure-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
          defer
        />
      </body>
    </html>
  );
}
