// // DATAGRID
// import React, { useState } from "react";
// import DataGridCell from "./DataGridCell";
// import Pagination from "./Pagination";
// import Header from "./Header";
// import ThemeSelector from "./ThemeSelector";

// const DataGrid = ({ data, columns }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [sorting, setSorting] = useState({ column: null, order: "asc" });
//   const [density, setDensity] = useState("normal");
//   const [borderStyle, setBorderStyle] = useState("standard");
//   const [theme, setTheme] = useState("default");

//   // Función de ordenamiento
//   const sortData = (column) => {
//     const newOrder = sorting.order === "asc" ? "desc" : "asc";
//     const sortedData = [...data].sort((a, b) => {
//       if (a[column] > b[column]) return sorting.order === "asc" ? 1 : -1;
//       if (a[column] < b[column]) return sorting.order === "asc" ? -1 : 1;
//       return 0;
//     });
//     setSorting({ column, order: newOrder });
//     return sortedData;
//   };

//   // Función para cambiar selección de fila
//   const toggleSelectRow = (rowIndex) => {
//     setSelectedRows((prev) => {
//       if (prev.includes(rowIndex)) {
//         return prev.filter((index) => index !== rowIndex);
//       } else {
//         return [...prev, rowIndex];
//       }
//     });
//   };

//   // Pagina los datos
//   const paginateData = () => {
//     const startIndex = (currentPage - 1) * rowsPerPage;
//     return data.slice(startIndex, startIndex + rowsPerPage);
//   };

//   return (
//     <div className={`data-grid ${theme} ${density} ${borderStyle}`}>
//       <ThemeSelector setTheme={setTheme} />
//       <Header columns={columns} onSort={sortData} />

//       <table>
//         <thead>
//           <tr>
//             {columns.map((col, index) => (
//               <th key={index}>{col.label}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {paginateData().map((row, rowIndex) => (
//             <tr
//               key={rowIndex}
//               onClick={() => toggleSelectRow(rowIndex)}
//               className={selectedRows.includes(rowIndex) ? "selected" : ""}
//             >
//               {columns.map((col, index) => (
//                 <DataGridCell
//                   key={index}
//                   value={row[col.field]}
//                   type={col.type}
//                 />
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Pagination
//         totalItems={data.length}
//         rowsPerPage={rowsPerPage}
//         currentPage={currentPage}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default DataGrid;

// // DATAGRID CELL

// import React from "react";

// const DataGridCell = ({ value, type }) => {
//   switch (type) {
//     case "text":
//       return <td>{value}</td>;
//     case "number":
//       return <td>{value}</td>;
//     case "selector":
//       return (
//         <td>
//           <select>
//             {value.map((option) => (
//               <option key={option}>{option}</option>
//             ))}
//           </select>
//         </td>
//       );
//     case "multi-selector":
//       return (
//         <td>
//           <select multiple>
//             {value.map((option) => (
//               <option key={option}>{option}</option>
//             ))}
//           </select>
//         </td>
//       );
//     case "button":
//       return (
//         <td>
//           <button>{value}</button>
//         </td>
//       );
//     case "chip":
//       return (
//         <td>
//           <div className="chip">{value}</div>
//         </td>
//       );
//     default:
//       return <td>{value}</td>;
//   }
// };

// export default DataGridCell;

// // PAGINATION

// import React from "react";

// const Pagination = ({ totalItems, rowsPerPage, currentPage, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / rowsPerPage);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       onPageChange(newPage);
//     }
//   };

//   return (
//     <div className="pagination">
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Anterior
//       </button>
//       <span>
//         {currentPage} / {totalPages}
//       </span>
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Siguiente
//       </button>
//     </div>
//   );
// };

// export default Pagination;

// // HEADER

// import React from "react";

// const Header = ({ columns, onSort }) => {
//   const handleSort = (column) => {
//     onSort(column);
//   };

//   return (
//     <thead>
//       <tr>
//         {columns.map((col, index) => (
//           <th key={index} onClick={() => handleSort(col.field)}>
//             {col.label}
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

// export default Header;
