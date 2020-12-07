import { motion, useMotionValue } from "framer-motion";
import React from "react";
import TopArrowIcon from "../../icons/topArrow.icon";

interface Props {
  hidden?: boolean;
  onClick?: () => void;
}

/**
 * An BackTopButton React Component.
 * @author Jannik Will
 * @version 0.1
 */
const BackTopButton: React.FC<Props> = ({ hidden, onClick }) => {
  const scale = useMotionValue(1);
  return (
    <motion.div
      style={{
        scale,
        display: hidden ? "none" : "flex",
        width: "52px",
        height: "52px",
        backgroundColor: "var(--darkblue)",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        right: 30,
        bottom: 20,
        borderRadius: 100,
      }}
      onClick={onClick}
    >
      <TopArrowIcon rotate="top" height="50%" />
    </motion.div>
  );
};

BackTopButton.defaultProps = { hidden: false };

export default BackTopButton;
