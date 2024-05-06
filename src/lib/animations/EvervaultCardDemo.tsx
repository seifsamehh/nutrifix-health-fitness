import { getStrapiData } from "@/data/StrapiData";
import Card from "@/components/landing page/vision content/Card";
import { CardProps } from "@/types/cardProps";

export async function EvervaultCardDemo() {
  const path = "/api/landing-page";
  try {
    const data = await getStrapiData(path);
    const blocks: CardProps[] = data?.blocks?.[2]?.problem || [];

    return (
      <div className="cards flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-6 md:gap-0">
        {blocks.map((block, index) => (
          <Card
            key={index}
            title={block.title || "problem"}
            description={block.description || "Here we talk about the problem"}
            badge={block.badge || "nutrifix"}
          />
        ))}
      </div>
    );
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    return (
      <div className="cards flex justify-center items-center min-[290px]:flex-wrap md:flex-nowrap min-[290px]:gap-6 md:gap-0">
        <Card
          title="workout"
          description="Here we talk about the workout problem"
          badge="planner"
        />
        <Card
          title="diet"
          description="Here we talk about the diet problem"
          badge="planner"
        />
        <Card
          title="calories"
          description="Here we talk about the calories problem"
          badge="estimation"
        />
      </div>
    );
  }
}
