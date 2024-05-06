import HeaderHome from "@/components/shared/HeaderHome";
import Welcome from "@/components/home page/welcome message/Welcome";
import Categories from "@/components/home page/categories/Categories";
import Companies from "@/components/home page/companies/Companies";
import FooterHome from "@/components/shared/FooterHome";

export default function page() {
  return (
    <>
      <HeaderHome />
      <main className="home-page">
        <Welcome />
        <Categories />
        <Companies />
      </main>
      <FooterHome />
    </>
  );
}
