import React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Collapse,
  Link,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const styles = createStyles({
  collapse: {
    position: "relative",
    top: "40px",
    paddingBottom: "40px",
  },
  littlefab: {
    marginBottom: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
  },
  icon: {
    fill: "white",
  },
});
interface State {
  open: boolean;
}
class Contact extends React.Component<WithStyles<typeof styles>, State> {
  state = { open: false };
  render() {
    return (
      <div
        style={{
          margin: "20px",
          position: "fixed",
          bottom: "0px",
          right: "0px",
        }}
      >
        <Collapse
          classes={{ container: this.props.classes.collapse }}
          in={this.state.open}
        >
          <Link href="https://de.linkedin.com/" target="_blank">
            <Fab
              classes={{ root: this.props.classes.littlefab }}
              className="customAnchor"
              color="secondary"
              aria-label="github"
              size="small"
            >
              <LinkedInIcon classes={{ root: this.props.classes.icon }} />
            </Fab>
          </Link>
          <Link href="https://github.com/jawil003" target="_blank">
            <Fab
              classes={{ root: this.props.classes.littlefab }}
              color="secondary"
              aria-label="github"
              size="small"
            >
              <GitHubIcon classes={{ root: this.props.classes.icon }} />
            </Fab>
          </Link>
          <Link href="https://twitter.com/Willey3x37" target="_blank">
            <Fab
              classes={{ root: this.props.classes.littlefab }}
              color="secondary"
              aria-label="edit"
              size="small"
            >
              <TwitterIcon classes={{ root: this.props.classes.icon }} />
            </Fab>
          </Link>
          <Link href="mailto:jw19980309@gmail.com?subject=WebDev%20Request&body=%23Beschreiben%20Sie%20hier%20welche%20Art%20von%20mobiler%2C%20desktopbasierter%20oder%20Webapplikation%20sie%20ben%C3%B6tigen%0D%0A-%3E%20Privat%20oder%20gesch%C3%A4ftlich%3F%0D%0A-%3E%20Kernfunktionalit%C3%A4ten%0D%0A-%3E%20etc%0D%0A%0D%0A%23Geben%20Sie%20nun%20ihr%20Budget%20an%20(ungef%C3%A4hre%20Angabe%20gen%C3%BCgt)%0D%0A%0D%0A%23Zum%20Schluss%20geben%20Sie%20nun%20mindestens%20eine%20Kontaktm%C3%B6glichkeit%20an%0D%0A-%3E%20Email%0D%0A-%3E%20Whatsapp%0D%0A-%3E%20Discord%0D%0A-%3E%20Telegram">
            <Fab
              classes={{ root: this.props.classes.littlefab }}
              color="secondary"
              aria-label="edit"
              size="small"
            >
              <EmailIcon classes={{ root: this.props.classes.icon }} />
            </Fab>
          </Link>
        </Collapse>
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
