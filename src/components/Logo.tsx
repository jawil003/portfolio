import React from "react";
import useTheme from "../hooks/useTheme.hook";
import Typography from "./elements/Typography";
import LogoIcon from "./icons/logo.icon";
interface Props {}

/**
 * An Logo React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Logo: React.FC<Props> = () => {
  const {
    palette: {
      color: { primary, secondary },
    },
  } = useTheme();
  return (
    <div
      style={{
        padding: "20px",
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      <LogoIcon height="60px" />
    </div>
  );
};

export default Logo;
