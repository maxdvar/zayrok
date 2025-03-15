import { Cells } from "./cellTypes";

export interface Row {
  rowId: number;
  cells: Cells;
}

export type Rows = Row[];
