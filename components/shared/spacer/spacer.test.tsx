import { render } from "@testing-library/react";
import {
  Spacer,
  Props as SpacerProps,
} from "./spacer";

const variants: SpacerProps[] = [
  {},
  { width: "20px" },
  { height: "10px" },
];

describe("Spacer", () => {
  test.each(variants)(
    "Create Spacer with %p",
    (variant) => {
      const testSpacer = render(
        <Spacer {...variant} />,
      );

      expect(
        testSpacer.container.firstChild,
      ).toMatchSnapshot();
    },
  );
});
