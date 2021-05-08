import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as rIO from "react-intersection-observer";
import { IndexContactForm } from ".";
import ContactRequestService from "../../../services/backend/contactRequest.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Wrapper from "../../shared/dialog-wrapper";

jest.mock(
  "react-intersection-observer",
  () => ({
    __esModule: true,
    useInView: () => ({
      ref: { current: {} },
      inView: true,
    }),
  }),
);

jest.mock(
  "../../shared/dialog-wrapper",
  () => ({
    DialogWrapper: () => {
      return <div />;
    },
  }),
);

describe("IndexContactForm", () => {
  let testForm: RenderResult;
  const testFormData = {
    email: "maxine@musterfrau.de",
    name: "Maxine Musterfrau",
    title: "Help needed",
    message: "Lorem ipsum",
  };

  beforeEach(() => {
    testForm = render(
      <IndexContactForm />,
    );
  });

  test("Create IndexContactForm", () => {
    expect(
      testForm.container.firstChild,
    ).toMatchSnapshot();
  });

  /* test("Submit Form", async () => {
    const spy = await jest
      .spyOn(
        ContactRequestService,
        "do",
      )
      .mockImplementation(
        async () => {},
      );

    const email = await testForm.findByTestId(
      "index-contact-form-email-input",
    );

    const name = await testForm.findByTestId(
      "index-contact-form-name-input",
    );

    const title = await testForm.findByTestId(
      "index-contact-form-title-input",
    );

    const message = await testForm.findByTestId(
      "index-contact-form-message-textarea",
    );

    const submitButton = await testForm.findByTestId(
      "index-contact-form-submit-button",
    );

    waitFor(() => {
      fireEvent.change(email, {
        value: testFormData.email,
      });

      fireEvent.change(name, {
        value: testFormData.name,
      });

      fireEvent.change(title, {
        value: testFormData.title,
      });

      fireEvent.change(message, {
        value: testFormData.message,
      });

      fireEvent.click(submitButton);
    });

    expect(spy).toBeCalledWith(
      testFormData,
    );
  }); */
});
