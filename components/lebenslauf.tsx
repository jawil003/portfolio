import React from "react";
import LebenslaufItem from "./lebenslaufItem";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import IndexItem from "./layout/indexItem";
import { withTranslation, WithTranslation } from "next-translate";
class Lebenslauf extends React.Component<WithTranslation> {
  render() {
    return (
      <IndexItem title="Lebenslauf">
        <LebenslaufItem
          href="https://www.fh-dortmund.de/de/index.php"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title={this.props.i18n.t("resume:study")}
          place={this.props.i18n.t("resume:university")}
          startdate="2017"
          enddate={this.props.i18n.t("resume:today")}
        >
          <li>{this.props.i18n.t("resume:study_description.0")}</li>
          <li>{this.props.i18n.t("resume:study_description.1")}</li>
          <li>{this.props.i18n.t("resume:study_description.2")}</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.adesso.de/de/index.jsp"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title={this.props.i18n.t("resume:adesso")}
          place="Adesso SE"
          startdate="2020"
        >
          <li>Entwicklung einer Java Android App</li>
          <li>Kommunikation mit der Adesso ChatBot Workbench</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.agido.com/"
          icon={<WorkIcon color="primary" fontSize="large" />}
          title={this.props.i18n.t("resume:agido")}
          place="Agido GmbH"
          startdate="2019"
        >
          <li>Weiterentwicklung Java Swing Client</li>
          <li>Entwicklung JBoss Backend</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.phoenix-gymnasium-hoerde.de/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title={this.props.i18n.t("resume:phoenix")}
          place="Phoenix Gymnasium Dortmund"
          startdate="2011"
          enddate="2017"
        >
          <li>Besuch des Informatik Leistungskurses</li>
          <li>Entwicklung von Software basierend aus Stifte und Mäuse SDK</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.berghofer-grundschule.de/%C3%BCber-uns/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title={this.props.i18n.t("resume:busenberg")}
          place="Busenberg Grundschule"
          startdate="2003"
          enddate="2009"
        >
          <li>Grundausbildung in Wort, Mathematik und Schrift</li>
        </LebenslaufItem>
      </IndexItem>
    );
  }
}

export default withTranslation(Lebenslauf);
