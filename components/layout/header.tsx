import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { withTranslation, WithTranslation } from "next-translate";
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
class Header extends Component<WithStyles<typeof styles> & WithTranslation> {
  render() {
    return (
      <AppBar id="navigation" classes={{ root: this.props.classes.appBar }}>
        <Toolbar>
          <Grid container alignContent="center" justify="center">
            <Link
              href="/#lebenslauf"
              as={process.env.BACKEND_URL + "/#lebenslauf"}
            >
              <Button color="inherit">
                {this.props.i18n.t("header:resume")}
              </Button>
            </Link>
            <Link
              href="/#kenntnisse"
              as={process.env.BACKEND_URL + "/#kenntnisse"}
            >
              <Button color="inherit">
                {this.props.i18n.t("header:knowledge")}
              </Button>
            </Link>
            <Link href="/#projekte" as={process.env.BACKEND_URL + "/#projekte"}>
              <Button color="inherit">
                {this.props.i18n.t("header:projects")}
              </Button>
            </Link>
            <Link
              href="/sources/#navigation"
              as={process.env.BACKEND_URL + "/sources/#navigation"}
            >
              <Button color="inherit">
                {this.props.i18n.t("header:sources")}
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTranslation(withStyles(styles)(Header));
