import { render } from "@testing-library/react";
import { Button, ButtonProps } from ".";

const variants: ButtonProps[] = [
  {
    variant: "success",
    text: "Hello World",
  },
  {
    variant: "error",
    text: "Hello World",
  },
];

describe("Button", () => {
  test.each(variants)(
    "Create Button with %p",
    (variant) => {
      const testButton = render(
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Button {...variant} />,
      );

      expect(
        testButton.container.firstChild,
      ).toMatchSnapshot();
    },
  );
});
