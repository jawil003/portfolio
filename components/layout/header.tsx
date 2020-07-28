import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { withTranslation, WithTranslation } from "next-translate";
import { createStyles, WithStyles, withStyles, Grid } from "@material-ui/core";
import CustomLanguageLink from "./../CustomLanguageLink";
const styles = createStyles({
  icon: {
    marginRight: "10px",
  },
  appBar: {
    position: "static",
  },
  link: { color: "white", margin: "8px" },
});
class Header extends Component<WithStyles<typeof styles> & WithTranslation> {
  render() {
    return (
      <AppBar id="navigation" classes={{ root: this.props.classes.appBar }}>
        <Toolbar>
          <Grid container alignContent="center" justify="center">
            <CustomLanguageLink href="/#lebenslauf">
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:resume")}
              </a>
            </CustomLanguageLink>
            <CustomLanguageLink href="/#kenntnisse">
              <a className={this.props.classes.link}>
                {" "}
                {this.props.i18n.t("header:knowledge")}
              </a>
            </CustomLanguageLink>
            <CustomLanguageLink href="/#projekte">
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:projects")}
              </a>
            </CustomLanguageLink>
            <CustomLanguageLink href="/sources">
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:sources")}
              </a>
            </CustomLanguageLink>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTranslation(withStyles(styles)(Header));
