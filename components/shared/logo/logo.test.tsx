import { render } from "@testing-library/react";
import { Logo } from "./logo";

describe("Logo", () => {
  test("Create Logo", () => {
    const testLogo = render(<Logo />);

    expect(
      testLogo.baseElement,
    ).toMatchSnapshot();
  });
});
