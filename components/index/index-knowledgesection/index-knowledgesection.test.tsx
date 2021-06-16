import { render } from "@testing-library/react";
import { IndexKnowledgeSection } from "./index-knowledgesection";

jest.mock(
  "react-intersection-observer",
  () => ({
    useInView: jest
      .fn()
      .mockResolvedValue({ ref: {} }),
  }),
);

describe("IndexKnowledgeSection", () => {
  test("Create IndexKnowledgeSection", () => {
    const testIndexKnowledgeSection = render(
      <IndexKnowledgeSection
        items={[
          {
            title: "test",
            description: "",
            items: ["test", "test1"],
          },
        ]}
      />,
    );

    expect(
      testIndexKnowledgeSection.baseElement,
    ).toMatchSnapshot();
  });
});
