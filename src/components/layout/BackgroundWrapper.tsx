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
          height: calc(100vh - 120px);
        }

        .backgroundWrapper-backgroundContainer {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
        }
        .backgroundWrapper-childrenContainer {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
        }
        .backgroundWrapper-childrenContainer-relative {
          flex: 1;
          position: relative;
        }
      `}</style>

      <div className="backgroundWrapper-backgroundContainer">
        {background}
      </div>
      <div className="backgroundWrapper-childrenContainer">
        <div className="backgroundWrapper-childrenContainer-relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
