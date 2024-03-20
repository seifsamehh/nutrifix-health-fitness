import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="cards flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-6 md:gap-0">
      {/* problem 1 */}
      <div className="border border-black/[0.2] dark:border-white/[0.2] bg-background flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -right-3 dark:text-white text-black" />

        <EvervaultCard text="Workout" />

        <h3 className=" text-black dark:text-white mt-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores
          laborum nam.
        </h3>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          test
        </p>
      </div>
      {/* problem 2 */}
      <div className="border border-black/[0.2] dark:border-white/[0.2] bg-background flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -right-3 dark:text-white text-black" />

        <EvervaultCard text="Meal" />

        <h3 className=" text-black dark:text-white mt-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores
          laborum nam.
        </h3>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          test
        </p>
      </div>
      {/* problem 3 */}
      <div className="border border-black/[0.2] dark:border-white/[0.2] bg-background flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-[13.3rem] -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 bottom-[11.7rem] -right-3 dark:text-white text-black" />

        <EvervaultCard text="Calories" />

        <h3 className=" text-black dark:text-white mt-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores
          laborum nam.
        </h3>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          test
        </p>
      </div>
    </div>
  );
}
