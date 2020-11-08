import React from "react";
import IndexItem from "./IndexItem";
import SkillItem from "./SkillItem";
import TypescriptIcon from "./icons/typescript.icon";
import ReactIcon from "./icons/react.icon";
import NextJSIcon from "./icons/nextjs.icon";
import MaterialUIIcon from "./icons/material-ui.icon";
import JavaIcon from "./icons/java.icon";
import MongoDBIcon from "./icons/mongoDB.icon";
import MySQLIcon from "./icons/mySQL.icon";
import NodeJSIcon from "./icons/nodejs.icon";
import { useTranslation } from "next-translate";
import { TrelloIcon } from "./icons/trello.icon";
import { ReactQueryIcon } from "./icons/reactQuery.icon";
import { ExpressJSIcon } from "./icons/expressJs.icon";
import { JavascriptLogo } from "./icons/javascript.con";

const AdvancedSkills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IndexItem title={t("common:skills")}>
      <SkillItem
        href="https://developer.mozilla.org/de/docs/Web/JavaScript"
        icon={<JavascriptLogo fontSize="large" />}
      >
        Javascript
      </SkillItem>
      <SkillItem
        href="https://www.typescriptlang.org/"
        icon={<TypescriptIcon fontSize="large" />}
      >
        Typescript
      </SkillItem>
      <SkillItem
        href="https://reactjs.org/"
        icon={<ReactIcon fontSize="large" />}
      >
        React
      </SkillItem>
      <SkillItem
        href="https://nextjs.org/"
        icon={<NextJSIcon fontSize="large" />}
      >
        NextJS
      </SkillItem>
      <SkillItem
        href="https://material-ui.com/"
        icon={<MaterialUIIcon fontSize="large" />}
      >
        Material UI
      </SkillItem>
      <SkillItem
        href="https://www.dev-insider.de/was-ist-java-programmierung-a-569186/"
        icon={<JavaIcon fontSize="large" />}
      >
        Java
      </SkillItem>
      <SkillItem
        href="https://www.mongodb.com/"
        icon={<MongoDBIcon fontSize="large" />}
      >
        MongoDB
      </SkillItem>
      <SkillItem
        href="https://www.mysql.com/"
        icon={<MySQLIcon fontSize="large" />}
      >
        MySQL
      </SkillItem>
      <SkillItem
        href="https://nodejs.org/"
        icon={<NodeJSIcon fontSize="large" />}
      >
        NodeJS
      </SkillItem>
      <SkillItem
        href="https://trello.com/"
        icon={<TrelloIcon fontSize="large" />}
      >
        Trello
      </SkillItem>

      <SkillItem
        href="https://react-query.tanstack.com/"
        icon={<ReactQueryIcon fontSize="large" />}
      >
        React-Query
      </SkillItem>
      <SkillItem
        href="https://expressjs.com/"
        icon={<ExpressJSIcon fontSize="large" />}
      >
        Express
      </SkillItem>
    </IndexItem>
  );
};
export default AdvancedSkills;