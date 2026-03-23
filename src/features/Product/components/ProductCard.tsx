import type { Product } from "@/features/Product/types/product.types";
import { addToCart } from "@/features/Cart/store/cart.store";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="mb-3 aspect-[4/3] rounded-lg bg-zinc-100" />
      <h3 className="text-base font-semibold">{product.name}</h3>
      <p className="mt-1 text-sm text-zinc-600">{product.category}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900">{product.price.toLocaleString("vi-VN")}đ</p>
      <button
        type="button"
        onClick={() => addToCart(product.id)}
        className="mt-3 w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Thêm vào giỏ
      </button>
    </article>
  );
}
