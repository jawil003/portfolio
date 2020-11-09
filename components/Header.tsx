import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { useTranslation } from "next-translate";
import Link from "next-translate/Link";
import {
  Grid,
  Hidden,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles({
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
const Header: React.FC = () => {
  const { t } = useTranslation();
  const { appBar, link } = useStyles();
  return (
    <Hidden xsDown>
      <AppBar
        id="navigation"
        classes={{ root: appBar }}
      >
        <Toolbar>
          <Grid
            container
            alignContent="center"
            justify="center"
          >
            <Link key="/" href="/">
              <a className={link}>
                {t("header:resume")}
              </a>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://willey3x37.hashnode.dev/"
              className={link}
            >
              Blog
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jawil003"
              className={link}
            >
              {t("Github")}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/jannik-will-450564182"
              className={link}
            >
              {t("LinkedIn")}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Willey3x37"
              className={link}
            >
              {t("Twitter")}
            </a>
            <Link key="/sources" href="/sources">
              <a className={link}>
                {t("header:sources")}
              </a>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Header;
