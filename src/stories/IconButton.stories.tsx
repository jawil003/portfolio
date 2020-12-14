import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import IconButton, {
  Props as IconButtonProps,
} from "../components/elements/generic/IconButton";
import DatabaseIcon from "../components/icons/database.icon";

export default {
  title: "Elements/IconButton",
  component: IconButton,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const IconButtonElement: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <DatabaseIcon height="50%" />
  </IconButton>
);

export const Left = IconButtonElement.bind({});
Left.args = {
  tooltipOrientation: "left",
};

export const Right = IconButtonElement.bind({});
Right.args = { tooltipOrientation: "right" };

export const Top = IconButtonElement.bind({});
Top.args = { tooltipOrientation: "top" };

export const Bottom = IconButtonElement.bind({});
Bottom.args = { tooltipOrientation: "bottom" };
