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
          place="Fachhochschule Dortmund"
          startdate="2017"
          enddate="heute"
        >
          <li>{this.props.i18n.t("resume:study_description.0")}</li>
          <li>{this.props.i18n.t("resume:study_description.1")}</li>
          <li>{this.props.i18n.t("resume:study_description.2")}</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.adesso.de/de/index.jsp"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title="Projekt im Bereich Mobile App Development
              ChatBot"
          place="Adesso SE"
          startdate="14.4.2017"
          enddate="today"
        >
          <li>Entwicklung einer Java Android App</li>
          <li>Kommunikation mit der Adesso ChatBot Workbench</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.agido.com/"
          icon={<WorkIcon color="primary" fontSize="large" />}
          title="Werkstudententätigkeit"
          place="Agido GmbH"
          startdate="14.4.2017"
          enddate="today"
        >
          <li>Weiterentwicklung Java Swing Client</li>
          <li>Entwicklung JBoss Backend</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.phoenix-gymnasium-hoerde.de/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title="Allgemeine Hochschulreife"
          place="Phoenix Gymnasium Dortmund"
          startdate="14.4.2017"
          enddate="today"
        >
          <li>Besuch des Informatik Leistungskurses</li>
          <li>Entwicklung von Software basierend aus Stifte und Mäuse SDK</li>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.berghofer-grundschule.de/%C3%BCber-uns/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
          title="Grundschulabschluss"
          place="Busenberg Grundschule"
          startdate="14.4.2017"
          enddate="today"
        >
          <li>Grundausbildung in Wort, Mathematik und Schrift</li>
        </LebenslaufItem>
      </IndexItem>
    );
  }
}

export default withTranslation(Lebenslauf);
