import { css } from "@emotion/react";
import React, {
  forwardRef,
} from "react";

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper = forwardRef<
  HTMLDivElement,
  { children: any }
>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      css={css`
        & {
          position: relative;
          left: 0px;
          width: 100%;
          max-width: 970px;
          padding: 20px;
          overflow-x: scroll;
          --gap: 40px;
          display: flex;
          justify-content: flex-start;
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
});

CategoryCardWrapper.displayName =
  "CategoryCardWrapper";

export default CategoryCardWrapper;
