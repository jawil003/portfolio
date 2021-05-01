import React, {
  forwardRef,
} from "react";
import designSystem from "../styles/designSystem";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An ArrowDownIcon React Component.
 * @author
 * @version 0.1
 */
const ArrowDownIcon = forwardRef<
  SVGSVGElement,
  Props
>(({ width, height, color }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 43 43"
    >
      <path
        fill={color}
        d="M13.276 15.39l8.224 8.206 8.224-8.206 2.526 2.527-10.75 10.75-10.75-10.75 2.526-2.527z"
      />
    </svg>
  );
});

ArrowDownIcon.defaultProps = {
  width: "43px",
  height: "43px",
  color:
    designSystem.colors.brand
      .secondaryText,
};

ArrowDownIcon.displayName =
  "ArrowDownIcon";

export default ArrowDownIcon;
