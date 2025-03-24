import React, { ReactNode } from "react";
import { DataGridProps, TableBodyProps, TableHeaderProps } from "./types";
import "./styles.css";

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  columns,
  theme = "dark",
  customTheme,
  emptyLabel = "No Data Available",
  // onSort,
  // pagination,
  // enableSelection,
  // onSelectionChange,
  // density,
  // borderStyle,
  // borderWidth,
}): ReactNode => {
  const themeStyles = {
    light: {
      headerBackground: "#ccc",
      bodyBackground: "#e8e8e8",
      fontColor: "#000",
    },
    dark: {
      headerBackground: "#272727",
      bodyBackground: "#333",
      fontColor: "#fff",
    },
    transparent: {
      headerBackground: "#0000009f",
      bodyBackground: "#0000008c",
      fontColor: "#fff",
    },
    custom: {
      headerBackground: customTheme?.headerBackground || "#272727",
      bodyBackground: customTheme?.bodyBackground || "#333",
      fontColor: customTheme?.fontColor || "#fff",
    },
  };

  const styles = themeStyles[theme] || themeStyles.dark;

  const TableHeader = ({ columns }: TableHeaderProps): ReactNode => {
    return (
      <thead
        id="zayrok-table-header"
        style={{
          backgroundColor: styles.headerBackground,
          color: styles.fontColor,
        }}
      >
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
      <tbody
        id="zayrok-table-body"
        style={{
          backgroundColor: styles.bodyBackground,
          color: styles.fontColor,
        }}
      >
        {rows?.length > 0 ? (
          rows.map((row, rowIndex) => (
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
                  <span style={{ color: styles.fontColor }}>{cell.field}</span>
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={columns.length}
              style={{ color: styles.fontColor }}
              className="zayrok-empty-label"
            >
              <span>{emptyLabel}</span>
            </td>
          </tr>
        )}
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
