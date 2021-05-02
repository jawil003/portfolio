import React from "react";
import { render } from "@testing-library/react";
import { Formik } from "formik";
import {
  Textfield,
  Props as TextFieldProps,
} from "./textfield";

const variants: TextFieldProps[] = [
  {
    title: "Password",
    name: "password",
  },
  {
    title: "Password",
    name: "password",
    value: "test1234",
  },
  {
    title: "Password",
    name: "password",
    value: "",
    placeholder: "test1234",
  },
];

describe("TextField", () => {
  test.each(variants)(
    "Create TextField with %p",
    (variant) => {
      const testTextField = render(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Formik
          initialValues={{
            password: "",
          }}
          onSubmit={jest.fn()}
        >
          {() => (
            <Textfield {...variant} />
          )}
        </Formik>,
      );

      expect(
        testTextField.container
          .firstChild,
      ).toMatchSnapshot();
    },
  );
});
