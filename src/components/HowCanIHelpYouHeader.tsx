import React, { forwardRef } from "react";
import KnowledgeDesign from "./designs/knowledge.design";

interface Props {
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  children?: any;
}

/**
 * An HowCanIHelpYouHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const HowCanIHelpYouHeader = forwardRef<HTMLDivElement, Props>(
  ({ children, onScroll }, ref) => {
    return (
      <div
        ref={ref}
        onScroll={onScroll}
        style={{
          height: "calc(100vh - 100px)",
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KnowledgeDesign width="100%" />
        </div>
      </div>
    );
  }
);

export default HowCanIHelpYouHeader;
