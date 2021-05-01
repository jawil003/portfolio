import { render } from "@testing-library/react";
import React from "react";
import { TitleWithSubtitle } from "./titlewithsubtitle";

describe("TitleWithSubtitle", () => {
  test("Create TitleWithSubtitle", () => {
    const testTitleWithSubtitle = render(
      <TitleWithSubtitle
        heading="Test heading"
        description="test description"
      />,
    );

    expect(
      testTitleWithSubtitle.container
        .firstChild,
    ).toMatchSnapshot();
  });
});
