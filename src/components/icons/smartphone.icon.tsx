import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An SmartphoneIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SmartphoneIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <circle cx="256" cy="407" r="15" data-original="#000000"></circle>
        <path
          d="M166 512h180c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45H166c-24.814 0-45 20.186-45 45v422c0 24.814 20.186 45 45 45zm60-452h60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-60c-8.291 0-15-6.709-15-15s6.709-15 15-15zm30 302c24.814 0 45 20.186 45 45s-20.186 45-45 45-45-20.186-45-45 20.186-45 45-45z"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default SmartphoneIcon;
