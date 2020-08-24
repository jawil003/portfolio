import React from "react";
import IndexItem from "./layout/indexItem";
import SkillItem from "./skillIttem";
import SwiftIcon from "./icons/swift.icon";
import SpringIcon from "./icons/spring.icon";
import {
  withTranslation,
  WithTranslation,
} from "next-translate";
import { JiraIcon } from "./icons/jira.icons";
import { ConfluenceIcon } from "./icons/confluence.icon";
import HibernateIcon from "./icons/hibernate.icon";
import { BitbucketIcon } from "./icons/bitbucket.icon";
import { FormikIcon } from "./icons/formik.icon";

class BasicSkills extends React.Component<
  WithTranslation
> {
  render() {
    return (
      <IndexItem
        title={this.props.i18n.t("common:skills2")}
      >
        <SkillItem
          href="https://hibernate.org/"
          icon={<HibernateIcon fontSize="large" />}
        >
          Hibernate
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
      </IndexItem>
    );
  }
}
export default withTranslation(BasicSkills);
