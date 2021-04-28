import {
  Meta,
  Story,
} from "@storybook/react/types-6-0";
import React from "react";
import {
  Button,
  Props as ButtonProps,
} from "../components/shared/button/button";

export default {
  title: "Elements/Button",
  component: Button,
} as Meta;

const ButtonElement: Story<ButtonProps> = (
  args,
) => <Button {...args} />;

export const Filled = ButtonElement.bind(
  {},
);
Filled.args = {};
