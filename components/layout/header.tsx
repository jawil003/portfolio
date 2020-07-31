import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {
  withTranslation,
  WithTranslation,
} from "next-translate";
import Link from "next-translate/Link";
import {
  createStyles,
  WithStyles,
  withStyles,
  Grid,
} from "@material-ui/core";
const styles = createStyles({
  icon: {
    marginRight: "10px",
  },
  appBar: {
    position: "static",
  },
  link: {
    color: "white",
    margin: "8px",
    cursor: "pointer",
  },
});
class Header extends Component<
  WithStyles<typeof styles> & WithTranslation
> {
  render() {
    return (
      <AppBar
        id="navigation"
        classes={{ root: this.props.classes.appBar }}
      >
        <Toolbar>
          <Grid
            container
            alignContent="center"
            justify="center"
          >
            <Link key="/" href="/">
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:resume")}
              </a>
            </Link>
            <a
              target="_blank"
              href="https://github.com/jawil003"
              className={this.props.classes.link}
            >
              {this.props.i18n.t("Github")}
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/jannik-will-450564182"
              className={this.props.classes.link}
            >
              {this.props.i18n.t("LinkedIn")}
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Willey3x37"
              className={this.props.classes.link}
            >
              {this.props.i18n.t("Twitter")}
            </a>
            <Link key="/sources" href="/sources">
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

export default withTranslation(
  withStyles(styles)(Header)
);
