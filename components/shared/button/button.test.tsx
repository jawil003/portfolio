import { render } from "@testing-library/react";
import {
  Button,
  ButtonProps,
} from "./";

const variants: ButtonProps[] = [
  {
    backgroundColor: "#fff",
    color: "#000",
    text: "Hello World",
  },
];

describe("Button", () => {
  test.each(variants)(
    "Create Button with %p",
    (variant) => {
      const testButton = render(
        <Button {...variant} />,
      );

      expect(
        testButton.baseElement,
      ).toMatchSnapshot();
    },
  );
});
