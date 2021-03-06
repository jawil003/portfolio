import { render } from "@testing-library/react";
import {
  IndexResumeContainerItem,
  IndexResumeContainerItemProps,
} from "./";

const variants: IndexResumeContainerItemProps[] = [
  {
    description: "Test",
    end_year: 2020,
    title: "Test",
    start_year: 2019,
  },
  {
    description: "Test",
    end_year: null,
    title: "Test",
    start_year: 2019,
  },
  {
    description: "Test",
    end_year: 2020,
    title: "Test",
    start_year: null,
  },
];

describe("IndexResumeContainerItem", () => {
  test.each(variants)(
    "Create IndexResumeContainerItem with %p",
    (variant) => {
      const testItem = render(
        <IndexResumeContainerItem
          {...variant}
        />,
      );

      expect(
        testItem.baseElement,
      ).toMatchSnapshot();
    },
  );
});
