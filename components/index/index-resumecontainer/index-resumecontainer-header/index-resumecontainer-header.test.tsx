import { render } from "@testing-library/react";
import { IndexResumeContainerHeader } from "./index-resumecontainer-header";

describe("IndexResumeContainerHeader", () => {
  test("Create IndexResumeContainerHeader", () => {
    const testHeader = render(
      <IndexResumeContainerHeader>
        Hello World
      </IndexResumeContainerHeader>,
    );

    expect(
      testHeader.container.firstChild,
    ).toMatchSnapshot();
  });
});
