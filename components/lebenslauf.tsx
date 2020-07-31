import React from "react";
import LebenslaufItem from "./lebenslaufItem";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import IndexItem from "./layout/indexItem";
import {
  withTranslation,
  WithTranslation,
} from "next-translate";
class Lebenslauf extends React.Component<
  WithTranslation
> {
  render() {
    return (
      <IndexItem
        title={this.props.i18n.t("resume:resume")}
      >
        <LebenslaufItem
          href="https://www.fh-dortmund.de/de/index.php"
          icon={
            <SchoolIcon
              color="primary"
              fontSize="large"
            />
          }
          title={this.props.i18n.t("resume:study")}
          place={this.props.i18n.t(
            "resume:university"
          )}
          startdate="2017"
          enddate={this.props.i18n.t("resume:today")}
        >
          <li>
            {this.props.i18n.t(
              "resume:study_description.0"
            )}
          </li>
          <li>
            {this.props.i18n.t(
              "resume:study_description.1"
            )}
          </li>
          <li>
            {this.props.i18n.t(
              "resume:study_description.2"
            )}
          </li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.adesso.de/de/index.jsp"
          icon={
            <SchoolIcon
              color="primary"
              fontSize="large"
            />
          }
          title={this.props.i18n.t("resume:adesso")}
          place="Adesso SE"
          startdate="2020"
        >
          <li>
            {this.props.i18n.t(
              "resume:adesso_description.0"
            )}
          </li>
          <li>
            {this.props.i18n.t(
              "resume:adesso_description.1"
            )}
          </li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.agido.com/"
          icon={
            <WorkIcon
              color="primary"
              fontSize="large"
            />
          }
          title={this.props.i18n.t("resume:agido")}
          place="Agido GmbH"
          startdate="2019"
        >
          <li>
            {this.props.i18n.t(
              "resume:agido_description.0"
            )}
          </li>
          <li>
            {this.props.i18n.t(
              "resume:agido_description.1"
            )}
          </li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.phoenix-gymnasium-hoerde.de/"
          icon={
            <SchoolIcon
              color="primary"
              fontSize="large"
            />
          }
          title={this.props.i18n.t("resume:phoenix")}
          place={this.props.i18n.t(
            "resume:phoenix_school"
          )}
        >
          <li>
            {this.props.i18n.t(
              "resume:phoenix_description.0"
            )}
          </li>
          <li>
            {this.props.i18n.t(
              "resume:phoenix_description.1"
            )}
          </li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.berghofer-grundschule.de/%C3%BCber-uns/"
          icon={
            <SchoolIcon
              color="primary"
              fontSize="large"
            />
          }
          title={this.props.i18n.t("resume:busenberg")}
          place={this.props.i18n.t(
            "resume:busenberg_school"
          )}
        >
          <li>
            {this.props.i18n.t(
              "resume:busenberg_description.0"
            )}
          </li>
        </LebenslaufItem>
      </IndexItem>
    );
  }
}

export default withTranslation(Lebenslauf);
