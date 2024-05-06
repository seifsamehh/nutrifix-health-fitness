"use client";

import { useState } from "react";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
      my_goals: myGoals,
      fitness_level: fitnessLevel,
      days: parseInt(days),
      hours: parseInt(hours),
      health_consd: healthCond,
      routine: routine,
    };

    try {
      const response = await fetch("https://nutrifix.onrender.com/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setResponse("Error: Unable to connect to the API");
    }
  };
  return (
    <div>
      <h1>Workout Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          My Goals:
          <input
            type="text"
            value={myGoals}
            onChange={(e) => setMyGoals(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fitness Level:
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Elite">Elite</option>
          </select>
        </label>
        <br />
        <label>
          Days:
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </label>
        <br />
        <label>
          Health Condition:
          <input
            type="text"
            value={healthCond}
            onChange={(e) => setHealthCond(e.target.value)}
          />
        </label>
        <br />
        <label>
          Routine:
          <input
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default WorkoutForm;
