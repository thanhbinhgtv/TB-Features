"use client";

import Link from "next/link";
import { useCart } from "@/features/Cart/hooks/useCart";

const CartPage = () => {
  const { items, totalItems } = useCart();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Giỏ hàng</h1>
          <Link href="/products" className="text-sm text-zinc-600 hover:text-zinc-800">
            Tiếp tục mua sắm
          </Link>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <p className="text-sm text-zinc-700">Số dòng sản phẩm: {items.length}</p>
          <p className="mt-1 text-sm text-zinc-700">Tổng số lượng: {totalItems}</p>
        </div>
      </div>
    </main>
  );
}

export default CartPage;