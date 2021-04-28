import designSystem from "../styles/designSystem";
import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An BlobDesktopDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const BlobDesktopDesign: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <svg
      className="blobDesktopDesign"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 663 539"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="none"
          d="M0 0H663V539H0z"
        ></path>
        <path
          fill={
            designSystem.colors.brand
              .secondary
          }
          fillRule="evenodd"
          d="M346.65-308.788c85.911 14.279 117.471 119.946 182.116 178.301C583.633-80.96 657.879-56.648 696.072 6.633c45.326 75.1 94.096 165.415 65.295 248.27-28.758 82.73-132.739 104.4-205.062 153.807-69.528 47.497-126.077 139.747-209.655 129.503-84.434-10.35-112.212-119.708-175.365-176.696C117.836 313.286 29.806 298.78 6.017 230.833-17.843 162.679 35.773 94.91 53.43 24.893c19.42-77 8.654-164.583 61.074-224.237 57.887-65.874 145.636-123.823 232.146-109.444z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H663V539H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

BlobDesktopDesign.defaultProps = {
  width: "663",
  height: "539",
};

export default BlobDesktopDesign;
