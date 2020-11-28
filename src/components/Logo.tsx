import React from "react";
import Typography from "./elements/Typography";

interface Props {}

/**
 * An Logo React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Logo: React.FC<Props> = () => {
  return (
    <div
      style={{
        alignSelf: "start",
        display: "grid",
        gridTemplateColumns: "calc(21px + 20px) auto",
        gridTemplateRows: "calc(21px + 20px)",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        minWidth: "150px",
        borderRadius: "5px",
        flexGrow: 0,
        flexBasis: "auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          height: "100%",
          boxSizing: "content-box",
          paddingLeft: "100%",
          borderRadius: "5px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
        }}
      >
        <Typography variant="h6" align="center">
          Willey3x37
        </Typography>
      </div>
    </div>
  );
};

export default Logo;
