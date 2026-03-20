"use client";

import { useEffect, useState } from "react";
import { getFeaturedProducts } from "@/services/product.service";
import type { Product } from "@/types/product.types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts()
      .then((result) => {
        setProducts(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { products, loading };
}
