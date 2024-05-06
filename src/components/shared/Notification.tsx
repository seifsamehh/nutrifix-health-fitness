"use client";

import { useNotification } from "@/hooks/useNotification";
import { Quote } from "@/interfaces/Quote";
import { useEffect, useState } from "react";

const NotificationComponent = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const data: Quote[] = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  useNotification(quotes, currentIndex);

  return null; // This component doesn't render anything visible
};

export default NotificationComponent;
