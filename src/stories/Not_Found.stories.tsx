import { NotFound } from "../components/ui/not-found";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof NotFound> = {
  component: NotFound,

  args: {},
};

export default meta;
type Story = StoryObj<typeof NotFound>;

// Default Story
export const Not_Found: Story = {};
