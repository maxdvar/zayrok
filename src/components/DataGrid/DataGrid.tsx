import React from "react";
import { DataGridProps } from "./types";

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  columns,
  theme,
  onSort,
  pagination,
  enableSelection,
  onSelectionChange,
  density,
  borderStyle,
  borderWidth,
}) => {
  return <div>DataGrid</div>;
};

export default DataGrid;
