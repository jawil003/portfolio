import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
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
}) => {
  return (
    <svg
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
        fill={color || "url(#_Linear1)"}
      ></path>
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        transform="matrix(.7503 0 0 .7503 306.782 308.462) matrix(0 -1.1652 1.52426 0 -712.287 2076.49)"
        fill={color || "url(#_Linear2"}
      ></path>
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        transform="matrix(.7503 0 0 .7503 306.782 308.462) matrix(0 -1.1652 1.52426 0 -712.287 1179.26)"
        fill={color || "url(#_Radial3)"}
      ></path>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#0078A3"
          ></stop>
          <stop
            offset="0.27"
            stopColor="#00749E"
          ></stop>
          <stop
            offset="0.5"
            stopColor="#00678D"
          ></stop>
          <stop
            offset="1"
            stopColor="#004A65"
          ></stop>
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#0078A3"
          ></stop>
          <stop
            offset="0.27"
            stopColor="#00749E"
          ></stop>
          <stop
            offset="0.5"
            stopColor="#00678D"
          ></stop>
          <stop
            offset="1"
            stopColor="#004A65"
          ></stop>
        </linearGradient>
        <radialGradient
          id="_Radial3"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#0078A3"
          ></stop>
          <stop
            offset="0.27"
            stopColor="#00749E"
          ></stop>
          <stop
            offset="0.5"
            stopColor="#00678D"
          ></stop>
          <stop
            offset="1"
            stopColor="#004A65"
          ></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HamburgerMenuIcon;
