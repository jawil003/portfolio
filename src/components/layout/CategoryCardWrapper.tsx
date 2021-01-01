import React from "react";
import FlexContainer from "../elements/generic/FlexContainer";
import Spacer from "../elements/generic/Spacer";

interface Props {}

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper: React.FC<Props> = ({
  children,
}) => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          --gap: 40px;
          display: flex;
          overflow-x: scroll;
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
                calc(270px / 2) - 10px
            )
          );
        }
      `}</style>
      <div className="spacer" />
      {children}
      <div className="spacer" />
    </div>
  );
};

export default CategoryCardWrapper;
