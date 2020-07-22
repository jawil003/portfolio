import React from "react";
import Link from "next/link";
import {
  Typography,
  Grid,
  createStyles,
  withStyles,
  WithStyles,
  Button,
} from "@material-ui/core";
import Typist from "react-typist";
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
});
interface State {
  typing: boolean;
}
interface Props extends WithStyles<typeof styles> {}
class Intro extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
          width: "100vw",
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
                  key={this.state.typing}
                  onTypingDone={this.done}
                  cursor={{}}
                >
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    Hallo, mein Name ist Jannik
                  </span>
                  <Typist.Backspace count={30} delay={2000} />
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    Ich bin Student der Wirtschaftsinformatik
                  </span>
                  <Typist.Backspace count={33} delay={2000} />
                  <span
                    style={{ color: "white", textShadow: "3px 3px 4px #777" }}
                  >
                    Borussia Dortmund Fan
                  </span>
                </Typist>
              </Typography>
            </Grid>
            <Grid item>
              <Link href={`${process.env.BACKEND_URL}/#navigation`}>
                <Button variant="contained" color="primary">
                  Lernen wir uns kennen
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Link href="https://pixabay.com/de/photos/dortmund-dortmunder-u-u-turm-602962/">
            <a target="_blank" className={`${this.props.classes.copyright}`}>
              Foto von sxss
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
