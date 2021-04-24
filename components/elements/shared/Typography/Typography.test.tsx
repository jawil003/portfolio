import {
  Typography,
  Props,
} from "./Typography";
import { render } from "@testing-library/react";

const variants: Props["variant"][] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "b1",
  "b2",
  "s1",
  "s2",
];

describe("Typography", () => {
  test.each(variants)(
    "Create %p element",
    () => {
      const testH1Typography = render(
        <Typography variant="h1" />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element in semi-bold",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          bold="semi-bold"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element in bold",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          bold="bold"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element in bolder",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          bold="bolder"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element underline",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          underline
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element letter-spacing",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          letter-spacing="20px"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element word-spacing",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          word-spacing="20px"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element italic",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          italic
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element as p element",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          component="p"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element in sans-serif",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          fontFamily="sans-serif"
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
  test.each(variants)(
    "Create %p element with maxLength",
    (variant) => {
      const testH1Typography = render(
        <Typography
          variant={variant}
          maxLength="20px"
          wrap
        />,
      );
      expect(
        testH1Typography.baseElement,
      ).toMatchSnapshot();
    },
  );
});
