import React from "react";
import useTheme from "../hooks/useTheme.hook";
import Spacer from "./elements/Spacer";
import Logo from "./Logo";
import NavigationBarItem from "./NavigationBarItem";

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
  return (
    <div
      style={{
        padding: "20px",
        minWidth: "64px",
        minHeight: "100vh",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 0px 5px 0px rgba(50, 50, 50, 0.75)",
      }}
    >
      <Logo />
      <Spacer height="50px" />
      <NavigationBarItem>Start</NavigationBarItem>
      <Spacer height="10px" />
      <NavigationBarItem>Was ich kann</NavigationBarItem>
      <Spacer height="10px" />
      <NavigationBarItem>Was ich gelernt habe</NavigationBarItem>
    </div>
  );
};

export default NavigationBar;
