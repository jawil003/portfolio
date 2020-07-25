import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { withTranslation, WithTranslation } from "next-translate";
import { createStyles, WithStyles, withStyles, Grid } from "@material-ui/core";
import Link from "next-translate/link";
const styles = createStyles({
  icon: {
    marginRight: "10px",
    primary: { backgrounColor: "green" },
  },
  appBar: {
    position: "static",
  },
  link: { color: "white", margin: "8px" },
});
class Header extends Component<WithStyles<typeof styles> & WithTranslation> {
  componentDidMount() {}
  render() {
    return (
      <AppBar id="navigation" classes={{ root: this.props.classes.appBar }}>
        <Toolbar>
          <Grid container alignContent="center" justify="center">
            <Link
              href="/#lebenslauf"
              as={`${process.env.BACKEND_URL}/#lebenslauf`}
            >
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:resume")}
              </a>
            </Link>
            <Link
              href="/#kenntnisse"
              as={`${process.env.BACKEND_URL}/#kenntnisse`}
            >
              <a className={this.props.classes.link}>
                {" "}
                {this.props.i18n.t("header:knowledge")}
              </a>
            </Link>
            <Link href="/#projekte" as={`${process.env.BACKEND_URL}/#projekte`}>
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:projects")}
              </a>
            </Link>
            <Link href="/sources" as={`${process.env.BACKEND_URL}/sources`}>
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:sources")}
              </a>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTranslation(withStyles(styles)(Header));
