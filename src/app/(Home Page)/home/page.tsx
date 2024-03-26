import dynamic from "next/dynamic";

const HeaderHome = dynamic(() => import("@/components/shared/HeaderHome"));
const Welcome = dynamic(
  () => import("@/components/home page/welcome message/Welcome")
);
const Categories = dynamic(
  () => import("@/components/home page/categories/Categories")
);
const Companies = dynamic(
  () => import("@/components/home page/companies/Companies")
);
const FooterHome = dynamic(() => import("@/components/shared/FooterHome"));

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
