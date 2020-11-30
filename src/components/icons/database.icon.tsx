import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An DatabaseIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const DatabaseIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 24 24"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <ellipse
          cx="12"
          cy="3"
          data-original="#000000"
          rx="12"
          ry="3"
        ></ellipse>
        <path
          d="M12 8C5.373 8 0 6.657 0 5v4c0 1.657 5.373 3 12 3s12-1.343 12-3V5c0 1.657-5.373 3-12 3z"
          data-original="#000000"
        ></path>
        <path
          d="M12 14c-6.627 0-12-1.343-12-3v4c0 1.657 5.373 3 12 3s12-1.343 12-3v-4c0 1.657-5.373 3-12 3z"
          data-original="#000000"
        ></path>
        <path
          d="M12 20c-6.627 0-12-1.343-12-3v4c0 1.657 5.373 3 12 3s12-1.343 12-3v-4c0 1.657-5.373 3-12 3z"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};
export default DatabaseIcon;
