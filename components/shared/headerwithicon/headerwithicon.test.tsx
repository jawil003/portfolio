import { render } from "@testing-library/react";
import {
  HeaderWithIcon,
  HeaderWithIconProps,
} from "./";
import reactIntersectionObserver from "react-intersection-observer";
import { AcUnit } from "@material-ui/icons";

jest.mock(
  "react-intersection-observer",
  () => ({
    useInView: jest
      .fn()
      .mockResolvedValue({ ref: {} }),
  }),
);

const variants: HeaderWithIconProps[] = [
  {
    first: true,
    icon: <AcUnit />,
    arrow: true,
  },
  {
    first: false,
    icon: <AcUnit />,
    arrow: true,
  },
  {
    first: true,
    icon: <AcUnit />,
    arrow: false,
  },
];

describe("HeaderWithIcon", () => {
  test.each(variants)(
    "Create HeaderWithIcon with %p",
    (variant) => {
      const testheaderwithicon = render(
        <HeaderWithIcon {...variant} />,
      );

      expect(
        testheaderwithicon.baseElement,
      ).toMatchSnapshot();
    },
  );
});
