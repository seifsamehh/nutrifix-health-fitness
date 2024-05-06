"use client";

import { Quote } from "@/interfaces/Quote";
import { useEffect, useState } from "react";

interface NotificationOptions {
  body: string;
  icon: string;
}

const showNotification = (text: string, author: string, icon: string) => {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications");
    return;
  }

  if (Notification.permission === "granted") {
    const options: NotificationOptions = {
      body: author,
      icon,
    };
    new Notification(text, options);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const options: NotificationOptions = {
          body: author,
          icon,
        };
        new Notification(text, options);
      }
    });
  }
};

export const useNotification = (quotes: Quote[], initialIndex: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quotes.length > 0) {
        const { text, author } = quotes[currentIndex];
        showNotification(
          text,
          author,
          "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png"
        );
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }
    }, 10 * 60 * 1000); // 10 minutes interval

    const beforeUnloadHandler = () => {
      if (quotes.length > 0) {
        const { text, author } = quotes[currentIndex];
        showNotification(
          text,
          author,
          "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png"
        );
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [quotes, currentIndex]);

  return currentIndex;
};
