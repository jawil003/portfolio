import React from "react";
import designSystem from "../styles/designSystem";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const DeveloperIcon: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path
          d="M9 0C6.243 0 4 2.243 4 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM16.582 23.98a.75.75 0 01-.563-.899l1.5-6.5a.75.75 0 011.462.337l-1.5 6.5a.748.748 0 01-.899.562zM20.75 23a.751.751 0 01-.502-1.308L22.129 20l-1.881-1.692a.75.75 0 011.004-1.116l2.5 2.25a.752.752 0 010 1.116l-2.5 2.25a.749.749 0 01-.502.192zM14.25 23a.749.749 0 01-.502-.192l-2.5-2.25a.752.752 0 010-1.116l2.5-2.25a.751.751 0 011.004 1.116L12.871 20l1.881 1.692A.75.75 0 0114.25 23z"
          xmlns="http://www.w3.org/2000/svg"
          data-original="#000000"
        />
        <path
          d="M9.25 20c0-.776.331-1.521.907-2.041l2.503-2.253a2.746 2.746 0 011.839-.705 2.76 2.76 0 011.564.493 2.732 2.732 0 011.639-1.372A4.747 4.747 0 0013.75 12h-9A4.756 4.756 0 000 16.75v4c0 .414.336.75.75.75h8.958A2.747 2.747 0 019.25 20z"
          xmlns="http://www.w3.org/2000/svg"
          data-original="#000000"
        />
      </g>
    </svg>
  );
};

DeveloperIcon.defaultProps = {
  color:
    designSystem.colors.brand.secondary,
};

export default DeveloperIcon;
