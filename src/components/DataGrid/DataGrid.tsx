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
            <th className="zayrok-column" id="middle-column">
              <span>Segunda Columna</span>
            </th>
            <th className="zayrok-column" id="last-column">
              <span>Tercera Columna</span>
            </th>
          </tr>
        </thead>
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
