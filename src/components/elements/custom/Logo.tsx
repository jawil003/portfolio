import React from "react";
import LogoIcon from "../../icons/logo.icon";
interface Props {}

/**
 * An Logo React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Logo: React.FC<Props> = () => {
  return (
    <div
      style={{
        padding: "20px",
        cursor: "pointer",
        borderRadius: "10px",
        display: "flex",
        alignItems :"flex-end",
        position: "relative"
      }}
    >
      <LogoIcon height="60px" />
      {process.env.NEXT_PUBLIC_BETA === "1" ? <div style={{backgroundColor: "var(--secondary)", color: "var(--primary)", padding: "10px", fontSize: "18px", fontWeight: 600, borderRadius: "34px", position: "absolute", bottom: "10px", right: "-30px"}}>Beta</div>: undefined}
    </div>
  );
};

export default React.memo(Logo);
