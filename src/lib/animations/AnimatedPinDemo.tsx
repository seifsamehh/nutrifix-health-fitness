"use client";

import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export function AnimatedPinDemo() {
  return (
    <div className="categories-cards flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap">
      {/* workout */}
      <Link
        href={"/home/workout-planner"}
        title="Workout Planner"
        aria-label="Workout Planner"
      >
        <div className="min-[290px]:h-[25rem] md:h-[40rem] w-full flex items-center justify-center ">
          <PinContainer title="/workout planner" href="/home/workout-planner">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3
                className={`${amulya.className} max-w-xs !pb-2 !m-0 text-xl text-card-foreground`}
              >
                Workout Planner
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-card-foreground">
                  Create your workout plan and stay motivated.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-300 to-cyan-500" />
            </div>
          </PinContainer>
        </div>
      </Link>
      {/* diet */}
      <Link
        href={"/home/diet-planner"}
        title="Diet Planner"
        aria-label="Diet Planner"
      >
        <div className="min-[290px]:h-[25rem] md:h-[40rem] w-full flex items-center justify-center ">
          <PinContainer title="/Diet planner" href="/home/diet-planner">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3
                className={`${amulya.className} max-w-xs !pb-2 !m-0 text-xl text-card-foreground`}
              >
                Diet Planner
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-card-foreground">
                  Create your Diet plan and stay motivated.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-300 to-cyan-500" />
            </div>
          </PinContainer>
        </div>
      </Link>
      {/* calories */}
      <Link
        href={"/home/calories-estimation"}
        title="Calories Estimation"
        aria-label="Calories Estimation"
      >
        <div className="min-[290px]:h-[25rem] md:h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="/Calories estimation"
            href="/home/calories-estimation"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3
                className={`${amulya.className} max-w-xs !pb-2 !m-0 text-xl text-card-foreground`}
              >
                Calories Estimation
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-card-foreground">
                  Calculate your daily calorie intake.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-300 to-cyan-500" />
            </div>
          </PinContainer>
        </div>
      </Link>
    </div>
  );
}
