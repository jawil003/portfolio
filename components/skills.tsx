import React from "react";
import IndexItem from "./layout/indexItem";
import SkillItem from "./skillIttem";
import TypescriptIcon from "./icons/typescript.icon";
import ReactIcon from "./icons/react.icon";
import NextJSIcon from "./icons/nextjs.icon";
import MaterialUIIcon from "./icons/material-ui.icon";
import JavaIcon from "./icons/java.icon";
import HibernateIcon from "./icons/hibernate.icon";
import MongoDBIcon from "./icons/mongoDB.icon";
import MySQLIcon from "./icons/mySQL.icon";
import NodeJSIcon from "./icons/nodejs.icon";
import SwiftIcon from "./icons/swift.icon";
import SpringIcon from "./icons/spring.icon";

export default class Skills extends React.Component {
  render() {
    return (
      <IndexItem title="Kenntnisse">
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
          NextJs
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
          href="https://hibernate.org/"
          icon={<HibernateIcon fontSize="large" />}
        >
          Hibernate
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
          href="https://swift.org/"
          icon={<SwiftIcon fontSize="large" />}
        >
          Swift
        </SkillItem>
        <SkillItem
          href="https://spring.io/"
          icon={<SpringIcon fontSize="large" />}
        >
          Spring Boot
        </SkillItem>
      </IndexItem>
    );
  }
}
