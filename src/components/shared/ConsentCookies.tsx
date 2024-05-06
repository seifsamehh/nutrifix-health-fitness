"use client";

import { useState, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import cookie from "js-cookie";

const COOKIE_CONSENT_NAME = "cookieConsent";
const COOKIE_CONSENT_EXPIRATION_DAYS = 30;

const CookieConsentBanner = () => {
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

  useLayoutEffect(() => {
    const consentStatus = cookie.get(COOKIE_CONSENT_NAME);
    setIsConsentAccepted(consentStatus === "accepted");
  }, []);

  const handleAcceptConsent = () => {
    cookie.set(COOKIE_CONSENT_NAME, "accepted", {
      expires: COOKIE_CONSENT_EXPIRATION_DAYS,
      path: "/",
    });
    setIsConsentAccepted(true);
  };

  const handleRevokeConsent = () => {
    cookie.remove(COOKIE_CONSENT_NAME);
    setIsConsentAccepted(false);
  };

  return (
    !isConsentAccepted && (
      <div className="fixed top-0 left-0 w-full h-full bg-emerald-300 bg-opacity-50 z-50">
        <div className="cookie-banner relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-60 min-[290px]:max-w-sm md:max-w-2xl flex justify-center items-center flex-col gap-6 p-4 rounded-md bg-card backdrop-blur-lg text-card-foreground">
          <p className="text-xl text-center">
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.{" "}
          </p>
          <div className="cookies-btns">
            <Button
              onClick={handleAcceptConsent}
              className="bg-primary text-primary-foreground py-2 px-4 rounded-md mr-2"
            >
              Accept
            </Button>
            <Button onClick={handleRevokeConsent} variant={"destructive"}>
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsentBanner;
