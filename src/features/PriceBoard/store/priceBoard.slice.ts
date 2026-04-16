import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { priceBoardMockRows } from "../mock/priceBoard.mock";
import type { MarketPatch, MarketRow } from "../types/priceBoard.types";

type PriceBoardState = {
  rows: MarketRow[];
  searchTerm: string;
  activeTab: string;
};

const initialState: PriceBoardState = {
  rows: priceBoardMockRows,
  searchTerm: "",
  activeTab: "VN30",
};

const priceBoardSlice = createSlice({
  name: "priceBoard",
  initialState,
  reducers: {
    setRows(state, action: PayloadAction<MarketRow[]>) {
      state.rows = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
    upsertRow(state, action: PayloadAction<MarketRow>) {
      const index = state.rows.findIndex((row) => row.symbol === action.payload.symbol);
      if (index === -1) {
        state.rows.push(action.payload);
        return;
      }
      state.rows[index] = action.payload;
    },
    patchRow(state, action: PayloadAction<MarketPatch>) {
      const index = state.rows.findIndex((row) => row.symbol === action.payload.symbol);
      if (index === -1) {
        return;
      }
      state.rows[index] = {
        ...state.rows[index],
        ...action.payload.changes,
      };
    },
  },
});

export const { patchRow, setActiveTab, setRows, setSearchTerm, upsertRow } = priceBoardSlice.actions;
export const priceBoardReducer = priceBoardSlice.reducer;
