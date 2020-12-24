import React from "react";

interface Props {
  background: JSX.Element;
  children: JSX.Element | JSX.Element[];
}

/**
 * An HeaderWithBackground React Component.
 * @author
 * @version 0.1
 */
const BackgroundWrapper: React.FC<Props> = ({ background, children }) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        {background}
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
