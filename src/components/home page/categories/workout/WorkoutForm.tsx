"use client";

import { useState, useMemo } from "react";
import axios from "axios";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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

const WorkoutForm = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [myGoals, setMyGoals] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [healthCond, setHealthCond] = useState("");
  const [routine, setRoutine] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = useMemo(
    () => ({
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
      my_goals: myGoals,
      fitness_level: fitnessLevel,
      days: parseInt(days),
      hours: parseInt(hours),
      health_consd: healthCond,
      routine: routine,
    }),
    [
      age,
      height,
      weight,
      myGoals,
      fitnessLevel,
      days,
      hours,
      healthCond,
      routine,
    ]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nutrifix.onrender.com/workout",
        payload,
        { headers: { "Content-Encoding": "gzip" } }
      );

      if (response.status === 200) {
        setAge("");
        setHeight("");
        setWeight("");
        setMyGoals("");
        setFitnessLevel("");
        setDays("");
        setHours("");
        setHealthCond("");
        setRoutine("");
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
        localStorage.setItem("workoutResponse", JSON.stringify(response.data));
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
    <section className="workoutForm min-h-screen flex justify-center items-center flex-col gap-6 py-8">
      <div className="container">
        <h2
          className={`${amulya.className} text-4xl md:text-9xl text-center mb-6`}
        >
          Workout Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-2"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="age" className="text-lg font-bold">
              Age
            </Label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="height" className="text-lg font-bold">
              Height (cm)
            </Label>
            <Input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="weight" className="text-lg font-bold">
              Weight (kg)
            </Label>
            <Input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="goal" className="text-lg font-bold">
              My Goals
            </Label>
            <Input
              type="text"
              id="goal"
              value={myGoals}
              onChange={(e) => setMyGoals(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Fitness Level:
              <select
                value={fitnessLevel}
                onChange={(e) => setFitnessLevel(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Elite">Elite</option>
              </select>
            </label>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="days" className="text-lg font-bold">
              Days
            </Label>
            <Input
              type="number"
              id="days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="hours" className="text-lg font-bold">
              Hours
            </Label>
            <Input
              type="number"
              id="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Health Condition:
              <select
                value={healthCond}
                onChange={(e) => setHealthCond(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Cutting Phase">Cutting Phase</option>
                <option value="Bulking Phase">Bulking Phase</option>
                <option value="Maintenance Phase">Maintenance Phase</option>
                <option value="Lean Muscle Gain">Lean Muscle Gain</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Routine:
              <select
                value={routine}
                onChange={(e) => setRoutine(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Bro Split">Bro Split</option>
                <option value="Push Pull Leg">Push Pull Leg</option>
                <option value="Upper and Lower">Upper and Lower</option>
                <option value="Full Body">Full Body</option>
              </select>
            </label>
          </div>

          <Button variant={"secondary"} type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {loading && (
          <div className="flex justify-center items">
            <Image
              src="/assets/workoutLoader.gif"
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

export default WorkoutForm;
