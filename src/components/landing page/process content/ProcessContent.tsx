import { getStrapiData } from "@/data/StrapiData";
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
              <div className="flex" key={index}>
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-accent"
                      >
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="h-full w-px bg-gray-300 dark:bg-primary"></div>
                </div>
                <div className="pt-1 pb-8">
                  <h3 className={`${amulya.className} mb-2 text-xl`}>
                    {block.title || "step"}
                  </h3>
                  <p className="text-muted">
                    {block.description || "What to do in this step"}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aceent bg-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-black"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1 ">
                <h3 className={`${amulya.className} mb-2 text-xl`}>Ready!</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }

    return (
      <div className="process-content">
        <div className="p-4 max-w-2xl mx-auto">
          <h2
            className={`${amulya.className} dark:text-gray-100 mb-8 text-3xl lg:text-7xl`}
          >
            How it works?
          </h2>
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-accent"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 dark:bg-primary"></div>
            </div>
            <div className="pt-1 pb-8">
              <h3 className={`${amulya.className} mb-2 text-xl`}>
                Signup or Signin
              </h3>
              <p className="text-muted">
                Create an account or login to your account.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-accent"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 dark:bg-primary"></div>
            </div>
            <div className="pt-1 pb-8">
              <h3 className={`${amulya.className} mb-2 text-xl`}>
                Choose service
              </h3>
              <p className="text-muted">
                Navigate to the service you want to use.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-accent"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 dark:bg-primary"></div>
            </div>
            <div className="pt-1 pb-8">
              <h3 className={`${amulya.className} mb-2 text-xl`}>
                Use the AI tool
              </h3>
              <p className="text-muted">
                Feel free to use the AI tool to generate what you want.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aceent bg-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-black"
                  >
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1 ">
              <h3 className={`${amulya.className} mb-2 text-xl`}>Ready!</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
