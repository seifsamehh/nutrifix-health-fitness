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
  const [allergie, setAllergie] = useState("");
  const [medication, setMedication] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [sleepPattern, setSleepPattern] = useState("");
  const [smoker, setSmoker] = useState("");
  const [alchool, setAlchool] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = useMemo(
    () => ({
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
      gender: gender,
      activity_level: activityLevel,
      medical_condition: medicalCondition,
      allergie: allergie,
      medication: medication,
      fitness_goal: fitnessGoal,
      stress_level: stressLevel,
      sleep_pattern: sleepPattern,
      smoker: smoker,
      alchool: alchool,
    }),
    [
      age,
      height,
      weight,
      gender,
      activityLevel,
      medicalCondition,
      allergie,
      medication,
      fitnessGoal,
      stressLevel,
      sleepPattern,
      smoker,
      alchool,
    ]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://nutrifix.onrender.com/diet",
        payload,
        { headers: { "Content-Encoding": "gzip" } }
      );

      if (response.status === 200) {
        setAge("");
        setHeight("");
        setWeight("");
        setGender("");
        setActivityLevel("");
        setMedicalCondition("");
        setAllergie("");
        setMedication("");
        setFitnessGoal("");
        setStressLevel("");
        setSleepPattern("");
        setSmoker("");
        setAlchool("");
        // setResponse("Form submitted successfully!");
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
      console.error("Error submitting form:", error);
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
            <label className="text-lg font-bold">
              Gender:
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Activity Level:
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Sedentary">Sedentary</option>
                <option value="Lightly Active">Lightly Active</option>
                <option value="Moderately Active">Moderately Active</option>
                <option value="Very Active">Very Active</option>
                <option value="Extremely Active">Extremely Active</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Medical Condition:
              <select
                value={medicalCondition}
                onChange={(e) => setMedicalCondition(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Diabetes">Diabetes</option>
                <option value="Hypertension (High Blood Pressure)">
                  Hypertension (High Blood Pressure)
                </option>
                <option value="Heart Disease">Heart Disease</option>
                <option value="Celiac Disease (Gluten Intolerance)">
                  Celiac Disease (Gluten Intolerance)
                </option>
                <option value="Irritable Bowel Syndrome (IBS)">
                  Irritable Bowel Syndrome (IBS)
                </option>
                <option value="None">None</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Allergie:
              <select
                value={allergie}
                onChange={(e) => setAllergie(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Gluten">Gluten</option>
                <option value="Lactose">Lactose</option>
                <option value="Nuts">Nuts</option>
                <option value="Shellfish">Shellfish</option>
                <option value="Soy">Soy</option>
                <option value="None">None</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="medication" className="text-lg font-bold">
              Medication
            </Label>
            <Input
              type="text"
              id="medication"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Fitness Goal:
              <select
                value={fitnessGoal}
                onChange={(e) => setFitnessGoal(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Lose Weight">Lose Weight</option>
                <option value="Maintain Weight">Maintain Weight</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Endurance Improvement">
                  Endurance Improvement
                </option>
                <option value="Overall Health Maintenance">
                  Overall Health Maintenance
                </option>
                <option value="Flexibility and Mobilit">
                  Flexibility and Mobilit
                </option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Stress Level:
              <select
                value={stressLevel}
                onChange={(e) => setStressLevel(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Very High">Very High</option>
                <option value="Not Sure/Varies">Not Sure/Varies</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Sleep Pattern:
              <select
                value={sleepPattern}
                onChange={(e) => setSleepPattern(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
                <option value="Varied">Varied</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Smoker:
              <select
                value={smoker}
                onChange={(e) => setSmoker(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Non-smoker">Non-smoker</option>
                <option value="Occasional-smoker">Occasional-smoker</option>
                <option value="Regular Smoker">Regular Smoker</option>
                <option value="Former Smoker">Former Smoker</option>
                <option value="Heavy Smoker">Heavy Smoker</option>
              </select>
            </label>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-lg font-bold">
              Alchool:
              <select
                value={alchool}
                onChange={(e) => setAlchool(e.target.value)}
                className="bg-primary text-primary-foreground p-2 rounded-md w-full"
              >
                <option value="Non-drinker">Non-drinker</option>
                <option value="Occasional drinker">Occasional drinker</option>
                <option value="Moderate drinker">Moderate drinker</option>
                <option value="Regular drinker">Regular drinker</option>
                <option value="Heavy drinker">Heavy drinker</option>
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
