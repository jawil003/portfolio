import { render } from "@testing-library/react";
import { IndexKnowledgeSection } from "./index-knowledgesection";
import reactIntersectionObserver from "react-intersection-observer";
import { mocked } from 'ts-jest/utils';
import {createRef} from "react";

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn().mockResolvedValue({ref: {}})
}));

const mockedObserver = mocked(reactIntersectionObserver);

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
