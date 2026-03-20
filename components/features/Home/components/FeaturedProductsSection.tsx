import type { FeaturedProduct } from "@/types/home.types";

type FeaturedProductsSectionProps = {
  products: FeaturedProduct[];
};

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  return (
    <section id="products" className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
      <h2 className="text-xl font-semibold text-sky-900">Sản phẩm bán chạy</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="rounded-xl border border-sky-100 bg-white p-4">
            <div className="mb-4 aspect-[4/3] rounded-lg bg-gradient-to-br from-cyan-50 to-sky-100" />
            <h3 className="text-base font-semibold">{product.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">Giá từ {product.price}</p>
            <button className="mt-4 w-full rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800">
              Thêm vào giỏ
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
