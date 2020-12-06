import React from "react";

const getRotationForProp = (rotate?: "right" | "left" | "top" | "bottom") => {
  switch (rotate) {
    case "right": {
      return "rotate(270deg)";
    }
    case "left": {
      return "rotate(90deg)";
    }
    case "top": {
      return "rotate(180deg)";
    }
    case "bottom": {
      return undefined;
    }
  }
};

interface Props {
  width?: string;
  height?: string;
  color?: string;
  rotate?: "right" | "left" | "top" | "bottom";
}

/**
 * An TopArrowIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TopArrowIcon: React.FC<Props> = ({ width, height, color, rotate }) => {
  return (
    <svg
      viewBox="0 0 451.847 451.847"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{ transform: getRotationForProp(rotate) }}
    >
      <path
        d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original={color}
      />
    </svg>
  );
};

TopArrowIcon.defaultProps = { color: "#fff", rotate: "bottom" };

export default TopArrowIcon;
