import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { PriceBoardDispatch, PriceBoardRootState } from "./priceBoard.store";

export const usePriceBoardDispatch = () => useDispatch<PriceBoardDispatch>();
export const usePriceBoardSelector: TypedUseSelectorHook<PriceBoardRootState> = useSelector;
