import { Footer } from "@/components/layouts/footer/Footer";
import { Header } from "@/components/layouts/header/Header";
import { CategoriesSection } from "./components/CategoriesSection";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { HeroSection } from "./components/HeroSection";
import type {
  FeaturedProduct,
} from "@/features/Home/types/home.types";

export const HomePage = () => {
  const categories: string[] = [
    "Tôm",
    "Cua - Ghẹ",
    "Cá biển",
    "Mực - Bạch tuộc",
    "Ngao - Sò - Ốc",
    "Combo tiết kiệm",
  ];

  const featuredProducts: FeaturedProduct[] = [
    { name: "Skeleton", feature: "Skeleton" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
    { name: "unkow", feature: "---" },
  ];

  return (
    <main className="min-h-screen text-zinc-900">
      {/* <HeroSection /> */}
      {/* <CategoriesSection categories={categories} /> */}
      <FeaturedProductsSection products={featuredProducts} />
      {/* <Footer /> */}
    </main>
  );
};

export default HomePage;
