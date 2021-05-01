import { render } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";
import { NotOptimized } from "./notoptimized";

describe("NotOptimized", () => {
  beforeAll(async () => {
    await preloadAll();
  });
  test("Create NotOptimized", () => {
    const notOptimized = render(
      <NotOptimized />,
    );

    expect(
      notOptimized.container.firstChild,
    ).toMatchSnapshot();
  });
});
