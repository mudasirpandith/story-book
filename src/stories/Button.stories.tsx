import { Plus, Trash } from "lucide-react";
import { Button } from "../components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    size: "default",
    loading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "destructive", "ghost", "link", "secondary"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Story
export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
    icon: Plus,
  },
};

// Destructive Button Story
export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "lg",
    icon: Trash,
  },
};

// Outline Button Story
export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
  },
};

// Ghost Button Story
export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
  },
};

// Link Button Story
export const Link = {
  args: {
    children: "Link",
    variant: "link",
    size: "default",
  },
};

// Secondary Button Story
export const Secondary = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
  },
};
