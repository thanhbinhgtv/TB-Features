"use client";

import { useMemo } from "react";
import { themeQuartz, type GridOptions } from "ag-grid-community";
import AgGridTable from "@/components/common/ag-grid-table/AgGridTable";
import styles from "../styles/priceBoard.module.scss";
import { priceBoardColumnDefs } from "../constants/priceBoard.columns";
import { selectVisibleRows } from "../store/priceBoard.selectors";
import { usePriceBoardSelector } from "../store/hooks";
import type { MarketRow } from "../types/priceBoard.types";

const priceBoardTheme = themeQuartz.withParams({
  backgroundColor: "var(--surface-page)",
  foregroundColor: "var(--text-primary)",
  headerBackgroundColor: "var(--surface-subtle)",
  oddRowBackgroundColor: "var(--surface-card)",
  rowBorder: "solid 1px var(--border-default)",
  borderColor: "var(--border-default)",
  headerColumnBorder: "solid 1px var(--border-default)",
  fontSize: 13,
  fontFamily: "var(--font-sans)",
});

const PriceBoardTable = () => {
  const rows = usePriceBoardSelector(selectVisibleRows);

  const gridOptions = useMemo<GridOptions<MarketRow>>(
    () => ({
      suppressMovableColumns: true,
      suppressCellFocus: true,
      rowHeight: 28,
      headerHeight: 32,
      groupHeaderHeight: 30,
      animateRows: false,
      ensureDomOrder: true,
      cellFlashDuration: 150,   // Thời lượng Flash khi giá thay đổi
      cellFadeDuration: 100,    // Thời lượng Fade để trở về màu bình thường sau khi Flash
      getRowId: (params) => params.data.symbol,
      defaultColDef: {
        resizable: true,
        sortable: true,
        minWidth: 74,
        cellClass: styles.cellNumber,
      },
    }),
    [],
  );

  return (
    <AgGridTable<MarketRow>
      containerClassName={styles.table}
      rowData={rows}
      columnDefs={priceBoardColumnDefs}
      gridOptions={gridOptions}
      theme={priceBoardTheme}
    />
  );
};

export default PriceBoardTable;
