import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { withTranslation, WithTranslation } from "next-translate";
import { createStyles, WithStyles, withStyles, Grid } from "@material-ui/core";
import CustomLanguageLink from "./../CustomLanguageLink";
import CustomPageMover from "../CustomPageMover";
const styles = createStyles({
  icon: {
    marginRight: "10px",
  },
  appBar: {
    position: "static",
  },
  link: { color: "white", margin: "8px", cursor: "pointer" },
});
class Header extends Component<WithStyles<typeof styles> & WithTranslation> {
  render() {
    return (
      <AppBar id="navigation" classes={{ root: this.props.classes.appBar }}>
        <Toolbar>
          <Grid container alignContent="center" justify="center">
            <CustomPageMover href="/" selector="#lebenslauf">
              <a className={this.props.classes.link}>
                {this.props.i18n.t("header:resume")}
              </a>
            </CustomPageMover>

            <a
              onClick={(ent) => {
                ent.preventDefault();
                document.querySelector("#kenntnisse").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={this.props.classes.link}
            >
              {" "}
              {this.props.i18n.t("header:knowledge")}
            </a>
            <a
              onClick={(ent) => {
                ent.preventDefault();
                document.querySelector("#projekte").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={this.props.classes.link}
            >
              {this.props.i18n.t("header:projects")}
            </a>
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
