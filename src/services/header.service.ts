import { gql } from "@apollo/client";
import { cmsClient } from "@apollo/myclient";

export default class HeaderService {
  public static async getIndex() {
    const {
      data: { indexHeader },
    } = await cmsClient.query<{
      indexHeader: Header;
    }>({
      query: gql`
        {
          indexHeader {
            title
            subtitle
          }
        }
      `,
    });
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
}

export interface Header {
  title: string;
  subtitle: string;
}
