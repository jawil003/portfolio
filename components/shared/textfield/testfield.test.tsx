import React from "react";
import { render } from "@testing-library/react";
import {
  TextField,
  Props as TextFieldProps,
} from "./textfield";

const variants: TextFieldProps[] = [
  {
    name: "test",
    value: "123password",
    title: "Password",
    onChange: () => {},
  },
  {
    name: "test",
    value: "",
    placeholder: "Maxine Musterfrau",
    title: "Password",
    onChange: () => {},
  },
  {
    name: "test",
    value: "",
    placeholder: "Maxine Musterfrau",
    title: "Password",
    area: true,
    rows: 3,
    onChange: () => {},
  },
  {
    name: "test",
    value: "12345678",
    placeholder: "Maxine Musterfrau",
    title: "Password",
    area: true,
    rows: 3,
    onChange: () => {},
  },
];

describe("TextField", () => {
  test.each(variants)(
    "Create TextField with %p",
    (variant) => {
      const testTextField = render(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField {...variant} />,
      );

      expect(
        testTextField.baseElement,
      ).toMatchSnapshot();
    },
  );
});
