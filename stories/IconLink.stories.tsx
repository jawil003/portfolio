import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta,
} from "@storybook/react/types-6-0";
import IconLink, {
  Props as IconLinkProps,
} from "../components/index/IndexIconLink/IndexconLink";
import DribbleIcon from "../icons/dribble.icon";

export default {
  title: "Elements/IconLink",
  component: IconLink,
} as Meta;

const IconLinkElement: Story<IconLinkProps> = (
  args,
) => (
  <IconLink {...args}>
    <DribbleIcon height="100%" />
  </IconLink>
);

export const Top = IconLinkElement.bind(
  {},
);
Top.args = {
  href: "example.com",
  external: true,
};

export const Left = IconLinkElement.bind(
  {},
);
Left.args = {
  href: "example.com",
  external: true,
};

export const Right = IconLinkElement.bind(
  {},
);
Right.args = {
  href: "example.com",
  external: true,
};

export const Bottom = IconLinkElement.bind(
  {},
);
Bottom.args = {
  href: "example.com",
  external: true,
};
