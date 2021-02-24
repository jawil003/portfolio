import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React, {
  useEffect,
} from "react";

export interface Props {
  backgroundColor?: string;
  color?: string;
  orientation?:
    | "left"
    | "right"
    | "top"
    | "bottom";
  hidden?: boolean;
  children?: string;
}

/**
 * An Tooltip React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Tooltip: React.FC<Props> = ({
  orientation,
  children,
  hidden,
  backgroundColor,
}) => {
  const x = useSpring(
    orientation === "right"
      ? -10
      : orientation === "left"
      ? 10
      : 0,
  );
  const y = useSpring(
    orientation === "bottom"
      ? -10
      : orientation === "top"
      ? 10
      : 0,
  );
  const opacity = useTransform(
    orientation === "right" ||
      orientation === "left"
      ? x
      : y,
    [
      orientation === "right" ||
      orientation === "bottom"
        ? -10
        : 10,
      0,
    ],
    [0, 1],
  );
  useEffect(() => {
    switch (orientation) {
      case "bottom": {
        if (hidden) {
          y.set(-20);
        } else {
          y.set(0);
        }
        break;
      }
      case "top": {
        if (hidden) {
          y.set(20);
        } else {
          y.set(0);
        }
        break;
      }
      case "left": {
        if (hidden) {
          x.set(20);
        } else {
          x.set(0);
        }
        break;
      }
      case "right": {
        if (hidden) {
          x.set(-20);
        } else {
          x.set(0);
        }
        break;
      }
    }
  }, [hidden]);
  return (
    <motion.div
      style={{
        x,
        y,
        borderRadius: "5px",
        opacity,
        position: "absolute",
        top:
          "calc(50% - calc(36px / 2))",
        left: "-50%",
        fontSize: "0.8rem",
        backgroundColor,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minWidth: "50px",
          padding: "10px",
          color: "#fff",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {children}
        <div
          style={{
            position: "absolute",
            left:
              orientation === "right"
                ? -10
                : orientation === "left"
                ? undefined
                : "calc(50% - calc(20px / 2))",
            right:
              orientation === "left"
                ? -10
                : undefined,
            top:
              orientation === "bottom"
                ? -10
                : orientation === "top"
                ? undefined
                : "23%",
            bottom:
              orientation === "top"
                ? -10
                : undefined,

            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth:
              orientation === "right"
                ? "11.25px 12.5px 11.25px 0"
                : orientation === "left"
                ? "11.25px 0 11.25px 12.5px"
                : orientation ===
                  "bottom"
                ? "0 11.25px 12.5px 11.25px"
                : "12.5px 11.25px 0 11.25px",
            borderColor:
              orientation === "right"
                ? `transparent ${backgroundColor} transparent transparent`
                : orientation === "left"
                ? `transparent transparent transparent ${backgroundColor}`
                : orientation ===
                  "bottom"
                ? `transparent transparent ${backgroundColor} transparent`
                : `${backgroundColor} transparent transparent transparent`,
          }}
        />
      </div>
    </motion.div>
  );
};

Tooltip.defaultProps = {
  orientation: "right",
  children: "Bitte Text eingeben",
  backgroundColor: "#000",
  color: "#fff",
};

export default Tooltip;
