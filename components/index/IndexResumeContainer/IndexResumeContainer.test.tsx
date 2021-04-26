import { render } from "@testing-library/react";
import React from "react";
import reactIntersectionObserver from "react-intersection-observer";
import {
  IndexResumeContainer,
  Props,
} from ".";

const variants: Props[] = [
  {
    title: "test",
    items: [
      {
        description: "Lorem ipsum",
        end_year: 2020,
        start_year: 2019,
        title: "test",
      },
    ],
  },
  {
    title: "test",
    items: [
      {
        description: "Lorem ipsum",
        end_year: null,
        start_year: 2019,
        title: "test",
      },
    ],
  },
  {
    title: "test",
    items: [
      {
        description: "Lorem ipsum",
        end_year: 2020,
        start_year: null,
        title: "test",
      },
    ],
  },
];

jest.mock(
  "react-intersection-observer",
  () => ({
    useInView: jest
      .fn()
      .mockResolvedValue({ ref: {} }),
  }),
);

describe("IndexResumeContainer", () => {
  test.each(variants)("Create IndexResumeContainer with %p", (variant) => {
    const testIndexResumeContainer = render(
      <IndexResumeContainer
        {...variant}
      />
    );

    expect(testIndexResumeContainer.baseElement).toMatchSnapshot();
  });
});
