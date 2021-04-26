import { render } from "@testing-library/react"
import React from "react"
import { IndexResumeColorContainer } from ".."


describe("IndexResumeColorContainer", ()=>{
    test("Create IndexResumeColorContainer with color #fff", () => {
      const colorContainer = render(
        <IndexResumeColorContainer color="#fff" />,
      );

      expect(
        colorContainer.baseElement,
      ).toMatchSnapshot();
    });
})