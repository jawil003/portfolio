import { motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
  orientation?: "left" | "right" | "top" | "bottom";
  hidden?: boolean;
  children?: string;
}

/**
 * An Tooltip React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Tooltip: React.FC<Props> = ({ orientation, children, hidden }) => {
  const x = useSpring(
    orientation === "right" ? -20 : orientation === "left" ? 20 : 0
  );
  const y = useSpring(
    orientation === "bottom" ? -20 : orientation === "top" ? 20 : 0
  );
  const opacity = useTransform(
    orientation === "right" || orientation === "left" ? x : y,
    [orientation === "right" || orientation === "bottom" ? -20 : 20, 0],
    [0, 1]
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
        opacity,
        position: "absolute",
        left:
          orientation === "right"
            ? "calc(100% + calc(22.5px + 10px))"
            : undefined,
        right:
          orientation === "left"
            ? "calc(100% + calc(22.5px + 10px))"
            : undefined,
        bottom:
          orientation === "top"
            ? "calc(100% + calc(22.5px + 10px))"
            : undefined,
        top:
          orientation === "bottom"
            ? "calc(100% + calc(22.5px + 10px))"
            : orientation === "top"
            ? undefined
            : "calc(50% - 1rem)",
        fontSize: "0.8rem",
        backgroundColor: "#000",
        borderRadius: "5px",
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
                ? -20
                : orientation === "left"
                ? undefined
                : "calc(50% - calc(20px / 2))",
            right: orientation === "left" ? -20 : undefined,
            top:
              orientation === "bottom"
                ? -20
                : orientation === "top"
                ? undefined
                : "23%",
            bottom: orientation === "top" ? -20 : undefined,

            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth:
              orientation === "right"
                ? "11.25px 22.5px 11.25px 0"
                : orientation === "left"
                ? "11.25px 0 11.25px 22.5px"
                : orientation === "bottom"
                ? "0 11.25px 22.5px 11.25px"
                : "22.5px 11.25px 0 11.25px",
            borderColor:
              orientation === "right"
                ? "transparent #000 transparent transparent"
                : orientation === "left"
                ? "transparent transparent transparent #000"
                : orientation === "bottom"
                ? "transparent transparent #000 transparent"
                : "#000 transparent transparent transparent",
          }}
        />
      </div>
    </motion.div>
  );
};

Tooltip.defaultProps = {
  orientation: "right",
  children: "Bitte Text eingeben",
};

export default Tooltip;
