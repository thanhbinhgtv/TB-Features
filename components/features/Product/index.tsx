"use client";

import Link from "next/link";
import { useProducts } from "@/hooks/product/useProducts.ts";
import { ProductCard } from "@/components/features/Product/components/ProductCard";

const ProductsPage = () => {
  const { products, loading } = useProducts();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tất cả sản phẩm</h1>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-800">
            Về trang chủ
          </Link>
        </div>

        {loading ? (
          <p className="text-sm text-zinc-500">Đang tải sản phẩm...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductsPage