import HeroBtn from "@/actions/HeroBtn";
import HeroSvg from "@/lib/animations/HeroSvg";
import HeroTitle from "@/lib/animations/HeroTitle";

export default function Hero() {
  return (
    <section className="heroo min-h-screen flex items-center relative">
      <div className="container flex justify-center items-center">
        <div className="upper-part text-center relative z-10">
          <HeroTitle />
          <HeroBtn />
        </div>
      </div>
      <HeroSvg />
    </section>
  );
}
