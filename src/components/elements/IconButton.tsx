import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import {
  motion,
  useSpring,
} from "framer-motion";
import React, {
  PropsWithChildren,
} from "react";

export interface Props {
  size?: string;
  color?: string;
  onClick: (
    event:
      | React.MouseEvent<
          HTMLButtonElement,
          MouseEvent
        >
      | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
  keyCode: string;
  tooltipOrientation?:
    | "left"
    | "right"
    | "top"
    | "bottom";
  tooltipText: string;
  className?: string;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconButton: React.FC<
  PropsWithChildren<Props>
> = ({
  size,
  children,
  color,
  onClick,
  keyCode,
  className,
}) => {
  const scale = useSpring(1);
  return (
    <motion.button
      onHoverStart={() => {
        scale.set(1.2);
      }}
      onHoverEnd={() => {
        scale.set(1);
      }}
      className={`icon-button-container ${
        className || ""
      }`}
      css={css`
        & {
          position: relative;
          display: block;
          background: none;
          outline: none;
          border: none;
          width: ${size};
          height: ${size};
          background-color: ${color};
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
      style={{
        scale,
      }}
      onKeyPress={(event) => {
        if (keyCode === event.code)
          onClick(event as any);
      }}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
    </motion.button>
  );
};

IconButton.defaultProps = {
  color:
    designSystem.colors.palette.blue
      .base,
  size: "48px",
};

export default React.memo(IconButton);
