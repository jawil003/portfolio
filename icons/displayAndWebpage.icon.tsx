import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An DisplayAndWebpageIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const DisplayAndWebpageIcon: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      fill={color}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M439.54 68.7H72.46C32.51 68.7 0 101.21 0 141.17v229.66c0 39.96 32.51 72.47 72.46 72.47h367.08c39.95 0 72.46-32.51 72.46-72.47V141.17c0-39.96-32.51-72.47-72.46-72.47zM185.81 183.99l-76.23 76.23 67.79 67.79c5.86 5.86 5.86 15.36 0 21.21-5.85 5.86-15.35 5.86-21.21 0l-78.4-78.4c-5.86-5.86-5.86-15.35 0-21.21l86.83-86.83c5.86-5.86 15.36-5.86 21.22 0 5.85 5.85 5.85 15.35 0 21.21zm123.73-35.29l-79.32 224.59c-2.76 7.82-11.33 11.91-19.14 9.15s-11.91-11.33-9.15-19.14l79.32-224.59c2.76-7.81 11.32-11.91 19.14-9.15 7.81 2.76 11.91 11.33 9.15 19.14zm124.7 113.69l-86.83 86.83c-5.86 5.86-15.36 5.86-21.22 0-5.85-5.85-5.85-15.35 0-21.21l76.23-76.23-67.79-67.79c-5.86-5.86-5.86-15.36 0-21.21 5.85-5.86 15.35-5.86 21.21 0l78.4 78.4c5.86 5.86 5.86 15.35 0 21.21z"
        data-original="#000000"
      ></path>
    </svg>
  );
};

export default DisplayAndWebpageIcon;
