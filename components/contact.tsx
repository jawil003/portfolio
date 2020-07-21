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
const styles = createStyles({
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
        <Collapse in={this.state.open}>
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
          <Link href="mailto:jw19980309@gmail.com">
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
