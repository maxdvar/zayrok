import React, { ReactNode } from "react";
import { DataGridProps, TableBodyProps, TableHeaderProps } from "./types";
import "./styles.css";

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  columns,
  // theme,
  // onSort,
  // pagination,
  // enableSelection,
  // onSelectionChange,
  // density,
  // borderStyle,
  // borderWidth,
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

  const TableBody = ({ rows }: TableBodyProps): ReactNode => {
    return (
      <tbody id="zayrok-table-body">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.cells.map((cell, index) => (
              <td
                key={index}
                className="zayrok-cell"
                id={
                  rowIndex === rows.length - 1 && index === 0
                    ? "last-row-left"
                    : rowIndex === rows.length - 1 &&
                      index === row.cells.length - 1
                    ? "last-row-right"
                    : rowIndex === rows.length - 1
                    ? "last-row-middle"
                    : index === row.cells.length - 1
                    ? "last-cell-right"
                    : ""
                }
              >
                <span>{cell.field}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <React.Fragment>
      <table id="zayrok-table">
        <TableHeader columns={columns} />
        <TableBody rows={rows} />
      </table>
    </React.Fragment>
  );
};

export default DataGrid;
