import { PasswordInput } from "@/components/ui/password-input";
import { Input } from "../components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  component: Input,

  argTypes: {
    type: {
      control: "select",
      options: ["text", "number", "email", "password"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default Story
export const Text: Story = {
  args: {
    type: "text",
  },
};

// Destructive Button Story
export const Password: Story = {
  render: () => <PasswordInput />,
};

// Secondary Button Story
export const Email: Story = {
  args: {
    type: "email",
  },
};
