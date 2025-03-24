import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import DataGrid from "./DataGrid";
import { Rows } from "../../types";

const meta = {
  title: "Components/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // args: { onClick: fn() },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const primaryColumns = [
  { field: "name", header: "Name", sortable: false },
  { field: "email", header: "Email", sortable: false },
  { field: "role", header: "Role", sortable: false },
];

const primaryRows: Rows = [
  {
    rowId: 1,
    cells: [
      {
        field: "User 1",
        type: "text",
        label: "user",
      },
      {
        field: "user1@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Developer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 2,
    cells: [
      {
        field: "User 2",
        type: "text",
        label: "user",
      },
      {
        field: "user2@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Developer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 3,
    cells: [
      {
        field: "User 3",
        type: "text",
        label: "user",
      },
      {
        field: "user3@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Designer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 4,
    cells: [
      {
        field: "User 4",
        type: "text",
        label: "user",
      },
      {
        field: "user4@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Developer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 5,
    cells: [
      {
        field: "User 5",
        type: "text",
        label: "user",
      },
      {
        field: "user5@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Designer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 6,
    cells: [
      {
        field: "User 6",
        type: "text",
        label: "user",
      },
      {
        field: "user6@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Developer",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 7,
    cells: [
      {
        field: "User 7",
        type: "text",
        label: "user",
      },
      {
        field: "user7@example.com",
        type: "text",
        label: "user",
      },
      {
        field: "Developer",
        type: "text",
        label: "user",
      },
    ],
  },
];

const basicColumns = [
  { field: "name", header: "Name", sortable: false },
  { field: "email", header: "Email", sortable: false },
];

const basicRows: Rows = [
  {
    rowId: 1,
    cells: [
      {
        field: "User 1",
        type: "text",
        label: "user",
      },
      {
        field: "user1@example.com",
        type: "text",
        label: "user",
      },
    ],
  },
  {
    rowId: 2,
    cells: [
      {
        field: "User 2",
        type: "text",
        label: "user",
      },
      {
        field: "user2@example.com",
        type: "text",
        label: "user",
      },
    ],
  },
];

export const Primary: Story = {
  args: {
    columns: primaryColumns,
    rows: primaryRows,
  },
};

export const Basic: Story = {
  args: {
    columns: basicColumns,
    rows: basicRows,
  },
};
