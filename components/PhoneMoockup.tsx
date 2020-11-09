import React, { CSSProperties } from "react";
import PhoneDesign from "./designs/Phone";

interface Props {
  style?: CSSProperties;
  className?: string;
}
const PhoneMockup: React.FC<Props> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        /*display: "grid",*/
        justifyContent: "center",
        alignContent: "center",
        zIndex: 1,
        ...style,
      }}
    >
      <PhoneDesign size="calc(100vh - 20px)" />
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 23,
          width: "calc(100% - 45px)",
          height: "100%",
          zIndex: -1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default PhoneMockup;
