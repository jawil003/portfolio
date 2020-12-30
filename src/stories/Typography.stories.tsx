import { Story } from "@storybook/react/types-6-0";
import Typography, {
  Props as TypographyProps,
} from "../components/elements/generic/Typography";

export default {
  title: "Elements/Typography",
  component: Typography,
};

const TypographyElements: Story<TypographyProps> = (
  args,
) => (
  <Typography {...args}>
    Hello World
  </Typography>
);

export const Default = TypographyElements.bind(
  {},
);
Default.args = {};

export const H1 = TypographyElements.bind(
  {},
);
H1.args = { variant: "h1" };

export const H2 = TypographyElements.bind(
  {},
);
H2.args = { variant: "h2" };

export const H3 = TypographyElements.bind(
  {},
);
H3.args = { variant: "h3" };

export const H4 = TypographyElements.bind(
  {},
);
H4.args = { variant: "h4" };

export const H5 = TypographyElements.bind(
  {},
);
H5.args = { variant: "h5" };

export const B2 = TypographyElements.bind(
  {},
);
B2.args = { variant: "b2" };

export const B3 = TypographyElements.bind(
  {},
);
B3.args = { variant: "b3" };
