import { render } from "@testing-library/react";
import {
  IndexIconLink,
  IndexIconLinkProps,
} from "./";

const variants: IndexIconLinkProps[] = [
  {
    size: "20px",
    href: "https://google.de",
    background: "white",
    external: true,
  },
  {
    size: "20px",
    href: "/test",
    background: "white",
  },
];

describe("IndexIconLink", () => {
  test.each(variants)(
    "Create IndexIconLink with %p",
    (variant) => {
      const testIconLink = render(
        <IndexIconLink {...variant} />,
      );

      expect(
        testIconLink.baseElement,
      ).toMatchSnapshot();
    },
  );

  test("Check styling ability of IconLink", () => {
    const testIconLink = render(
      <IndexIconLink
        {...variants[0]}
        className="testname"
      />,
    );

    expect(
      testIconLink.baseElement,
    ).toMatchSnapshot();
  });
});
