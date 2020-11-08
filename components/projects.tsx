import React from "react";
import IndexItem from "./layout/indexItem";
import ProjectItem from "./projectsItem";
import WebIcon from "@material-ui/icons/Web";
import DnsIcon from "@material-ui/icons/Dns";
import PrintIcon from "@material-ui/icons/Print";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import ListIcon from "@material-ui/icons/List";
import {
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import {
  withTranslation,
  WithTranslation,
} from "next-translate";
const styles = createStyles({
  icon: {
    fontSize: "5rem",
  },
  iconWithPadding: {
    fontSize: "5rem",
    padding: "5px",
  },
});
class Project extends React.Component<
  WithStyles<typeof styles> & WithTranslation
> {
  render() {
    return (
      <IndexItem
        title={this.props.i18n.t("common:projects")}
      >
        <ProjectItem
          icon={
            <WebIcon
              color="primary"
              classes={{
                root: this.props.classes.icon,
              }}
            />
          }
          href="https://github.com/jawil003/Portfolio"
        >
          Portfolio
        </ProjectItem>

        <ProjectItem
          icon={
            <DnsIcon
              color="primary"
              classes={{
                root: this.props.classes
                  .iconWithPadding,
              }}
            />
          }
          href="https://github.com/jawil003/Web-Praktika"
        >
          WebServer
        </ProjectItem>
        <ProjectItem
          icon={
            <PrintIcon
              color="primary"
              classes={{
                root: this.props.classes
                  .iconWithPadding,
              }}
            />
          }
          href="https://github.com/jawil003/Resume"
        >
          Lebenslauf
        </ProjectItem>
        <ProjectItem
          icon={
            <FreeBreakfastIcon
              color="primary"
              classes={{
                root: this.props.classes
                  .iconWithPadding,
              }}
            />
          }
          href="https://github.com/jawil003/BreakTool"
        >
          BreakTool
        </ProjectItem>
        <ProjectItem
          icon={
            <LocalPizzaIcon
              color="primary"
              classes={{
                root: this.props.classes
                  .iconWithPadding,
              }}
            />
          }
          href="https://github.com/jawil003/DeliveryTool"
        >
          DeliveryTool
        </ProjectItem>
        <ProjectItem
          icon={
            <ListIcon
              color="primary"
              classes={{
                root: this.props.classes
                  .iconWithPadding,
              }}
            />
          }
          href="https://github.com/jawil003/LocalTrackOld"
        >
          LocalTrack
        </ProjectItem>
      </IndexItem>
    );
  }
}
export default withTranslation(
  withStyles(styles)(Project)
);
