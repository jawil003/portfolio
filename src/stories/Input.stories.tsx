import { Meta, Story } from "@storybook/react/types-6-0";
import TextField, {
  Props as TextFieldProps,
} from "../components/elements/generic/TextField";

export default { title: "Elements/TextField", component: TextField } as Meta;

const TextFieldElement: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);

export const Input = TextFieldElement.bind({});
Input.args = {};

export const Area = TextFieldElement.bind({});
Area.args = {
  area: true,
  rows: 5,
};
