import React from "react";
import LebenslaufItem from "./lebenslaufItem";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import IndexItem from "./layout/indexItem";
export default class Lebenslauf extends React.Component {
  render() {
    return (
      <IndexItem title="Lebenslauf">
        <LebenslaufItem icon={<SchoolIcon color="primary" fontSize="large" />}>
          Studium an der Fachhochschule Dortmund Bsc. Wirtschaftsinformatik
        </LebenslaufItem>
        <LebenslaufItem icon={<SchoolIcon color="primary" fontSize="large" />}>
          Studentisches Projekt mit der Adesso SE im Bereich Mobile App
          Development ChatBot
        </LebenslaufItem>
        <LebenslaufItem icon={<WorkIcon color="primary" fontSize="large" />}>
          Werksstudententätigkeit Agido Gmbh
        </LebenslaufItem>
        <LebenslaufItem icon={<SchoolIcon color="primary" fontSize="large" />}>
          Allgemeine Hochschulreife (Phoenix Gymnasium Dortmund)
        </LebenslaufItem>
        <LebenslaufItem icon={<SchoolIcon color="primary" fontSize="large" />}>
          Grundschulabschluss (Busenberg Grundschule)
        </LebenslaufItem>
      </IndexItem>
    );
  }
}
