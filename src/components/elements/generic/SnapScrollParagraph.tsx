import React, { forwardRef, PropsWithChildren } from "react";

interface Props {
  align?: "start" | "center" | "end";
  stop?: boolean;
}

/**
 * An SnapScrollParagraph React Component.
 * @author
 * @version 0.1
 */
const SnapScrollParagraph = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(({ children, align, stop }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        scrollSnapAlign: align,
        scrollSnapStop: stop ? "always" : "normal",
      }}
    >
      {children}
    </div>
  );
});

SnapScrollParagraph.defaultProps = { align: "start", stop: false };

export default SnapScrollParagraph;
