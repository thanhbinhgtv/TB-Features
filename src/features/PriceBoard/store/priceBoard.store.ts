import { configureStore } from "@reduxjs/toolkit";
import { priceBoardReducer } from "./priceBoard.slice";

export const createPriceBoardStore = () => {
  return configureStore({
    reducer: {
      priceBoard: priceBoardReducer,
    },
  });
};

export type PriceBoardStore = ReturnType<typeof createPriceBoardStore>;
export type PriceBoardRootState = ReturnType<PriceBoardStore["getState"]>;
export type PriceBoardDispatch = PriceBoardStore["dispatch"];
