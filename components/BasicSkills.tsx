import React from "react";
import IndexItem from "./IndexItem";
import SkillItem from "./SkillItem";
import SpringIcon from "./icons/spring.icon";
import { useTranslation } from "next-translate";
import { JiraIcon } from "./icons/jira.icons";
import { ConfluenceIcon } from "./icons/confluence.icon";
import HibernateIcon from "./icons/hibernate.icon";
import { BitbucketIcon } from "./icons/bitbucket.icon";
import { FormikIcon } from "./icons/formik.icon";
import { FramerMotionIcon } from "./icons/framerMotion.icon";
import { ZustandIcon } from "./icons/zustand.icon";
import { ReactReduxIcon } from "./icons/reactRedux.icon";
import { FeathersJsIcon } from "./icons/feathersJs.icon";

const BasicSkills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IndexItem title={t("common:skills2")}>
      <SkillItem
        href="https://hibernate.org/"
        icon={<HibernateIcon fontSize="large" />}
      >
        Hibernate
      </SkillItem>

      <SkillItem
        href="https://spring.io/"
        icon={<SpringIcon fontSize="large" />}
      >
        Spring Boot
      </SkillItem>
      <SkillItem
        href="https://www.atlassian.com/software/jira"
        icon={<JiraIcon fontSize="large" />}
      >
        Jira
      </SkillItem>
      <SkillItem
        href="https://www.atlassian.com/software/confluence"
        icon={<ConfluenceIcon fontSize="large" />}
      >
        Confluence
      </SkillItem>
      <SkillItem
        href="https://www.atlassian.com/software/bitbucket"
        icon={<BitbucketIcon fontSize="large" />}
      >
        BitBucket
      </SkillItem>
      <SkillItem
        href="https://formik.org/"
        icon={<FormikIcon fontSize="large" />}
      >
        Formik
      </SkillItem>
      <SkillItem
        href="https://www.framer.com/motion/"
        icon={<FramerMotionIcon fontSize="large" />}
      >
        Framer-Motion
      </SkillItem>
      <SkillItem
        href="https://github.com/react-spring/zustand"
        icon={<ZustandIcon fontSize="large" />}
      >
        Zustand
      </SkillItem>
      <SkillItem
        href="https://react-redux.js.org/"
        icon={<ReactReduxIcon fontSize="large" />}
      >
        React-Redux
      </SkillItem>
      <SkillItem
        href="https://feathersjs.com/"
        icon={<FeathersJsIcon />}
      >
        Feathers
      </SkillItem>
    </IndexItem>
  );
};
export default BasicSkills;
