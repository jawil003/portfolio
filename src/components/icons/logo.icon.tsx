import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An LogoIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const LogoIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      fillRule="evenodd"
      viewBox="0 0 1925 1191"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        fill="url(#a)"
        transform="matrix(.43892 -.2534 .3315 .57417 -346.149 44.635)"
      />
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        fill="url(#b)"
        transform="matrix(.43892 -.2534 .3315 .57417 334.96 34.958)"
      />
      <path
        d="M966.527 638.508c0-105.526-112.075-191.2-250.12-191.2-138.044 0-250.119 85.674-250.119 191.2V1928.35c0 105.52 112.075 191.2 250.119 191.2 138.045 0 250.12-85.68 250.12-191.2V638.508z"
        fill="url(#c)"
        transform="matrix(.43892 .2534 .3315 -.57417 767.637 1145.681)"
      />
      <defs>
        <linearGradient
          id="a"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#0078a3" />
          <stop offset=".27" stopColor="#00749e" />
          <stop offset=".5" stopColor="#00678d" />
          <stop offset="1" stopColor="#004a65" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#0078a3" />
          <stop offset=".27" stopColor="#00749e" />
          <stop offset=".5" stopColor="#00678d" />
          <stop offset="1" stopColor="#004a65" />
        </linearGradient>
        <linearGradient
          id="c"
          gradientTransform="matrix(8.55347 1718.32 -2247.83 6.53858 701.965 411.352)"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
        >
          <stop offset="0" stopColor="#0078a3" />
          <stop offset=".27" stopColor="#00749e" />
          <stop offset=".5" stopColor="#00678d" />
          <stop offset="1" stopColor="#004a65" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
