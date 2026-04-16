import type {
  CellClassParams,
  ColDef,
  ColGroupDef,
  ValueFormatterParams,
} from "ag-grid-community";
import type { MarketRow } from "../types/priceBoard.types";
import styles from "../styles/priceBoard.module.css";

const formatPrice = ({ value }: ValueFormatterParams<MarketRow, number>) => {
  return Number(value ?? 0).toFixed(2);
};

const formatVolume = ({ value }: ValueFormatterParams<MarketRow, number>) => {
  return Number(value ?? 0).toLocaleString("en-US");
};

const changeClass = (params: CellClassParams<MarketRow, number>) => {
  const value = Number(params.value ?? 0);
  if (value > 0) {
    return styles.cellUp;
  }
  if (value < 0) {
    return styles.cellDown;
  }
  return styles.cellRef;
};

const basePriceColumn: ColDef<MarketRow> = {
  type: "numericColumn",
  width: 88,
  valueFormatter: formatPrice,
  enableCellChangeFlash: true, // Bật Flash cho các cột giá, nhưng màu flash sẽ dựa trên giá trị của change
};

const baseVolumeColumn: ColDef<MarketRow> = {
  type: "numericColumn",
  width: 88,
  valueFormatter: formatVolume,
};

export const priceBoardColumnDefs: Array<ColDef<MarketRow> | ColGroupDef<MarketRow>> = [
  {
    field: "symbol",
    headerName: "CK",
    pinned: "left",
    width: 90,
    cellClass: styles.cellSymbol,
  },
  {
    field: "ceiling",
    headerName: "Tran",
    ...basePriceColumn,
    cellClass: styles.cellCeiling,
  },
  {
    field: "floor",
    headerName: "San",
    ...basePriceColumn,
    cellClass: styles.cellFloor,
  },
  {
    field: "reference",
    headerName: "TC",
    ...basePriceColumn,
    cellClass: styles.cellRef,
  },
  {
    headerName: "Ben mua",
    children: [
      { field: "bid3Price", headerName: "Gia 3", ...basePriceColumn, cellClass: styles.cellDown },
      { field: "bid3Volume", headerName: "KL 3", ...baseVolumeColumn },
      { field: "bid2Price", headerName: "Gia 2", ...basePriceColumn, cellClass: styles.cellRef },
      { field: "bid2Volume", headerName: "KL 2", ...baseVolumeColumn },
      { field: "bid1Price", headerName: "Gia 1", ...basePriceColumn, cellClass: styles.cellUp },
      { field: "bid1Volume", headerName: "KL 1", ...baseVolumeColumn },
    ],
  },
  {
    headerName: "Khop lenh",
    children: [
      { field: "matchPrice", headerName: "Gia", ...basePriceColumn, cellClass: changeClass },
      { field: "matchVolume", headerName: "KL", ...baseVolumeColumn },
      {
        field: "change",
        headerName: "+/-",
        ...basePriceColumn,
        cellClass: changeClass,
      },
      {
        field: "changePct",
        headerName: "+/-(%)",
        width: 92,
        valueFormatter: ({ value }) => `${Number(value ?? 0).toFixed(2)}%`,
        cellClass: changeClass,
        enableCellChangeFlash: true, // Bật Flash cho cả changePct, nhưng màu flash sẽ dựa trên giá trị của change
      },
    ],
  },
  {
    headerName: "Ben ban",
    children: [
      { field: "ask1Price", headerName: "Gia 1", ...basePriceColumn, cellClass: styles.cellUp },
      { field: "ask1Volume", headerName: "KL 1", ...baseVolumeColumn },
      { field: "ask2Price", headerName: "Gia 2", ...basePriceColumn, cellClass: styles.cellRef },
      { field: "ask2Volume", headerName: "KL 2", ...baseVolumeColumn },
      { field: "ask3Price", headerName: "Gia 3", ...basePriceColumn, cellClass: styles.cellUp },
      { field: "ask3Volume", headerName: "KL 3", ...baseVolumeColumn },
    ],
  },
];
