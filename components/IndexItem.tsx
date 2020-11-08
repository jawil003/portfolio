import React from "react";
import {
  makeStyles,
  Typography,
} from "@material-ui/core";
interface Props {
  title: string;
}
const useStyles = makeStyles({
  text: { marginLeft: "10px" },
});
const IndexItem: React.FC<Props> = ({
  title,
  children,
}) => {
  const { text } = useStyles();
  return (
    <div
      style={{
        display: "grid",
        rowGap: "20px",
        alignContent: "center",
        alignItems: "stretch",
        justifyContent: "flex-start",
        justifyItems: "baseline",
        margin: "30px 0px",
      }}
    >
      <Typography
        classes={{ root: text }}
        id={title.toLowerCase()}
        variant="h5"
      >
        {title}
      </Typography>
      <div
        style={{
          display: "flex",
          /*rowGap: "30px",
            columnGap: "50px",*/
          gridAutoRows: "auto",
          gridTemplateColumns: "30% 30% 30%",
          alignContent: "center",
          alignItems: "stretch",
          justifyContent: "center",
          margin: "0px 15px",
          flexWrap: "wrap",
          width: "calc(100vw - calc(2*15px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default IndexItem;
