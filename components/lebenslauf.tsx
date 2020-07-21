import React from "react";
import LebenslaufItem from "./lebenslaufItem";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import IndexItem from "./layout/indexItem";
export default class Lebenslauf extends React.Component {
  render() {
    return (
      <IndexItem title="Lebenslauf">
        <LebenslaufItem
          href="https://www.fh-dortmund.de/de/index.php"
          icon={<SchoolIcon color="primary" fontSize="large" />}
        >
          Studium an der Fachhochschule Dortmund Bsc. Wirtschaftsinformatik
          <ul style={{ padding: "0px" }}>
            <li>Algorithmen und Datenstrukturen</li>
            <li>
              Java Grundkenntnisse und fortgeschrittenes UI Design mit Swing
            </li>
            <li>Moderne Webentwicklung mit HTML, CSS, Javascript und NodeJS</li>
          </ul>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.adesso.de/de/index.jsp"
          icon={<SchoolIcon color="primary" fontSize="large" />}
        >
          Projekt mit der Adesso SE im Bereich Mobile App Development ChatBot
          <ul style={{ padding: "0px" }}>
            <li>Entwicklung einer Java Android App</li>
            <li>Kommunikation mit der Adesso ChatBot Workbench</li>
          </ul>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.agido.com/"
          icon={<WorkIcon color="primary" fontSize="large" />}
        >
          Arbeit als Werkstudent Agido GmbH
          <br />
          <br />
          <ul style={{ padding: "0px" }}>
            <li>Weiterentwicklung Java Swing Client</li>
            <li>Entwicklung JBoss Backend</li>
          </ul>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.phoenix-gymnasium-hoerde.de/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
        >
          Allgemeine Hochschulreife (Phoenix Gymnasium Dortmund)
          <ul style={{ padding: "0px" }}>
            <li>Besuch des Informatik Leistungskurses</li>
            <li>Entwicklung von Software basierend aus Stifte und Mäuse SDK</li>
          </ul>
        </LebenslaufItem>
        <LebenslaufItem
          href="https://www.berghofer-grundschule.de/%C3%BCber-uns/"
          icon={<SchoolIcon color="primary" fontSize="large" />}
        >
          Grundschulabschluss (Busenberg Grundschule)
          <ul style={{ padding: "0px" }}>
            <li>Grundausbildung in Wort, Mathematik und Schrift</li>
          </ul>
        </LebenslaufItem>
      </IndexItem>
    );
  }
}
