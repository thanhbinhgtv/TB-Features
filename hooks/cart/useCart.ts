"use client";

import { useMemo } from "react";
import { useCartStore } from "@/store/cart.store";

export function useCart() {
  const { items } = useCartStore();

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  return {
    items,
    totalItems,
  };
}
