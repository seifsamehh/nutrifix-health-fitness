"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cookie from "js-cookie";

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

const ConsentCookies = () => {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    const consentStatus = cookie.get("cookieConsent");

    if (consentStatus === "accepted") {
      setConsentAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    // Save consent status in cookie with expires and path options
    cookie.set("cookieConsent", "accepted", { expires: 30, path: "/" });
    setConsentAccepted(true);
  };

  const handleRevoke = () => {
    // Remove the consent cookie
    cookie.remove("cookieConsent");
    setConsentAccepted(false);
  };

  return (
    !consentAccepted && (
      <div className="fixed top-0 left-0 w-full h-full bg-emerald-300 bg-opacity-50 z-50">
        <div className="cookie-banner relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-60 min-[290px]:max-w-sm md:max-w-2xl flex justify-center items-center flex-col gap-6 p-4 rounded-md bg-card backdrop-blur-lg text-card-foreground">
          <p className={`${amulya.className} text-xl text-center`}>
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.{" "}
          </p>
          <div className="cookies-btns">
            <Button
              onClick={handleAccept}
              className="bg-primary text-primary-foreground py-2 px-4 rounded-md mr-2"
            >
              Accept
            </Button>
            <Button onClick={handleRevoke} variant={"destructive"}>
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConsentCookies;
