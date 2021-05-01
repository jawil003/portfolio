import { render } from "@testing-library/react";
import {
  FlexContainer,
  FlexContainerProps,
} from ".";

const variants: FlexContainerProps[] = [
  {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    direction: "row",
  },
  {
    columnGap: "10px",
    rowGap: "10px",
  },
  {
    wrap: true,
  },
];

describe("FlexContainer", () => {
  test.each(variants)(
    "FlexContainer with %p",
    (variant) => {
      const testFlexContainer = render(
        <FlexContainer {...variant} />,
      );

      expect(
        testFlexContainer.container
          .firstChild,
      ).toMatchSnapshot();
    },
  );
});
