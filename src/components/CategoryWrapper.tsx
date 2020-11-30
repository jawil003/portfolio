import React from "react";

interface Props {
  latest?: boolean;
}

/**
 * An CategoryWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryWrapper: React.FC<Props> = ({ children, latest }) => {
  return (
    <div
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
};

CategoryWrapper.defaultProps = { latest: false };

export default CategoryWrapper;
