# Zayrok

A simple and lightweight Data Grid library for React.

## Installation

```sh
npm install zayrok
```

or

```sh
yarn add zayrok
```

## Usage

```tsx
import React from "react";
import DataGrid from "zayrok";

const columns = [
  { field: "id", header: "ID", sortable: true },
  { field: "name", header: "Name", sortable: true },
];

const rows = [
  { rowId: 1, cells: [{ field: "1" }, { field: "Alice" }] },
  { rowId: 2, cells: [{ field: "2" }, { field: "Bob" }] },
];

const App = () => {
  return <DataGrid columns={columns} rows={rows} />;
};

export default App;
```

## Props

| Prop    | Type     | Required | Description                |
| ------- | -------- | -------- | -------------------------- |
| columns | Column[] | Yes      | Defines the table columns. |
| rows    | Rows[]   | Yes      | Defines the table rows.    |

## Running Storybook

You can view and test the component using Storybook:

```sh
npm run storybook
```

or

```sh
yarn storybook
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

Zayrok is licensed under the [MIT License](https://opensource.org/license/mit).
