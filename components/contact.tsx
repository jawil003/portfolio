import React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import EmailIcon from "@material-ui/icons/Email";
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
class Contact extends React.Component<
  WithStyles<typeof styles>,
  State
> {
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
        <Fab
          color="secondary"
          aria-label="edit"
          href="mailto:jw19980309@gmail.com?subject=WebDev%20Request&body=%23Beschreiben%20Sie%20hier%20welche%20Art%20von%20mobiler%2C%20desktopbasierter%20oder%20Webapplikation%20sie%20ben%C3%B6tigen%0D%0A-%3E%20Privat%20oder%20gesch%C3%A4ftlich%3F%0D%0A-%3E%20Kernfunktionalit%C3%A4ten%0D%0A-%3E%20etc%0D%0A%0D%0A%23Geben%20Sie%20nun%20ihr%20Budget%20an%20(ungef%C3%A4hre%20Angabe%20gen%C3%BCgt)%0D%0A%0D%0A%23Zum%20Schluss%20geben%20Sie%20nun%20mindestens%20eine%20Kontaktm%C3%B6glichkeit%20an%0D%0A-%3E%20Email%0D%0A-%3E%20Whatsapp%0D%0A-%3E%20Discord%0D%0A-%3E%20Telegram"
          target="_blank"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          <EmailIcon
            classes={{ root: this.props.classes.icon }}
          />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
