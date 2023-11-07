import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Button/Displays",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  render: ({ ...args }) => {
    return (
      <div className="buttons">
        <Button sizeb="small" fullwidth {...args}>
          Small
        </Button>
        <Button fullwidth {...args}>
          Normal
        </Button>
        <Button sizeb="medium" fullwidth {...args}>
          Medium
        </Button>
        <Button sizeb="large" fullwidth {...args}>
          Large
        </Button>
      </div>
    );
  },
};
