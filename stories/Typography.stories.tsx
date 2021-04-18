import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta,
} from "@storybook/react/types-6-0";
import {
  Typography,
  Props as TypographyProps,
} from "components/elements/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {},
} as Meta;

const Template: Story<TypographyProps> = (
  args,
) => <Typography {...args} />;

export const Heading1 = Template.bind(
  {},
);
Heading1.args = {
  variant: "h1",
  children: "Hello World",
};
export const Heading2 = Template.bind(
  {},
);
Heading2.args = {
  variant: "h2",
  children: "Hello World",
};

export const Heading3 = Template.bind(
  {},
);
Heading3.args = {
  variant: "h3",
  children: "Hello World",
};

export const Heading4 = Template.bind(
  {},
);
Heading4.args = {
  variant: "h4",
  children: "Hello World",
};

export const Heading5 = Template.bind(
  {},
);
Heading5.args = {
  variant: "h5",
  children: "Hello World",
};

export const Heading6 = Template.bind(
  {},
);
Heading6.args = {
  variant: "h6",
  children: "Hello World",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "b1",
  children:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "b2",
  children:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
};

export const Subtitle1 = Template.bind(
  {},
);
Subtitle1.args = {
  variant: "s1",
  children: "Hello World",
};

export const Subtitle2 = Template.bind(
  {},
);
Subtitle2.args = {
  variant: "s2",
  children: "Hello World",
};
