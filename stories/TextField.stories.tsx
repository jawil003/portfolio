import {
  Meta,
  Story,
} from "@storybook/react/types-6-0";
import React from "react";
import { Formik } from "formik";
import {
  Textfield,
  Props as TextFieldProps,
} from "../components/shared/textfield/textfield";

export default {
  title: "Elements/TextField",
  component: Textfield,
} as Meta;

const TextFieldElement: Story<TextFieldProps> = (
  args,
) => (
  <Formik
    // eslint-disable-next-line react/destructuring-assignment
    initialValues={{ [args.name]: "" }}
    onSubmit={() => {}}
  >
    {() => <Textfield {...args} />}
  </Formik>
);

export const Input = TextFieldElement.bind(
  {},
);
Input.args = {
  name: "password",
  title: "Password",
  placeholder: "abc1234",
};
