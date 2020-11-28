import React from "react";
import useTheme from "../hooks/useTheme.hook";

interface Props {}

/**
 * An NavigationBar React Component.
 * @author Jannik Will
 * @version 0.1
 */
const NavigationBar: React.FC<Props> = () => {
  const {
    palette: {
      color: { primary },
    },
  } = useTheme();
  return <div style={{ minHeight: "64px", backgroundColor: primary }}></div>;
};

export default NavigationBar;
