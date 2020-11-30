import React from "react";

interface Props {}

/**
 * An CategoryCardWrapper React Component.
 * @author
 * @version 0.1
 */
const CategoryCardWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        padding: "20px 80px",
      }}
    >
      {children}
    </div>
  );
};

export default CategoryCardWrapper;
