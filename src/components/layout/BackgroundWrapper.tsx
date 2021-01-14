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
const BackgroundWrapper: React.FC<Props> = ({
  background,
  children,
}) => {
  return (
    <div className="backgroundWrapper">
      <style jsx>{`
        .backgroundWrapper {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          height: 100vh;
          width: 100vw;
        }

        .backgroundWrapper
          :global(.backgroundWrapper-backgroundContainer) {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .backgroundWrapper
          :global(.backgroundWrapper-childrenContainer) {
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100vw;
          min-height: 100vh;
        }
      `}</style>

      <div className="backgroundWrapper-backgroundContainer">
        {background}
      </div>
      <div className="backgroundWrapper-childrenContainer">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
