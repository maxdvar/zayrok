import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import DataGrid from "./DataGrid";

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

export const Primary: Story = {};
