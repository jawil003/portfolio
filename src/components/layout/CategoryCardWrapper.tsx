import React, { Children } from "react";
import useBreakpoint from "src/hooks/useBreakpoints.hook";

interface Props {}

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper: React.FC<Props> = ({
  children,
}) => {
  const {width} = useBreakpoint();
  const elementsWidth = Children.toArray(children).length * 310;
  return (
    <div className="container">
      <style jsx>{`
        .container {
          position: relative;
          left: 0px;
          width: 100vw;
          --gap: 40px;
          overflow-x: ${width >=
          elementsWidth
            ? "hidden"
            : "scroll"};
          display: flex;
          justify-content: ${width >=
          elementsWidth
            ? "center"
            : "flex-start"};
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          /*margin: calc(10px / -2)
            calc(10px / -2);*/
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .container::-webkit-scrollbar {
          display: none;
        }
        .container
          > :global(*):not(.spacer) {
          margin: calc(0px / 2)
            calc(var(--gap) / 2);
        }
        .container > .spacer {
          padding-right: calc(
            calc(
              calc(100% / 2) -
                calc(270px / 2) -
                calc(var(--gap) / 2)
            )
          );
        }
      `}</style>
      {width < elementsWidth ? (
        <div className="spacer" />
      ) : undefined}
      {children}
      {width < elementsWidth ? (
        <div className="spacer" />
      ) : undefined}
    </div>
  );
};

export default CategoryCardWrapper;
