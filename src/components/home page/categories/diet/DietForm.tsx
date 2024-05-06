"use client";

import { useState, useMemo } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const DietForm = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medication, setMedication] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [sleepPattern, setSleepPattern] = useState("");
  const [smoker, setSmoker] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = useMemo(
    () => ({
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
      gender,
      activity_level: activityLevel,
      medical_condition: medicalCondition,
      allergies,
      medication,
      fitness_goal: fitnessGoal,
      stress_level: stressLevel,
      sleep_pattern: sleepPattern,
      smoker,
      alcohol,
    }),
    [
      age,
      height,
      weight,
      gender,
      activityLevel,
      medicalCondition,
      allergies,
      medication,
      fitnessGoal,
      stressLevel,
      sleepPattern,
      smoker,
      alcohol,
    ]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nutrifix.onrender.com/diet",
        payload,
        { headers: { "Content-Encoding": "gzip" } } // Using compression
      );

      if (response.status === 200) {
        // Reset form fields and process response if needed
        setAge("");
        setHeight("");
        setWeight("");
        setGender("");
        setActivityLevel("");
        setMedicalCondition("");
        setAllergies("");
        setMedication("");
        setFitnessGoal("");
        setStressLevel("");
        setSleepPattern("");
        setSmoker("");
        setAlcohol("");
        // You can handle the response similar to how it's done in the WorkoutForm
        const formattedResponse = response.data
          .replace(/^(\*\*|\n)/gm, "") // Remove leading ** and \n
          .replace(/\n\s*\*/g, "\n") // Remove * after \n
          .replace(/\*\*/g, "") // Remove **
          .replace(/\n{2,}/g, "\n") // Remove extra \n
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Add style block for anything between ** **
          .replace(
            /(\w+):(?![\d])/g,
            '<br><span style="font-weight: bold; color: #f6c445; font-size: 1.3rem;">$1</span>:'
          ) // Add line break before headings (excluding numbers)
          .replace(
            /(\d+\s+\w+)/g,
            '<span style="font-style: italic;">$1</span>'
          ) // Add style block for dates
          .replace(/Day/g, "<br><hr>Day") // Add line break before "Day"
          .replace(
            /Notes/g,
            '<hr><span style="font-weight: bold; color: #f6c445; font-size: 1.3rem;">Notes</span>'
          ); // Add line break before "Notes" heading

        setResponse(formattedResponse);
        localStorage.setItem("dietResponse", JSON.stringify(response.data));
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
      setResponse("Error: Unable to connect to the API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dietForm min-h-screen flex justify-center items-center flex-col gap-6 py-8">
      <div className="container">
        <h2
          className={`${amulya.className} text-4xl md:text-9xl text-center mb-6`}
        >
          Diet Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-2"
        >
          {/* Add Input components for each field in the payload object */}
        </form>
        {loading && (
          <div className="flex justify-center items">
            <Image
              src="/assets/dietLoader.gif"
              alt="loader"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8dsS1HgAHNwKAgnR6wAAAAABJRU5ErkJggg=="
            />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: response }} />
      </div>
    </section>
  );
};

export default DietForm;
