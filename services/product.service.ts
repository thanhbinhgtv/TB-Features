import type { Product } from "@/types/product.types";

export async function getFeaturedProducts(): Promise<Product[]> {
  const mockProducts: Product[] = [
    { id: "p1", name: "Áo thun basic", price: 199000, category: "Thời trang" },
    { id: "p2", name: "Tai nghe Bluetooth", price: 499000, category: "Điện tử" },
    { id: "p3", name: "Bình giữ nhiệt", price: 159000, category: "Gia dụng" },
    { id: "p4", name: "Kem chống nắng", price: 249000, category: "Mỹ phẩm" },
    { id: "p5", name: "Giày chạy bộ", price: 799000, category: "Thể thao" },
    { id: "p6", name: "Ba lô laptop", price: 349000, category: "Phụ kiện" },
  ];

  return Promise.resolve(mockProducts);
}
