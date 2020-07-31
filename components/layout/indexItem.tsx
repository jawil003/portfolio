import React from "react";
import {
  WithStyles,
  createStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
interface Props extends WithStyles<typeof styles> {
  title: string;
}
const styles = createStyles({
  text: { marginLeft: "10px" },
});
class IndexItem extends React.Component<Props> {
  render() {
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
          classes={{ root: this.props.classes.text }}
          id={this.props.title.toLowerCase()}
          variant="h5"
        >
          {this.props.title}
        </Typography>
        <div
          style={{
            display: "flex",
            rowGap: "30px",
            columnGap: "50px",
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
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(IndexItem);
