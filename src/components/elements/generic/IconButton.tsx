import { css } from "@emotion/react";
import {
  motion,
  useSpring,
} from "framer-motion";
import React from "react";

export interface Props {
  size?: string;
  color?: string;
  onClick?: (
    event: React.MouseEvent<
      HTMLDivElement,
      MouseEvent
    >,
  ) => void;
  tooltipOrientation?:
    | "left"
    | "right"
    | "top"
    | "bottom";
  tooltipText: string;
  children?: any;
}

/**
 * An SkillCategoriesItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const IconButton: React.FC<Props> = ({
  size,
  children,
  color,
  onClick,
}) => {
  const scale = useSpring(1);
  return (
    <motion.div
      css={css`
        & {
          position: relative;
        }
      `}
      style={{
        scale,
      }}
    >
      <div
        onFocus={() => {
          scale.set(1.2);
        }}
        onBlur={() => {
          scale.set(1);
        }}
        onClick={onClick}
        style={{
          height: size,
          width: size,
          backgroundColor: color,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

IconButton.defaultProps = {
  color: "var(--blue)",
  size: "48px",
};

export default React.memo(IconButton);
