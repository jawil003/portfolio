import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {
  createStyles,
  WithStyles,
  withStyles,
  Button,
  Grid,
} from "@material-ui/core";
import Link from "next/link";
const styles = createStyles({
  icon: {
    marginRight: "10px",
    primary: { backgrounColor: "green" },
  },
  appBar: {
    position: "static",
  },
});
class Header extends Component<WithStyles<typeof styles>> {
  render() {
    return (
      <AppBar id="navigation" classes={{ root: this.props.classes.appBar }}>
        <Toolbar>
          <Grid container alignContent="center" justify="center">
            <Link
              href="/#lebenslauf"
              as={process.env.BACKEND_URL + "/#lebenslauf"}
            >
              <Button color="inherit">Lebenslauf</Button>
            </Link>
            <Link
              href="/#kenntnisse"
              as={process.env.BACKEND_URL + "/#kenntnisse"}
            >
              <Button color="inherit">Kenntnisse</Button>
            </Link>
            <Link href="/#projekte" as={process.env.BACKEND_URL + "/#projekte"}>
              <Button color="inherit">Projekte</Button>
            </Link>
            <Link
              href="/sources/#navigation"
              as={process.env.BACKEND_URL + "/sources/#navigation"}
            >
              <Button color="inherit">Quellen</Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
