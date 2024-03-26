"use client";

import { Quote } from "@/interfaces/Quote";
import { useEffect, useState } from "react";

const NotificationComponent = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data: Quote[] = await response.json();
        setQuotes(data);
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching quotes:", error);
        }
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Show notification
      if (quotes.length > 0) {
        const { text, author } = quotes[currentIndex];
        showNotification(text, author);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }
    }, 15 * 60 * 1000); // 15 minutes interval

    // Send notification when the user closes the website
    const beforeUnloadHandler = () => {
      if (quotes.length > 0) {
        const { text, author } = quotes[currentIndex];
        showNotification(text, author);
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [quotes, currentIndex]);

  const showNotification = (text: string, author: string) => {
    if (!("Notification" in window)) {
      if (process.env.NODE_ENV !== "production") {
        console.log("This browser does not support notifications");
      }
    } else if (Notification.permission === "granted") {
      const options: NotificationOptions = {
        body: author,
        icon: "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png", // Replace this with the path to your icon
      };
      new Notification(text, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const options: NotificationOptions = {
            body: author,
            icon: "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png", // Replace this with the path to your icon
          };
          new Notification(text, options);
        }
      });
    }
  };

  return null; // This component doesn't render anything visible
};

export default NotificationComponent;
