import React, { CSSProperties } from "react";

interface Props {
  direction?: "row" | "column";
  columnGap?: string;
  rowGap?: string;
  alignContent?:
    | "space-around"
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end";
  justifyContent?:
    | "space-around"
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end";
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch";
  wrap?: boolean;
  style?: CSSProperties;
}

/**
 * An FlexContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const FlexContainer: React.FC<Props> = ({
  direction,
  columnGap,
  rowGap,
  justifyContent,
  alignItems,
  alignContent,
  wrap,
  children, style
}) => {
  return (
    <div className="flexContainer" style={{...style}}>
      <style jsx>{`
        .flexContainer {
          min-width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: ${direction};
          align-content: ${alignContent};
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          flex-wrap: ${wrap
            ? "wrap"
            : "no-wrap"};
          margin: calc(${rowGap} / -2)
            calc(${columnGap} / -2);
        }
        .flexContainer > :global(*) {
          margin: calc(${rowGap} / 2) calc(${columnGap} / 2);
        }
      `}</style>
      {children}
    </div>
  );
};

FlexContainer.defaultProps = {
  wrap: false,
  direction: "row",
  columnGap: "0px",
  rowGap: "0px",
};

export default FlexContainer;
