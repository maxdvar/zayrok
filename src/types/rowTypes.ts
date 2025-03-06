import { ReactNode } from "react";

type rowType = "text" | "number" | "select" | "multiSelect" | "chip" | "custom";

type option = {
  id: string | number;
};

type selectedOptions = {
  id: string | number;
};

interface BaseRow {
  field?: string | number;
  type: rowType;
  label?: string;
}

interface TextRow extends BaseRow {
  type: "text";
  field?: string;
}

interface NumberRow extends BaseRow {
  type: "number";
  field?: number;
}

interface SelectRow extends BaseRow {
  type: "select";
  options: option[] | [];
  value?: string | number;
}

interface MultiSelectRow extends BaseRow {
  type: "multiSelect";
  options: option[] | [];
  selectedOptions: selectedOptions[] | [];
}

interface ChipRow extends BaseRow {
  type: "chip";
  field: string;
  background: "default" | "primary" | "secondary" | string;
}

interface CustomRow extends BaseRow {
  type: "custom";
  render: ReactNode;
}

export type Row =
  | TextRow
  | NumberRow
  | SelectRow
  | MultiSelectRow
  | ChipRow
  | CustomRow;

export type Rows = Row[];
