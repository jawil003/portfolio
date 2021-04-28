import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {
  Story,
  Meta,
} from "@storybook/react/types-6-0";
import {
  IndexIconLink,
  Props as IconLinkProps,
} from "../components/index/index-iconlink/index-iconlink";
import DribbleIcon from "../icons/dribble.icon";

export default {
  title: "Elements/IconLink",
  component: IndexIconLink,
} as Meta;

const IndexIconLinkElement: Story<IconLinkProps> = (
  args,
) => (
  <IndexIconLink {...args}>
    <DribbleIcon height="100%" />
  </IndexIconLink>
);

export const Top = IndexIconLinkElement.bind(
  {},
);
Top.args = {
  href: "example.com",
  external: true,
};

export const Left = IndexIconLinkElement.bind(
  {},
);
Left.args = {
  href: "example.com",
  external: true,
};

export const Right = IndexIconLinkElement.bind(
  {},
);
Right.args = {
  href: "example.com",
  external: true,
};

export const Bottom = IndexIconLinkElement.bind(
  {},
);
Bottom.args = {
  href: "example.com",
  external: true,
};
