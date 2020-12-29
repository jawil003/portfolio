import React from "react";

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
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  wrap?: boolean;
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
  children,
}) => {
  return (
    <div className="flexContainer">
      <style jsx>{`
        .flexContainer {
          display: flex;
          flex-direction: ${direction};
          align-content: ${alignContent};
          justify-content: ${justifyContent};
          align-items: ${alignItems};
          flex-wrap: ${wrap ? "wrap" : "no-wrap"};
        }
        .flexContainer > :global(*) {
          margin: ${rowGap} ${columnGap};
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
