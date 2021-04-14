import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An DropIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const DropIcon: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <svg
      viewBox="0 0 351 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M325.156 212.773c-13.715-34.277-32.781-69.832-56.676-105.675-40.527-60.79-80.527-101.024-82.207-102.703A14.989 14.989 0 00175.664 0a14.986 14.986 0 00-10.605 4.395c-1.68 1.683-41.68 41.914-82.207 102.703C58.957 142.94 39.89 178.496 26.18 212.773 8.809 256.2 0 297.77 0 336.336 0 433.196 78.805 512 175.664 512c96.863 0 175.668-78.805 175.668-175.668 0-38.562-8.809-80.133-26.176-123.559zM175.664 431.664c-52.562 0-95.332-42.766-95.332-95.332 0-8.281 6.719-15 15-15 8.285 0 15 6.719 15 15 0 36.023 29.309 65.332 65.332 65.332 8.285 0 15 6.719 15 15 0 8.285-6.715 15-15 15zm0 0"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

export default DropIcon;
