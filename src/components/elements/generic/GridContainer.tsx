import React from "react";

interface Props {
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
  justifyItems?: "center" | "flex-start" | "flex-end" | "stretch";
}

/**
 * An GridContainer React Component.
 * @author Jannik Will
 * @version 0.1
 */
const GridContainer: React.FC<Props> = ({
  columnGap,
  rowGap,
  justifyContent,
  alignItems,
  alignContent,
  children,
}) => {
  return (
    <div>
      <style jsx>
        {`
          .gridContainer {
            display: grid;
            align-content: ${alignContent};
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            column-gap: ${columnGap};
            row-gap: ${rowGap};
          }
          .gridcontainer > :global(*) {
              width: 100%;
              height 100%;
          }
        `}
        å
      </style>
      {children}
    </div>
  );
};

export default GridContainer;
