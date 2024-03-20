"use client";

import { useCallback, useEffect, useState } from "react";
import { Quote } from "@/interfaces/Quote";

export default function Notification(): JSX.Element | null {
  const [onlineQuotes, setOnlineQuotes] = useState<Quote[]>([]);

  const requestNotificationPermission = useCallback(async () => {
    try {
      if ("Notification" in window) {
        const permission = await window.Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      }
    } catch (error) {
      console.error(
        "Error occurred while requesting notification permission:",
        error
      );
    }
  }, []);

  const fetchOnlineQuotes = useCallback(async () => {
    try {
      // Fetch quotes from your API
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error("Failed to fetch online quotes");
      }
      const data = await response.json();
      setOnlineQuotes(data.quotes); // Assuming your API response has a 'quotes' property
    } catch (error) {
      console.error("Error fetching online quotes:", error);
    }
  }, []);

  const showNotification = useCallback((quotes: Quote[]) => {
    if (
      "Notification" in window &&
      window.Notification.permission === "granted"
    ) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      if (randomQuote) {
        new window.Notification(randomQuote.author, {
          body: randomQuote.text,
          icon: "https://res.cloudinary.com/dp9iqarvw/image/upload/v1709493050/NutriFix/maskable_icon_skhdbk.png",
        });
      }
    }
  }, []);

  useEffect(() => {
    const handleOnlineOffline = (event: Event) => {
      const offlineMessages = [
        "You can.",
        "Don't give up.",
        "Don't watch the clock , do what it does keep going.",
        "The greatest wealth is health.",
        "Take care of your body.",
        "I have not failed.",
        "Faliuer is success in progress.",
        "Don't give up on yourself , there's a reason why you started.",
        "No pressure , no diamond.",
        "Dreams don't work unless you do.",
        "The groundwork for all happiness is health.",
        "The mind and body are not separate . What affects one , affects the other.",
        "You are the only one who can limit your greatness.",
        "Take care of your body . it's the only place you have to live.",
      ];
      const randomMessage =
        offlineMessages[Math.floor(Math.random() * offlineMessages.length)];
      console.log(randomMessage);

      if (event.type === "offline") {
        showNotification([{ author: "NutriFix", text: randomMessage }]);
      } else if (event.type === "online") {
        fetchOnlineQuotes();
      }
    };

    const interval = setInterval(() => {
      showNotification(onlineQuotes);
    }, 1000 * 60 * 15); // Send notification every 15 minutes

    requestNotificationPermission();
    window.addEventListener("online", handleOnlineOffline);
    window.addEventListener("offline", handleOnlineOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", handleOnlineOffline);
      window.removeEventListener("offline", handleOnlineOffline);
    };
  }, [
    fetchOnlineQuotes,
    onlineQuotes,
    requestNotificationPermission,
    showNotification,
  ]);

  return null;
}
