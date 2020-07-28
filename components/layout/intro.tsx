import React from "react";
import {
  Typography,
  Grid,
  createStyles,
  withStyles,
  WithStyles,
  Button,
} from "@material-ui/core";
import { withTranslation, WithTranslation } from "next-translate";
import Typist from "react-typist";
import UtilService from "../../services/util.service";
import Link from "next-translate/link";
import GermanFlag from "components/icons/german_flag.icon";
import USAFlag from "components/icons/usa_flag.icon";
import CustomLanguageLink from "../CustomLanguageLink";
const styles = createStyles({
  gridContainer: {
    height: "100%",
    gap: "10px",
  },
  copyright: {
    position: "absolute",
    left: "16px",
    top: "16px",
    color: "rgba(255,255,255,0.3)",
  },
  button: {
    color: "white",
  },
  typist: {
    textAlign: "center",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    padding: "0px 10px",
    width: "100vw",
  },
});
interface State {
  typing: boolean;
}
interface Props extends WithStyles<typeof styles> {}
class Intro extends React.Component<Props & WithTranslation, State> {
  public description1 = this.props.i18n.t("intro:description1");
  public description2 = this.props.i18n.t("intro:description2");
  public description3 = this.props.i18n.t("intro:description3");
  private utilService: UtilService;
  constructor(props: Props & WithTranslation) {
    super(props);
    this.utilService = new UtilService();
  }
  state = { typing: true };
  done = () => {
    setTimeout(() => {
      this.setState({ typing: !this.state.typing });
    }, 2000);
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: `url(${process.env.BACKEND_URL}/pictures/background_dortmund.jpg) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div style={{ height: "100%", background: "rgba(0,0,0,0.3)" }}>
          <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            justify="center"
            classes={{ root: this.props.classes.gridContainer }}
          >
            <Grid item>
              <Typography variant="h3" component="h3">
                <Typist
                  className={this.props.classes.typist}
                  key={this.state.typing}
                  onTypingDone={this.done}
                  cursor={{}}
                >
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    {this.description1}
                  </span>
                  <Typist.Backspace
                    count={this.utilService.getDifferenceFromEnd(
                      this.description1,
                      this.description2
                    )}
                    delay={2000}
                  />
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    {this.utilService.removeDuplicate(
                      this.description2,
                      this.description1
                    )}
                  </span>
                  <Typist.Backspace
                    count={this.utilService.getDifferenceFromEnd(
                      this.description2,
                      this.description3
                    )}
                    delay={2000}
                  />
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    {this.utilService.removeDuplicate(
                      this.description3,
                      this.description2
                    )}
                  </span>
                </Typist>
              </Typography>
            </Grid>
            <Grid item>
              <CustomLanguageLink as="/#navigation" href="/">
                <Button variant="contained" color="primary">
                  {this.props.i18n.t("intro:buttontext")}
                </Button>
              </CustomLanguageLink>
            </Grid>
          </Grid>

          <a
            href="https://pixabay.com/de/photos/dortmund-dortmunder-u-u-turm-602962/"
            target="_blank"
            className={`${this.props.classes.copyright}`}
          >
            {this.props.i18n.t("intro:copyright", { person: "sxxs" })}
          </a>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: "16px",
              color: "white",
              display: "flex",
              gap: "20px",
            }}
          >
            {process.env.NODE_ENV !== "production"
              ? [
                  <Link href="/" lang="de">
                    <a>
                      <GermanFlag fontSize="large" />
                    </a>
                  </Link>,
                  <Link href="/" noLang>
                    <a>
                      <USAFlag fontSize="large" />
                    </a>
                  </Link>,
                ]
              : undefined}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withTranslation(Intro));
