import { render } from "@testing-library/react";
import React from "react";
import {
  IndexIconLink,
  IndexIconLinkProps,
} from ".";

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
        // eslint-disable-next-line react/jsx-props-no-spreading
        <IndexIconLink {...variant} />,
      );

      expect(
        testIconLink.container
          .firstChild,
      ).toMatchSnapshot();
    },
  );

  test("Check styling ability of IconLink", () => {
    const testIconLink = render(
      <IndexIconLink
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...variants[0]}
        className="testname"
      />,
    );

    expect(
      testIconLink.container.firstChild,
    ).toMatchSnapshot();
  });
});
