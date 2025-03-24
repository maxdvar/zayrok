# Zayrok

A simple and lightweight Data Grid library for React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Themes](#themes)
- [Running Storybook](#running-storybook)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

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
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      theme="dark"
      emptyLabel="No records found"
    />
  );
};

export default App;
```

## Props

| Prop        | Type                                             | Required | Description                                                     |
| ----------- | ------------------------------------------------ | -------- | --------------------------------------------------------------- |
| columns     | `Column[]`                                       | Yes      | Defines the table columns.                                      |
| rows        | `Row[]`                                          | Yes      | Defines the table rows.                                         |
| theme       | `"transparent" \| "light" \| "dark" \| "custom"` | No       | Defines the theme of the table. Default: `dark`.                |
| customTheme | `CustomTheme`                                    | No       | Allows custom styling when `theme="custom"`.                    |
| emptyLabel  | `string`                                         | No       | Message to display when the table is empty. Default: "No Data". |

## Themes

Zayrok now supports theming with the `theme` prop:

```tsx
<DataGrid columns={columns} rows={rows} theme="dark" />
```

Available themes:

- `transparent`
- `light`
- `dark` (default)
- `custom` (requires `customTheme` prop)

Example of a custom theme:

```tsx
<DataGrid
  columns={columns}
  rows={rows}
  theme="custom"
  customTheme={{
    headerBackground: "#333",
    bodyBackground: "#222",
    fontColor: "#fff",
  }}
/>
```

## Running Storybook

You can view and test the component using Storybook:

```sh
npm run storybook
```

or

```sh
yarn storybook
```

## Changelog

### v0.0.2

- Added `theme` prop with predefined themes (`transparent`, `light`, `dark`, `custom`).
- Added `customTheme` prop for full customization when `theme="custom"`.
- Added `emptyLabel` prop to customize the message when the table is empty (default: "No Data").
- Fixed various styling issues.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

Zayrok is licensed under the [MIT License](https://opensource.org/license/mit).
