import { render } from "@testing-library/react";
import { IndexResumeContainerHeader } from "./index-resumecontainer-header";
import preloadAll from "jest-next-dynamic";

describe("IndexResumeContainerHeader", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  test("Create IndexResumeContainerHeader", () => {
    const testHeader = render(
      <IndexResumeContainerHeader>
        Hello World
      </IndexResumeContainerHeader>,
    );

    expect(
      testHeader.baseElement,
    ).toMatchSnapshot();
  });
});
