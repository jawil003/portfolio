import React, { forwardRef } from "react";

interface Props {
  latest?: boolean;
  children?: any;
}

/**
 * An CategoryWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children, latest }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          minHeight: latest ? "calc(100vh - 50px)" : "100vh",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {children}
      </div>
    );
  }
);

CategoryWrapper.defaultProps = { latest: false };

export default CategoryWrapper;
