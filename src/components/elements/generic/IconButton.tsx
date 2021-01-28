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
          HTMLDivElement,
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
    <motion.div
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
          width: ${size};
          height: ${size};
        }
        & > div {
          height: 100%;
          width: 100%;
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
    >
      <div
        className="icon-button-icon-container"
        tabIndex={0}
        role="button"
        onKeyPress={(event) => {
          if (keyCode === event.code)
            onClick(event);
        }}
        onClick={onClick}
      >
        {children}
      </div>
    </motion.div>
  );
};

IconButton.defaultProps = {
  color:
    designSystem.colors.palette.blue
      .base,
  size: "48px",
};

export default React.memo(IconButton);
