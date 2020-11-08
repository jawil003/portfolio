import React, { CSSProperties } from "react";
import PhoneDesign from "./designs/Phone";

interface Props {
  style?: CSSProperties;
}
const PhoneMockup: React.FC<Props> = ({
  children,
  style,
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        zIndex: 1,
        ...style,
      }}
    >
      <PhoneDesign size="calc(100% + 80px)" />
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 23,
          width: "calc(100% - 45px)",
          height: "calc(100% + 42px)",
          zIndex: -1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default PhoneMockup;
