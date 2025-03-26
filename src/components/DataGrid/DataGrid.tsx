import React, { ReactNode } from "react";
import { DataGridProps, TableBodyProps, TableHeaderProps } from "./types";
import "./styles.css";
import TextCell from "../TextCell";

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
    const getColId = (columnsLength: number, index: number) => {
      if (index === 0 && columnsLength === 1) {
        return "single-column";
      }

      if (index === 0 && columnsLength > 1) return "first-column";
      if (index === columnsLength - 1) return "last-column";
      return "middle-column";
    };

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
            id={getColId(columns?.length, index)}
          >
            <span>{column.header}</span>
          </th>
        ))}
      </thead>
    );
  };

  const TableBody = ({ rows }: TableBodyProps): ReactNode => {
    const getRowId = (
      rowsLength: number,
      cellsLength: number,
      rowIndex: number,
      cellIndex: number
    ) => {
      if (rowIndex === rowsLength - 1 && cellIndex === 0 && cellsLength === 1)
        return "single-cell";
      if (rowIndex === rowsLength - 1 && cellIndex === 0)
        return "last-row-left";
      if (rowIndex === rowsLength - 1 && cellIndex === cellsLength - 1)
        return "last-row-right";
      if (rowIndex === rowsLength - 1) return "last-row-middle";
      if (cellIndex === cellsLength - 1 && cellsLength === 1)
        return "single-last-cell";
      if (cellIndex === cellsLength - 1) return "last-cell-right";

      return "";
    };

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
                  colSpan={index}
                  className="zayrok-cell"
                  id={getRowId(rows.length, row.cells.length, rowIndex, index)}
                  style={{ color: styles.fontColor }}
                >
                  {cell.type === "text" && (
                    <TextCell
                      type="text"
                      field={cell.field}
                      label={cell.label}
                    />
                  )}
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
