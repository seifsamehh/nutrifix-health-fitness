import dynamic from "next/dynamic";
import SkeletonLoader from "@/components/shared/SkeletonLoader";

const HeaderHome = dynamic(() => import("@/components/shared/HeaderHome"));
const Welcome = dynamic(
  () => import("@/components/home page/welcome message/Welcome"),
  {
    loading: () => <SkeletonLoader />,
  }
);
const Categories = dynamic(
  () => import("@/components/home page/categories/Categories"),
  {
    loading: () => <SkeletonLoader />,
  }
);
const Companies = dynamic(
  () => import("@/components/home page/companies/Companies"),
  {
    loading: () => <SkeletonLoader />,
  }
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
