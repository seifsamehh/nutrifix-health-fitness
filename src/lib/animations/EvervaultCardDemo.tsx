import { getStrapiData } from "@/data/StrapiData";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Badge } from "@/components/ui/badge";

export async function EvervaultCardDemo() {
  const path = "/api/landing-page";
  try {
    const data = await getStrapiData(path);
    const blocks = data?.blocks?.[2].problem;

    if (blocks && Array.isArray(blocks)) {
      return (
        <div className="cards flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-6 md:gap-0">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="card border border-black/[0.2] dark:border-white/[0.2] bg-background flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"
            >
              <Icon className="absolute h-6 w-6 -top-[13.2rem] -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 bottom-[11.7rem] -left-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 -top-[13.2rem] -right-3 dark:text-white text-black" />
              <Icon className="absolute h-6 w-6 bottom-[11.7rem] -right-3 dark:text-white text-black" />
              <EvervaultCard text={block.title || "problem"} />
              <h3 className="text-black dark:text-white mt-4 text-sm font-light">
                {block.description || "Here we talk about the problem"}
              </h3>
              <Badge className="mt-4">{block.badge || "nutrifix"}</Badge>
            </div>
          ))}
        </div>
      );
    } else {
      console.log("Blocks data is not in the expected format");
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }
  return null;
}
