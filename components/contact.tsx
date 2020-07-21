import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import {
  TextField,
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import IndexItem from "./layout/indexItem";
const styles = createStyles({
  textField: { marginBottom: "10px", width: "384px" },
});
class Contact extends React.Component<WithStyles<typeof styles>> {
  render() {
    return (
      <IndexItem title="Kontakt">
        <FormGroup>
          <TextField
            variant="outlined"
            label="Titel"
            color="primary"
            classes={{ root: this.props.classes.textField }}
          />
          <TextField
            variant="outlined"
            label="Text"
            color="primary"
            multiline
          />
        </FormGroup>
      </IndexItem>
    );
  }
}

export default withStyles(styles)(Contact);
