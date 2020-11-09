import React from "react";

const SourcesContainer: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

export default SourcesContainer;
