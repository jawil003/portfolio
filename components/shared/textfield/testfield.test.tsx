import React from "react";
import { render } from "@testing-library/react";
import {
  Textfield,
  Props as TextFieldProps,
} from "./textfield";

const variants: TextFieldProps[] = [
  {
    placeholder: "test",
    value: "123password",
    title: "Password",
    onChange: () => {},
  },
  {
    value: "",
    placeholder: "Maxine Musterfrau",
    title: "Password",
    onChange: () => {},
  },
];

describe("TextField", () => {
  test.each(variants)(
    "Create TextField with %p",
    (variant) => {
      const testTextField = render(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Textfield {...variant} />,
      );

      expect(
        testTextField.container
          .firstChild,
      ).toMatchSnapshot();
    },
  );
});
