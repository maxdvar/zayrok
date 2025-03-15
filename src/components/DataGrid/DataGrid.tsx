import React, { ReactNode } from "react";
import { DataGridProps, TableHeaderProps } from "./types";
import "./styles.css";

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
}): ReactNode => {
  const TableHeader = ({ columns }: TableHeaderProps): ReactNode => {
    return (
      <thead id="zayrok-table-header">
        {columns.map((column, index) => (
          <th
            key={index}
            className="zayrok-column"
            id={
              index === 0
                ? "first-column"
                : index === columns.length - 1
                ? "last-column"
                : "middle-column"
            }
          >
            <span>{column.header}</span>
          </th>
        ))}
      </thead>
    );
  };

  return (
    <React.Fragment>
      <table id="zayrok-table">
        <TableHeader columns={columns} />
        <tbody id="zayrok-table-body">
          <tr>
            <td className="zayrok-cell">Fila 1</td>
            <td className="zayrok-cell">Fila 2</td>
            <td className="zayrok-cell" id="last-cell-right">
              Fila 3
            </td>
          </tr>
          <tr>
            <td className="zayrok-cell">Fila 4</td>
            <td className="zayrok-cell">Fila 5</td>
            <td className="zayrok-cell" id="last-cell-right">
              Fila 6
            </td>{" "}
          </tr>
          <tr>
            <td className="zayrok-cell" id="last-row-left">
              Fila 7
            </td>
            <td className="zayrok-cell" id="last-row-middle">
              Fila 8
            </td>
            <td className="zayrok-cell" id="last-row-right">
              Fila 9
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DataGrid;
