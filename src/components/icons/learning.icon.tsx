import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An LearningIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const LearningIcon: React.FC<Props> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill={color}
    >
      <circle cx="256" cy="85" r="85"></circle>
      <path d="M318.459 181.515C300.462 193.202 279.011 200 256 200s-44.462-6.798-62.459-18.485a174.83 174.83 0 00-54.38 33.216L256 258.546l116.839-43.815a174.81 174.81 0 00-54.38-33.216zM436 310h-10c-8.284 0-15 6.716-15 15v40c0 8.284 6.716 15 15 15h10c19.33 0 35-15.67 35-35s-15.67-35-35-35zM87.456 234.276A15 15 0 0081 246.605V280h5c24.813 0 45 20.187 45 45v40c0 24.813-20.187 45-45 45h-5v31.605a15 15 0 009.733 14.045L241 512V284.96l-139.733-52.4a14.99 14.99 0 00-13.811 1.716z"></path>
      <path d="M381 365v-40c0-24.813 20.187-45 45-45h5v-33.395a15 15 0 00-20.267-14.045L271 284.96V512l150.267-56.35A15 15 0 00431 441.605V410h-5c-24.813 0-45-20.187-45-45zM101 365v-40c0-8.284-6.716-15-15-15H76c-19.33 0-35 15.67-35 35s15.67 35 35 35h10c8.284 0 15-6.716 15-15z"></path>
    </svg>
  );
};

export default LearningIcon;
