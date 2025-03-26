import { ReactNode } from "react";

type cellType =
  | "text"
  | "number"
  | "select"
  | "multiSelect"
  | "chip"
  | "custom";

type option = {
  id: string | number;
};

type selectedOptions = {
  id: string | number;
};

interface BaseCell {
  field?: string | number;
  type: cellType;
  label?: string;
}

export interface TextCell extends BaseCell {
  type: "text";
  field?: string;
  label?: string;
}

interface NumberCell extends BaseCell {
  type: "number";
  field?: number;
}

interface SelectCell extends BaseCell {
  type: "select";
  options: option[] | [];
  value?: string | number;
}

interface MultiSelectCell extends BaseCell {
  type: "multiSelect";
  options: option[] | [];
  selectedOptions: selectedOptions[] | [];
}

interface ChipCell extends BaseCell {
  type: "chip";
  field: string;
  background: "default" | "primary" | "secondary" | string;
}

interface CustomCell extends BaseCell {
  type: "custom";
  render: ReactNode;
}

export type Cell =
  | TextCell
  | NumberCell
  | SelectCell
  | MultiSelectCell
  | ChipCell
  | CustomCell;

export type Cells = Cell[];
