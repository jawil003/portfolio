import { render } from "@testing-library/react";
import { NavigationBar } from "./navigationbar";

describe("NavigationBar", () => {
  test("Create NavigationBar", () => {
    const testNavigationbar = render(
      <NavigationBar />,
    );

    expect(
      testNavigationbar.baseElement,
    ).toMatchSnapshot();
  });
});
