import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button } from "../../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Button/States",
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
        <Button {...args}>Normal</Button>
        {/* <Button color="primary" {...args}>
          Normal
        </Button>
        <Button color="link" {...args}>
          Normal
        </Button>
        <Button color="info" {...args}>
          Normal
        </Button>
        <Button color="success" {...args}>
          Normal
        </Button>
        <Button color="warning" {...args}>
          Normal
        </Button>
        <Button color="danger" {...args}>
          Normal
        </Button> */}
      </div>
    );
  },
};

export const Hover: Story = {
  render: Normal.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText("Normal");

    let isHover = false;

    button.addEventListener("mouseover", () => {
      isHover = true;
    });
    button.addEventListener("mouseout", () => {
      isHover = false;
    });

    expect(isHover).toBeFalsy();

    await userEvent.hover(button, { delay: 100 });

    expect(isHover).toBeTruthy();

    await userEvent.unhover(button);

    expect(isHover).toBeFalsy();

    //expect(await canvas.getAllByText('Normal').forEach(b=> {b.classList}))
  },
};

export const Focus: Story = {
  render: Normal.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText("Normal");

    button.focus();

    //expect(await canvas.getAllByText('Normal').forEach(b=> {b.classList}))
  },
};
