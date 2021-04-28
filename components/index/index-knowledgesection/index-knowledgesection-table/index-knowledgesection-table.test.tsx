import { render } from "@testing-library/react";
import React from "react";
import { IndexKnowledgeTable } from "./index-knowledgesection-table";

describe("IndexKnowledgeTable", () => {
  test("Create IndexKnowledgeTable", () => {
    const testIndexKnowledgeTable = render(
      <IndexKnowledgeTable
        title="test"
        description="Lorem ipsum"
        items={["test", "test1"]}
      />,
    );

    expect(
      testIndexKnowledgeTable.baseElement,
    ).toMatchSnapshot();
  });
});
