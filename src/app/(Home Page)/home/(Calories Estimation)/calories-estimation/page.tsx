import localFont from "next/font/local";
import Link from "next/link";

// Amulya font
const amulya = localFont({
  src: [
    {
      path: "../../../../../../public/fonts/Amulya/Amulya-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const CaloriesPage = () => {
  return (
    <section className="h-screen flex justify-center items-center flex-col gap-2.5">
      <h1 className={`${amulya.className} text-6xl font-bold`}>SOON...</h1>
      <Link
        href="/home"
        title="Go to Home"
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Go to Home
      </Link>
    </section>
  );
};

export default CaloriesPage;
