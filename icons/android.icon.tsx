import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An AndroidIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const AndroidIcon: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      viewBox="0 0 467.046 250.164"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M293.91 212.775c-6.025 0-10.926-4.905-10.926-10.93s4.901-10.926 10.926-10.926c6.026 0 10.927 4.9 10.927 10.926s-4.901 10.93-10.927 10.93m-120.774 0c-6.025 0-10.926-4.905-10.926-10.93s4.9-10.926 10.926-10.926c6.025 0 10.926 4.9 10.926 10.926s-4.9 10.93-10.926 10.93m124.693-65.82l21.838-37.822a4.548 4.548 0 00-1.663-6.206 4.549 4.549 0 00-6.206 1.663l-22.111 38.3c-16.91-7.716-35.9-12.015-56.164-12.015-20.264 0-39.254 4.299-56.163 12.015l-22.112-38.3a4.549 4.549 0 00-6.206-1.663 4.545 4.545 0 00-1.663 6.206l21.838 37.822c-37.499 20.395-63.146 58.358-66.898 103.209h262.408c-3.755-44.85-29.402-82.814-66.898-103.21"
        fill="#3ddb85"
      />
      <path
        d="M0 0h467.046v250.164H0z"
        fill="none"
      />
    </svg>
  );
};

export default AndroidIcon;