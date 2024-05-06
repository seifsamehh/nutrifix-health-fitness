"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const NotFound = React.memo(function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="grid min-h-screen place-items-center bg-red-500 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-white">404</p>
        <h1
          className={`${amulya.className} mt-4 text-3xl font-bold tracking-tight text-white sm:text-7xl`}
        >
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handleGoBack}
            className="cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          >
            Go back home
          </button>
          <Link href="mailto:seiffsameh00@gmail.com" target="_blank">
            <a className="text-sm font-semibold text-white">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
});

NotFound.displayName = "NotFound";

export default NotFound;
