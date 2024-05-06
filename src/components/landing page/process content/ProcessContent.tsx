import { getStrapiData } from "@/data/StrapiData";
import StepComponent from "./StepComponent";
import localFont from "next/font/local";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export default async function ProcessContent() {
  const path = "/api/landing-page";

  try {
    const data = await getStrapiData(path);
    const title = data?.blocks?.[3].sectionTitle;
    const blocks = data?.blocks?.[3].process;

    if (blocks && Array.isArray(blocks)) {
      return (
        <div className="process-content">
          <div className="p-4 max-w-2xl mx-auto">
            <h2
              className={`${amulya.className} dark:text-gray-100 mb-8 text-3xl lg:text-7xl`}
            >
              {title}
            </h2>
            {blocks.map((block, index) => (
              <StepComponent
                key={index}
                title={block.title || "step"}
                description={block.description || "What to do in this step"}
              />
            ))}
            <StepComponent title="Ready!" />
          </div>
        </div>
      );
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }

    return (
      <section className="process-content">
        <div className="p-4 max-w-2xl mx-auto">
          <h2
            className={`${amulya.className} dark:text-gray-100 mb-8 text-3xl lg:text-7xl`}
          >
            How it works?
          </h2>
          <StepComponent
            title="Signup or Signin"
            description="Create an account or login to your account."
          />
          <StepComponent
            title="Choose service"
            description="Navigate to the service you want to use."
          />
          <StepComponent
            title="Use the AI tool"
            description="Feel free to use the AI tool to generate what you want."
          />
          <StepComponent title="Ready!" />
        </div>
      </section>
    );
  }
}
