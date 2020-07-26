import React from "react";
import Link from "next-translate/link";
import {
  createStyles,
  withStyles,
  WithStyles,
  Button,
} from "@material-ui/core";

const styles = createStyles({
  container: {
    background: "url(/pictures/background_dortmund.jpg) no-repeat",
    backgroundSize: "cover",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    justifyItems: "center",
    height: "100vh",
    overflow: "hidden",
    rowGap: "15px",
    color: "white",
    ".error-code": {
      "&:after": {
        content: "Looks like you are lost! !important",
      },
    },
  },
});

const FourZeroFour = (props: WithStyles<typeof styles>) => {
  return (
    <div className={props.classes.container}>
      <div style={{ fontSize: "4em", fontWeight: "bold", textAlign: "center" }}>
        Error 404
      </div>
      <div style={{ width: "400px", textAlign: "center" }}>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </div>
      <Link href="/">
        <Button variant="contained" color="primary">
          Back to homepage
        </Button>
      </Link>
    </div>
  );
};

export default withStyles(styles)(FourZeroFour);
