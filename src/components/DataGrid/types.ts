import { Columns, Rows } from "../../types";

type Theme = "transparent" | "light" | "dark" | "custom";

type Density = "normal" | "compact" | "spaced" | number;

type borderStyle = "standard" | "none" | "horizontal" | "vertical" | "outside";

interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
  onChange: () => void;
}

export interface DataGridProps {
  rows: Rows;
  columns: Columns;
  theme?: Theme;
  onSort?: () => void;
  pagination?: Pagination;
  enableSelection?: boolean;
  onSelectionChange?: () => void;
  density?: Density;
  borderStyle?: borderStyle;
  borderWidth?: number;
}

export interface TableHeaderProps {
  columns: Columns;
}
