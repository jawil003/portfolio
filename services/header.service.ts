import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";
import { indexHeader } from "../config/headers";

export default class HeaderService {
  public static getIndex() {
    return indexHeader;
  }
  public static async getKnowledge() {
    const {
      data: { knowledgeHeader },
    } = await cmsClient.query<{
      knowledgeHeader: Header;
    }>({
      query: gql`
        {
          knowledgeHeader {
            title
            subtitle
          }
        }
      `,
    });
    return knowledgeHeader;
  }
  public static async getResume() {
    const {
      data: { resumeHeader },
    } = await cmsClient.query<{
      resumeHeader: Header;
    }>({
      query: gql`
        {
          resumeHeader {
            title
            subtitle
          }
        }
      `,
    });
    return resumeHeader;
  }
  public static async getProject() {
    const {
      data: { projectsHeader },
    } = await cmsClient.query<{
      projectsHeader: Header;
    }>({
      query: gql`
        {
          projectsHeader {
            title
            subtitle
          }
        }
      `,
    });
    return projectsHeader;
  }
}

export interface Header {
  title: string;
  subtitle: string;
}
