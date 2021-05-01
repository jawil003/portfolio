import { render } from "@testing-library/react";
import {
  GridContainer,
  GridContainerProps,
} from ".";

const variants: GridContainerProps[] = [
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  {
    columnGap: "10px",
    rowGap: "10px",
  },
];

describe("GridContainer", () => {
  test.each(variants)(
    "Create GridContainer with %p",
    (variant) => {
      const testgridcontainer = render(
        <GridContainer {...variant} />,
      );

      expect(
        testgridcontainer.container
          .firstChild,
      ).toMatchSnapshot();
    },
  );
});
