import { render } from "@testing-library/react";
import { NavigationBarItem } from "./navigationbar-item";

describe("NavigationBarItem", () => {
  test("Create NavigationBarItem", () => {
    const testNavigationBarItem = render(
      <NavigationBarItem href="https://google.de" />,
    );

    expect(
      testNavigationBarItem.container
        .firstChild,
    ).toMatchSnapshot();
  });
});
