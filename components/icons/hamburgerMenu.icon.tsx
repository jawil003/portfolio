import designSystem from "@style/designSystem";
import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

/**
 * An HamburgerMenuIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const HamburgerMenuIcon: React.FC<Props> = ({
  width,
  height,
  color,
  className,
}) => {
  return (
    <svg
      className={`hamburger-menu-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 2481 2481"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        transform="matrix(.7503 0 0 .7503 306.782 308.462) matrix(0 -1.1652 1.52426 0 -712.287 2973.76)"
        fill={color}
      ></path>
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        transform="matrix(.7503 0 0 .7503 306.782 308.462) matrix(0 -1.1652 1.52426 0 -712.287 2076.49)"
        fill={color}
      ></path>
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        transform="matrix(.7503 0 0 .7503 306.782 308.462) matrix(0 -1.1652 1.52426 0 -712.287 1179.26)"
        fill={color}
      ></path>
    </svg>
  );
};

HamburgerMenuIcon.defaultProps = {
  color:
    designSystem.colors.brand.secondary,
};

export default HamburgerMenuIcon;
