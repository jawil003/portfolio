import { Typography } from "./Typography";
import { render } from "@testing-library/react";

describe("Typography", () => {
  test("Create H1 Element", () => {
    const testH1Typography = render(
      <Typography variant="h1" />,
    );
    expect(
      testH1Typography.baseElement,
    ).toMatchSnapshot();
  });
});
