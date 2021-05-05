import {
  render,
  RenderResult,
} from "@testing-library/react";
import { DialogWrapper } from "./dialog-wrapper";

describe("DialogWrapper", () => {
  let testDialogWrapper: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement
  >;
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="modal" />';

    testDialogWrapper = render(
      <DialogWrapper show />,
    );
  });
  test("Create DialogWrapper", () => {
    expect(
      testDialogWrapper.baseElement,
    ).toMatchSnapshot();
  });
});
