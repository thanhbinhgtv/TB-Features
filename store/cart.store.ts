import { useSyncExternalStore } from "react";

export type CartItem = {
  id: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

let state: CartState = {
  items: [],
};

const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export function addToCart(id: string, quantity = 1) {
  const existingItem = state.items.find((item) => item.id === id);

  if (existingItem) {
    state = {
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
      ),
    };
  } else {
    state = {
      items: [...state.items, { id, quantity }],
    };
  }

  emitChange();
}

export function useCartStore() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
  );
}
