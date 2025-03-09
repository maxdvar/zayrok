import React from "react";
import { DataGridProps } from "./types";
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
}) => {
  return (
    <React.Fragment>
      <table id="zayrok-table">
        <thead id="zayrok-table-header">
          <tr>
            <th className="zayrok-column" id="first-column">
              <span>Columna</span>
            </th>
            <th className="zayrok-column" id="last-column">
              <span>Segunda Columna</span>
            </th>
          </tr>
        </thead>
        <tbody id="zayrok-table-body">
          <tr>
            <td className="zayrok-cell">Fila 1</td>
            <td className="zayrok-cell">Fila 2</td>
          </tr>
          <tr>
            <td className="zayrok-cell" id="last-row-left">
              Fila 3
            </td>
            <td className="zayrok-cell" id="last-row-right">
              Fila 4
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DataGrid;
