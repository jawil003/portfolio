import React from "react";

interface Props {
  align?: "start" | "center" | "end";
  stop?: boolean;
}

/**
 * An SnapScrollParagraph React Component.
 * @author
 * @version 0.1
 */
const SnapScrollParagraph: React.FC<Props> = ({ children, align, stop }) => {
  return (
    <div
      style={{
        scrollSnapAlign: align,
        scrollSnapStop: stop ? "always" : "normal",
      }}
    >
      {children}
    </div>
  );
};

SnapScrollParagraph.defaultProps = { align: "start", stop: false };

export default SnapScrollParagraph;
