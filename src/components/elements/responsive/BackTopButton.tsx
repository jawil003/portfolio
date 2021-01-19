import designSystem from "@style/designSystem";
import {
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React, {
  useEffect,
} from "react";
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
const BackTopButton: React.FC<Props> = ({
  hidden,
  onClick,
}) => {
  const scale = useSpring(1);
  const y = useSpring(0);
  const opacity = useTransform(
    y,
    [5, 0],
    [0, 1],
  );

  useEffect(() => {
    if (hidden) {
      y.set(5);
    } else {
      y.set(0);
    }
  }, [hidden]);

  return (
    <motion.div
      onHoverStart={() =>
        scale.set(1.2)
      }
      onHoverEnd={() => scale.set(1)}
      style={{
        y,
        opacity,
        scale,
        boxSizing: "border-box",
        display: "flex",
        width: "52px",
        height: "52px",
        backgroundColor:
          designSystem.colors.palette
            .blue.dark,
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        right: 30,
        bottom: 20,
        borderRadius: 100,
      }}
      onClick={onClick}
    >
      <TopArrowIcon
        rotate="top"
        height="50%"
      />
    </motion.div>
  );
};

BackTopButton.defaultProps = {
  hidden: false,
};

export default BackTopButton;
