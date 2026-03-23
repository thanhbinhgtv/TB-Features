import { Footer } from "@/components/layouts/footer/Footer";
import { Header } from "@/components/layouts/header/Header";
import { CategoriesSection } from "./components/CategoriesSection";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { HeroSection } from "./components/HeroSection";
import type {
  FeaturedProduct,
  NavItem,
} from "@/features/Home/types/home.types";

export const HomePage = () => {
  const navItems: NavItem[] = [
    { label: "Trang chủ", href: "#" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Giỏ hàng", href: "/cart" },
    { label: "Đăng nhập", href: "/login" },
  ];

  const categories: string[] = [
    "Tôm",
    "Cua - Ghẹ",
    "Cá biển",
    "Mực - Bạch tuộc",
    "Ngao - Sò - Ốc",
    "Combo tiết kiệm",
  ];

  const featuredProducts: FeaturedProduct[] = [
    { name: "Tôm thẻ tươi sống", price: "229.000đ/kg" },
    { name: "Cua Cà Mau chắc thịt", price: "389.000đ/kg" },
    { name: "Cá hồi phi lê", price: "315.000đ/kg" },
    { name: "Mực ống loại 1", price: "279.000đ/kg" },
    { name: "Ngao trắng làm sạch", price: "95.000đ/kg" },
    { name: "Combo lẩu hải sản", price: "459.000đ/set" },
  ];

  return (
    <main className="min-h-screen text-zinc-900">
      <Header navItems={navItems} />
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
      <Footer />
    </main>
  );
};

export default HomePage;
