import { createSelector } from "@reduxjs/toolkit";
import type { PriceBoardRootState } from "./priceBoard.store";

export const selectPriceBoardRows = (state: PriceBoardRootState) => state.priceBoard.rows;
export const selectPriceBoardSearchTerm = (state: PriceBoardRootState) => state.priceBoard.searchTerm;
export const selectPriceBoardActiveTab = (state: PriceBoardRootState) => state.priceBoard.activeTab;

export const selectVisibleRows = createSelector(
  [selectPriceBoardRows, selectPriceBoardSearchTerm],
  (rows, searchTerm) => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
      return rows;
    }

    return rows.filter((row) => {
      return row.symbol.toLowerCase().includes(normalizedSearchTerm);
    });
  },
);
