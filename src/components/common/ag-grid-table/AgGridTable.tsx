"use client";

import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry, type Theme } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

type AgGridTableProps<TData> = {
  containerClassName?: string;
  theme?: Theme;
} & AgGridReactProps<TData>;

const AgGridTable = <TData,>({
  containerClassName,
  theme,
  ...gridProps
}: AgGridTableProps<TData>) => {
  return (
    <div className={containerClassName}>
      <AgGridReact<TData> {...gridProps} theme={theme} />
    </div>
  );
};

export default AgGridTable;
