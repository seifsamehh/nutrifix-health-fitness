import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Script from "next/script";

export default function page() {
  return (
    <>
      <Header />
      <section className="min-h-screen flex justify-center items-center">
        <div
          className="visme_d"
          data-title="NutriFix Feedback"
          data-url="6x370mkr-nutrifix-feedback"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="50544"
        ></div>
        <Script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></Script>
      </section>
      <Footer />
    </>
  );
}
