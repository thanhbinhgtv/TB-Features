"use client";

import { Provider } from "react-redux";
import { useState, type PropsWithChildren } from "react";
import { createPriceBoardStore } from "../store/priceBoard.store";

const PriceBoardProvider = ({ children }: PropsWithChildren) => {
  const [store] = useState(createPriceBoardStore);

  return <Provider store={store}>{children}</Provider>;
};

export default PriceBoardProvider;
