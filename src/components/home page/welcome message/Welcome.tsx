"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import localFont from "next/font/local";

// Suavity font
const suavity = localFont({
  src: [
    {
      path: "../../../../public/fonts/the-suavity/the-suavity.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

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

export default function Welcome() {
  const { isLoading, user } = useKindeBrowserClient();

  if (isLoading)
    return (
      <p className="className={`${suavity.className} text-[15rem]`}">
        Mr/Mrs..
      </p>
    );
  return (
    <section className="welcome min-h-screen flex justify-center items-center flex-col leading-[5rem]">
      <h1
        className={`${amulya.className} min-[290px]:text-5xl md:text-9xl text-center`}
      >
        Welcome to NutriFix
      </h1>
      <p
        className={`${suavity.className} min-[290px]:text-[15rem] md:text-[20rem] text-primary relative -z-10 text-center`}
      >
        {user?.given_name}
      </p>
    </section>
  );
}
