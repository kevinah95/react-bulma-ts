import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../Button";
import { ButtonGroup } from "../../components/ButtonGroup";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Button/Colors",
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
        <Button color="white" {...args}>
          White
        </Button>
        <Button color="light" {...args}>
          Light
        </Button>
        <Button color="dark" {...args}>
          Dark
        </Button>
        <Button color="black" {...args}>
          Black
        </Button>
        <Button color="text" {...args}>
          Text
        </Button>
        <Button color="ghost" {...args}>
          Ghost
        </Button>
      </div>
    );
  },
};

export const Primary: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <ButtonGroup>
          <Button color="primary" {...args}>
            Primary
          </Button>
          <Button color="link" {...args}>
            Link
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="info" {...args}>
            Info
          </Button>
          <Button color="success" {...args}>
            Success
          </Button>
          <Button color="warning" {...args}>
            Warning
          </Button>
          <Button color="danger" {...args}>
            Danger
          </Button>
        </ButtonGroup>
      </>
    );
  },
};

export const Light: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <ButtonGroup>
          <Button color="primary" light {...args}>
            Primary
          </Button>
          <Button color="link" light {...args}>
            Link
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="info" light {...args}>
            Info
          </Button>
          <Button color="success" light {...args}>
            Success
          </Button>
          <Button color="warning" light {...args}>
            Warning
          </Button>
          <Button color="danger" light {...args}>
            Danger
          </Button>
        </ButtonGroup>
      </>
    );
  },
};