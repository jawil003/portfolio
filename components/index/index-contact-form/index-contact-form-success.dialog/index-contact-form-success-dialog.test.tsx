import { render } from "@testing-library/react";
import React from "react";
import {
  IndexContactFormSuccessDialog,
  IndexContactFormSuccessDialogProps,
} from ".";

const variants: IndexContactFormSuccessDialogProps[] = [
  { mode: "success" },
  { mode: "error" },
];

describe("IndexContactFormSuccessDialogSuccess", () => {
  test.each(variants)(
    "Create IndexContactFormSuccessDialogSuccess with %p",
    (variant) => {
      const testDialog = render(
        <IndexContactFormSuccessDialog
          {...variant}
        />,
      );

      expect(
        testDialog,
      ).toMatchSnapshot();
    },
  );
});
