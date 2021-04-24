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
  test("Create H2 Element", () => {
    const testH2Typography = render(
      <Typography variant="h2" />,
    );
    expect(
      testH2Typography.baseElement,
    ).toMatchSnapshot();
  });
  test("Create H3 Element", () => {
    const testH3Typography = render(
      <Typography variant="h3" />,
    );
    expect(
      testH3Typography.baseElement,
    ).toMatchSnapshot();
  });
  test("Create H4 Element", () => {
    const testH4Typography = render(
      <Typography variant="h4" />,
    );
    expect(
      testH4Typography.baseElement,
    ).toMatchSnapshot();
  });
  test("Create H5 Element", () => {
    const testH5Typography = render(
      <Typography variant="h5" />,
    );
    expect(
      testH5Typography.baseElement,
    ).toMatchSnapshot();
  });
  test("Create H6 Element", () => {
    const testH6Typography = render(
      <Typography variant="h6" />,
    );
    expect(
      testH6Typography.baseElement,
    ).toMatchSnapshot();
  });
});
