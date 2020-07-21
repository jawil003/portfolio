import React from "react";
import IndexItem from "./layout/indexItem";
import ProjectItem from "./projectsItem";
import WebIcon from "@material-ui/icons/Web";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
const styles = createStyles({
  icon: {
    fontSize: "5rem",
  },
});
class Project extends React.Component<WithStyles<typeof styles>> {
  render() {
    return (
      <IndexItem title="Projekte">
        <ProjectItem
          icon={
            <WebIcon
              color="primary"
              classes={{ root: this.props.classes.icon }}
            />
          }
          href=""
        >
          Portfolio
        </ProjectItem>
        <ProjectItem
          icon={
            <WebIcon
              color="primary"
              classes={{ root: this.props.classes.icon }}
            />
          }
          href=""
        >
          DeliveryTool
        </ProjectItem>
        <ProjectItem
          icon={
            <WebIcon
              color="primary"
              classes={{ root: this.props.classes.icon }}
            />
          }
          href=""
        >
          BreakTool
        </ProjectItem>
        <ProjectItem
          icon={
            <WebIcon
              color="primary"
              classes={{ root: this.props.classes.icon }}
            />
          }
          href=""
        >
          WebServer NodeJS
        </ProjectItem>
      </IndexItem>
    );
  }
}
export default withStyles(styles)(Project);
