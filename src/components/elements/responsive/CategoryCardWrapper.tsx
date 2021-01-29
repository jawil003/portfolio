import { css } from "@emotion/react";
import React from "react";

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper: React.FC = ({
  children,
}) => {
  return (
    <div
      css={css`
        & {
          position: relative;
          left: 0px;
          width: 100%;
          padding: 20px;
          flex-wrap: wrap;
          --gap: 40px;
          display: flex;
          justify-content: center;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          /*margin: calc(10px / -2)
            calc(10px / -2);*/
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
          display: none;
        }
        & > *:not(.spacer) {
          margin: calc(var(--gap) / 2)
            calc(var(--gap) / 2);
        }
        & > .spacer {
          padding-right: calc(
            calc(
              calc(100% / 2) -
                calc(270px / 2) -
                calc(var(--gap) / 2)
            )
          );
        }
      `}
      className="container"
    >
      {children}
    </div>
  );
};

export default CategoryCardWrapper;
