import designSystem from "../../styles/designSystem";
import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An AtHomeDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const AtHomeDesign: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Layer 1"
      viewBox="0 0 840.5 427.813"
    >
      <ellipse
        cx="180.872"
        cy="328.665"
        fill="#e6e6e6"
        rx="29.099"
        ry="59.374"
      ></ellipse>
      <path
        fill={color}
        d="M363.31 661.998c-11.655-69.925-.118-139.598 0-140.293l2.267.384c-.117.692-11.588 69.999 0 139.532z"
        transform="translate(-179.75 -236.147)"
      ></path>
      <path
        fill={color}
        d="M358.706 558.946H388.547V561.246H358.706z"
        transform="rotate(-28.142 -187.334 800.603)"
      ></path>
      <path
        fill={color}
        d="M344.704 552.229H347.004V582.071H344.704z"
        transform="rotate(-61.842 58.856 599.122)"
      ></path>
      <path
        fill={color}
        d="M720.059 3.963H767.7529999999999V169.058H720.059z"
      ></path>
      <path
        fill={color}
        d="M799.25 138L683.25 0 450.404 2.129 309.156 139.707 312.01 141.542 310.991 141.542 310.991 427.706 798.937 427.706 798.937 141.542 799.25 138z"
      ></path>
      <path
        fill="#fff"
        d="M683.371 0.294L538.455 170.193 538.455 427.706 798.937 427.706 798.937 137.873 683.371 0.294z"
      ></path>
      <path
        fill={color}
        d="M643.015 285.298H696.212V332.318H643.015z"
      ></path>
      <path
        fill={color}
        d="M643.015 203.911H696.212V250.186H643.015z"
      ></path>
      <path
        fill="#fff"
        d="M643.015 285.298H696.212V332.318H643.015z"
      ></path>
      <path
        fill="#fff"
        d="M643.015 203.911H696.212V250.186H643.015z"
      ></path>
      <path
        fill="#e6e6e6"
        d="M682.08 655.462s1.14-23.896 24.519-21.118"
        transform="translate(-179.75 -236.147)"
      ></path>
      <circle
        cx="495.724"
        cy="384.874"
        r="11.701"
        fill="#fff"
      ></circle>
      <path
        fill="#e6e6e6"
        d="M493.82 404.578H497.123V427.698H493.82z"
      ></path>
      <ellipse
        cx="110.955"
        cy="237.096"
        fill="#fff"
        rx="56.915"
        ry="116.129"
      ></ellipse>
      <path
        fill={color}
        d="M297.045 663.148c-22.765-136.585-.23-272.673 0-274.032l2.267.384c-.23 1.356-22.698 137.077 0 273.27z"
        transform="translate(-179.75 -236.147)"
      ></path>
      <path
        fill={color}
        d="M286.957 462.869H345.325V465.16900000000004H286.957z"
        transform="rotate(-28.142 -244.82 704.526)"
      ></path>
      <path
        fill={color}
        d="M260.67 448.633H262.97V507.001H260.67z"
        transform="rotate(-61.843 -25.175 509.787)"
      ></path>
      <ellipse
        cx="245.754"
        cy="167.201"
        fill="#fff"
        rx="77.883"
        ry="158.914"
      ></ellipse>
      <path
        fill={color}
        d="M434.597 663.148c-31.14-186.837-.315-372.992 0-374.85l2.267.384c-.314 1.855-31.073 187.644 0 374.089z"
        transform="translate(-179.75 -236.147)"
      ></path>
      <path
        fill={color}
        d="M420.375 389.575H500.246V391.875H420.375z"
        transform="rotate(-28.142 -100.65 631.232)"
      ></path>
      <path
        fill={color}
        d="M384.826 369.67H387.12600000000003V449.541H384.826z"
        transform="rotate(-61.843 98.984 441.574)"
      ></path>
      <path
        fill={color}
        d="M0 425.813H840.5V427.813H0z"
      ></path>
      <path
        fill={color}
        d="M406.602 272.821H459.799V319.841H406.602z"
      ></path>
      <path
        fill={color}
        d="M406.602 191.434H459.799V237.709H406.602z"
      ></path>
      <path
        fill="#fff"
        d="M406.602 272.821H459.799V319.841H406.602z"
      ></path>
      <path
        fill="#fff"
        d="M406.602 191.434H459.799V237.709H406.602z"
      ></path>
    </svg>
  );
};

AtHomeDesign.defaultProps = {
  color:
    designSystem.colors.brand.secondary,
};

export default AtHomeDesign;
