import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An DesktopIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const DesktopIcon: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path
          d="M306.365 425.399h-100.73l-11.045 48.92h-83.337v30h289.494v-30H317.41zM0 365.399c0 16.568 13.431 30 30 30h452c16.569 0 30-13.432 30-30V325.42H0zM482 7.681H30c-16.569 0-30 13.431-30 30V295.42h512V37.681c0-16.568-13.431-30-30-30zM138.638 202.087L245.925 94.801l21.213 21.213L159.851 223.3zM266.075 223.3l-21.213-21.213L352.149 94.801l21.213 21.213z"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default DesktopIcon;
