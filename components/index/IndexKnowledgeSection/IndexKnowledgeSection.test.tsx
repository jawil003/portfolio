import { render } from "@testing-library/react";
import { IndexKnowledgeSection } from "./IndexKnowledgeSection";

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
