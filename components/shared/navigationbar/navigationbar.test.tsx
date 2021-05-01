import { render } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import { NavigationBar } from "./navigationbar";

describe("NavigationBar", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  test("Create NavigationBar", () => {
    const testNavigationbar = render(
      <NavigationBar />,
    );

    expect(
      testNavigationbar.container
        .firstChild,
    ).toMatchSnapshot();
  });
});
