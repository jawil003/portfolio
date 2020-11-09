import React from "react";
import LebenslaufItem from "./LebenslaufItem";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import IndexItem from "./IndexItem";
import { useTranslation } from "next-translate";

const Lebenslauf: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IndexItem title={t("resume:resume")}>
      <LebenslaufItem
        href="https://www.fh-dortmund.de/de/index.php"
        icon={
          <SchoolIcon
            color="primary"
            fontSize="large"
          />
        }
        title={t("resume:study")}
        place={t("resume:university")}
        startdate="2017"
        enddate={t("resume:today")}
      >
        <li>{t("resume:study_description.0")}</li>
        <li>{t("resume:study_description.1")}</li>
        <li>{t("resume:study_description.2")}</li>
      </LebenslaufItem>
      <LebenslaufItem
        href="https://www.adesso.de/de/index.jsp"
        icon={
          <SchoolIcon
            color="primary"
            fontSize="large"
          />
        }
        title={t("resume:adesso")}
        place="Adesso SE"
        startdate="2020"
      >
        <li>{t("resume:adesso_description.0")}</li>
        <li>{t("resume:adesso_description.1")}</li>
      </LebenslaufItem>
      <LebenslaufItem
        href="https://www.agido.com/"
        icon={
          <WorkIcon color="primary" fontSize="large" />
        }
        title={t("resume:agido")}
        place="Agido GmbH"
        startdate="2019"
      >
        <li>{t("resume:agido_description.0")}</li>
        <li>{t("resume:agido_description.1")}</li>
      </LebenslaufItem>
      <LebenslaufItem
        href="https://www.phoenix-gymnasium-hoerde.de/"
        icon={
          <SchoolIcon
            color="primary"
            fontSize="large"
          />
        }
        title={t("resume:phoenix")}
        place={t("resume:phoenix_school")}
      >
        <li>{t("resume:phoenix_description.0")}</li>
        <li>{t("resume:phoenix_description.1")}</li>
      </LebenslaufItem>
      <LebenslaufItem
        href="https://www.berghofer-grundschule.de/%C3%BCber-uns/"
        icon={
          <SchoolIcon
            color="primary"
            fontSize="large"
          />
        }
        title={t("resume:busenberg")}
        place={t("resume:busenberg_school")}
      >
        <li>{t("resume:busenberg_description.0")}</li>
      </LebenslaufItem>
    </IndexItem>
  );
};

export default Lebenslauf;
