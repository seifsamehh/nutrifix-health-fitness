import { StepProps } from "@/interfaces/stepProps";
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

const StepComponent: React.FC<StepProps> = ({ title, description }) => {
  return (
    <div className="step flex items-center gap-6 my-4">
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
      <div className="step-content">
        <h3 className={`${amulya.className} step-title text-lg`}>{title}</h3>
        <p className={`${amulya.className} step-description text-muted`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepComponent;
